from typing import List, Optional
from fastapi import APIRouter, Depends, Request, Header, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app import ai_builder, project_manager, config
from app.models import Project

router = APIRouter()


class GenerateRequest(BaseModel):
    prompt: str
    api: Optional[str] = "openai"


@router.post("/generate_page")
def generate_page(req: GenerateRequest):
    return ai_builder.generate_page(prompt=req.prompt, api=req.api or "openai")


class CreateProjectRequest(BaseModel):
    name: str
    user_id: Optional[int] = 0


@router.post("/projects")
def create_project(req: CreateProjectRequest, db: Session = Depends(get_db)):
    project = project_manager.create_project(db, name=req.name, user_id=req.user_id or 0)
    return {"id": project.id, "name": project.name, "created_at": project.created_at.isoformat()}


@router.get("/projects")
def list_projects(db: Session = Depends(get_db)):
    projects: List[Project] = project_manager.list_projects(db)
    return [
        {"id": p.id, "name": p.name, "created_at": p.created_at.isoformat()}
        for p in projects
    ]


# Stripe integration
class CheckoutRequest(BaseModel):
    price_id: Optional[str] = None
    mode: Optional[str] = "payment"  # 'payment' or 'subscription'
    quantity: Optional[int] = 1
    amount: Optional[int] = None  # cents, used if no price_id
    currency: Optional[str] = "usd"
    success_path: Optional[str] = "/?checkout=success"
    cancel_path: Optional[str] = "/?checkout=cancel"


@router.get("/config")
def public_config():
    return {"stripe_publishable_key": config.STRIPE_PUBLISHABLE_KEY or ""}


@router.post("/checkout/create_session")
def create_checkout_session(req: CheckoutRequest):
    import stripe  # lazy import
    if not config.STRIPE_SECRET_KEY:
        raise HTTPException(status_code=400, detail="Stripe is not configured")

    stripe.api_key = config.STRIPE_SECRET_KEY

    success_url = f"{config.FRONTEND_URL}{req.success_path or '/'}"
    cancel_url = f"{config.FRONTEND_URL}{req.cancel_path or '/'}"

    line_items = []
    if req.price_id:
        line_items = [{"price": req.price_id, "quantity": req.quantity or 1}]
    else:
        amount = req.amount or 5000
        line_items = [{
            "price_data": {
                "currency": req.currency or "usd",
                "product_data": {"name": "AI Website Builder Pro"},
                "unit_amount": int(amount),
            },
            "quantity": req.quantity or 1,
        }]

    session = stripe.checkout.Session.create(
        mode=req.mode or "payment",
        line_items=line_items,
        success_url=success_url,
        cancel_url=cancel_url,
    )
    return {"id": session.id, "url": session.url}


@router.post("/webhook/stripe")
async def stripe_webhook(request: Request, stripe_signature: str = Header(None, alias="Stripe-Signature")):
    import stripe
    if not (config.STRIPE_WEBHOOK_SIGNING_SECRET and config.STRIPE_SECRET_KEY):
        # Accept silently if not configured (dev)
        return {"received": True}

    payload = await request.body()
    try:
        event = stripe.Webhook.construct_event(
            payload=payload,
            sig_header=stripe_signature or "",
            secret=config.STRIPE_WEBHOOK_SIGNING_SECRET,
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Webhook error: {e}")

    # Handle events of interest
    if event.get("type") == "checkout.session.completed":
        # You can fulfill here
        pass

    return {"received": True}
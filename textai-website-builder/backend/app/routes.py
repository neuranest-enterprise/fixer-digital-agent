from typing import List, Optional
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app import ai_builder, project_manager
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
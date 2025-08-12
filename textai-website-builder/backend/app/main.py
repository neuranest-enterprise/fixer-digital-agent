from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router as api_router
from app.database import engine, Base

app = FastAPI(title="AI Website Builder API")

# Create database tables
Base.metadata.create_all(bind=engine)

# Allow everything in dev; tighten for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount API router
app.include_router(api_router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Welcome to AI Website Builder - Generate multi-page sites with AI!"}
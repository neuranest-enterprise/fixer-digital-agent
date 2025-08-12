import os
from typing import List, Optional
from sqlalchemy.orm import Session
from app.models import Project
from app import config

# Ensure projects storage exists
os.makedirs(config.PROJECTS_DIR, exist_ok=True)


def create_project(db: Session, name: str, user_id: int = 0) -> Project:
    project = Project(name=name, user_id=user_id)
    db.add(project)
    db.commit()
    db.refresh(project)

    # Create a folder for the project with a gallery sub-folder
    project_dir = os.path.join(config.PROJECTS_DIR, f"project_{project.id}")
    os.makedirs(project_dir, exist_ok=True)
    os.makedirs(os.path.join(project_dir, "gallery"), exist_ok=True)

    return project


def list_projects(db: Session) -> List[Project]:
    return db.query(Project).order_by(Project.created_at.desc()).all()


def get_project(db: Session, project_id: int) -> Optional[Project]:
    return db.query(Project).filter(Project.id == project_id).first()


def add_to_gallery(project_id: int, file_path: str) -> str:
    """Stub for adding a file path to a project's gallery folder."""
    project_gallery_dir = os.path.join(config.PROJECTS_DIR, f"project_{project_id}", "gallery")
    os.makedirs(project_gallery_dir, exist_ok=True)
    filename = os.path.basename(file_path)
    target_path = os.path.join(project_gallery_dir, filename)
    # For now, return the target path. Real implementation would copy/move the file.
    return target_path
import os
from dotenv import load_dotenv

# Load environment variables from a .env file if present
load_dotenv()

# Resolve important paths
APP_DIR = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.dirname(APP_DIR)
DB_DIR = os.path.join(BACKEND_DIR, "db")
DEFAULT_DB_PATH = os.path.join(DB_DIR, "ai_website.db")

# Database
DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite:///{DEFAULT_DB_PATH}")

# API Keys
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GEMINI_API_KEY = os.getenv("GOOGLE_GEMINI_API_KEY")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")

# Stripe
STRIPE_PUBLISHABLE_KEY = os.getenv("STRIPE_PUBLISHABLE_KEY")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")
STRIPE_WEBHOOK_SIGNING_SECRET = os.getenv("STRIPE_WEBHOOK_SIGNING_SECRET")

# URLs
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")
APP_URL = os.getenv("APP_URL", "http://127.0.0.1:8000")

# Storage
STORAGE_DIR = os.path.join(BACKEND_DIR, "storage")
PROJECTS_DIR = os.path.join(STORAGE_DIR, "projects")
MEDIA_DIR = os.path.join(STORAGE_DIR, "media")
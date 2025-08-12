# Backend (FastAPI)

## Setup

1. Create and activate a virtualenv (optional but recommended).
2. Install dependencies:

```bash
pip install -r backend/requirements.txt
```

3. Run the API server (from project root):

```bash
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

4. (Optional) Set environment variables in a `.env` file at project root or in your shell:

```bash
OPENAI_API_KEY=...
GOOGLE_GEMINI_API_KEY=...
ANTHROPIC_API_KEY=...
PINECONE_API_KEY=...
DATABASE_URL=sqlite:///backend/db/ai_website.db
```

The API provides:
- POST `/api/generate_page` to generate HTML from a prompt
- GET `/api/projects` and POST `/api/projects` for simple project management
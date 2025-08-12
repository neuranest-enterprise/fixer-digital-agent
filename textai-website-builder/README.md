# AI Website Builder

A blueprint SaaS app for AI-powered multi-page website creation with galleries, project folders, and dashboards.

## Project Structure

- `backend/`: FastAPI server, AI integration, and SQLite DB
- `frontend/`: React app

## Quick Start

Backend:

```bash
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm start
```

Set API keys in environment variables or a `.env` file (see `backend/README.md`). Without keys, the app will return a local HTML fallback so you can test end-to-end.
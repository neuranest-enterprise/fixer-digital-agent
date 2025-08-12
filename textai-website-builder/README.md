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

## Electron (Desktop)

Dev (with running React dev server at http://localhost:3000):

```bash
cd electron
npm install
npm run dev
```

Package installers (builds React first, then packages Electron):

```bash
cd electron
npm install
npm run dist
```

The app starts a local FastAPI server on 127.0.0.1:8000 and loads the built React UI. For web dev, keep using the backend/frontend commands above.
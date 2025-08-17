const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

let backendProc = null;

function getPythonExecutable() {
  if (process.platform === 'win32') return 'python';
  return 'python3';
}

function resolveResource(...segments) {
  const base = app.isPackaged ? process.resourcesPath : path.resolve(__dirname, '..');
  return path.join(base, ...segments);
}

function startBackend() {
  const python = getPythonExecutable();
  const cwd = app.isPackaged ? process.resourcesPath : path.resolve(__dirname, '..');
  const args = ['-m', 'uvicorn', 'backend.app.main:app', '--host', '127.0.0.1', '--port', '8000'];

  backendProc = spawn(python, args, { cwd, stdio: 'inherit', env: { ...process.env } });

  backendProc.on('exit', (code) => {
    backendProc = null;
    console.log(`[backend] exited with code ${code}`);
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });

  const devUrl = process.env.FRONTEND_DEV_SERVER;
  if (!app.isPackaged && devUrl) {
    win.loadURL(devUrl);
  } else {
    const indexPath = resolveResource('frontend', 'build', 'index.html');
    win.loadFile(indexPath);
  }
}

app.whenReady().then(() => {
  startBackend();
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('before-quit', () => {
  if (backendProc) {
    try { backendProc.kill('SIGTERM'); } catch (_) {}
  }
});
import axios from 'axios';

const isElectron = Boolean(globalThis?.process?.versions?.electron);
const defaultBase = isElectron ? 'http://127.0.0.1:8000' : '';

// Support both CRA (REACT_APP_) and Vite (VITE_) env conventions
const viteBase = (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_API_BASE) || '';
const craBase = typeof process !== 'undefined' ? (process.env.REACT_APP_API_BASE || '') : '';
const baseURL = viteBase || craBase || defaultBase;

const api = axios.create({ baseURL });

export default api;
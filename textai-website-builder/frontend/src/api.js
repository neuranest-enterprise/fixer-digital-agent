import axios from 'axios';

const isElectron = Boolean(globalThis?.process?.versions?.electron);
const defaultBase = isElectron ? 'http://127.0.0.1:8000' : '';
const baseURL = process.env.REACT_APP_API_BASE || defaultBase;

const api = axios.create({ baseURL });

export default api;
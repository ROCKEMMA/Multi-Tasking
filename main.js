// main.js
import { renderLogin } from './components/login/Login.js';
//import { renderWorkPanel } from './components/workPanel/WorkPanel.js';

const root = document.getElementById('root');

const login = document.createElement('section');
login.appendChild(renderLogin());

root.appendChild(login);
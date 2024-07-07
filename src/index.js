import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './tailwind.css';

const container = document.getElementById('root');
const root = createRoot(container); // Crée une racine.
root.render(<App />);
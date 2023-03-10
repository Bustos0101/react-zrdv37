import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Home from './Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

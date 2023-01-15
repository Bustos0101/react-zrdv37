import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Header from './Home';
import Body from './Body';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Header />} />
        {/* <Route path="/Home" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
             <Route path="/" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

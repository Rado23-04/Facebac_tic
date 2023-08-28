import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Post from './pages/Post/post'

function App() {
  return (
    <BrowserRouter>
    <Routes>
             <Route path="/" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<Profile />} />
              <Route path="/posts" element={<Post />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

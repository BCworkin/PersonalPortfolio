import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Posts from './components/Posts/Posts.js';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Posts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Road from './pages/Road'
import Thunder from './pages/Thunder'
import Sustainability from './pages/sustainability'
import Build from './pages/Build';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path='/road' element={<Road />} />
        <Route path='/thunder' element={<Thunder />} />
        <Route path='/sustainability' element={<Sustainability />} />
        <Route path='/build' element={<Build />} />
      </Routes>
    </Router>
  )
}

export default App
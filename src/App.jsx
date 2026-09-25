import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './pages/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Bookings from './pages/Bookings'
import Team from './pages/Team'


function App() {


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </>
  )
}

export default App

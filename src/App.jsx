import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Bookings from './pages/Bookings'
import Team from './pages/Team'
import Terms from './pages/Terms'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

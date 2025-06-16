import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavBar from './components/navbar/NavBar'
import HomePage from './pages/home/HomePage'
import About from './pages/about/About'
import GetInsurance from './pages/getInsurance/GetInsurance'
import PersonalInsurance from './pages/getInsurance/personal/PersonalInsurance'
import ComapanyInsurance from './pages/getInsurance/company/Comapany'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-insurance" element={<GetInsurance />} />
        <Route path="/personal-insurance" element={<PersonalInsurance />} />
        <Route path="/company-insurance" element={<ComapanyInsurance />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default App

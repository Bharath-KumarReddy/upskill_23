import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignupPage from './components/Signup'
import LoginPage from './components/LoginPage'
import Homepage from './components/Homepage'
const App = () => {
  return (
    <Router>
      <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/signup" element={<SignupPage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/home" element={<Homepage />} />
           
      </Routes>
    </Router>
  )
}

export default App

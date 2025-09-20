import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ExecutivesForm from './components/ExecutivesForm'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <CustomCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<ExecutivesForm />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
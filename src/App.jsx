import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import AuthTest from './components/AuthTest'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-950 text-white">
          <CustomCursor />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test-auth" element={<AuthTest />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Events from './components/Events'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      {/* Main Content - Hero Section */}
      <main className="flex-grow">
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mx-auto mb-8">
              <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V12z"/>
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Nirma Security Club
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Protecting Tomorrow's Digital World
            </p>
            
            <div className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">
                🔐 <span className="text-green-400 font-semibold">Cyber Security Excellence</span> at Nirma University
              </p>
              <p className="mb-4">
                🎯 Join workshops, CTF competitions, and hands-on training sessions
              </p>
              <p>
                🚀 Build your cybersecurity skills with industry experts and fellow students
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25">
                Join Our Club
              </button>
              <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* About Section */}
      <About />
      
      {/* Events Section */}
      <Events />
      
      {/* Team Section */}
      <Team />
      
      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </div>
  )
}

export default App

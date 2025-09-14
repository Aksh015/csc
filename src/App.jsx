import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Events from './components/Events'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Shield, Lock } from "lucide-react";


function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      {/* Main Content - Hero Section */}
      {/* <main className="flex-grow">
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
            
            <div className="text- text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              <button className="bg-gradient-to-r from-emerald-600/60 to-cyan-600/60 hover:from-green-900/20 hover:to-cyan-900/20 text-white px-8 py-3 rounded- text- font-medium transition-all duration-200 shadow- hover:shadow-green-500/25"> */}
              {/* "bg-gradient-to-r from-emerald-600/60 to-cyan-600/60 hover:from-green-900/20 hover:to-cyan-900/20 hover:text-white px-6 py-2 rounded- text-sm font-medium transition-all duration-200 shadow-" */}
                {/* Join Our Club
              </button>
              <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded- text- font-medium transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div> */}
      {/* </main> */}
      <section className="relative px-6 px-12 py-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-5xl text-7xl font-bold text-white leading-tight text-balance">
                Cyber Security Club
                {/* </h1> */}
                <span className="text-transparent bg-gradient-to-r from-green-600 to- cyan-700 bg-clip-text block">
                  Nirma University
                </span>
                </h1>
              <p className="text-xl text-gray-300 leading-relaxed text-pretty">
                Join the forefront of cybersecurity education and innovation. 
                Learn, practice, and compete with the best in the field.
              </p>
            </div>

            <button className="bg-gradient-to-r from-green-500/20 to- cyan-600/20 hover:from-green-600 hover:to- cyan-700 text-white px-8 py-4 text font-semibold rounded-full transition-all duration-300 hover:shadow- hover:shadow-green-500/30">
              Join Us
            </button>
          </div>

          {/* Right Visual Elements */}
          <div className="relative">
            {/* Main Shield */}
            <div className="relative mx-auto w-80 h-80 :w-96 :h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to- cyan-500/20 blur-xl animate-pulse"></div>

              {/* Network Connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <radiaradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a7f6b8ff" stopOpacity="0.4" />
                  </radiaradient>
                </defs>

                {/* Connection Lines */}
                <g stroke="#10b981" strokeWidth="1" opacity="0.6">
                  <line x1="200" y1="50" x2="320" y2="120" className="animate-pulse" />
                  <line x1="320" y1="120" x2="350" y2="200" className="animate-pulse delay-300" />
                  <line x1="350" y1="200" x2="320" y2="280" className="animate-pulse delay-600" />
                  <line x1="320" y1="280" x2="200" y2="350" className="animate-pulse delay-900" />
                  <line x1="200" y1="350" x2="80" y2="280" className="animate-pulse delay-1200" />
                  <line x1="80" y1="280" x2="50" y2="200" className="animate-pulse delay-1500" />
                  <line x1="50" y1="200" x2="80" y2="120" className="animate-pulse delay-1800" />
                  <line x1="80" y1="120" x2="200" y2="50" className="animate-pulse delay-2100" />
                </g>

                {/* Network Nodes */}
                <circle cx="200" cy="50" r="4" fill="url(#nodeGradient)" className="animate-pulse" />
                <circle cx="320" cy="120" r="3" fill="url(#nodeGradient)" className="animate-pulse delay-300" />
                <circle cx="350" cy="200" r="3" fill="url(#nodeGradient)" className="animate-pulse delay-600" />
                <circle cx="320" cy="280" r="3" fill="url(#nodeGradient)" className="animate-pulse delay-900" />
                <circle cx="200" cy="350" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-1200" />
                <circle cx="80" cy="280" r="3" fill="url(#nodeGradient)" className="animate-pulse delay-1500" />
                <circle cx="50" cy="200" r="3" fill="url(#nodeGradient)" className="animate-pulse delay-1800" />
                <circle cx="80" cy="120" r="3" fill="url(#nodeGradient)" className="animate-pulse delay-2100" />
              </svg>

              {/* Central Shield */}
              <div className="absolute inset-1/4 bg-gradient-to-br from-green-500/20 to-cyan-600/20 rounded-full backdrop-blur-sm border border-green-400/30 flex items-center justify-center animate-float">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center shadow- shadow-green-500/50">
                  <Lock className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Floating Security Icons */}
            <div className="absolute top-10 right-10 w-12 h-12 bg-green-500/20 rounded- backdrop-blur-sm border border-green-400/30 flex items-center justify-center animate-float">
              <Shield className="w-6 h-6 text-green-400" />
            </div>

            <div
              className="absolute bottom-20 left-10 w-12 h-12 bg-green-700/40 rounded- backdrop-blur-sm border border-green-400/30 flex items-center justify-center animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Lock className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
      
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

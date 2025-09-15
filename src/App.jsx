import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Events from './components/Events'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { Shield, Lock } from "lucide-react";


function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <CustomCursor />
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
      <section id="home" className="relative px-12 py-16 bg-gray-950 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="inline-block">C</span>
                <span className="inline-block">S</span>
                <span className="inline-block">C</span>
                <span className="text-transparent bg-gradient-to-r from-green-400 to-green-500 bg-clip-text block mt-2">
                  (Cyber Security Club)
                </span>
                </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Join the forefront of cybersecurity education and innovation. 
                Learn, practice, and compete with the best in the field.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-hover group relative bg-gradient-to-r from-green-500/20 to-green-400/20 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 text-base font-semibold rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-green-500/30 border border-green-500/30 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              </button>
              <button className="cursor-hover group relative bg-transparent hover:bg-green-500/10 text-green-400 hover:text-white px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 border-2 border-green-500/30 hover:border-green-400 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual Elements - Advanced Cybersecurity Animation */}
          <div className="relative">
            {/* Animated Binary Rain Background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="binary-rain">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`binary-column animate-binary-fall-${i + 1}`}>
                    {[...Array(20)].map((_, j) => (
                      <span key={j} className="text-green-400 text-xs font-mono">
                        {Math.random() > 0.5 ? '1' : '0'}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Cybersecurity Hub Container */}
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              
              {/* Outer Scanning Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-radar-scan"></div>
              
              {/* Middle Security Grid */}
              <div className="absolute inset-8 rounded-full border border-green-500/20 animate-spin-reverse-slow">
                <div className="absolute inset-4 rounded-full border border-green-400/40 animate-pulse-ring"></div>
              </div>
              
              {/* Hexagonal Security Grid */}
              <div className="absolute inset-16 animate-rotate-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Central Hexagon */}
                  <polygon 
                    points="100,20 160,55 160,125 100,160 40,125 40,55" 
                    fill="none" 
                    stroke="url(#hexGradient)" 
                    strokeWidth="2" 
                    className="animate-hex-pulse"
                  />
                  
                  {/* Inner Hexagon */}
                  <polygon 
                    points="100,40 140,65 140,115 100,140 60,115 60,65" 
                    fill="none" 
                    stroke="#22c55e" 
                    strokeWidth="1" 
                    opacity="0.6"
                    className="animate-hex-pulse-delayed"
                  />
                </svg>
              </div>
              
              {/* Enhanced Data Packets Flying Around */}
              <div className="absolute inset-0">
                {[
                  { size: 'w-3 h-3', gradient: 'from-green-400 to-green-500', shadow: '0 0 15px rgba(34, 197, 94, 0.6)' },
                  { size: 'w-2.5 h-2.5', gradient: 'from-green-500 to-green-600', shadow: '0 0 12px rgba(16, 185, 129, 0.8)' },
                  { size: 'w-4 h-4', gradient: 'from-green-300 to-green-400', shadow: '0 0 20px rgba(34, 197, 94, 0.7)' },
                  { size: 'w-2 h-2', gradient: 'from-green-600 to-green-700', shadow: '0 0 10px rgba(5, 150, 105, 0.9)' },
                  { size: 'w-3.5 h-3.5', gradient: 'from-green-400 to-green-500', shadow: '0 0 18px rgba(34, 197, 94, 0.5)' },
                  { size: 'w-2.5 h-2.5', gradient: 'from-green-500 to-green-400', shadow: '0 0 14px rgba(16, 185, 129, 0.7)' }
                ].map((packet, i) => (
                  <div
                    key={i}
                    className={`absolute ${packet.size} bg-gradient-to-r ${packet.gradient} rounded-sm animate-orbit-${i + 1} opacity-90`}
                    style={{ 
                      boxShadow: packet.shadow,
                      animationDelay: `${i * 0.8}s`,
                      border: '1px solid rgba(34, 197, 94, 0.3)'
                    }}
                  >
                    {/* Packet Trail Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent rounded-sm blur-sm transform scale-150"></div>
                    
                    {/* Data Indicator Dots */}
                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-green-200 rounded-full animate-ping"></div>
                  </div>
                ))}
              </div>
              
              {/* Central Security Core */}
              <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-full border-2 border-green-500/50 flex items-center justify-center animate-core-pulse shadow-2xl shadow-green-500/30">
                
                {/* Inner Core Ring */}
                <div className="absolute inset-2 rounded-full border border-green-400/30 animate-spin-slow"></div>
                
                {/* Security Icon */}
                <div className="relative bg-gradient-to-br from-green-500 to-green-400 w-16 h-16 rounded-full flex items-center justify-center animate-security-scan">
                  <Lock className="w-8 h-8 text-white animate-lock-rotate" />
                </div>
                
                {/* Status Indicators */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Floating Security Nodes */}
              {[
                { icon: Shield, position: 'top-8 right-8', delay: '0s' },
                { icon: Lock, position: 'bottom-8 left-8', delay: '1s' },
                { icon: Shield, position: 'top-20 left-4', delay: '2s' },
                { icon: Lock, position: 'bottom-4 right-20', delay: '1.5s' }
              ].map(({ icon: Icon, position, delay }, i) => (
                <div
                  key={i}
                  className={`absolute ${position} w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-500/30 flex items-center justify-center animate-float-node cursor-pointer group hover:scale-110 transition-transform duration-300`}
                  style={{ animationDelay: delay }}
                >
                  <Icon className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 rounded-lg transition-colors duration-300"></div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line 
                      x1="50%" y1="50%" 
                      x2="50%" y2="200%" 
                      stroke="#22c55e" 
                      strokeWidth="1" 
                      opacity="0.3"
                      className="animate-connection-pulse"
                    />
                  </svg>
                </div>
              ))}
            </div>
            
            {/* Additional Floating Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 opacity-60">
              <div className="w-full h-full border border-green-400/20 rounded-lg animate-scan-line">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scanner"></div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 w-16 h-16 opacity-60">
              <div className="w-full h-full border border-green-400/20 rounded-full animate-radar-sweep">
                <div className="absolute top-1/2 left-1/2 w-0.5 h-1/2 bg-green-400 origin-bottom animate-radar-arm transform -translate-x-1/2"></div>
              </div>
            </div>
            
            {/* Status Text Animation */}
            <div className="absolute top-2 right-2 text-green-400 text-xs font-mono opacity-70">
              <div className="animate-typing">
                <span className="typing-text">SECURE_PROTOCOL_ACTIVE</span>
                <span className="animate-blink">|</span>
              </div>
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

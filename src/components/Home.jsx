import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Events from './Events';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <section id="home" className="relative px-12 py-16 bg-gray-950 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className=" text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text block mt-2">
                    Cyber Security Club
                  </span>
                  <span className="text-2xl md:text-4xl xl:text-5xl inline-block">ITNU</span>
                  {/* <span className="inline-block">S</span>
                  <span className="inline-block">C</span> */}
                </h1>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Advancing cybersecurity education and innovation through 
                  learning, practice, and competition at the highest level.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="cursor-hover group relative bg-transparent hover:bg-green-500/10 text-green-400 hover:text-white px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 border-2 border-green-500/30 hover:border-green-400 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <a 
                  href="https://docs.google.com/forms/your-form-link-here"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover group relative bg-gradient-to-r from-green-500/20 to-cyan-500/20 hover:from-green-500 hover:to-cyan-500 text-white px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 border-2 border-green-500/50 hover:border-transparent hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Our Team
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Visual Elements - Dynamic Cybersecurity Animation */}
            <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
              
              {/* Animated Background Grid */}
              <div className="absolute inset-0 cyber-grid opacity-20"></div>
              
              {/* Main Security Hub */}
              <div className="relative z-10">
                
                {/* Rotating Security Rings */}
                <div className="w-72 h-72 relative flex items-center justify-center">
                  
                  {/* Outer Protection Ring */}
                  <div className="absolute w-full h-full rounded-full border-2 border-green-400/30 security-scan"></div>
                  
                  {/* Middle Defense Ring */}
                  <div className="absolute w-60 h-60 rounded-full border border-green-500/40 defense-rotate"></div>
                  
                  {/* Inner Core */}
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-green-900/30 via-green-800/20 to-green-700/30 backdrop-blur-sm border-2 border-green-400/50 cyber-pulse flex items-center justify-center">
                    
                    {/* Central Security Icon */}
                    <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-400/60 flex items-center justify-center icon-glow">
                      <svg className="w-12 h-12 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,7.45 16,8.26V11C16,14.31 14.6,17.40 12,18.83C9.4,17.40 8,14.31 8,11V8.26C9.2,7.45 10.6,7 12,7M10.5,9.5L9.5,10.5L12,13L18.5,6.5L17.5,5.5L12,11L10.5,9.5Z"/>
                      </svg>
                    </div>
                    
                    {/* Orbiting Security Nodes */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full security-orbit" style={{animationDelay: '0s'}}></div>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full security-orbit" style={{animationDelay: '-1s'}}></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full security-orbit" style={{animationDelay: '-2s'}}></div>
                    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full security-orbit" style={{animationDelay: '-3s'}}></div>
                  </div>
                  
                  {/* Radar Sweep Effect */}
                  <div className="absolute w-full h-full rounded-full overflow-hidden">
                    <div className="radar-sweep"></div>
                  </div>
                </div>
                
                {/* Floating Security Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-green-400/40 rounded-lg backdrop-blur-sm bg-green-500/10 float-secure rotate-12">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-green-400/40 rounded-full backdrop-blur-sm bg-green-500/10 float-secure" style={{animationDelay: '-2s'}}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 -left-12 w-10 h-10 bg-green-400/30 rounded rotate-45 float-secure" style={{animationDelay: '-4s'}}></div>
                
                <div className="absolute -top-4 left-1/4 w-8 h-8 border border-green-400/40 rounded-full backdrop-blur-sm bg-green-500/10 float-secure" style={{animationDelay: '-3s'}}></div>
              </div>
              
              
              {/* Data Stream Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="data-stream-1"></div>
                <div className="data-stream-2"></div>
                <div className="data-stream-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
import React from 'react';
import cscLogo from '../assets/team/csc-logo.jpg';


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-green-500/20 sticky top-0 z-50 backdrop-blur-md bg-opacity-95 shadow-lg shadow-green-500/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Club Name */}
          <div className="flex flex-row items-center gap-4">
            <div className="pl-6 h-16 w-16 flex items-center justify-center">
              <img src={cscLogo} alt="CSC Logo" className="h-12 w-12 object-contain hover:scale-110 transition-transform duration-200" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">CSC</h1>
              <p className="text-sm text-green-400 -mt-1 font-medium">Cyber Security Club</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="cursor-hover text-gray-200 hover:text-green-400 hover:bg-green-500/10 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 border-transparent hover:border-green-400">
              Home
            </a>
            <a href="#about" className="cursor-hover text-gray-200 hover:text-green-400 hover:bg-green-500/10 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 border-transparent hover:border-green-400">
              About
            </a>
            <a href="#events" className="cursor-hover text-gray-200 hover:text-green-400 hover:bg-green-500/10 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 border-transparent hover:border-green-400">
              Events
            </a>
            <a href="#team" className="cursor-hover text-gray-200 hover:text-green-400 hover:bg-green-500/10 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 border-transparent hover:border-green-400">
              Team
            </a>
            <a href="#contact" className="cursor-hover text-gray-200 hover:text-green-400 hover:bg-green-500/10 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 border-transparent hover:border-green-400">
              Contact
            </a>
          </div>

          {/* Join Button */}
          <div className="hidden md:flex">
            <button className="cursor-hover bg-gradient-to-r from-green-600/70 to-cyan-600/70 hover:from-green-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 border border-green-500/30 hover:border-green-400">
              Join Club
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-200 hover:text-green-400 hover:bg-green-500/10 p-3 rounded-lg transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
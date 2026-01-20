import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cscLogo from '../assets/team/csc-logo.png';


const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-green-500/20 sticky top-0 z-50 backdrop-blur-md bg-opacity-95 shadow-lg shadow-green-500/10 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Club Name */}
          <div className="flex flex-row items-center gap-4">
            <div className="pl-6 h-16 w-16 flex items-center justify-center">
              <img src={cscLogo} alt="CSC Logo" className="h-12 w-12 object-contain hover:scale-110 transition-transform duration-200" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent leading-tight">CSC</h1>
              <p className="text-base text-green-400 -mt-1 font-semibold tracking-wider">ITNU</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link 
              to="/home"
              className={`cursor-hover px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 ${
                isActive('/home') || isActive('/')
                  ? 'text-green-400 border-green-400 bg-green-500/10'
                  : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10 border-transparent hover:border-green-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`cursor-hover px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 ${
                isActive('/about')
                  ? 'text-green-400 border-green-400 bg-green-500/10'
                  : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10 border-transparent hover:border-green-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/events"
              className={`cursor-hover px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 ${
                isActive('/events')
                  ? 'text-green-400 border-green-400 bg-green-500/10'
                  : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10 border-transparent hover:border-green-400'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/team"
              className={`cursor-hover px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 ${
                isActive('/team')
                  ? 'text-green-400 border-green-400 bg-green-500/10'
                  : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10 border-transparent hover:border-green-400'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/contact"
              className={`cursor-hover px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 border-b-2 ${
                isActive('/contact')
                  ? 'text-green-400 border-green-400 bg-green-500/10'
                  : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10 border-transparent hover:border-green-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Join Us Button */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdNvWLwN3m3YPXJs-Df61u1kzIB1N5CtdEZYIO-IBSCDUZCZg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-gradient-to-r from-green-600/70 to-cyan-600/70 hover:from-green-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 border border-green-500/30 hover:border-green-400 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Join Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-green-400 hover:bg-green-500/10  p-3 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-sm border-t border-green-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-hover block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                  isActive('/home') || isActive('/')
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-hover block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                About
              </Link>
              <Link 
                to="/events"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-hover block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                  isActive('/events')
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                Events
              </Link>
              <Link 
                to="/team"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-hover block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                  isActive('/team')
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                Team
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-hover block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-200 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                Contact
              </Link>
              
              {/* Mobile Join Us Button */}
              <div className="pt-4 pb-3 border-t border-gray-600">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4bSAVnIJfKgnX3X2xPbF6mE7B_80519fAK4hfX0pYu4bmQA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-hover bg-gradient-to-r from-green-600/70 to-cyan-600/70 hover:from-green-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 border border-green-500/30 hover:border-green-400 flex items-center justify-center gap-2 mx-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Join Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
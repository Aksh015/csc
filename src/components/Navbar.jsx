import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Club Name */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V12z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">NSC</h1>
              <p className="text-xs text-gray-400 -mt-1">Nirma Security Club</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
              About
            </a>
            <a href="#events" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Events
            </a>
            <a href="#team" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Team
            </a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Join Button */}
          <div className="hidden md:flex">
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Join Club
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
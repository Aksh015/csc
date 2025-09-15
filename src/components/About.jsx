import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">CSC</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building tomorrow's cybersecurity professionals through hands-on learning, 
            innovation, and community collaboration in the Cyber Security Club.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower students with cutting-edge cybersecurity knowledge and practical skills, 
              fostering a secure digital environment while preparing the next generation of 
              cybersecurity professionals to tackle emerging threats and challenges.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be a leading cybersecurity community that bridges the gap between academic learning 
              and industry requirements, creating a safe and secure digital ecosystem through 
              innovation and collaboration.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Workshops & Training */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Workshops & Training</h4>
              <p className="text-gray-400">
                Regular hands-on workshops on ethical hacking, penetration testing, 
                digital forensics, and emerging cybersecurity technologies.
              </p>
            </div>

            {/* CTF Competitions */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">CTF Competitions</h4>
              <p className="text-gray-400">
                Organize and participate in Capture The Flag competitions to sharpen 
                problem-solving skills and practical cybersecurity knowledge.
              </p>
            </div>

            {/* Industry Connect */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.31-1.73-2.46-1.73s-2.12.71-2.46 1.73L13.5 16H16v6h4zm-12.5 0v-6.5H9L7.1 9.4c-.18-.5-.72-.9-1.27-.9s-1.09.4-1.27.9L3.5 15.5H5.5V22h2zm2.5-12c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Industry Connect</h4>
              <p className="text-gray-400">
                Connect with cybersecurity professionals, attend guest lectures, 
                and explore internship and career opportunities in the field.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-400">Workshops Conducted</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-gray-400">CTF Competitions</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-400">Placement Success</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Secure the Future?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community of cybersecurity enthusiasts and start your journey 
            towards becoming a cybersecurity professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Join Our Club
            </button>
            <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    // Empty array - will show "Coming Soon" content
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Web Application Security Workshop",
      date: "2025-08-15",
      attendees: "45 participants",
      type: "Workshop",
      highlight: "Successfully identified 15+ OWASP Top 10 vulnerabilities",
      icon: "🌐"
    },
    {
      id: 2,
      title: "Cybersecurity Awareness Week",
      date: "2025-07-10 - 2025-07-14",
      attendees: "200+ participants",
      type: "Event Series",
      highlight: "5 days of workshops, competitions, and industry talks",
      icon: "📚"
    },
    {
      id: 3,
      title: "OWASP Top 10 CTF",
      date: "2025-06-28",
      attendees: "80 participants",
      type: "Competition",
      highlight: "Team 'NullPointers' won with 2400 points",
      icon: "🥇"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Workshop': return 'text-green-400';
      case 'Competition': return 'text-yellow-400';
      case 'Guest Lecture': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our exciting lineup of cybersecurity workshops, competitions, and industry talks 
            designed to enhance your skills and knowledge.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'upcoming' 
                  ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'past' 
                  ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        
                        {/* Event Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl">{event.icon}</span>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                              <span className={`text-sm font-semibold ${getTypeColor(event.type)}`}>
                                {event.type}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {event.description}
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                              </svg>
                              {event.date} • {event.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                              </svg>
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.31-1.73-2.46-1.73s-2.12.71-2.46 1.73L13.5 16H16v6h4z"/>
                              </svg>
                              {event.instructor}
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                              </svg>
                              {event.seats}
                            </div>
                          </div>
                        </div>

                        {/* Registration Section */}
                        <div className="lg:w-64 flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Difficulty:</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getDifficultyColor(event.difficulty)}`}>
                              {event.difficulty}
                            </span>
                          </div>
                          
                          <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25">
                            Register Now
                          </button>
                          
                          <button className="w-full border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-6 py-3 rounded-lg font-medium transition-all duration-200">
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Coming Soon Content */
              <div className="text-center py-16">
                <div className="max-w-4xl mx-auto">
                  {/* Main Coming Soon Section */}
                  <div className="mb-16">
                    {/* Single Coming Soon Icon */}
                    <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mx-auto mb-8 animate-pulse">
                      <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Exciting Events <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Coming Soon!</span>
                    </h3>
                    
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                      We're planning some incredible cybersecurity workshops, competitions, and expert talks. 
                      Stay tuned for announcements!
                    </p>
                  </div>

                  {/* What to Expect Section */}
                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">Security Workshops</h4>
                      <p className="text-gray-400 text-sm">
                        Hands-on workshops covering ethical hacking, penetration testing, and digital forensics
                      </p>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">CTF Competitions</h4>
                      <p className="text-gray-400 text-sm">
                        Challenging Capture The Flag competitions to test your cybersecurity skills
                      </p>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">Expert Sessions</h4>
                      <p className="text-gray-400 text-sm">
                        Industry professionals sharing real-world cybersecurity insights and career guidance
                      </p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-xl p-8 border border-green-500/20">
                    <h4 className="text-2xl font-bold text-white mb-4">Be the First to Know!</h4>
                    <p className="text-gray-300 mb-6">
                      Subscribe to our newsletter and follow our social media to get instant notifications 
                      when new events are announced.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25">
                        Subscribe to Updates
                      </button>
                      <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                        Follow Us on Social Media
                      </button>
                    </div>
                  </div>

                  {/* Timeline Hint */}
                  <div className="mt-12 flex items-center justify-center gap-4 text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v6h-2v-6zm0-10h2v8h-2V5z"/>
                    </svg>
                    <span className="text-sm">
                      Check back in early October for our exciting lineup of events!
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Past Events */}
        {activeTab === 'past' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{event.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <span className={`text-sm font-semibold ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="space-y-3 text-gray-400 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Date:</span>
                    <span className="text-white">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Attendees:</span>
                    <span className="text-green-400 font-semibold">{event.attendees}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    <span className="text-cyan-400 font-semibold">Highlight:</span> {event.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Categories */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Event Categories</h3>
          <div className="grid md:grid-cols-4 gap-6">
            
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Workshops</h4>
              <p className="text-gray-400 text-sm">Hands-on training sessions</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Competitions</h4>
              <p className="text-gray-400 text-sm">CTF and hacking challenges</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Guest Lectures</h4>
              <p className="text-gray-400 text-sm">Industry expert talks</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Certifications</h4>
              <p className="text-gray-400 text-sm">Industry certification prep</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events, workshops, and competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
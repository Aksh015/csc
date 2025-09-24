import React, { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    // Empty array - will show "Coming Soon" content
  ];

  const pastEvents = [
    {
      id: 1,
      title: "CSGC - 2.0 Briefing",
      attendees: "95 participants",
      type: "Workshop",
      highlight: "An engaging session by Mr. Hemang Prakhar introducing students to the Cybersecurity Grand Challenge 2.0",
      icon: "🛡️",
      image: "/images/event1.jpg"
    },
    {
      id: 2,
      title: "Expert Lecture on Careers in Cybersecurity",
      attendees: "88 participants",
      type: "Guest Lecture",
      highlight: "The session provided key insights which helped students to kickstart their career in Cybersecurity domain by Mr. Sandip Jadav",
      icon: "🎯",
      image: "/images/event2.jpg"
    },
    {
      id: 3,
      title: "Cyber Awareness Session",
      attendees: "92 participants",
      type: "Workshop",
      highlight: "Cyber Jagrukta - Dr. Uday Pratap Rao guided our M.Tech. in Cybersecurity students to a safe digital world",
      icon: "🔒",
      image: "/images/event3.jpg"
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
  <section id="events" className="py-10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
  <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our exciting lineup of cybersecurity workshops, competitions, and industry talks 
            designed to enhance your skills and knowledge.
          </p>
        </div>

        {/* Tab Navigation */}
  <div className="flex justify-center mb-6">
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
                </div>
              </div>
            )}
          </div>
        )}

        {/* Past Events */}
        {activeTab === 'past' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={event.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{event.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    <span className="text-green-400 font-semibold text-sm">{event.attendees}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {event.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Events;
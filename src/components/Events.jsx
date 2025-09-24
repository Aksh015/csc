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
                    <h4 className="text-2xl font-bold text-white mb-4">Stay Connected!</h4>
                    <p className="text-gray-300 mb-6">
                      Join our WhatsApp community to get instant notifications about new events, 
                      workshops, and exclusive cybersecurity content.
                    </p>
                    
                    <div className="flex justify-center">
                      <a 
                        href="https://chat.whatsapp.com/CXXozICnzfT6JtIFmivFZ5?mode=ems_copy_t" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-green-500/25 flex items-center gap-3 text-lg"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Join Our WhatsApp Community
                      </a>
                    </div>
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
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${
                      event.type === 'Workshop' ? 'bg-green-500/80' :
                      event.type === 'Guest Lecture' ? 'bg-cyan-500/80' :
                      'bg-yellow-500/80'
                    }`}>
                      {event.type}
                    </span>
                  </div>


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
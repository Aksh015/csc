import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const Events = () => {
    return (
        <section id="events" className="relative py-20 bg-[#0a0f1c] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Upcoming Events Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
                            Upcoming Events
                        </span>
                    </h2>

                    {/* Modern Empty State Design */}
                    <div className="relative group">
                        {/* Main container */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1117] via-[#0a0f1c] to-[#0d1117] border border-green-500/10 hover:border-green-500/30 transition-all duration-500">

                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Subtle grid pattern */}
                            <div className="absolute inset-0 opacity-[0.02]">
                                <div className="absolute inset-0 cyber-grid"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

                            <div className="relative px-6 py-12 md:px-12 md:py-16">
                                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

                                    {/* Left side - Visual */}
                                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                                        <div className="relative">
                                            {/* Animated rings */}
                                            <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping"></div>
                                            <div className="absolute inset-0 rounded-full border border-green-500/30 scale-110"></div>

                                            {/* Central icon */}
                                            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-green-900/30 via-green-800/20 to-cyan-900/30 backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
                                                <div className="absolute inset-0 rounded-full bg-green-500/10 blur-xl animate-pulse"></div>

                                                <svg className="relative w-20 h-20 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                </svg>

                                                {/* Orbiting dots */}
                                                <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                                <div className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Content */}
                                    <div className="text-center md:text-left order-1 md:order-2">
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                                            <span className="text-green-400 text-sm font-medium">Coming Soon</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                            Next Event in <br className="hidden md:block" />
                                            <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
                                                Planning Phase
                                            </span>
                                        </h3>

                                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                                            We're crafting an exceptional cybersecurity experience. Be the first to know when we announce our next workshop, CTF, or competition.
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Past Events Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
                            Past Events
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventsData.map((event) => (
                            <Link
                                to={`/events/${event.slug}`}
                                key={event.id}
                                className="group relative bg-[#0f1524] rounded-xl overflow-hidden border border-white/5 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image || '/api/placeholder/400/320'}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1524] to-transparent opacity-60" />
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>

                                    {/* Participants Count */}
                                    <div className="flex items-center text-green-400 text-sm font-medium mb-4">
                                        <Users className="w-4 h-4 mr-2" />
                                        <span>{event.participants} participants</span>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                        {event.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Events;

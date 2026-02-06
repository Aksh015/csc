import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft, Share2 } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import GalleryCarousel from '../components/GalleryCarousel';

const EventDetailsPage = () => {
    const { eventname } = useParams();

    // Find the event from central data
    const event = eventsData.find(e => e.slug === eventname);

    // Scroll to top when component mounts
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [eventname]);

    // Fallback if event not found
    if (!event) {
        return (
            <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
                    <Link to="/events" className="text-green-400 hover:text-green-300 hover:underline">
                        Back to Events
                    </Link>
                </div>
            </div>
        );
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: event.description,
                url: window.location.href,
            }).catch(() => { });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-green-900/20 via-cyan-900/10 to-transparent pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute top-60 -left-32 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Back Navigation */}
                <Link
                    to="/events"
                    className="inline-flex items-center text-gray-400 hover:text-green-400 transition-all mb-10 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
                    <span className="font-medium">Back to Events</span>
                </Link>

                {/* Main Content Container - Left: Content, Right: Image */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Event Content */}
                    <div className={`${event.hidePoster ? 'lg:col-span-5' : 'lg:col-span-3'} space-y-8`}>
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500 leading-tight animate-gradient">
                            {event.title}
                        </h1>

                        {/* Description Section */}
                        <div className="space-y-6">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                {event.description}
                            </p>

                            <p className="text-gray-400 text-base leading-relaxed">
                                This event provided participants with hands-on experience and expert mentorship.
                                We covered deep dives into technologies relevant to cybersecurity, offering valuable
                                insights and networking opportunities for all attendees.
                            </p>
                        </div>

                        {/* Event Details Card */}
                        <div className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <div className="h-1 w-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mr-3" />
                                Event Details
                            </h3>

                            <div className={`grid grid-cols-1 sm:grid-cols-2 ${event.hidePoster ? 'lg:grid-cols-4' : ''} gap-4`}>
                                {/* Date */}
                                <div className="flex items-center">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/10 text-emerald-400 mr-3">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-white font-semibold text-sm">{event.date}</p>
                                    </div>
                                </div>

                                {/* Time */}
                                <div className="flex items-center">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-400 mr-3">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Time</p>
                                        <p className="text-white font-semibold text-sm">{event.time}</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400 mr-3">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Location</p>
                                        <p className="text-white font-semibold text-sm">{event.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Right Column: Event Poster */}
                    {!event.hidePoster && (
                        <div className="lg:col-span-2 lg:sticky lg:top-24 h-fit">
                            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gray-900/20">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent z-10" />

                                {/* Animated Border Glow on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                                    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(16,185,129,0.3)]" />
                                </div>

                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-auto min-h-[500px] max-h-[800px] object-contain transform transition-transform duration-700 group-hover:scale-105 ease-out p-2"
                                    onError={(e) => { e.target.src = 'https://placehold.co/600x800/1f2937/white?text=Event+Poster' }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Gallery Section */}
                {event.gallery && event.gallery.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                            <div className="h-1 w-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mr-4" />
                            Event Memories
                        </h2>
                        <GalleryCarousel images={event.gallery} />
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div >
    );
};

export default EventDetailsPage;

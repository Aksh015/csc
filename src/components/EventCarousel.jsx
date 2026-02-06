import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCarousel = ({ events }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        const maxIndex = Math.max(0, events.length - itemsPerPage);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const maxIndex = Math.max(0, events.length - itemsPerPage);
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    return (
        <div className="relative group/carousel">
            {/* Navigation - Floating Buttons */}
            <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 bg-gray-900/50 hover:bg-emerald-500 border border-white/10 hover:border-emerald-400/50 rounded-full text-white backdrop-blur-md transition-all duration-300 shadow-xl opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 bg-gray-900/50 hover:bg-emerald-500 border border-white/10 hover:border-emerald-400/50 rounded-full text-white backdrop-blur-md transition-all duration-300 shadow-xl opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Window */}
            <div className="overflow-hidden px-1 py-4 -mx-1">
                <div
                    className="flex gap-6 lg:gap-8 transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
                    style={{ transform: `translateX(calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (itemsPerPage > 1 ? (32 / itemsPerPage) : 0)}px))` }}
                >
                    {/* Note: The gap logic in translateX is approximate; for perfect flex gap sliding, usually 100/k % is good if container width handles gap. 
         A simpler robust way for variable gap is usually item width basis. 
         Let's stick to simple % and assume standard gap handling or adjust.
         Correct formula to shift one 'slot' including gap: 
         Each item takes (100% - (items-1)*gap)/items. 
         Total shift = index * (100/items)% is simplest if we ignore the gap visually in the calc or use negative margins.
         Alternative: use a wrapper for each item that provides the padding.
      */}
                    {events.map((event) => (
                        /* Wrapper for correct sizing */
                        <div
                            key={event.id}
                            className="flex-shrink-0 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-22px)]"
                        >
                            <Link
                                to={`/events/${event.slug || '#'}`}
                                className="group relative flex flex-col h-full bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder */}
                                    <img
                                        src={event.image || '/api/placeholder/400/320'}
                                        alt={event.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                                            {event.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-2 mb-4">
                                        {event.date && (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
                                                <span>{event.date}</span>
                                            </div>
                                        )}
                                        {/* If location exists, show it, else attendees */}
                                        {event.location ? (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                                                <span>{event.location}</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2.5"></span>
                                                <span>{event.attendees}</span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6 flex-grow">
                                        {event.highlight || event.shortDescription}
                                    </p>

                                    <div className="flex items-center text-sm font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                        View Details
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;

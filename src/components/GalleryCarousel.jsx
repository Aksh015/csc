import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);

    const AUTOPLAY_DELAY = 3000; // 3 seconds per slide

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            // Clear any existing interval
            if (intervalRef.current) clearInterval(intervalRef.current);

            // Start new interval
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, AUTOPLAY_DELAY);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, currentIndex, images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const getVisibleImages = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + images.length) % images.length;
            visible.push({ index, position: i });
        }
        return visible;
    };

    if (!images || images.length === 0) return null;

    return (
        <div
            className="relative py-12"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            {/* Carousel Container */}
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">

                {/* Image Cards */}
                <div className="relative w-full max-w-6xl mx-auto px-4">
                    <div className="relative h-[400px] md:h-[500px]">
                        {getVisibleImages().map(({ index, position }) => {
                            const isCenter = position === 0;
                            const isLeft = position === -1;
                            const isRight = position === 1;

                            return (
                                <div
                                    key={index}
                                    className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-out ${isCenter ? 'z-30' : 'z-10'
                                        }`}
                                    style={{
                                        transform: `
                                            translate(-50%, -50%)
                                            translateX(${position * 380}px)
                                            scale(${isCenter ? 1 : 0.75})
                                        `,
                                        opacity: isCenter ? 1 : 0.4,
                                    }}
                                >
                                    <div className={`
                                        relative w-[320px] md:w-[400px] h-[320px] md:h-[400px] 
                                        rounded-2xl overflow-hidden
                                        ${isCenter
                                            ? 'border-2 border-green-500/50 shadow-2xl shadow-green-500/20'
                                            : 'border border-gray-700/50'
                                        }
                                        bg-gray-900/80 backdrop-blur-sm
                                        transition-all duration-700
                                    `}>
                                        <img
                                            src={images[index]}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://placehold.co/400x400/1f2937/white?text=Image';
                                            }}
                                        />

                                        {/* Overlay gradient */}
                                        <div className={`
                                            absolute inset-0 
                                            ${isCenter
                                                ? 'bg-gradient-to-t from-black/40 via-transparent to-transparent'
                                                : 'bg-black/40'
                                            }
                                        `} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:-left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-40 
                        w-12 h-12 rounded-full 
                        bg-gray-900/90 hover:bg-green-500 
                        border border-gray-700 hover:border-green-400
                        text-white
                        flex items-center justify-center
                        transition-all duration-300
                        shadow-lg hover:shadow-green-500/30"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:-right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-40 
                        w-12 h-12 rounded-full 
                        bg-gray-900/90 hover:bg-green-500 
                        border border-gray-700 hover:border-green-400
                        text-white
                        flex items-center justify-center
                        transition-all duration-300
                        shadow-lg hover:shadow-green-500/30"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default GalleryCarousel;

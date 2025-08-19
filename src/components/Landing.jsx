import bg from "../assets/Landing_bg.webp";
import React, { useState, useRef, useEffect } from "react";

export default function Landing({ onEnter }) {
    const [hasEntered, setHasEntered] = useState(false); // New state for button click
    const [showButton, setShowButton] = useState(false); // New state for button visibility
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 2;
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("play", handleVideoPlay);
        }
        
        // Show button after 2 seconds (since video is 2x speed)
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 2000);
        
        return () => {
            if (video) {
                video.removeEventListener("timeupdate", handleTimeUpdate);
                video.removeEventListener("play", handleVideoPlay);
            }
            clearTimeout(buttonTimer);
        };
    }, []);

    const handleVideoPlay = () => {
        // Video started playing - could add analytics here if needed
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video && video.duration) {
            // Stop 3 seconds before the end
            if (video.currentTime >= video.duration - 3) {
                video.pause();
            }
        }
    };

    const handleEnterClick = () => {
        setHasEntered(true);
        if (onEnter) onEnter();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Background Video */}
            {!hasEntered && (
                <>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    >
                        <source src="/logo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Button overlay on video */}
                    {showButton && (
                        <button
                            onClick={handleEnterClick}
                            className="z-10 px-6 py-2.5 rounded-lg text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 absolute bottom-16 left-1/2 -translate-x-1/2 animate-slideInFromLeft"
                            style={{
                                backgroundColor: '#16368c',
                                background: 'linear-gradient(135deg, #16368c 0%, #1e4ba3 100%)',
                                border: 'none',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 8px 25px rgba(22, 54, 140, 0.25)',
                                letterSpacing: '0.5px',
                                animation: 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                                position: 'absolute',
                                left: '45%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            OPEN WEBSITE
                        </button>
                    )}
                </>
            )}

            {/* Overlay and Content */}
            {hasEntered && (
                <>
                    {/* Background image (not stretched to cover) */}
                    <img
                        src={bg}
                        alt="Background"
                        className="absolute inset-0 w-auto h-3/4 object-contain md:object-cover mx-auto my-auto"
                        style={{ zIndex: 0 }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gray-900/60 z-10" />

                    {/* Animated Text */}
                    <div className="text-white text-2xl font-bold fixed top-16 z-20">
                        PANORAMA EXPORTS
                    </div>

                    <div className="relative z-20 flex flex-col items-center justify-center text-white px-6 h-full">
                        <div className="text-[6vw] font-semibold text-center">
                            {"PANORAMA".split("").map((char, i) => (
                                <span
                                    key={`p${i}`}
                                    className="drop-letter"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                            {"EXPORTS".split("").map((char, i) => (
                                <span
                                    key={`e${i}`}
                                    className="rise-letter"
                                    style={{
                                        animationDelay: `${7 * 0.2 + i * 0.2}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Footer Text */}
                    <div className="text-white text-xl fixed left-10 bottom-10 z-20">
                        Step into the future
                    </div>
                    <div className="text-white text-xl fixed right-10 bottom-10 z-20">
                        Step into the future
                    </div>
                </>
            )}
        </div>
    );
}

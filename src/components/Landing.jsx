import bg from "../assets/Landing_bg.webp";
import React, { useState, useRef, useEffect } from "react";

export default function Landing({ onEnter }) {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 2;
            video.addEventListener("ended", handleVideoEnd);
        }
        return () => {
            if (video) {
                video.removeEventListener("ended", handleVideoEnd);
            }
        };
    }, []);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Background Video */}
            {!videoEnded && (
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
            )}

            {/* Overlay and Content */}
            {videoEnded && (
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
                    <div
                        className="text-white text-2xl font-bold fixed top-16 z-20"
                        style={{
                            fontFamily:
                                '"Playfair Display", "Times New Roman", serif',
                        }}
                    >
                        PANORAMA EXPORTS
                    </div>

                    <div className="relative z-20 flex flex-col items-center justify-center text-white px-6 h-full">
                        <div
                            className="text-[6vw] font-semibold text-center"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
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

                        <button
                            onClick={() => console.log("Enter clicked")}
                            className="mt-8 px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-black transition"
                        >
                            ENTER WEBSITE
                        </button>
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

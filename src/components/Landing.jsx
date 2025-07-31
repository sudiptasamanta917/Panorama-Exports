import React from "react";
import bg from "../assets/Landing_bg.webp";

export default function Landing({ onEnter }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Background image (not stretched to cover) */}
            <img
                src={bg}
                alt="Background"
                className="absolute inset-0 w-auto h-3/4 object-contain md:object-cover mx-auto my-auto"
                style={{ zIndex: 0 }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-800/10 z-10" />

            {/* Main content */}
            <div
                className="text-white text-2xl font-bold fixed top-16"
                style={{
                    fontFamily: '"Playfair Display", "Times New Roman", serif',
                }}
            >
                PANORAMA EXPORTS
            </div>
            <div className="relative z-20 flex flex-col items-center justify-center text-white px-6">
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
                            style={{ animationDelay: `${7 * 0.2 + i * 0.2}s` }}
                        >
                            {char}
                        </span>
                    ))}
                </div>

                <button
                    onClick={onEnter}
                    className="mt-8 px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-black transition"
                >
                    ENTER WEBSITE
                </button>
            </div>
            <div className="text-white text-xl fixed left-10 bottom-10">
                Step into the future
            </div>
            <div className="text-white text-xl fixed right-10 bottom-10">
                Step into the future
            </div>
        </div>
    );
}

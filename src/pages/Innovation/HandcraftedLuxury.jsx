import React from "react";

const HandcraftedLuxury = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=1740&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
                    Handcrafted Luxury
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    Rooted in tradition, designed for tomorrow. Each piece reflects
                    generational wisdom, modern refinement, and the soulful artistry of
                    <span className="font-semibold"> “Made in India.”</span>
                </p>
            </div>
        </div>
    );
};

export default HandcraftedLuxury;

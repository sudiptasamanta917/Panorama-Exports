import React from "react";

const certifications = [
    {
        name: "ISO 9001",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/ISO_9001-2015.svg",
    },
    {
        name: "OEKO-TEX",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Oeko-tex-logo.svg",
    },
    {
        name: "Fair Trade",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Fairtrade-logo.svg",
    },
    {
        name: "GOTS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Global_Organic_Textile_Standard_logo.svg",
    },
];

const StandardOfPerfection = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1581093458791-9d96c0d9f7c7?auto=format&fit=crop&w=1740&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                    Standard Of Perfection
                </h2>
                <p className="text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto">
                    Global Standards, Local Soul — From ethical sourcing to flawless finishing,
                    our certifications speak of trust, transparency, and excellence. Every
                    garment carries the seal of global trust and credibility.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 hover:bg-white/20"
                        >
                            <img
                                src={cert.logo}
                                alt={cert.name}
                                className="w-28 h-28 object-contain mx-auto"
                            />
                            <p className="text-center text-sm mt-4 text-gray-200">{cert.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StandardOfPerfection;

import React from "react";

const team = [
    {
        name: "Ananya Sharma",
        role: "Lead Designer",
        image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Rahul Verma",
        role: "Production Head",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Meera Patel",
        role: "Sustainability Manager",
        image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Arjun Nair",
        role: "Operations Strategist",
        image:
            "https://images.openai.com/thumbnails/url/54vq6nicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7MijdOMY7y9gyMCCn3MA8otoioSjIt83UrCSrN9wwONEx2STaJ8swuKE11zsz2DPdx9fIOLgoJ9s4xKVcrBgATcynM",
    },
];

const Peoples = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1740&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our People</h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
                    The soul of Panorama is its people. 7,000+ individuals, 50% women, all
                    united by passion, purpose, and creativity. We foster safe, inclusive
                    spaces, invest in skill-building, and champion equal opportunity—
                    growing together, every step of the way. We encourage every voice to be
                    a part of our shared journey – building a company where success is
                    measured not just in output but in the lives we enrich continuously.
                </p>

                {/* Highlighted Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 mb-20">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                        <h3 className="text-3xl font-bold text-indigo-400">7,000+</h3>
                        <p className="mt-2 text-gray-200">Individuals</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                        <h3 className="text-3xl font-bold text-pink-400">50%</h3>
                        <p className="mt-2 text-gray-200">Women Workforce</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                        <h3 className="text-3xl font-bold text-green-400">Inclusive</h3>
                        <p className="mt-2 text-gray-200">Safe & Equal Spaces</p>
                    </div>
                </div>

                {/* Team Grid */}
                <h3 className="text-3xl font-semibold mb-10">Meet Our Team</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white/20"
                            />
                            <h4 className="text-lg font-semibold">{member.name}</h4>
                            <p className="text-sm text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Peoples;

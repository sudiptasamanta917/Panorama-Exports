import React from "react";
import { FaLeaf, FaSolarPanel, FaHandshake, FaEye } from "react-icons/fa";

const responsibilities = [
    {
        title: "Sustainable Sourcing",
        description: "Responsible sourcing and clean production.",
        image: "https://images.unsplash.com/photo-1605902711622-cfb43c443c8b?auto=format&fit=crop&w=800&q=80",
        icon: <FaLeaf className="text-green-400 text-3xl mb-3 mx-auto" />,
    },
    {
        title: "Green Energy",
        description: "Solar power, efficient logistics, and eco-conscious facilities.",
        image: "https://images.unsplash.com/photo-1581090700227-1f44e3a72d3e?auto=format&fit=crop&w=800&q=80",
        icon: <FaSolarPanel className="text-yellow-400 text-3xl mb-3 mx-auto" />,
    },
    {
        title: "Fair Work",
        description: "Fair wages, safe workplaces, and community upliftment.",
        image: "https://images.unsplash.com/photo-1581091215361-6e91d9d3f99f?auto=format&fit=crop&w=800&q=80",
        icon: <FaHandshake className="text-blue-400 text-3xl mb-3 mx-auto" />,
    },
    {
        title: "Transparency",
        description: "Integrity and circular practices at every level.",
        image: "https://images.unsplash.com/photo-1601582585122-73c29a217f2b?auto=format&fit=crop&w=800&q=80",
        icon: <FaEye className="text-indigo-400 text-3xl mb-3 mx-auto" />,
    },
];

const ResponsibilityRoute = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1740&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                    Responsibility Route
                </h2>
                <p className="text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto">
                    Sustainability is stitched into everything we do. Every action,
                    decision, and practice reflects our commitment to people, planet, and
                    progress.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
                    {responsibilities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src="https://i.pinimg.com/736x/77/71/68/7771683223d86b237a3304d6f32828b9.jpg"
                                alt="Responsibility"
                                className="w-full h-59 object-cover rounded-t-xl"
                            />
                            <div className="p-6 text-center">
                                {item.icon}
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-200">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponsibilityRoute;

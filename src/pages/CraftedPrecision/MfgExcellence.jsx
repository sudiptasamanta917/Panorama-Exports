import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Factory,
    CheckCircle2,
    Scissors,
    Cog,
    Package,
    Truck,
} from "lucide-react";

const units = [
    "5 Integrated Units",
    "Seamless Cut-to-Pack Capabilities",
    "Uncompromised Quality",
    "Unmatched Speed",
    "End-to-End Excellence",
];

const timeline = [
    { icon: Scissors, title: "Cut", desc: "Precision cutting with advanced machinery." },
    { icon: Cog, title: "Process", desc: "Smart processing with automation & care." },
    { icon: Factory, title: "Assemble", desc: "Integrated units working in harmony." },
    { icon: Package, title: "Pack", desc: "Seamless packaging with zero compromise." },
    { icon: Truck, title: "Deliver", desc: "Swift delivery with efficiency & trust." },
];

const TiltCard = ({ children }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = ((y / height) - 0.5) * 20; // max 20deg tilt
        const rotateY = ((x / width) - 0.5) * -20;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-2xl"
        >
            {children}
        </motion.div>
    );
};

const MfgExcellence = () => {
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1581091870627-3a4a52f9a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Manufacturing Excellence"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-900"></div>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-center max-w-4xl mx-auto px-6 pt-28 pb-16"
            >
                <div className="flex justify-center mb-6">
                    <Factory className="w-16 h-16 text-amber-400" />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                    Manufacturing <span className="text-amber-400">Excellence</span>
                </h2>
                <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                    5 Integrated Units – Seamless cut-to-pack capabilities for unmatched{" "}
                    <span className="text-amber-300 font-medium">quality</span> and{" "}
                    <span className="text-amber-300 font-medium">speed</span>.
                </p>
            </motion.div>

            {/* Feature Cards with tilt */}
            <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 pb-16">
                {units.map((item, index) => (
                    <TiltCard key={index}>
                        <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform">
                            <div className="flex items-center mb-4">
                                <CheckCircle2 className="text-amber-400 w-7 h-7 mr-3" />
                                <h3 className="text-lg font-semibold">{item}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Delivering efficiency, reliability, and speed while maintaining
                                world-class standards.
                            </p>
                        </div>
                    </TiltCard>
                ))}
            </div>

            {/* Timeline Flow with tilt */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <h3 className="text-3xl font-bold text-center mb-12">
                    From <span className="text-amber-400">Cut</span> to{" "}
                    <span className="text-amber-400">Delivery</span>
                </h3>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
                    {timeline.map((step, index) => (
                        <TiltCard key={index}>
                            <div className="relative flex flex-col items-center text-center md:w-1/5 bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-lg">
                                <div className="bg-amber-500/20 border border-amber-400 rounded-full p-6 mb-4">
                                    <step.icon className="w-10 h-10 text-amber-400" />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                                <p className="text-gray-300 text-sm">{step.desc}</p>

                                {/* Connector Line */}
                                {index < timeline.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-amber-400/70 to-transparent"></div>
                                )}
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            {/* Decorative Gradient Blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
        </section>
    );
};

export default MfgExcellence;

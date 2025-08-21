import { motion } from "framer-motion";
import { useState } from "react";

const milestones = [
    { year: "1973", text: "Founded with a vision to blend craftsmanship with global appeal." },
    { year: "1980s", text: "Expanded internationally; deepened global collaborations." },
    { year: "1990s", text: "Embraced modern technology; laid the foundation for future-ready manufacturing." },
    { year: "2000s", text: "Launched ESG-driven sustainability programs, creating positive impact for society and industry." },
    { year: "2010", text: "Grew advanced manufacturing units in Faridabad, boosting capabilities and delivery excellence." },
    { year: "2024", text: "Powered by 5,000+ skilled hands, we craft 12 million garments a year with a new fabric warehouse fueling global reach." },
    { year: "2025", text: "With 7,000 team members, expanded presence with new head office in Faridabad and factory in Noida—where tradition meets technology." },
];

const factories = [
    {
        id: 1,
        title: "Faridabad Factory",
        img: "/images/factory1.jpg",
        details: "Employees: 2,500 • Production: 6M garments/year",
    },
    {
        id: 2,
        title: "Noida Factory",
        img: "/images/factory2.jpg",
        details: "Employees: 1,200 • Production: 3M garments/year",
    },
];

const Milestones = () => {
    const [selectedFactory, setSelectedFactory] = useState(null);

    return (
        <>
            <div className="bg-blue-950 h-20 mb-12"></div>
            <div className="min-h-screen bg-white text-gray-800">
                {/* Header */}
                <div className="text-center py-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-wide"
                    >
                        Our Milestones
                    </motion.h1>
                </div>

                {/* Timeline Section */}
                <div className="max-w-5xl mx-auto px-4 space-y-8">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center md:items-start gap-6"
                        >
                            <div className="text-2xl font-bold text-blue-600 w-24">{m.year}</div>
                            <p className="bg-gray-100 rounded-xl p-4 shadow-md flex-1">{m.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Graph Placeholder */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-semibold mb-4">Factory Growth Graph</h2>
                    <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                        {/* Replace later with recharts / chart.js */}
                        <span className="text-gray-600">[Graph Coming Soon]</span>
                    </div>
                </div>

                {/* Factories Section */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Our Factories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {factories.map((factory) => (
                            <motion.div
                                key={factory.id}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setSelectedFactory(factory.id)}
                                className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden"
                            >
                                <img src={factory.img} alt={factory.title} className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{factory.title}</h3>
                                    {selectedFactory === factory.id && (
                                        <p className="mt-2 text-gray-600">{factory.details}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Milestones;
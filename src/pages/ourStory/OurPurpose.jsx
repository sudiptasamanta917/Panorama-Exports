import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const purposes = [
    {
        title: "Enriching Lives",
        text: "Empowering people, uplifting communities, and shaping better futures that sustains ecosystems, anticipates new lifestyles, and supports the aspirations of every member of our team.",
    },
    {
        title: "Dynamic at Heart",
        text: "Agile, bold, and ever-evolving with ideas, technology, and learning. We acquire new capabilities, master fresh capacities, and continuously innovate to pioneer and reinvent the future.",
    },
    {
        title: "Trust at the Core",
        text: "Reliability and intent define every product, partnership, and promise. Trust is our greatest currency—built in every interaction, upheld in all circumstances, and strengthened over time.",
    },
    {
        title: "Responsible Reverence",
        text: "Committed to people, planet, and purpose—balancing profit with progress. We foster a culture where every decision is thoughtful, accountable, and value-driven.",
    },
];

const OurPurpose = () => {
    return (
        <>
            <div className="bg-blue-950 h-20 mb-12"></div>
            <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-6 md:px-16">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Our <span className="text-amber-600">Purpose</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        To enrich lives by building a dynamic, responsible, and trusted global
                        enterprise.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {purposes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                        >
                            <div className="flex items-center mb-4">
                                <CheckCircle2 className="text-amber-600 w-7 h-7 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative background circles */}
                <div className="absolute top-10 left-10 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-52 h-52 bg-amber-300/30 rounded-full blur-3xl animate-pulse" />
            </section>
        </>
    )
}

export default OurPurpose;
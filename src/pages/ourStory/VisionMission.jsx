// VisionMission.jsx
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/OurStory/visionMission/bg.png";

export default function VisionMission() {
    // Values data
    const values = [
        {
            title: "Integrity",
            description:
                "Acting and making decisions in a fair and honest manner, upholding the highest standards of professionalism, and being recognized for doing so.",
            icon: "/icons/integrity.svg",
            bg: "bg-blue-900",
        },
        {
            title: "Commitment",
            description:
                "Building on the foundation of integrity, we do everything necessary to deliver value to all stakeholders. This includes being accountable for our actions and decisions.",
            icon: "/icons/commitment.svg",
            bg: "bg-[#4E2D2D]",
        },
        {
            title: "Passion",
            description:
                "Fuelled by an energetic, intuitive zeal that stems from emotional engagement with the organisation, inspiring every individual to give their best.",
            icon: "/icons/passion.svg",
            bg: "bg-orange-500",
        },
        {
            title: "Seamlessness",
            description:
                "Collaborating and working together across functional groups, hierarchies, businesses, and geographies to harness the benefits of synergy.",
            icon: "/icons/seamlessness.svg",
            bg: "bg-green-600",
        },
        {
            title: "Speed",
            description:
                "Responding to both internal and external customers with a sense of urgency, completing tasks ahead of deadlines with efficiency.",
            icon: "/icons/speed.svg",
            bg: "bg-red-600",
        },
    ];

    return (
        <>
            {/* Vision Sections */}
            <section id="vision-values" className="bg-white">
                {/* <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Vision
                </h2> */}
                <div
                    className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    {/* Overlay black */}
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative z-10 2xl:w-[60%] xl:w-[70%] lg:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between text-center text-white">
                        {/* Vision */}
                        <motion.div
                            className="w-[350px] flex flex-col items-center mb-8 md:mb-0"
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="text-4xl font-semibold mb-4">
                                Our Vision
                            </h2>
                            <p className="text-sm text-gray-200">
                                To be the world’s most trusted apparel partner,
                                championing technology, sustainability, and
                                design excellence.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            className="w-[350px] flex flex-col items-center"
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="text-4xl font-semibold mb-4">
                                Our Mission
                            </h2>
                            <p className="text-sm text-gray-200">
                                To exceed expectations through innovation,
                                efficiency, and a people-first
                                culture-redefining global apparel manufacturing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Values Sections */}
            <section className="w-full bg-white">
                <div className="py-16 px-6 lg:px-20 bg-gray-50">
                    <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">
                        Our Values
                    </h2>

                    <div className="xl:w-[70%] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: false }}
                                className="bg-white shadow-md rounded-sm overflow-hidden"
                            >
                                <div
                                    className={`${value.bg} p-6 flex justify-center items-center`}
                                >
                                    <img
                                        src={value.icon}
                                        alt={value.title}
                                        className="h-12"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-blue-900 font-semibold mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

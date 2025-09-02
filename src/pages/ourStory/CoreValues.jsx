import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const CoreValues = () => {
    // CoreValues data
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
            <div className="w-[90%] mx-auto py-16 px-6 lg:px-20">
                <h2 className="text-3xl pb-16 sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
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
        </>
    );
};

export default CoreValues;

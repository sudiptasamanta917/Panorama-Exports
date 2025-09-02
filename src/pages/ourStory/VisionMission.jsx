/// VisionMission.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import bgImage from "../../assets/OurStory/visionMission/main_bg.jpg";
import visionMission from "../../assets/OurStory/visionMission/vision-mission.jpg";
import CoreValues from "./CoreValues";

const labels = {
    "#vision-values": "VisionValues",
    "#core-values": "CoreValues",
};

export default function VisionMission() {
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    // Smooth scroll on hash change
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.querySelector(location.hash);
                if (section) {
                    const yOffset = -80; // adjust based on your navbar/breadcrumb height
                    const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    

    return (
        <>
            {/* Vision Sections */}
            <section id="vision-values" className="bg-white">
                <div
                    ref={ref}
                    className="w-full h-[100vh] bg-cover bg-center flex flex-col items-start justify-end"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="text-white font-medium bg-black/80 px-[10%] pb-[4%] pt-[2%]">
                        <motion.h1
                            className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
                            variants={{
                                hidden: { opacity: 0, y: 1 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.8 }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        >
                            Woven into Every Thread
                        </motion.h1>
                        <motion.div
                            className="2xl:text-3xl lg:text-2xl md:text-xl text-lg mt-4"
                            variants={{
                                hidden: { opacity: 0, y: 1 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                ease: "easeInOut",
                            }}
                        >
                            Our vision shapes the future of fashion; our values
                            guide every stitch. We don’t just make clothing—we
                            build trust, innovate with intent, and create with
                            heart.
                        </motion.div>
                    </div>
                </div>
                {/* <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Vision & Mission
                </h2> */}
                <div
                    className="relative w-full h-[80vh] mt-4 flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${visionMission})` }}
                >
                    {/* Overlay black */}
                    <div className="absolute inset-0 lg:bg-black/10 md:bg-black/20 bg-black/60" />

                    <div className="relative z-10 2xl:w-[90%] xl:w-[70%] lg:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between text-center text-white">
                        {/* Vision */}
                        <motion.div
                            className="w-[40%] flex flex-col items-center font-semibold mb-8 md:mb-0"
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="xl:text-5xl md:text-4xl text-3x mb-4">
                                Our Vision
                            </h2>
                            <p className="xl:text-xl md:text-lg sm:text-md text-sm text-gray-200">
                                To be the world’s most trusted apparel partner,
                                championing technology, sustainability, and
                                design excellence.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            className="w-[40%] flex flex-col items-center font-semibold"
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="xl:text-5xl md:text-4xl text-3xl mb-4">
                                Our Mission
                            </h2>
                            <p className="xl:text-xl md:text-lg sm:text-md text-sm text-gray-200">
                                To exceed expectations through innovation,
                                efficiency, and a people-first
                                culture-redefining global apparel manufacturing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Values Sections */}
            <section id="core-values" className="w-full bg-[#f3ebdf]">
                <CoreValues />
            </section>
        </>
    );
}

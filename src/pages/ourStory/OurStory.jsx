import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import Milestones from "./Milestones";

// Hero images
import img1 from "../../assets/OurStory/02.webp";
import img2 from "../../assets/OurStory/03.webp";
import img3 from "../../assets/OurStory/04.webp";
import img4 from "../../assets/OurStory/05.webp";

import LegacyImage from "../../assets/Legacy/01.webp";

import FounderImage from "../../assets/Founders/founderImage.png";

const heroImages = [LegacyImage, img1, img2, img3, img4];
const labels = {
    "#legacy": "Legacy",
    "#milestones": "Milestones",
};

export default function OurStory() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const { ref: legacyRef, inView: legacyInView } = useInView({
        threshold: 0.3, // 30% of legacy visible = considered "in view", this for breadcrums control............
    });

    const textVariants = {
        hidden: { opacity: 0, x: "-40vw" },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, []);

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


    // Breadcrumb current label
    const currentLabel = labels[location.hash] || "Legacy";

    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Breadcrumbs */}
            {/* <div
                className={`bg-[#fdf2df] text-lg py-2 transition-all duration-300 ${
                    legacyInView
                        ? "hidden" // normal flow when in Legacy section
                        : "sticky top-[80px] z-40 shadow-md" // adjust top offset = navbar height
                }`}
            >
                <div className="w-[90%] mx-auto px-6 md:px-20">
                    <span className="text-gray-800">Home</span> &gt;{" "}
                    <span className="text-gray-800">Our Story</span> &gt;{" "}
                    <span className="font-semibold text-[#01276a]">
                        {currentLabel}
                    </span>
                </div>
            </div> */}

            {/* Legacy Sections */}
            <section id="legacy" ref={legacyRef} className="bg-white">
                {/* Hero Section */}
                <div className="relative w-full sm:h-[100vh] h-[380px] bg-black overflow-hidden flex flex-col items-start justify-end py-28">
                    {/* Background Dissolve Animations images */}
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                                index === currentIndex
                                    ? "opacity-100 blur-0 scale-100"
                                    : "opacity-0 blur-md scale-105"
                            }`}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    ))}

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                    {/* Text Box */}
                    <div className="relative z-20 text-white w-[90%] mx-auto px-6 md:px-20 font-semibold">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5">
                            Legacy
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal">
                            <span className="font-light">Where</span> Heritage{" "}
                            <span className="font-light">Meets</span> Modern
                            Luxury
                        </h2>
                    </div>
                </div>
                <div className="bg-white sm:pt-16 pt-5 pb-10 px-6 ">
                    <div className="">
                        {/* Heading */}
                        {/* <h2 className="2xl:text-7xl lg:text-5xl text-4xl text-gray-600 text-center md:mb-10 mb-4">
                            Legacy
                        </h2> */}

                        {/* Subheading */}
                        <p className="2xl:text-3xl lg:text-2xl md:text-xl text-md text-blue-900 text-justify max-w-[70%] mx-auto leading-relaxed">
                            Since 1973, Panorama Exports has transformed fabrics
                            into fashion blending Indian craftsmanship with
                            advanced manufacturing. Today, our garments travel
                            from India to global wardrobes, each piece echoing
                            artistry, innovation, and timeless tradition. More
                            than fashion - it's handcrafted legacy.
                        </p>
                    </div>
                </div>
            </section>
            {/* Founder's Message Sections */}
            <section id="founder-message" ref={ref} className="bg-white">
                <h2 className="w-[90%] mx-auto sm:py-16 py-5 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Founder's Message
                </h2>
                <div className="bg-[#b9a686] h-[70vh] relative flex items-center pb-5">
                    <div className="text-white h-[70vh] absolute bottom-0 flex items-center justify-center">
                        <img
                            src={FounderImage}
                            alt="Founder"
                            className="h-full object-contain"
                        />
                    </div>

                    {/* Quote Section */}
                    <div className="flex flex-col justify-start items-end w-[100vw] h-[26vh] bg-[#96785e] text-white xl:px-10 px-5 py-2">
                        <div className="2xl:w-[40%]">
                            <motion.p
                                className="xl:mt-4 text-[10px] lg:text-sm xl:text-md 2xl:text-xl font-semibold md:leading-relaxed 2xl:mb-4 mb-2 2xl:w-[650px] xl:w-[450px] lg:w-[400px] md:w-[400px] sm:w-[300px] w-full sm:tracking-wide"
                                variants={{
                                    hidden: { opacity: 0, y: 1 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            >
                                “Our journey in fashion has always been guided
                                by respect for tradition and a commitment to the
                                future. With each creation we uphold our pride &
                                values. We continue to shape this
                                conversation-one inspired creation at a time.”
                            </motion.p>
                            <motion.h2
                                className="text-[10px] lg:text-sm xl:text-md 2xl:text-xl font-semibold flex justify-end 2xl:w-[500px] xl:w-[450px] lg:w-[400px] md:w-[400px] sm:w-[300px] w-full"
                                variants={{
                                    hidden: { opacity: 0, y: 1 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.8 }}
                                transition={{
                                    duration: 2,
                                    delay: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                — Shri Shyam Sahni & Smt. Veena Sahni
                            </motion.h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* MileStones Sections */}
            <section id="milestones" className="bg-white">
                <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Milestones
                </h2>
                <Milestones />
            </section>
        </div>
    );
}

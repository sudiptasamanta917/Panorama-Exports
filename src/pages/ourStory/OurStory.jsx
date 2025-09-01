import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import Milestones from "./Milestones";
import VisionMission from "./VisionMission";
// Hero images
import img1 from "../../assets/OurStory/02.jpg";
import img2 from "../../assets/OurStory/03.jpg";
import img3 from "../../assets/OurStory/04.jpg";
import img4 from "../../assets/OurStory/05.jpg";

import LegacyImage from "../../assets/Legacy/01.jpg";

import FounderImage from "../../assets/Founders/founder.png";

const heroImages = [img1, img2, img3, img4, LegacyImage];
const labels = {
    "#legacy": "Legacy",
    "#founder-message": "Founder's Message",
    "#milestones": "Milestones",
    "#vision-mission": "Vision & Mission",
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
            {/* Hero Section */}
            <section className="relative w-full sm:h-[80vh] h-[380px] bg-black overflow-hidden flex flex-col items-start justify-end py-28">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl underline underline-offset-8">
                        <span className="text-xl sm:text-2xl md:text-3xl font-normal">
                            Where
                        </span>{" "}
                        Heritage{" "}
                        <span className="text-xl sm:text-2xl md:text-3xl font-normal">
                            Meets
                        </span>{" "}
                        Modern Luxury
                    </h2>
                </div>
            </section>
            {/* Breadcrumbs */}
            <div
                className={`bg-[#fdf2df] text-lg py-2 transition-all duration-300 ${
                    legacyInView
                        ? "relative" // normal flow when in Legacy section
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
            </div>

            {/* Legacy Sections */}
            <section id="legacy" ref={legacyRef} className="bg-white">
                <div className="bg-white pt-16 pb-10 px-6 text-center">
                    <div className="max-w-6xl mx-auto">
                        {/* Heading */}
                        <h2 className="text-7xl font-serif  text-gray-600 mb-6">
                            Legacy
                        </h2>

                        {/* Subheading */}
                        <p className="text-4xl text-blue-900 font-poppins leading-snug">
                            Since 1973, Panorama Exports has transformed fabrics
                            into fashion-blending Indian craftsmanship with
                            advanced manufacturing. Today, our garments travel
                            from India to global wardrobes, each piece echoing
                            artistry, innovation, and timeless tradition. More
                            than fashion-it's handcrafted legacy.
                        </p>
                    </div>
                </div>
            </section>
            {/* Founder's Message Sections */}
            <section id="founder-message" className="bg-white">
                <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Founder's Message
                </h2>
                <div className="bg-[#b9a686] h-[70vh] relative pt-24">
                    <div className="text-white h-[80vh] absolute bottom-0 flex items-center justify-center">
                        <img
                            src={FounderImage}
                            alt="Founder"
                            className="h-full object-contain"
                        />
                    </div>

                    {/* Quote Section */}
                    <div
                        ref={ref}
                        className="flex flex-col justify-center items-end w-full h-[35vh] bg-[#96785e] text-white 2xl:px-40 xl:px-28 px-10 py-10"
                    >
                        <motion.p
                            className="text-md md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 w-[40%]"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            “Fashion is a dialogue between tradition and
                            tomorrow. Let’s keep shaping that conversation — one
                            inspired creation at a time.”
                        </motion.p>

                        <motion.h2
                            className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold w-[500px] mb-16"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                            transition={{ delay: 0.2 }} // little delay
                        >
                            — Shri Shyam Sahni & Smt. Veena Sahni
                        </motion.h2>
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
            {/* Vision & Mission Sections */}
            <section id="vision-mission" className="bg-white">
                <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Vision & Mission
                </h2>
                <VisionMission />
            </section>
        </div>
    );
}

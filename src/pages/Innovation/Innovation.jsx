import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import InnovationThatLeads from "./InnovationThatLeads";
import StandardOfPerfection from "./StandardOfPerfection";
import HandcraftedLuxury from "./HandcraftedLuxury";
import bgImage from "../../assets/Innovation/Header/frontbg.jpg";

const labels = {
    "#innovation-leads": "Innovation that Leads",
    "#standard-perfection": "Standard Of Perfection",
    "#handcrafted-luxury": "Handcrafted Luxury",
};

const crumbs = [
    { label: "Innovation that Leads", path: "/innovation#innovation-leads" },
    {
        label: "Standard Of Perfection",
        path: "/innovation#standard-perfection",
    },
    { label: "Handcrafted Luxury", path: "/innovation#handcrafted-luxury" },
];

function Innovation() {
    const location = useLocation();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: innovationRef, inView: innovationLeadsInView } = useInView({
        threshold: 0.3, // 30% of innovation visible = considered "in view", this for breadcrums control............
    });
    const { ref: standardRef, inView: standardPerfectionInView } = useInView({
        threshold: 0.3, // same for standard for breadcrums control............
    });
    const { ref: handcraftedRef, inView: handcraftedLuxuryInView } = useInView({
        threshold: 0.3, // same for Handcrafted for breadcrums control............
    });

    // Determine which breadcrumb is active
    const activeCrumb = innovationLeadsInView
        ? "Innovation that Leads"
        : standardPerfectionInView
        ? "Standard Of Perfection"
        : handcraftedLuxuryInView
        ? "Handcrafted Luxury"
        : null;

    const textVariants = {
        hidden: { opacity: 0, x: "-40vw" },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

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

    // Scroll to top when opening the page.....................
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <>
            <section id="innovation-leads" ref={innovationRef}>
                <div
                    ref={ref}
                    className="w-full h-[100vh] bg-cover bg-center flex flex-col items-start justify-end"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <motion.div
                        className="text-white bg-gradient-to-t from-blue-950/90 via-blue-950/80 via-blue-900/60 to-transparent px-[10%] pb-[4%] pt-[10%] w-full"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Innovation that Leads
                        </h1>
                        <div className="text-lg sm:text-xl md:text-xl xl:text-2xl mt-4 w-[60%] text-justify font-relaxed">
                            At Panorama, innovation is how we stay ahead-and
                            stay true.
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="sticky top-20 z-40 shadow-md bg-blue-950 text-lg py-3 transition-all duration-300">
                <div className="w-[90%] mx-auto px-6 md:px-20 flex items-center justify-center gap-6">
                    {crumbs.map((crumb, index) => (
                        <span
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <Link
                                to={crumb.path}
                                className={`hover:underline ${
                                    activeCrumb === crumb.label
                                        ? "font-semibold text-white"
                                        : "text-gray-300"
                                }`}
                            >
                                {crumb.label}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
            <InnovationThatLeads />

            <section id="standard-perfection" ref={standardRef}>
                <StandardOfPerfection />
            </section>

            <section id="handcrafted-luxury" ref={handcraftedRef}>
                <HandcraftedLuxury />
            </section>
        </>
    );
}

export default Innovation;

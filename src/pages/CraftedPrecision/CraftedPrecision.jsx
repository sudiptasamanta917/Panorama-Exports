import React from 'react'
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import MfgImage from "../../assets/Crafted Precision/Opening Images/Mfg.jpeg";
import SmwImage from "../../assets/Crafted Precision/Opening Images/Smw.jpg";
import AetImage from "../../assets/Crafted Precision/Opening Images/Aet.jpg";
import SusDImage from "../../assets/Crafted Precision/Opening Images/SusD.png";
import ExstImage from "../../assets/Crafted Precision/Opening Images/Exs.png";
import AdwImage from "../../assets/Crafted Precision/Opening Images/Adw.jpg";
import AdcapImage from "../../assets/Crafted Precision/Opening Images/Adc.png";

const craftedP = [
    {
        title: "Manufacturing Excellence",
        img: MfgImage,
        path: "/mfg-excellence",
    },
    {
        title: "Smart Warehousing",
        img: SmwImage,
        path: "/smart-warehousing",
    },
    {
        title: "Art in Every Thread",
        img: AetImage,
        path: "/art-thread",
    },
    {
        title: "Exacting Standards",
        img: ExstImage,
        path: "/exacting-standards",
    },
    {
        title: "Sustainable Designs",
        img: SusDImage,
        path: "/sustainable-designs",
    },
    {
        title: "Advanced Washing",
        img: AdwImage,
        path: "/advanced-washing",
    },
    {
        title: "Adaptive Capacity",
        img: AdcapImage,
        path: "/adaptive-capacity",
    },
];

function CraftedPrecision() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false); // track pause state

    useEffect(() => {
        if (paused) return; // stop autoplay when paused

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % craftedP.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [paused]);


    return (
        <>
            <section className="bg-white">
                <div className="w-full h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto py-16 px-6 md:px-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                        Crafted Precision
                    </h2>
                    {/* <h3 className="mt-5">
                      To enrich lives by building a dynamic, responsible, and
                      trusted global enterprise.
                  </h3> */}
                </div>
                <div className="flex gap-2 w-full h-[300px] md:h-[400px] 2xl:h-[500px] overflow-hidden">
                    {craftedP.map((card, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => {
                                setActiveIndex(i);
                                if (activeIndex === i) setPaused(true); // pause autoplay when hovering active card...............
                            }}
                            onMouseLeave={() => setPaused(false)} // resume autoplay...............
                            className={`relative group transition-all duration-700 ease-in-out ${
                                activeIndex === i ? "grayscale-0" : "grayscale"
                            }`}
                            style={{
                                backgroundImage: `url(${card.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                flexGrow: activeIndex === i ? 3 : 1,
                                flexShrink: 1,
                                flexBasis: 0,
                                transition: "flex-grow 0.7s ease-in-out",
                            }}
                        >
                            <div
                                className={`absolute inset-0 pointer-events-none ${
                                    activeIndex === i
                                        ? "bg-transparent"
                                        : "bg-white/40 text-blue-950"
                                }`}
                            ></div>
                            <div
                                className={`absolute inset-y-0 right-0 flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 transition-opacity duration-700 ${
                                    activeIndex === i
                                        ? "opacity-100 text-white bg-gradient-to-tl from-black/70 via-black/50 via-black/30 to-transparent bg-right w-[40%] flex flex-col items-center justify-center text-center"
                                        : "opacity-90 text-blue-950"
                                }`}
                            >
                                <h2 className="text-md sm:text-lg md:text-xl font-semibold">
                                    {card.title}
                                </h2>
                                {activeIndex === i && (
                                    <Link to={card.path}>
                                        <ArrowRight className="mt-3 md:mt-4 text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform group-hover:translate-x-2 cursor-pointer" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default CraftedPrecision
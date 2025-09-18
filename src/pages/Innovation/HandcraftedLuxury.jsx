import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import FlipCard from "../../components/flipCard/FlipCard";

import CadImg1 from "../../assets/Innovation/CAD&3DDraping/1.jpg";
import CadImg2 from "../../assets/Innovation/CAD&3DDraping/2.jpg";
import CadImg3 from "../../assets/Innovation/CAD&3DDraping/3.jpg";

const CadImages = [
    {
        id: 1,
        image: CadImg1,
        title: "AI & Automation",
    },
    {
        id: 2,
        image: CadImg2,
        title: "Cloud Computing",
    },
    {
        id: 3,
        image: CadImg3,
        title: "Cyber Security",
    },
];

const HandcraftedLuxury = () => {
    const location = useLocation();
          const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.2,
          });
    return (
        <div>
            <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                Handcrafted Luxury
                <div className="mt-10 flex flex-col items-center">
                    <h1 className="text-md md:text-xl font-semibold text-gray-600 ml-1">
                        Rooted in tradition, designed for tomorrow.
                    </h1>
                    <p className="text-sm md:text-lg mt-3 md:mb-14 text-gray-600 ml-1">
                        Each piece reflects generational wisdom, modern
                        refinement, and the soulful artistry of “Made in India.”
                    </p>
                </div>
            </div>
            <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                {CadImages.map((img, index) => (
                    <div key={index} className="">
                        <FlipCard imageUrl={img.image} id={img.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HandcraftedLuxury;

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import FlipCard from "../../components/flipCard/FlipCard";

import HlImg1 from "../../assets/Innovation/HandcraftedLuxury/1.jpg";
import HlImg2 from "../../assets/Innovation/HandcraftedLuxury/2.jpg";
import HlImg3 from "../../assets/Innovation/HandcraftedLuxury/3.jpg";

const Images = [
    {
        id: 1,
        image: HlImg1,
        title: "Handcrafted",
    },
    {
        id: 2,
        image: HlImg2,
        title: "Handcrafted",
    },
    {
        id: 3,
        image: HlImg3,
        title: "Handcrafted",
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
                    <h1 className="text-lg md:text-2xl xl:text-3xl font-semibold text-blue-900">
                        Rooted in tradition, designed for tomorrow.
                    </h1>
                    <p className="text-sm md:text-lg mt-3 md:mb-14 text-gray-600 ml-1 font-thin w-[50%] text-justify">
                        Each piece reflects generational wisdom, modern
                        refinement, and the soulful artistry of “Made in India.”
                    </p>
                </div>
            </div>
            <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                {Images.map((img, index) => (
                    <div key={index} className="">
                        <FlipCard imageUrl={img.image} id={img.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HandcraftedLuxury;

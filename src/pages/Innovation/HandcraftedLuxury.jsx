import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import FlipCard from "../../components/flipCard/FlipCard";

import HlImg1 from "../../assets/Innovation/HandcraftedLuxury/1.jpg";
import HlImg2 from "../../assets/Innovation/HandcraftedLuxury/2.jpg";
import HlImg3 from "../../assets/Innovation/HandcraftedLuxury/03.jpg";

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
        <div className="pt-10">
            {/* <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                    HANDCRAFTED LUXURY
                </h1>
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
            </div> */}
            <section
                id=""
                className="mt-5 w-full bg-blue-950 flex justify-center py-20"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] p-10 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center text-blue-950">
                            HANDCRAFTED LUXURY
                        </h2>
                        <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
                            <h1 className="">
                                Rooted in tradition, designed for tomorrow.
                            </h1>
                            <p className="mt-2">
                                Each piece reflects generational wisdom, modern
                                refinement, and the soulful artistry of “Made in
                                India.”
                            </p>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[50%]">
                        <img
                            src={HlImg3}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HandcraftedLuxury;

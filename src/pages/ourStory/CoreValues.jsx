import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Img1 from "../../assets/OurStory/coreValues/CraftedExcellence.png";
import Img2 from "../../assets/OurStory/coreValues/OneTeamDream.png";
import Img3 from "../../assets/OurStory/coreValues/InnovatingPurpose.png";
import Img4 from "../../assets/OurStory/coreValues/PlanetFirstProcess.png";
import Img5 from "../../assets/OurStory/coreValues/ProudlyMadeIndia.png";

//hello


const CoreValues = () => {
    // CoreValues data
    const values = [
        {
            title: "Crafted with Excellence",
            description:
                "A blend of work & play-allowing passion & precision to coexist -where artisan skill meets advanced technology. Every piece is made with unmatched care, pride, and creativity. ",
            img:Img1,
        },
        {
            title: "One Team, One Dream",
            description:
                "Designers, artisans, and technologists working in perfect sync to bring visions to life.",
            img: Img2,
        },
        {
            title: "Innovating with Purpose",
            description:
                "Honoring heritage while embracing the future—creating clothing that resonates, globally.",
            img: Img3,
        },
        {
            title: "Planet-First Process",
            description:
                "From mindful materials to low-impact methods, sustainability leads every decision. Our sensitivity to the environment is at the heart of our process  ",
            img: Img4,
        },
        {
            title: "Proudly Made in India ",
            description:
                "Every garment tells a story of culture, soul, and craftsmanship rooted in India—designed to connect with the world.",
            img: Img5,
        },
    ];

    return (
        <>
            <div className="py-10">
                <h2 className="w-[90%] mx-auto py-5 px-6 lg:px-20 text-3xl pb-16 sm:text-4xl md:text-5xl text-blue-950 tracking-widest text-center font-semibold">
                    CORE VALUE
                </h2>

                <div className="w-[90%] mx-auto py-5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-8 gap-6">
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
                            className="border border-amber-700/30 shadow-[0_0_20px_#ab9777] rounded-sm overflow-hidden"
                        >
                            <div className="2xl:border-[20px] xl:border-[16px] lg:border-[12px] md:border-[15px] border-[10px] border-white h-full w-full">
                                <div
                                    className={``}
                                    
                                >
                                    <img src={value.img} alt="" className="image-contain" />
                                </div>
                                <div className="p-4">
                                    <h3 className="2xl:h-16 xl:h-14 lg:h-12 md:h-12 h-10 2xl:text-xl xl:text-lg lg:text-sm md:text-md md:text-md sm:text-sm text-[12px] text-blue-900 font-semibold mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="2xl:text-sm xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px] text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CoreValues;

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Img1 from "../../assets/OurStory/coreValues/Crafted with Excellence.jpg";
import Img2 from "../../assets/OurStory/coreValues/One Team One Drea.jpg";
import Img3 from "../../assets/OurStory/coreValues/Innovating with Purpose.png";
import Img4 from "../../assets/OurStory/coreValues/Planet first Process.jpeg";
import Img5 from "../../assets/OurStory/coreValues/Proudly Made in India.jpg";

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
            <div className="w-[90%] mx-auto py-16 px-6 lg:px-20">
                <h2 className="text-3xl pb-16 sm:text-4xl md:text-5xl text-blue-950 tracking-widest text-center font-semibold">
                    CORE VALUE
                </h2>

                <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:gap-10 lg:gap-8 md:gap-8 gap-6">
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
                            <div className="border-[20px] border-white h-full w-full">
                                <div
                                    className={`p-6 md:h-[200px] h-[100px] flex justify-center items-center bg-center bg-cover`}
                                    style={{
                                        backgroundImage: `url(${value.img})`,
                                    }}
                                ></div>
                                <div className="p-4">
                                        <h3 className="lg:text-xl md:text-lg text-sm text-blue-900 font-semibold mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="md:text-sm text-[8px] text-gray-600">
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

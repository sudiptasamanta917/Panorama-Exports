import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Img from "../../assets/OurStory/coreValues/img.jpg";

//hello


const CoreValues = () => {
    // CoreValues data
    const values = [
        {
            title: "Integrity",
            description:
                "Acting and making decisions in a fair and honest manner, upholding the highest standards of professionalism, and being recognized for doing so.",
            img: { Img },
        },
        {
            title: "Integrity",
            description:
                "Acting and making decisions in a fair and honest manner, upholding the highest standards of professionalism, and being recognized for doing so.",
            img: { Img },
        },
        {
            title: "Integrity",
            description:
                "Acting and making decisions in a fair and honest manner, upholding the highest standards of professionalism, and being recognized for doing so.",
            img: { Img },
        },
        {
            title: "Integrity",
            description:
                "Acting and making decisions in a fair and honest manner, upholding the highest standards of professionalism, and being recognized for doing so.",
            img: { Img },
        },
        {
            title: "Integrity",
            description:
                "Acting and making decisions in a fair and honest manner, upholding the highest standards of professionalism, and being recognized for doing so.",
            img: { Img },
        },
    ];

    return (
        <>
            <div className="w-[90%] mx-auto py-16 px-6 lg:px-20">
                <h2 className="text-3xl pb-16 sm:text-4xl md:text-5xl text-blue-950 tracking-widest text-center font-semibold">
                    CORE VALUE
                </h2>

                <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:gap-10 lg:gap-8 md:gap-8 gap-6">
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
                                    className={`p-6 h-[250px] flex justify-center items-center bg-center bg-cover`}
                                    style={{
                                        backgroundImage: `url(${Img})`,
                                    }}
                                >
                                    {/* <div className="p-4">
                                        <h3 className="text-white font-semibold mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-white">
                                            {value.description}
                                        </p>
                                    </div> */}
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

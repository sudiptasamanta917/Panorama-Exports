import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import s1 from "../../assets/Responsible/Slider3/1.png";
import s2 from "../../assets/Responsible/Slider3/2.jpg";
import s3 from "../../assets/Responsible/Slider3/3.jpg";

function Slider3() {
    const slider1 = [
        {
            url: s1,
        },
        {
            url: s2,
        },
        {
            url: s3,
        },
        {
            url: s3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slider1.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slider1.length]);

    return (
        <div className="relative w-full aspect-[16/7.5] bg-black">
            {slider1.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${slide.url})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black-50 via-black-10 to-transparent"></div>
                    <motion.h2
                        className="absolute bottom-[5%] xl:left-[10%] left-[5%] text-2xl md:text-3xl lg:text-4xl font-medium text-white py-[5%] 2xl:w-[800px] lg:w-[600px] w-[400px] font-loose"
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Fair wages, safe workplaces, and community upliftment
                    </motion.h2>
                </div>
            ))}
        </div>
    );
}

export default Slider3;

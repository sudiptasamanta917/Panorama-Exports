import React, { useState, useEffect } from "react";
import s1 from "../../assets/Responsible/Slider4/1.jpg";
import s2 from "../../assets/Responsible/Slider4/2.jpeg";
import s3 from "../../assets/Responsible/Slider4/3.jpg";

function Slider4() {
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
        <div className="relative w-full aspect-[16/7.5] overflow-hidden bg-black">
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
                    <h2 className="absolute bottom-[5%] xl:left-[10%] left-[5%] text-2xl sm:text-3xl font-bold text-white py-[5%] 2xl:w-[800px] lg:w-[600px] w-[400px] text-justify font-loose">
                        Transparency, integrity, and circular practices at every
                        level
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default Slider4;

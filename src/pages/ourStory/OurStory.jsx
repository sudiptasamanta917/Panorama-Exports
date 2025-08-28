import React, { useEffect, useRef, useState } from "react";

// Hero images
import img1 from "../../assets/OurStory/02.jpg";
import img2 from "../../assets/OurStory/03.jpg";
import img3 from "../../assets/OurStory/04.jpg";
import img4 from "../../assets/OurStory/05.jpg";

import LegacyImage from "../../assets/Legacy/01.jpg";

import FounderImage from "../../assets/Founders/founder.png";

const heroImages = [img1, img2, img3, img4];

export default function OurStory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % heroImages.length);
            }, 4000); // 4 seconds per slide
            return () => clearInterval(interval);
        }, []);

    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative w-full sm:h-[80vh] h-[380px] bg-black overflow-hidden">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                            index === currentIndex
                                ? "opacity-100 blur-0 scale-100"
                                : "opacity-0 blur-md scale-105"
                        }`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                ))}
            </section>

            {/* Breadcrumbs */}
            <div className="bg-[#fdf2df] text-lg py-5">
                <div className="w-[90%] mx-auto px-6 md:px-20">
                    <span className="text-gray-800">Home</span> &gt;{" "}
                    <span className="text-gray-800">Our Story</span> &gt;{" "}
                    <span className="font-semibold text-[#01276a]">Legacy</span>
                </div>
            </div>

            {/* Legacy Sections */}
            <section className="bg-white">
                <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Legacy
                </h2>
                <div
                    className={`sm:h-[80vh] h-[380px] flex flex-col justify-end items-start py-28`}
                    style={{
                        backgroundImage: `url(${LegacyImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="text-white w-[90%] mx-auto px-6 md:px-20 font-semibold">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5">
                            Legacy
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl underline underline-offset-8">
                            <span className="text-xl sm:text-2xl md:text-3xl font-normal">
                                Where
                            </span>{" "}
                            Heritage{" "}
                            <span className="text-xl sm:text-2xl md:text-3xl font-normal">
                                Meets
                            </span>{" "}
                            Modern Luxury
                        </h2>
                    </div>
                </div>
            </section>

            {/* Founder's Message Sections */}
            <section className="bg-white">
                <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Founder's Message
                </h2>
                <div className="bg-[#b9a686] h-[70vh] relative pt-24">
                    <div className="text-white h-[80vh] absolute bottom-0 flex items-center justify-center">
                        <img
                            src={FounderImage}
                            alt="Founder"
                            className="h-full object-contain"
                        />
                    </div>

                    {/* Quote Section */}
                    <div className="flex flex-col justify-center items-end w-full h-[35vh] bg-[#96785e] text-white 2xl:px-40 xl:px-28 px-10 py-10">
                        <p className="text-md md:text-lg lg:text-xl xl:text-2xl leading-relaxed  mb-6 w-[40%]">
                            “Fashion is a dialogue between tradition and
                            tomorrow. Let’s keep shaping that conversation—one
                            inspired creation at a time.”
                        </p>
                        <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold w-[500px] mb-16">
                            —Shri Shyam Sahni & Smt. Veena Sahni
                        </h2>
                    </div>
                </div>
            </section>

            

            {/* MileStones Sections */}
            {/* <section className="bg-white">
                <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Milestones
                </h2>
            </section> */}
        </div>
    );
}

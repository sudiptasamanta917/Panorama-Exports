import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import bgImage from "../../assets/Innovation/Header/1.jpg";
import FlipCard from "../../components/flipCard/FlipCard";

import CadImg1 from "../../assets/Innovation/CadDraping/01.jpg";
import CadImg2 from "../../assets/Innovation/CadDraping/02.jpg";
import CadImg3 from "../../assets/Innovation/CadDraping/03.jpg";

const CadImages = [
    {
        id: 1,
        image: CadImg1,
        title: "CadDraping",
    },
    {
        id: 2,
        image: CadImg2,
        title: "CadDraping",
    },
    {
        id: 3,
        image: CadImg3,
        title: "CadDraping",
    },
];


function InnovationThatLeads() {
    const location = useLocation();
      const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.2,
      });

    return (
        <>
            <div
                ref={ref}
                className="w-full h-[100vh] bg-cover bg-center flex flex-col items-start justify-end"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <motion.div
                    className="text-white bg-gradient-to-t from-blue-950/90 via-blue-950/80 via-blue-900/60 to-transparent px-[10%] pb-[4%] pt-[10%] w-full"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Innovation that Leads
                    </h1>
                    <div className="text-lg sm:text-xl md:text-xl xl:text-2xl mt-4 w-[60%] text-justify font-relaxed">
                        At Panorama, innovation is how we stay ahead-and stay
                        true.
                    </div>
                </motion.div>
            </div>
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    CAD & 3D Draping
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                        Visualizing designs with precision before production.
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
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Textile Ingenuity
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                        From loom to luxury, we unite cutting-edge fabric
                        innovation with eco-conscious materials and refined
                        finishing—infusing every creation with the artistry and
                        heritage of Made in India
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
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Lean Manufacturing
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                        Systems for faster, cleaner, better production. It’s an
                        art blending innovation with craftsmanship to reduce
                        waste, enhance efficiency, and deliver quality that
                        speaks for itself.
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
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    UBT Sewing Tech
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                        Seam integrity meets advanced performance. We engineer
                        resilience into every stitch—using ultra-bond thread
                        technology to create seams that endure, perform, and
                        excel in high-intensity activewear and outerwear.
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
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Digital Sampling
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                        Speed, accuracy, and minimal waste—designing smarter
                        efficient iterations prior to large-scale production.
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
        </>
    );
}

export default InnovationThatLeads;

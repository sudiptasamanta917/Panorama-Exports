import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";


import FlipCard from "../../components/flipCard/FlipCard";

import CadImg1 from "../../assets/Innovation/CAD&3DDraping/1.jpg";
import CadImg2 from "../../assets/Innovation/CAD&3DDraping/2.jpg";
import CadImg3 from "../../assets/Innovation/CAD&3DDraping/3.jpg";

import TextileImg1 from "../../assets/Innovation/TextileIngenuity/1.jpg";
import TextileImg2 from "../../assets/Innovation/TextileIngenuity/2.jpg";
import TextileImg3 from "../../assets/Innovation/TextileIngenuity/3.jpg";

import LeanImg1 from "../../assets/Innovation/LeanManufacturing/1.jpg";
import LeanImg2 from "../../assets/Innovation/LeanManufacturing/2.jpg";
import LeanImg3 from "../../assets/Innovation/LeanManufacturing/3.jpg";

import UbtImg1 from "../../assets/Innovation/UBTSewingTech/1.jpg";
import UbtImg2 from "../../assets/Innovation/UBTSewingTech/2.jpg";
import UbtImg3 from "../../assets/Innovation/UBTSewingTech/3.jpg";

import DigitalImg1 from "../../assets/Innovation/DigitalSampling/1.jpg";
import DigitalImg2 from "../../assets/Innovation/DigitalSampling/2.jpg";
import DigitalImg3 from "../../assets/Innovation/DigitalSampling/3.jpg";

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

const TextileImages = [
    {
        id: 1,
        image: TextileImg1,
        title: "CadDraping",
    },
    {
        id: 2,
        image: TextileImg2,
        title: "CadDraping",
    },
    {
        id: 3,
        image: TextileImg3,
        title: "CadDraping",
    },
];

const LeanImages = [
    {
        id: 1,
        image: LeanImg1,
        title: "LeanDraping",
    },
    {
        id: 2,
        image: LeanImg2,
        title: "LeanDraping",
    },
    {
        id: 3,
        image: LeanImg3,
        title: "LeanDraping",
    },
];

const UbtImages = [
    {
        id: 1,
        image: UbtImg1,
        title: "UbtDraping",
    },
    {
        id: 2,
        image: UbtImg2,
        title: "UbtDraping",
    },
    {
        id: 3,
        image: UbtImg3,
        title: "UbtDraping",
    },
];

const DigitalImages = [
    {
        id: 1,
        image: DigitalImg1,
        title: "DigitalDraping",
    },
    {
        id: 2,
        image: DigitalImg2,
        title: "DigitalDraping",
    },
    {
        id: 3,
        image: DigitalImg3,
        title: "DigitalDraping",
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
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-2xl sm:text-3xl md:text-4xl text-[#01276a] font-semibold">
                    CAD & 3D Draping
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
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
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-2xl sm:text-3xl md:text-4xl text-[#01276a] font-semibold">
                    Textile Ingenuity
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
                        From loom to luxury, we unite cutting-edge fabric
                        innovation with eco-conscious materials and refined
                        finishing—infusing every creation with the artistry and
                        heritage of Made in India
                    </div>
                </div>
                <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                    {TextileImages.map((img, index) => (
                        <div key={index} className="">
                            <FlipCard imageUrl={img.image} id={img.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-2xl sm:text-3xl md:text-4xl text-[#01276a] font-semibold">
                    Lean Manufacturing
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
                        Systems for faster, cleaner, better production. It’s an
                        art blending innovation with craftsmanship to reduce
                        waste, enhance efficiency, and deliver quality that
                        speaks for itself.
                    </div>
                </div>
                <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                    {LeanImages.map((img, index) => (
                        <div key={index} className="">
                            <FlipCard imageUrl={img.image} id={img.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-2xl sm:text-3xl md:text-4xl text-[#01276a] font-semibold">
                    UBT Sewing Tech
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
                        Seam integrity meets advanced performance. We engineer
                        resilience into every stitch—using ultra-bond thread
                        technology to create seams that endure, perform, and
                        excel in high-intensity activewear and outerwear.
                    </div>
                </div>
                <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                    {UbtImages.map((img, index) => (
                        <div key={index} className="">
                            <FlipCard imageUrl={img.image} id={img.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-2xl sm:text-3xl md:text-4xl text-[#01276a] font-semibold">
                    Digital Sampling
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
                        Speed, accuracy, and minimal waste—designing smarter
                        efficient iterations prior to large-scale production.
                    </div>
                </div>
                <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                    {DigitalImages.map((img, index) => (
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

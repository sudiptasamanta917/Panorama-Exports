import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdLocationPin } from "react-icons/md";
import globalMap from "../assets/GlobalFootprint/MAP PNG.webp";


//marker positions in percentages (relative to map div)
const markers = [
    { country: "USA", brands: ["Lucky Brand"], top: "27%", left: "23%" },
    {
        country: "COLOMBIA",
        brands: ["Falabella"],
        top: "50%",
        left: "22%",
    },
    {
        country: "PERU",
        brands: [
            "Falabella"
        ],
        top: "62%",
        left: "24%",
    },
    { country: "CHILE", brands: ["Falabella"], top: "73%", left: "25%" },
    {
        country: "UK",
        brands: ["Farm Rio", "Tesco", "George", "Boden", "TJ Maxx", "Matala", "Boots", "Monsoon", "Redid", "Baby Moti"],
        top: "19%",
        left: "43%",
    },
    { country: "SPAIN", brands: ["Mango"], top: "27%", left: "42%" },
    { country: "BELGIUM", brands: ["Farm Rio"], top: "22%", left: "45%" },
    { country: "GERMANY", brands: ["Cecil", "Street One"], top: "20%", left: "47%" },
    { country: "GREECE", brands: ["Mothercare"], top: "27%", left: "50%" },
    { country: "QATAR", brands: ["Landmark Group"], top: "39%", left: "56%" },
    { country: "AUSTRALIA", brands: ["Taking Shape"], top: "70%", left: "83%" },
    {
        country: "NEW ZEALAND",
        brands: ["Taking Shape"],
        top: "81%",
        left: "88%",
    },
    { country: "Singapore", brands: ["Mothercare"], top: "57%", left: "74%" },
    { country: "Malaysia", brands: ["Mothercare"], top: "50%", left: "71%" },
    { country: "CHINA", brands: ["Mothercare"], top: "31%", left: "74%" },
    { country: "UAE", brands: ["Mothercare", "Landmark Group"], top: "41%", left: "58%" },
    { country: "INDONESIA", brands: ["Mothercare"], top: "54%", left: "81%" },
    {
        country: "KOREA",
        brands: ["Top Ten", "Laughing Child"],
        top: "39%",
        left: "77%",
    },
    {
        country: "SOUTH AFRICA",
        brands: ["Trueworths"],
        top: "70%",
        left: "52%",
    },
];

export default function GlobalMap() {

    // map locations animation logic...............
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });


    return (
        <div className="bg-gradient-to-r from-[#4a3e2e]/90 via-[#7e6e55]/90 to-[#bda684]/90 px-2 sm:px-6 md:px-10 2xl:px-20 py-10 w-full sm:mt-2 text-white lg:flex items-center justify-between gap-6 relative">
            <div className="xl:w-[40%] lg:w-[30%] w-full 2xl:px-5 px-10 lg:px-0 flex flex-col justify-center py-10">
                <h1 className="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] xl:gap-7 gap-5 flex flex-wrap justify-start items-center">
                    <p className="font-semibold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                        Global
                    </p>
                    Footprint
                </h1>
                <div className="md:mt-10 mt-5 flex justify-start items-center gap-8 ">
                    <p className="2xl:text-xl lg:text-lg md:text-md text-[12px] text-white">
                        Panorama’s expanding global reach underscores its
                        emergence as a prominent leader in the international
                        apparel industry
                    </p>
                </div>
            </div>

            <div
                ref={ref}
                className={`xl:w-[60%] lg:w-[70%] z-10 flex flex-col items-center justify-center w-full`}
            >
                <div className="relative w-full">
                    {/* Background Map */}
                    <img
                        src={globalMap}
                        alt="World Map"
                        className="opacity-60 image-contain image-no-repeat w-full"
                    />

                    {/* Location Markers */}
                    <div className="absolute inset-0">
                        {markers.map((marker, index) => (
                            <motion.div
                                key={marker.country || index}
                                className="absolute text-white group"
                                style={{ top: marker.top, left: marker.left }}
                                initial={{ y: 450, opacity: 0 }}
                                animate={
                                    inView
                                        ? { y: [450, -25, 0], opacity: 1 }
                                        : {}
                                }
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="relative">
                                    <MdLocationPin className="text-white 2xl:text-[28px] xl:text-[25px] lg:text-[20px] md:text-[18px] sm:text-[15px] text-[12px]" />
                                    <div className="absolute z-10 bottom-6 hidden group-hover:block bg-white text-sm text-red-950 px-2 py-1 rounded-lg shadow-md whitespace-nowrap">
                                        <strong>{marker.country} : </strong>{" "}
                                        {marker.brands.join(", ")}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

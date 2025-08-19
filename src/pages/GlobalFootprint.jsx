import React from "react";
import worldMap from "../assets/GlobalFootprint/world-map-line.png"; // your stylized line-drawn map
import { FaMapMarkerAlt } from "react-icons/fa";

export default function GlobalFootprint() {
    return (
        <div className="relative w-full bg-white py-10 px-6 md:px-20 mt-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-green-900 text-center">
                Global Footprint
            </h2>
            <p className="text-center text-gray-700 mt-2 text-lg">
                Our international presence
            </p>

            <div className="relative mt-10 w-full max-w-6xl mx-auto">
                <img
                    src={worldMap}
                    alt="World Map"
                    className="w-full object-contain opacity-90"
                />

                {/* Sample marker for USA */}
                <div className="absolute top-[40%] left-[18%] flex flex-col items-center text-red-600">
                    {/* <FaMapMarkerAlt className="text-xl" />
                    <span className="text-xs mt-1">USA</span> */}
                </div>

                {/* India */}
                <div className="absolute top-[55%] left-[55%] flex flex-col items-center text-red-600">
                    {/* <FaMapMarkerAlt className="text-xl" />
                    <span className="text-xs mt-1">India</span> */}
                </div>

                {/* Germany */}
                <div className="absolute top-[35%] left-[48%] flex flex-col items-center text-red-600">
                    {/* <FaMapMarkerAlt className="text-xl" />
                    <span className="text-xs mt-1">Germany</span> */}
                </div>

                {/* Add more markers as needed */}
            </div>
        </div>
    );
}

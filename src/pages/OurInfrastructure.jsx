import React from "react";
import indiaMapImage from "../assets/map-india.png"; 

import plant1 from "../assets/OurInfrastructure/unit_1.jpg";
import plant2 from "../assets/OurInfrastructure/unit_2.jpg";
import plant3 from "../assets/OurInfrastructure/unit_3.jpg";
import warehouse from "../assets/OurInfrastructure/unit_4.jpg";

export default function OurInfrastructure() {
    return (
        <section className="py-16 bg-white mt-20 text-gray-800">
            <div className="w-[90%] mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4 text-green-900 text-center">
                    Our Infrastructure Footprint
                </h2>
                <p className="text-lg mb-10 w-[60%] text-center mx-auto">
                    Our cutting-edge manufacturing facilities and advanced
                    warehouse systems span across key regions of India. Each
                    location is engineered for efficiency, sustainability, and
                    scale.
                </p>

                {/* India Map with markers */}
                <div className="relative w-full h-96 mb-16">
                    <img
                        src={indiaMapImage}
                        alt="Map of India"
                        className="w-full h-full object-contain"
                    />
                    {/* pin positions are approximate, adjust with top/left */}
                    {/* <div
                        className="absolute top-[30%] left-[40%] w-4 h-4 bg-red-600 rounded-full shadow-lg"
                        title="Unit 01"
                    ></div>
                    <div
                        className="absolute top-[45%] left-[50%] w-4 h-4 bg-red-600 rounded-full shadow-lg"
                        title="Unit 02"
                    ></div>
                    <div
                        className="absolute top-[55%] left-[60%] w-4 h-4 bg-red-600 rounded-full shadow-lg"
                        title="Unit 03"
                    ></div>
                    <div
                        className="absolute top-[35%] left-[70%] w-4 h-4 bg-blue-600 rounded-full shadow-lg"
                        title="Unit 04 (Panorama Warehouse)"
                    ></div> */}
                </div>

                {/* Grid of unit images */}
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 mt-5">
                    <div
                        className="h-64 w-full rounded-sm shadow-lg bg-cover bg-center text-lg text-white flex flex-col items-center font-bold justify-end pb-5 px-10"
                        style={{ backgroundImage: `url(${plant1})` }}
                    >
                        <h1>Unit 01</h1>
                    </div>
                    <div
                        className="h-64 w-full rounded-sm shadow-lg bg-cover bg-center text-lg text-white flex flex-col items-center font-bold justify-end pb-5 px-10"
                        style={{ backgroundImage: `url(${plant2})` }}
                    >
                        <h1>Unit 02</h1>
                    </div>
                    <div
                        className="h-64 w-full rounded-sm shadow-lg bg-cover bg-center text-lg text-white flex flex-col items-center font-bold justify-end pb-5 px-10"
                        style={{ backgroundImage: `url(${plant3})` }}
                    >
                        <h1>Unit 03</h1>
                    </div>
                    <div
                        className="h-64 w-full rounded-sm shadow-lg bg-cover bg-center text-lg text-white flex flex-col items-center font-bold justify-end pb-5 px-10"
                        style={{ backgroundImage: `url(${warehouse})` }}
                    >
                        <h1>Unit 04</h1>
                        <p className="text-sm font-semibold">Panorama warehouse</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

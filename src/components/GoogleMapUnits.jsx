import { useState, useRef, useEffect } from "react";
import { IoEnterOutline } from "react-icons/io5";
import LiveMap from "../components/LiveMap";

import plant1 from "../assets/OurInfrastructure/unit_1.jpg";
import plant2 from "../assets/OurInfrastructure/unit_2.jpg";
import plant3 from "../assets/OurInfrastructure/unit_3.jpg";
import plant4 from "../assets/OurInfrastructure/unit_4.jpg";
import corporateOffice from "../assets/OurInfrastructure/unit_1.jpg";
import plant5 from "../assets/OurInfrastructure/unit_1.jpg";

const GoogleMapUnits = () => {

    const sectionRef = useRef(null);

    const units = [
        {
            id: 1,
            lat: 28.468845,
            lng: 77.31234,
            title: "Unit 01",
            subtitle: "Faridabad",
            address:
                "Plot No 08, DLF Industrial Area Phase – I, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant1,
        },
        {
            id: 2,
            lat: 28.539579,
            lng: 77.289271,
            title: "Unit 02",
            subtitle: "Faridabad",
            address:
                "Plot No. 11 DLF Industrial Area– Phase I, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant2,
        },
        {
            id: 3,
            lat: 28.468817,
            lng: 77.304441,
            title: "Unit 03",
            subtitle: "Faridabad",
            address: "Plot No 67, Sector 27C, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant3,
        },
        {
            id: 4,
            lat: 28.6139,
            lng: 77.209,
            title: "Unit 04",
            subtitle: "Panorama Warehouse",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant4,
        },
        {
            id: 5,
            lat: 28.5139,
            lng: 77.22,
            title: "Unit 05",
            subtitle: "Panorama Warehouse",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: corporateOffice,
        },
        {
            id: 5,
            lat: 28.5139,
            lng: 77.22,
            title: "Unit 05",
            subtitle: "Panorama Warehouse",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant5,
        },
    ];

    return (
        <div className="bg-white w-[90%] mx-auto px-6 md:px-20 py-10 lg:flex xl:gap-4 gap-2">
            <div
                ref={sectionRef}
                className="xl:w-[60%] lg:w-[50%] w-full grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 xl:gap-4 gap-2"
            >
                {units.map((unit, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.15), 0 -4px 12px rgba(0,0,0,0.1)",
                            }}
                            className="flex flex-col items-center justify-space-between xl:gap-4 gap-2 xl:p-4 p-4 text-center bg-[#b5ab7c] xl:rounded-xl rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-full xl:h-40 h-36 rounded-lg">
                                <img
                                    src={unit.image}
                                    alt={unit.title}
                                    className="w-full xl:h-40 h-36 object-cover rounded-lg border-2 border-[#f8ce84]"
                                />
                            </div>
                            <div className=" border border-transparent text-white">
                                <h2 className="font-semibold">{unit.title}</h2>
                                <h2 className="text-sm">{unit.address}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="xl:w-[40%] lg:w-[50%] w-full overflow-hidden rounded-lg lg:mt-0 mt-10">
                <LiveMap locations={units} center={[28.5, 77.3]} zoom={11} />
            </div>
        </div>
    );
};

export default GoogleMapUnits;

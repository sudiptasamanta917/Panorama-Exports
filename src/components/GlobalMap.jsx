import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdLocationPin } from "react-icons/md";
import globalMap from "../assets/GlobalFootprint/map.png";
import brand1 from "../assets/GlobalFootprint/brands/25487.webp";
import brand2 from "../assets/GlobalFootprint/brands/25487.webp";
import brand3 from "../assets/GlobalFootprint/brands/25487.webp";
import brand4 from "../assets/GlobalFootprint/brands/25487.webp";
import brand5 from "../assets/GlobalFootprint/brands/25487.webp";
import brand6 from "../assets/GlobalFootprint/brands/25487.webp";
import brand7 from "../assets/GlobalFootprint/brands/25487.webp";
import brand8 from "../assets/GlobalFootprint/brands/25487.webp";
import brand9 from "../assets/GlobalFootprint/brands/25487.webp";
import brand10 from "../assets/GlobalFootprint/brands/25487.webp";
import brand11 from "../assets/GlobalFootprint/brands/25487.webp";
import brand12 from "../assets/GlobalFootprint/brands/25487.webp";
import brand13 from "../assets/GlobalFootprint/brands/25487.webp";
import brand14 from "../assets/GlobalFootprint/brands/25487.webp";
import brand15 from "../assets/GlobalFootprint/brands/25487.webp";
import brand16 from "../assets/GlobalFootprint/brands/25487.webp";
import brand17 from "../assets/GlobalFootprint/brands/25487.webp";
import brand18 from "../assets/GlobalFootprint/brands/25487.webp";
import brand19 from "../assets/GlobalFootprint/brands/25487.webp";
import brand20 from "../assets/GlobalFootprint/brands/25487.webp";


//marker positions in percentages (relative to map div)
const markers = [
    { country: "Belgium", brands: ["Farm Rio"], top: "30%", left: "45%" },
    {
        country: "US",
        brands: ["Farm Rio", "Lucky Brand", "Boden", "DKNY", "Baby Moti"],
        top: "30%",
        left: "20%",
    },
    {
        country: "UK",
        brands: [
            "Farm Rio",
            "Tesco",
            "George",
            "Boden",
            "TJ Maxx",
            "Matala",
            "Boots",
            "Monsoon",
            "Redid",
            "Baby Moti",
        ],
        top: "28%",
        left: "70%",
    },
    { country: "Slovakia", brands: ["Tesco"], top: "35%", left: "49%" },
    {
        country: "UAE",
        brands: ["Landmark Group", "Mothercare"],
        top: "40%",
        left: "15%",
    },
    { country: "KSA", brands: ["Landmark Group"], top: "40%", left: "58%" },
    { country: "Qatar", brands: ["Landmark Group"], top: "43%", left: "61%" },
    { country: "Colombia", brands: ["Falabella"], top: "50%", left: "25%" },
    { country: "Chile", brands: ["Falabella"], top: "65%", left: "25%" },
    { country: "Peru", brands: ["Falabella"], top: "60%", left: "28%" },
    { country: "Australia", brands: ["Taking Shape"], top: "75%", left: "80%" },
    {
        country: "New Zealand",
        brands: ["Taking Shape"],
        top: "85%",
        left: "92%",
    },
    { country: "Singapore", brands: ["Mothercare"], top: "60%", left: "75%" },
    { country: "Malaysia", brands: ["Mothercare"], top: "50%", left: "70%" },
    { country: "China", brands: ["Mothercare"], top: "40%", left: "75%" },
    { country: "Greece", brands: ["Mothercare"], top: "45%", left: "55%" },
    { country: "Indonesia", brands: ["Mothercare"], top: "65%", left: "77%" },
    { country: "Spain", brands: ["Mango"], top: "35%", left: "42%" },
    {
        country: "Korea",
        brands: ["Top Ten", "Laughing Child"],
        top: "35%",
        left: "80%",
    },
    { country: "France", brands: ["Etam"], top: "30%", left: "30%" },
    {
        country: "Germany",
        brands: ["Street One", "Cecil"],
        top: "35%",
        left: "25%",
    },
    {
        country: "South Africa",
        brands: ["Trueworths"],
        top: "75%",
        left: "55%",
    },
];

const brands = [
    brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1,
];

export default function GlobalMap() {
    const [countries, setCountries] = useState(0);
    const [offices, setOffices] = useState(0);
    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    // text animations logic.................
    const animateCounts = () => {
        setCountries(0);
        setOffices(0);

        let cInterval = setInterval(() => {
            setCountries((prev) => {
                if (prev < 35) return prev + 1;
                clearInterval(cInterval);
                return prev;
            });
        }, 80); // slower speed (100ms per increment)

        let oInterval = setInterval(() => {
            setOffices((prev) => {
                if (prev < 120) return prev + 1;
                clearInterval(oInterval);
                return prev;
            });
        }, 20); // slower speed for offices
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounts(); // replay animation every time it appears
                    }
                });
            },
            { threshold: 0.5 } // triggers when 50% visible
        );

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current && sectionRef.current) {
                observerRef.current.unobserve(sectionRef.current);
            }
        };
    }, []);

    // map locations animation logic...............
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


    return (
        <div
            ref={sectionRef}
            className="bg-gradient-to-r from-green-500 to-blue-900 px-auto sm:px-6 md:px-20 xl:h-[60vh] md:h-[50vh] h-[70vh] w-full mt-2 text-white sm:flex items-center justify-between gap-6 relative"
        >
            <div className="xl:h-[50vh] h-[40vh] xl:w-[40%] w-[50%]">
                <h1 className="mt-5 2xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] text-center">
                    GLOBAL FOOTPRINT
                </h1>
                <div className="mt-20 flex justify-center items-center gap-8">
                    {/* <div className="text-xl flex items-center gap-2 text-gray-300">
                        <p className="text-4xl font-semibold text-red-950">
                            {countries}+
                        </p>{" "}
                        Countries
                    </div>
                    <div className="text-xl flex items-center gap-2 text-gray-300">
                        <p className="text-4xl font-semibold text-red-950">
                            {offices}+
                        </p>{" "}
                        Offices
                    </div> */}
                </div>
            </div>

            <div
                ref={ref}
                className={`xl:w-[60%] w-[50%] xl:h-[50vh] h-[40vh] z-10 flex flex-col items-center justify-center w-full h-full`}
            >
                <div className="relative w-full h-full">
                    {/* Background Map */}
                    <img
                        src={globalMap}
                        alt="World Map"
                        className="opacity-60 image-contain image-no-repeat xl:h-[50vh] h-[40vh] w-full"
                    />

                    {/* Location Markers */}
                    {markers.map((marker, index) => (
                        <motion.div
                            key={marker.country || index}
                            className="absolute text-white group"
                            style={{ top: marker.top, left: marker.left }}
                            initial={{ y: 100, opacity: 0 }}
                            animate={
                                inView ? { y: [100, -25, 0], opacity: 1 } : {}
                            }
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            <div className="relative">
                                <MdLocationPin
                                    size={24}
                                    className="text-white"
                                />
                                <div className="absolute z-10 bottom-6 hidden group-hover:block bg-white text-sm text-red-950 px-2 py-1 rounded-lg shadow-md whitespace-nowrap">
                                    <strong>{marker.country}:</strong>{" "}
                                    {marker.brands.join(", ")}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

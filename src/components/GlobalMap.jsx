import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdLocationPin } from "react-icons/md";
import globalMap from "../assets/GlobalFootprint/MAP PNG.png";


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
            className="bg-gradient-to-r from-[#4a3e2e]/90 via-[#7e6e55]/90 to-[#bda684]/90 px-auto sm:px-6 md:px-20 xl:h-[60vh] lg:h-[50vh] h-[75vh] w-full mt-2 text-white lg:flex items-center justify-between gap-6 relative"
        >
            <div className="xl:h-[50vh] lg:h-[40vh] h-[30vh] xl:w-[40%] lg:w-[30%] w-full 2xl:px-5 sm:px-10 lg:px-0 px-5 flex flex-col justify-center">
                <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] xl:gap-7 gap-5 flex flex-wrap justify-center items-center">
                    <p className="font-semibold 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                        Global
                    </p>
                    Footprint
                </h1>
                <div className="mt-10 flex justify-center items-center gap-8">
                    <p className="2xl:text-3xl lg:text-xl md:text-lg text-[12px] text-white">
                        Panorama's presence extends to over numerous countries
                        in four regions, establishing it as a
                        significant global leader
                    </p>
                </div>
            </div>

            <div
                ref={ref}
                className={`xl:w-[60%] lg:w-[70%] xl:h-[50vh] h-[40vh] z-10 flex flex-col items-center justify-center w-full h-full`}
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

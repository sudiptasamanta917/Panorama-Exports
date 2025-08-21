import { useState, useRef, useEffect } from "react";
import { IoEnterOutline } from "react-icons/io5";
import LiveMap from "../components/LiveMap";

import plant1 from "../assets/OurInfrastructure/unit_1.jpg";
import plant2 from "../assets/OurInfrastructure/unit_2.jpg";
import plant3 from "../assets/OurInfrastructure/unit_3.jpg";
import warehouse from "../assets/OurInfrastructure/unit_4.jpg";

const stats = [
    { number: "7000+", label: "EMPLOYEES" },
    { number: "50%", label: "WOMEN" },
    { number: "18 MILLION", label: "ANNUALLY GARMENTS" },
    { number: "5", label: "UNITS" },
];

const GoogleMapUnits = () => {
    const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    // Animate number counts
    const animateCounts = () => {
        setAnimatedNumbers(stats.map(() => 0)); // reset before animating

        stats.forEach((stat, index) => {
            // Extract numeric value
            const match = stat.number.match(/[\d,\.]+/);
            const targetValue = match
                ? parseFloat(match[0].replace(/,/g, ""))
                : 0;

            const increment = Math.max(1, Math.ceil(targetValue / 80)); // smooth speed

            const interval = setInterval(() => {
                setAnimatedNumbers((prev) => {
                    const newValues = [...prev];
                    if (newValues[index] < targetValue) {
                        newValues[index] = Math.min(
                            newValues[index] + increment,
                            targetValue
                        );
                    } else {
                        clearInterval(interval);
                    }
                    return newValues;
                });
            }, 40); // ms per frame
        });
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounts();
                    }
                });
            },
            { threshold: 0.5 }
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
            image: warehouse,
        },
        {
            id: 5,
            lat: 28.5139,
            lng: 77.22,
            title: "Unit 05",
            subtitle: "Panorama Warehouse",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: warehouse,
        },
    ];

    return (
        <div className="bg-white w-[90%] mx-auto px-6 md:px-20 py-10 lg:flex gap-4">
            <div
                ref={sectionRef}
                className="xl:w-[60%] lg:w-[50%] w-full grid grid-cols-2 xl:gap-6 gap-4"
            >
                {stats.map((stat, index) => {
                    const match = stat.number.match(/[\d,\.]+/);
                    const suffix = stat.number.replace(/[\d,\.]+/, "");
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl hover:shadow-xl transition-shadow duration-300"
                            style={{
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.15), 0 -4px 12px rgba(0,0,0,0.1)",
                            }}
                        >
                            <span className="2xl:text-5xl xl:text-4xl text-3xl font-bold text-blue-800">
                                {animatedNumbers[index]}
                                {suffix}
                            </span>
                            <span className="2xl:text-lg xl:text-md text-sm font-semibold tracking-wide text-gray-500 mt-1">
                                {stat.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="xl:w-[40%] lg:w-[50%] w-full overflow-hidden rounded-lg lg:mt-0 mt-10 border">
                <LiveMap locations={units} center={[28.5, 77.3]} zoom={11} />
            </div>
        </div>
    );
};

export default GoogleMapUnits;

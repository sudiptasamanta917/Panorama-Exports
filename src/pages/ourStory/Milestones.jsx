// Milestones.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/Milestones/1973.png";
import img2 from "../../assets/Milestones/1980.webp";
import img3 from "../../assets/Milestones/1990.webp";
import img4 from "../../assets/Milestones/2006.webp";
import img5 from "../../assets/Milestones/2023.webp";
import img6 from "../../assets/Milestones/2023_2.webp";
import img7 from "../../assets/Milestones/2024.webp";
import img8 from "../../assets/Milestones/2025.webp";
import Way from "../../assets/Milestones/S_way.png";

const cards = [
    {
        pos: "left-[86%] bottom-[88%]",
        title: "1973",
        subtitle: "Founded with a vision",
        desc: "Founded with a vision to blend craftsmanship with global appeal.",
        Img: img1,
    },
    {
        pos: "left-[59.3%] bottom-[76%]",
        title: "1980",
        subtitle: "Expanded internationally",
        desc: "Expanded internationally; deepened global collaborations.",
        Img: img2,
    },
    {
        pos: "left-[73%] bottom-[39%]",
        title: "1990",
        subtitle: "Embraced modern technology",
        desc: "Embraced modern technology; laid the foundation for future-ready manufacturing.",
        Img: img3,
    },
    {
        pos: "left-[45%] bottom-[22%]",
        title: "2006",
        subtitle: "Unit-1 (Plot-8)",
        desc: "Where it all began! Our very first unit laid the foundation of our fashion-forward journey.",
        Img: img4,
    },
    {
        pos: "left-[29%] bottom-[16%]",
        title: "2023",
        month: "January",
        subtitle: "Unit-2 (Plot-67)",
        desc: "A new thread in our fabric! This unit marked our post-pandemic expansion into modern production.",
        Img: img5,
        submenu: {
            month: "October",
            title: "",
            subtitle: "Warehouse",
            desc: "Style needs space! Our logistics hub came to life to handle growing global demands.",
            Img: img6,
        },
    },
    {
        pos: "left-[15%] bottom-[12%]",
        title: "2024",
        month: "January",
        subtitle: "Unit-3 (Plot-11)",
        desc: "A fresh stitch in time! This unit joined the fashion brigade with cutting-edge capabilities.",
        Img: img7,
    },
    {
        pos: "left-[2%] bottom-[9.2%]",
        title: "2025",
        month: "July",
        subtitle: "Unit-4 Noida Factory (D-144) & HO (Faridabad Head Office)",
        desc: "Double debut! A monumental month—our latest production unit and brand-new headquarters open their doors.",
        Img: img8,
    },
];

export default function Milestones() {
    const STEP_DELAY_MS = 520; // time between each card starting animation
    const ANIM_DURATION = 0.9; // framer-motion duration (seconds)

    const { ref, inView } = useInView({ threshold: 0.28 });
    const [visibleIndex, setVisibleIndex] = useState(0);
    const timerRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(null); // store clicked card

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        if (inView) {
            // restart animation whenever inView is true
            setVisibleIndex(0); // reset before starting
            timerRef.current = setInterval(() => {
                setVisibleIndex((prev) => {
                    if (prev >= cards.length) {
                        clearInterval(timerRef.current);
                        timerRef.current = null;
                        return prev;
                    }
                    return prev + 1;
                });
            }, STEP_DELAY_MS);
        } else {
            // reset completely when leaving view
            setVisibleIndex(0); // ensures animation restarts next time
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [inView]);

    useEffect(() => {
        if (selectedCard) {
            document.body.style.overflow = "hidden"; // disable background scroll
        } else {
            document.body.style.overflow = "auto"; // enable again
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [selectedCard]);

    return (
        <div
            ref={ref}
            className=" md:w-[90%] w-full mx-auto h-[80vh] mb-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden flex items-end"
        >
            <div className="relative w-full h-[40%]">
                {/* Curved Path Image */}
                <img src={Way} alt="way path" className="w-full h-full" />

                {/* Cards */}
                {cards.map((c, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${c.pos} 2xl:w-[170px] xl:w-[140px] lg:w-[110px] md:w-[100px] sm:w-[80px] w-[40px] flex flex-col items-start justify-center group`}
                        initial={{ x: "-100vw", opacity: 0 }}
                        animate={
                            i < visibleIndex
                                ? { x: 0, opacity: 1 }
                                : { x: "-100vw", opacity: 0 }
                        }
                        transition={{
                            duration: ANIM_DURATION,
                            ease: "easeOut",
                        }}
                    >
                        <div className="2xl:h-[350px] lg:h-[300px] h-[250px]  w-full border-l-2 border-blue-900">
                            {/* Clickable div */}
                            <div
                                className="shadow-md border-2 border-l-0 border-blue-900 rounded-r-md w-full overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedCard(c)} // set clicked card data
                            >
                                <div className="md:text-lg text-sm font-semibold h-16 bg-blue-900 text-white rounded-r-sm flex items-center justify-center">
                                    {c.title}
                                </div>
                                <div className="text-md px-2 font-semibold mb-2 hidden group-hover:block max-h-24 text-center overflow-hidden">
                                    {c.subtitle}
                                </div>
                            </div>

                            {/* Popup Modal */}
                            {selectedCard && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black/15 z-50">
                                    <div className="bg-white rounded-lg shadow-lg 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[80%] w-[90%] h-[80vh] px-6 py-10 overflow-y-auto thin-scrollbar relative animate-fadeIn">
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-0 right-0 text-gray-600 hover:text-black text-xl font-bold border px-1"
                                            onClick={() =>
                                                setSelectedCard(null)
                                            }
                                        >
                                            ✕
                                        </button>

                                        {/* Dynamic content from clicked card */}
                                        <div className="text-lg font-semibold h-10 bg-blue-900 text-white rounded-md flex items-center justify-center mb-4">
                                            {selectedCard.title}
                                        </div>
                                        {selectedCard.month && (
                                            <div className="text-md font-semibold h-8 bg-green-700 text-white rounded-md flex items-center justify-center mb-4">
                                                {selectedCard.month}
                                            </div>
                                        )}
                                        {selectedCard.Img && (
                                            <div className="w-full flex items-center justify-center mb-4">
                                                <img
                                                    src={selectedCard.Img}
                                                    alt={selectedCard.subtitle}
                                                    className="w-full object-contain"
                                                />
                                            </div>
                                        )}
                                        <div className="text-md px-2 font-semibold mb-2 text-center text-blue-900 lg:text-2xl">
                                            {selectedCard.subtitle}
                                        </div>
                                        <div className="lg:text-lg text-sm px-2">
                                            {selectedCard.desc}
                                        </div>
                                        {selectedCard.submenu && (
                                            <div className="mt-4">
                                                <div className="text-md font-semibold h-8 bg-green-700 text-white rounded-md flex items-center justify-center mb-4">
                                                    {selectedCard.submenu.month}
                                                </div>
                                                {selectedCard.submenu.Img && (
                                                    <div className="w-full flex items-center justify-center mb-4">
                                                        <img
                                                            src={
                                                                selectedCard
                                                                    .submenu.Img
                                                            }
                                                            alt={
                                                                selectedCard
                                                                    .submenu
                                                                    .subtitle
                                                            }
                                                            className="w-full object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <div className="text-md px-2 font-semibold mb-2 text-center text-blue-900 lg:text-2xl">
                                                    {
                                                        selectedCard.submenu
                                                            .subtitle
                                                    }
                                                </div>
                                                <div className="lg:text-lg text-sm px-2">
                                                    {selectedCard.submenu.desc}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

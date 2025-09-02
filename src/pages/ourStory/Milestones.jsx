// Milestones.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/OurInfrastructure/unit_1.jpg";
import Way from "../../assets/Milestones/S_way.png";

const cards = [
    {
        pos: "left-[86%] bottom-[88%]",
        title: "1973",
        subtitle: "Founded with a vision",
        desc: " Founded with a vision to blend craftsmanship with global appeal.",
        Img: img1,
    },
    {
        pos: "left-[59.3%] bottom-[76%]",
        title: "1980",
        subtitle: "Expanded internationally",
        desc: "Expanded internationally; deepened global collaborations.",
        Img: img1,
    },
    {
        pos: "left-[73%] bottom-[39%]",
        title: "1990",
        subtitle: "Embraced modern technology",
        desc: "Embraced modern technology; laid the foundation for future-ready manufacturing.",
        Img: img1,
    },
    {
        pos: "left-[45%] bottom-[22%]",
        title: "2000",
        subtitle: "ESG-driven sustainability programs",
        desc: "We’ve launched ESG-driven sustainability programs that blend environmental sensitivity with ethical production—creating positive impact for both society and industry development.",
        Img: img1,
    },
    {
        pos: "left-[29%] bottom-[16%]",
        title: "2010",
        subtitle: "Units in Faridabad",
        desc: "Grew state of the art advanced manufacturing units in Faridabad, boosting production capabilities and strengthening delivery excellence",
        Img: img1,
    },
    {
        pos: "left-[15%] bottom-[12%]",
        title: "2024",
        subtitle: "New Fabric Warehouse",
        desc: "Powered by 5,000+ skilled hands, we craft 12 million garments a year—now growing stronger with a new fabric warehouse fueling global reach.",
        Img: img1,
    },
    {
        pos: "left-[2%] bottom-[9.2%]",
        title: "2025",
        subtitle: "New Factory in Noida",
        desc: "With 7,000 team members driving our growth, we’ve expanded our presence with a new head office in Faridabad and launched our new factory in Noida—a benchmark where tradition meets technology and quiet luxury takes form. From production to quality control, we craft elevated essentials and rare, refined pieces for the global market.",
        Img: img1,
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

    return (
        <div
            ref={ref}
            className="md:w-[90%] w-full mx-auto h-[80vh] mb-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden flex items-end"
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
                                <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative animate-fadeIn">
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                                            onClick={() =>
                                                setSelectedCard(null)
                                            }
                                        >
                                            ✕
                                        </button>

                                        {/* Dynamic content from clicked card */}
                                        <div className="text-lg font-semibold h-16 bg-blue-900 text-white rounded-md flex items-center justify-center mb-4">
                                            {selectedCard.title}
                                        </div>
                                        {selectedCard.Img && (
                                            <div className="w-full flex items-center justify-center mb-4">
                                                <img
                                                    src={selectedCard.Img}
                                                    alt={selectedCard.title}
                                                    className="w-full h-40 object-contain"
                                                />
                                            </div>
                                        )}
                                        <div className="text-md px-2 font-semibold mb-2 text-center">
                                            {selectedCard.subtitle}
                                        </div>
                                        <div className="text-sm px-2 text-gray-600">
                                            {selectedCard.desc}
                                        </div>
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

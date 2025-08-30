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
        desc: "blend craftsmanship...",
        Img: img1,
    },
    {
        pos: "left-[59.3%] bottom-[76%]",
        title: "1980",
        subtitle: "Expanded internationally",
        desc: "deepened global collaborations",
        Img: img1,
    },
    {
        pos: "left-[73%] bottom-[39%]",
        title: "1990",
        subtitle: "Embraced modern technology",
        desc: "laid the foundation...",
        Img: img1,
    },
    {
        pos: "left-[45%] bottom-[22%]",
        title: "2000",
        subtitle: "ESG-driven sustainability programs",
        desc: "We’ve launched ESG-driven...",
        Img: img1,
    },
    {
        pos: "left-[29%] bottom-[16%]",
        title: "2010",
        subtitle: "Units in Faridabad",
        desc: "Grew state of the art...",
        Img: img1,
    },
    {
        pos: "left-[15%] bottom-[12%]",
        title: "2024",
        subtitle: "New Fabric Warehouse",
        desc: "Powered by 5,000+ skilled hands...",
        Img: img1,
    },
    {
        pos: "left-[2%] bottom-[9.2%]",
        title: "2025",
        subtitle: "New Factory in Noida",
        desc: "With 4,000 team members...",
        Img: img1,
    },
];

export default function Milestones() {
    // tweak these to control speed
    const STEP_DELAY_MS = 520; // time between each card starting animation
    const ANIM_DURATION = 0.9; // framer-motion duration (seconds)

    const { ref, inView } = useInView({ threshold: 0.28 });
    const [visibleIndex, setVisibleIndex] = useState(0);
    const timerRef = useRef(null);

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
            <div className="relative w-full h-[35%]">
                {/* Curved Path Image */}
                <img src={Way} alt="way path" className="w-full h-full" />

                {/* Cards */}
                {cards.map((c, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${c.pos} z-[1] 2xl:w-[180px] xl:w-[140px] lg:w-[110px] md:w-[120px] sm:w-[100px] w-[50px] flex flex-col items-start justify-center group`}
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
                        <div className="shadow-md border-2 border-blue-900 rounded-2xl w-full overflow-hidden">
                            <div className="text-lg font-semibold h-14 bg-blue-900 text-white rounded-t-xl flex items-center justify-center">
                                {c.title}
                            </div>
                            <div className="w-full flex items-center justify-center hidden group-hover:block mb-2">
                                <img
                                    src={c.Img}
                                    alt=""
                                    className="w-full h-24"
                                />
                            </div>
                            <div className="text-md px-2 font-semibold mb-2 hidden group-hover:block max-h-24 text-center overflow-hidden">
                                {c.subtitle}
                            </div>
                            <div className="text-xs px-2 text-gray-600 mb-4 hidden group-hover:block max-h-24 overflow-hidden">
                                {c.desc}
                            </div>
                        </div>

                        <div className="w-0 h-[250px] border-l-2 border-blue-900 mt-[-15px]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";

// Timeline structure: each entry has a year, an array of texts, and textPosition ("top"/"bottom")
const milestones = [
    {
        year: "1973",
        text: [
            "Founded with a vision to blend craftsmanship with global appeal.",
            "",
        ],
        textPosition: ["top", "bottom"],
        color: "[#053487]",
    },
    {
        year: "1980s",
        text: [
            "",
            "Embraced modern stamped technology, laid foundation for future-ready manufacturing.",
        ],
        textPosition: ["top", "bottom"],
        color: "gray-400",
    },
    {
        year: "1990s",
        text: [
            "Expanded internationally; deepened global collaborations.",
            "Embraced modern innovation for future-ready manufacturing.",
        ],
        textPosition: ["top", "bottom"],
        color: "[#053487]",
    },
    {
        year: "2000s",
        text: ["", ""],
        textPosition: ["top", "bottom"],
        color: "gray-400",
    },
    {
        year: "2010",
        text: [
            "We’ve launched ESG-driven sustainability programs that blend environmental sensitivity with critical prediction—creating impact for both society and industry development.",
            "Established state-of-the-art manufacturing units in Faridabad, enhancing production capabilities and elevating delivery efficiency.  ",
        ],
        textPosition: ["top", "bottom"],
        color: "[#053487]",
    },
    {
        year: "2024",
        text: [
            "Powered by 5,000+ skilled hands, we craft 12 million garments a year-now growing stronger with a new fabric warehouse fuelling global reach.",
            "Unit-3 (Plot-11) A fresh stitch in time! This unit joined the fashion brigade with cutting-edge capabilities.",
        ],
        textPosition: ["top", "bottom"],
        color: "gray-400",
    },
    {
        year: "2025",
        text: [
            "Powered by 5,000+ skilled professionals, we produce over 12 million garments annually-expanding our capabilities with new fabric divisions and strengthening our global footprint",
            "Empowered by 5,000 skilled minds, our journey advances with the new Noida head office-an inspiring hub where innovation meets artistry, precision meets passion, and India’s crafted excellence reaches the world.  ",
        ],
        textPosition: ["top", "bottom"],
        color: "[#053487]",
    },
];

const Milestones = () => {
    const [visible, setVisible] = useState(
        Array(milestones.length).fill(false)
    );

    useEffect(() => {
        let timeouts = [];
        milestones.forEach((_, idx) => {
            timeouts.push(
                setTimeout(() => {
                    setVisible((prev) => {
                        const updated = [...prev];
                        updated[idx] = true;
                        return updated;
                    });
                }, idx * 650)
            );
        });
        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div
            className="w-full lg:h-[600px] h-[1000px] pt-40 pb-20 2xl:px-20 px-10 bg-white flex justify-center items-start overflow-x-autoX@ relative"
            // style={{
            //     backgroundImage: `url('/world-map-bg.svg')`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center",
            //     backgroundSize: "contain",
            // }}
        >
            <div className="my-10 flex lg:flex-row flex-col items-center gap-0">
                {milestones.map((m, i) => (
                    <div
                        key={m.year}
                        className="relative flex flex-col items-start min-w-[146px]"
                    >
                        {/* Top text */}
                        <div
                            className={`absolute bottom-14 px-2 pt-2 2xl:w-48 xl:w-40 w-28 xl:h-48 lg:h-56 xl:text-xs lg:text-[10px] text-gray-700 leading-relaxed text-center flex flex-col items-center justify-end border-l-2 border-${
                                m.color
                            } transition-opacity duration-500 ${
                                visible[i] ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {m.text[0]}
                            <div
                                className={`mt-2 h-10 w-[2px] bg-${m.color}`}
                            ></div>
                        </div>

                        {/* Timeline */}
                        <div className="flex gap-0 items-center">
                            <div className="flex flex-col items-center">
                                {/* Year label */}
                                <div
                                    className={`
                                    bg-${m.color}
                                    rounded px-7 py-2 2xl:w-36 xl:w-36 lg:w-24
                                    font-bold text-white text-center shadow-lg 2xl:text-2xl xl:text-xl lg:text-lg
                                    transition-all duration-700
                                    ${
                                        visible[i]
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-24 opacity-0"
                                    }
                                `}
                                >
                                    {m.year}
                                    {/* Right-side arrow/chevron */}
                                    <span
                                        className={`absolute right-[-18px] top-1/2 -translate-y-1/2`}
                                    >
                                        <svg
                                            width="18"
                                            height="38"
                                            viewBox="0 0 18 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polygon
                                                points="0,0 18,19 0,38"
                                                className={`text-${m.color}`}
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* Timeline horizontal connector (hide after last item) */}
                            {i < milestones.length - 1 && (
                                <div
                                    className={`h-[2px] 2xl:w-16 xl:w-10 lg:w-12 bg-${m.color}`}
                                ></div>
                            )}
                        </div>

                        {/* Bottom text*/}
                        <div
                            className={`absolute top-14 px-2 pb-2 2xl:w-48 xl:w-40 w-28 xl:h-60 lg:h-64 xl:text-xs lg:text-[10px] text-gray-700 leading-relaxed text-center flex flex-col items-center justify-start border-l-2 border-${
                                m.color
                            } transition-opacity duration-500 ${
                                visible[i] ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <div
                                className={`mb-2 h-10 w-[2px] bg-${m.color}`}
                            ></div>
                            {m.text.length === 2 ? m.text[1] : m.text[0]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Milestones;

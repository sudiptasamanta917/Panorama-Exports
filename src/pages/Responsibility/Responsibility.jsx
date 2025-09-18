import { useEffect } from "react";

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";

import icon1 from "../../assets/Responsible/Icons/ReduceEmission.png";
import icon2 from "../../assets/Responsible/Icons/SaveGreenery.png";
import icon3 from "../../assets/Responsible/Icons/BuildingCommunity.png";
import icon4 from "../../assets/Responsible/Icons/RespectWater.png";

function Responsibility() {
    const icons = [
        {
            id: 1,
            icon: icon1,
            header: "Reduce Emission",
        },
        {
            id: 2,
            icon: icon2,
            header: "Save Greenery",
        },
        {
            id: 3,
            icon: icon3,
            header: "Building Community",
        },
        {
            id: 4,
            icon: icon4,
            header: "Respect Water",
        },
    ];

    // Scroll to top when opening the page.....................
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full">
            <div className="w-full h-20 bg-gray-900"></div>
            <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                Responsibility Route
                <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                    Sustainability is stitched into everything we do.
                </div>
            </div>

            {/* Slider1 wrapper */}
            <Slider1 />
            <div className="w-full h-10 bg-white"></div>
            {/* Slider2 wrapper */}
            <Slider2 />
            <div className="w-full h-10 bg-white"></div>
            {/* Slider2 wrapper */}
            <Slider3 />
            <div className="w-full h-10 bg-white"></div>
            {/* Slider2 wrapper */}
            <Slider4 />

            <div className="flex items-center justify-center bg-white">
                <div className="grid grid-cols-4 gap-6 mx-auto w-[70%] my-10">
                    {icons.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center justify-center `}
                        >
                            <img
                                src={item.icon}
                                alt="image"
                                className="rounded-lg"
                                // style={{
                                //     boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
                                // }}
                            />
                            <h2 className="text-blue-950 font-semibold my-4">
                                {item.header}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Responsibility;

import { useEffect } from "react";

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";

import icon1 from "../../assets/Responsible/Icons/ReduceEmission.png";
import icon2 from "../../assets/Responsible/Icons/SaveGreenery.png";
import icon3 from "../../assets/Responsible/Icons/BuildingCommunity.png";
import icon4 from "../../assets/Responsible/Icons/RespectWater.png";

import img1 from "../../assets/Responsible/Corporate/1.png";
import img2 from "../../assets/Responsible/Corporate/2.png";
import img3 from "../../assets/Responsible/Corporate/3.png";
import img4 from "../../assets/Responsible/Full.png";

import cert1 from "../../assets/Responsible/certificate/gots.png";
import cert2 from "../../assets/Responsible/certificate/grs.png";
import cert3 from "../../assets/Responsible/certificate/oeko.png";

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

function Responsibility() {
    

    

    return (
        <>
            <div className="h-20 w-full bg-gray-900"></div>
            <div className=" bg-[#49883f] lg:py-20 py-12 lg:text-6xl text-4xl text-center text-white font-semibold">
                SUSTAINABILITY
            </div>
            <div className="lg:w-[80%] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-gray-700 text-center 2xl:text-xl lg:text-lg text-sm leading-relaxed">
                    For Panorama, sustainability means designing with
                    conscience,<br></br> producing with care, and leaving a
                    legacy the planet can wear with pride.
                </div>
                <div className="w-full h-[1px] bg-blue-900 my-8"></div>
            </div>
            {/* Images Area */}
            <section className="">
                <div className="">
                    <img src={img4} alt="" />
                </div>
            </section>
            <div className="lg:w-[80%] w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="w-full h-[1px] bg-blue-900"></div>
                <div className="w-full h-[1px] bg-blue-900 mt-[1px] mb-10"></div>
                {/* Focus Areas */}
                <section className="grid md:grid-cols-4 grid-cols-2 gap-5 mx-auto 2xl:w-[75%] lg:w-[90%] w-full my-20">
                    {icons.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center justify-center`}
                        >
                            <img
                                src={item.icon}
                                alt="image"
                                className="rounded-lg xl:w-36 w-28 xl:h-36 h-28"
                            />
                            <h2 className="text-blue-950 font-semibold my-4 text-[12px] md:text-sm xl:text-md 2xl:text-lg">
                                {item.header}
                            </h2>
                        </div>
                    ))}
                </section>

                {/* Our Approaches */}
                <section className="my-16 flex flex-col justify- items- gap-10">
                    <p className=" text-5xl font-bold leading-snug">
                        {" "}
                        Sustainability is stitched into everything we do
                    </p>
                    <div className=" text-md font-semibold flex flex-col gap-3">
                        <p> · Responsible sourcing and clean production</p>
                        <p>
                            · Solar power, efficient logistics, and
                            eco-conscious facilities/infrastructure
                        </p>
                        <p>
                            · Fair wages, safe workplaces, and community
                            upliftment
                        </p>
                        <p>
                            · Transparency, integrity, and circular practices at
                            every level
                        </p>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
                    <div className="flex flex-col items-center">
                        <img src={cert1} alt="" />
                        <h3 className="my-5 font-semibold text-lg text-center">
                            Global Organic Textile Standards (GOTS)
                        </h3>
                        <p className="text-justify leading-relaxed">
                            Global Organic Textile Standard ensures that
                            textiles are truly organic, environmentally
                            friendly, and socially responsible — all the way
                            from the harvesting of raw materials to the final
                            labelled product.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cert2} alt="" />
                        <h3 className="my-5 font-semibold text-lg text-center">
                            Global Recycled Standard (GRS)
                        </h3>
                        <p className="text-justify leading-relaxed">
                            GRS certification underscores our dedication to
                            responsible production—integrating recycled inputs,
                            verified traceability, and sustainable manufacturing
                            practices.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cert3} alt="" />
                        <h3 className="my-5 font-semibold text-lg text-center">
                            OEKO-TEX® STANDARD 100
                        </h3>
                        <p className="text-justify leading-relaxed">
                            OEKO-TEX® STANDARD 100 ensures that every component
                            of a textile product—right from threads and buttons
                            to labels—is tested for harmful chemicals and proven
                            safe for human use. Products carrying this label
                            meet strict global criteria, guaranteeing they are
                            free from substances that can harm health or the
                            environment.
                        </p>
                    </div>
                </section>
                <section className="my-16 flex flex-col justify- items- gap-10">
                    <p className=" text-5xl font-bold leading-snug">
                        {" "}
                        Corporate Social Responsibility
                    </p>
                    <div className=" text-md font-semibold flex flex-col gap-3">
                        Driven by purpose, Panorama nurtures progress through
                        education and women empowerment. By creating safe,
                        inclusive workplaces and community programs, we turn
                        opportunity into impact-strengthening both individuals
                        and society. 
                    </div>
                </section>
            </div>

            <section className="grid grid-cols-3 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
            </section>
        </>
    );
}

export default Responsibility;

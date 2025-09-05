import React from "react";
import EnrichingLives from "../../assets/OurPurpose/01.png";
import DynamicHeart from "../../assets/OurPurpose/Dynamic at Heart.png";
import ResponsibleReverence from "../../assets/OurPurpose/Responsible Reverence.png";
import TrustCore from "../../assets/OurPurpose/Trust at the Core.png";

const purposes = [
    {
        title: "Enriching Lives",
        img: EnrichingLives,
    },
    {
        title: "DynamicHeart",
        img: DynamicHeart,
    },
    {
        title: "TrustCore",
        img: TrustCore,
    },
    {
        title: "ResponsibleReverence",
        img: ResponsibleReverence,
    },
];

const OurPurpose = () => {
    return (
        <>
            <section className="bg-white">
                <div className="w-full h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto py-16 px-6 md:px-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                        Our Purpose
                    </h2>
                    <h3 className="mt-5">
                        To enrich lives by building a dynamic, responsible, and
                        trusted global enterprise.
                    </h3>
                </div>
                <div>
                    {purposes.map((purpose, index) => (
                        <div>
                            <img src={purpose.img} alt={purpose.title} className="w-full object-contain"/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurPurpose;

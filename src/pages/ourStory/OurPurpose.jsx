import React from "react";
import { motion } from "framer-motion";
import EnrichingLives from "../../assets/OurPurpose/EnrichingLives.jpg";
import DynamicHeart from "../../assets/OurPurpose/DynamicHeart.jpg";
import ResponsibleReverence from "../../assets/OurPurpose/ResponsibleReverence.jpg";
import TrustCore from "../../assets/OurPurpose/TrustCore.jpg";

import EnrichingText from "../../assets/OurPurpose/enrichingLivesText.png";
import DynamoText from "../../assets/OurPurpose/dynamicHeartText.png";
import TrustCoreText from "../../assets/OurPurpose/trustCoreText.png";
import ResponsibleText from "../../assets/OurPurpose/responsibleReverenceText.png";

const purposes = [
    {
        title: "Enriching Lives",
        img: EnrichingLives,
        textImg: EnrichingText,
    },
    {
        title: "DynamicHeart",
        img: DynamicHeart,
        textImg: DynamoText,
    },
    {
        title: "TrustCore",
        img: TrustCore,
        textImg: TrustCoreText,
    },
    {
        title: "ResponsibleReverence",
        img: ResponsibleReverence,
        textImg: ResponsibleText,
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
                        <div
                            className="w-full bg-center bg-contain flex items-end justify-end pr-[5%]"
                            style={{
                                backgroundImage: `url(${purpose.img})`,
                                aspectRatio: "21/8.83",
                            }}
                        >
                            <motion.img
                                src={purpose.textImg}
                                alt={purpose.title}
                                className="w-[85%] object-contain"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                }}
                                viewport={{ once: false, amount: 0.3 }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurPurpose;

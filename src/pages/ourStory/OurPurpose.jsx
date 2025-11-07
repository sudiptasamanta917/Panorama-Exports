import React from "react";
import { motion } from "framer-motion";
import EnrichingLives from "../../assets/OurPurpose/Enriching.jpg";
import DynamicHeart from "../../assets/OurPurpose/Dybamic.jpg";
import ResponsibleReverence from "../../assets/OurPurpose/Responsible.jpg";
import TrustCore from "../../assets/OurPurpose/Trusted.jpeg";

import EnrichingText from "../../assets/OurPurpose/enrichingLivesText.png";
import DynamoText from "../../assets/OurPurpose/dynamicHeartText.png";
import TrustCoreText from "../../assets/OurPurpose/trustCoreText.png";
import ResponsibleText from "../../assets/OurPurpose/responsibleReverenceText.png";

const purposeItems = [
    {
        img: EnrichingLives,
        title: "Enriching Lives",
        description: `Empowering people, uplifting communities, and shaping better futures
                        that sustains ecosystems, anticipates new lifestyles, and supports the aspirations of
                        every member of our team`,
    },
    {
        img: DynamicHeart,
        title: "Dynamic Heart",
        description: `Agile, bold, and ever-evolving with ideas, technology, and
        learning.We acquire new capabilities, master fresh capacities, and continuously innovate
        to pioneer and reinvent the future`,
    },
    {
        img: TrustCore,
        title: "Trusted at Core",
        description: `Reliability and intent define every product, partnership, and promise.
        Trust is our greatest currency-built in every interaction, upheld in all circumstances, and
        strengthened over time through our products, services, and unwavering intent`,
    },
    {
        img: ResponsibleReverence,
        title: "Responsible Reverence",
        description: `Committed to people, planet, and purpose—balancing profit
        with progress. We foster a culture where every decision is thoughtful, accountable, and
        value-driven. Advancing the circular economy, and creating capacity through smart
        resource use and ethical governance`,
    },
];


const OurPurpose = () => {
    return (
        <>
            <section className="bg-white">
                <div className="w-full h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto py-16 px-6 md:px-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        OUR PURPOSE
                    </h1>
                    <h3 className="mt-5 2xl:text-xl lg:text-lg text-sm text-gray-600">
                        To enrich lives by building a dynamic, responsible, and
                        trusted global enterprise.
                    </h3>
                </div>
                <div className="w-full mt-10 flex flex-col items-center justify-center">
                    {/* Iterate over all items in array */}
                    {purposeItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row items-center justify-end gap-8 2xl:w-[65%] xl:w-[75%] lg:w-[90%] py-20 mb-10"
                        >
                            {/* Text side */}
                            <div className="relative 2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w[400px] w-full xl:h-[400px] lg:h-[350px] h-[300px] bg-[#f8f8f8] flex flex-col justify-center items-end py-8 text-gray-900">
                                <div className="w-[85%] px-16">
                                    <h2 className="2xl:text-[2rem] md:text-xl text-lg font-bold text-blue-700 mb-3 leading-tight">
                                        {item.title}
                                    </h2>
                                    <div
                                        className="2xl:text-base text-sm leading-relaxed text-gray-700"
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />
                                </div>
                                {/* Image side */}
                                <div className="md:absolute bottom-20 2xl:left-[-510px] xl:left-[-425px] lg:left-[-382.5px] flex-shrink-0  overflow-hidden shadow-lg bg-white">
                                    <img
                                        src={item.img}
                                        alt="purpose visual"
                                        className="2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w[400px] w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurPurpose;

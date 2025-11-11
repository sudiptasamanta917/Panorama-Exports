import React, { useState } from "react";
import TopHeader from "../../assets/Media/LeftImg.jpg";
import RightHeader1 from "../../assets/Media/RightImg1.jpg";
import RightHeader2 from "../../assets/Media/RightImg2.jpg";

import NewsletterImg1 from "../../assets/Media/Workshop/Img1.png";
import NewsletterImg2 from "../../assets/Media/Workshop/Img2.png";
import NewsletterImg3 from "../../assets/Media/Workshop/Img3.png";
import NewsletterImg4 from "../../assets/Media/Workshop/Img4.png";
import NewsletterImg5 from "../../assets/Media/Workshop/Img5.png";
import NewsletterImg6 from "../../assets/Media/Workshop/Img6.png";
import NewsletterImg7 from "../../assets/Media/Workshop/Img7.png";
import NewsletterImg8 from "../../assets/Media/Workshop/Img8.png";
import NewsletterImg9 from "../../assets/Media/Workshop/Img9.png";
import NewsletterImg10 from "../../assets/Media/Workshop/Img10.png";

import Safety from "../../assets/Media/Workshop/Safety.jpg";

import Environment1 from "../../assets/Media/Workshop/Environment1.jpg";
import Environment2 from "../../assets/Media/Workshop/Environment2.jpg";
import Environment3 from "../../assets/Media/Workshop/Environment3.jpg";

const tabsData = {
    Workshop: [
        {
            id: 1,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg1,
        },
        {
            id: 2,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg2,
        },
        {
            id: 3,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg3,
        },
        {
            id: 4,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg4,
        },
        {
            id: 5,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg5,
        },
        {
            id: 6,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg6,
        },
        {
            id: 7,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg7,
        },
        {
            id: 8,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg8,
        },
        {
            id: 9,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg9,
        },
        {
            id: 10,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg10,
        },
        {
            id: 11,
            title: "Safety",
            date: "",
            image: Safety,
        },
        {
            id: 12,
            title: "Environment Day",
            date: "",
            image: Environment1,
        },
        {
            id: 13,
            title: "Environment Day",
            date: "",
            image: Environment2,
        },
        {
            id: 14,
            title: "Environment Day",
            date: "",
            image: Environment3,
        },
    ],
    Newsletter: [
        {
            id: 1,
            title: "",
            date: "",
            image: "",
        },
    ],
    Community: [
        {
            id: 1,
            title: "",
            date: "",
            image: "",
        },
    ],
    News: [
        {
            id: 1,
            title: "",
            date: "",
            image: "",
        },
    ],
};

const tabNames = Object.keys(tabsData);

export default function Media() {
    const [activeTab, setActiveTab] = useState(tabNames[0]);

    return (
        <div className="bg-white">
            <div className="w-full h-20 bg-gray-900"></div>
            {/* Top Hero Section */}
            <section className="w-full py-1">
                <div className="flex gap-2">
                    {/* Card 1 */}
                    <div className="w-[70%] relative overflow-hidden shadow-lg group">
                        <img
                            src={TopHeader}
                            alt="The Missing Link in Scaling Sustainable Fashion Innovation"
                            className="w-full aspect-[16/6] object-contain group-hover:scale-105 duration-200"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end bg-gradient-to-t from-black/40 via-black/20 to-transparent px-4 py-3">
                            <h2 className="text-white font-semibold lg:text-4xl text-2xl pb-16">
                                Panorama Exports Sustainable Fashion Innovation
                            </h2>
                        </div>
                    </div>
                    <div className="w-[30%] flex flex-col gap-2">
                        {/* Card 2 */}
                        <div className="relative overflow-hidden shadow-lg group">
                            <img
                                src={RightHeader1}
                                alt="Shahi Exports Champion for Reproductive Justice"
                                className="w-full aspect-[16/6.9] object-contain"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3">
                                {/* <div className="text-xs text-gray-200">
                                    Media & Research | October 17, 2025
                                </div> */}
                                <h2 className="text-white font-semibold lg:text-2xl text-lg text-center">
                                    Panorama Exports Media & News
                                </h2>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative overflow-hidden shadow-lg group">
                            <img
                                src={RightHeader2}
                                alt="The Manufacturing Perspective 2025"
                                className="w-full aspect-[16/6.9] object-contain "
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 via-black/30 to-transparent px-4 py-3">
                                {/* <div className="text-xs text-gray-200">
                                    Media & Research | September 30, 2025
                                </div> */}
                                <h2 className="text-white font-semibold lg:text-2xl text-lg text-center">
                                    The Manufacturing Perspective
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <div className="mt-5 max-w-7xl mx-auto px-4">
                <nav className="flex space-x-8 lg:space-x-16">
                    {tabNames.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 ${
                                activeTab === tab
                                    ? "border-b-2 border-blue-900 text-blue-900 font-semibold"
                                    : "text-gray-800"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content - News/Image Cards */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {(tabsData[activeTab] || []).map((item) => (
                        <div
                            key={item.id}
                            className="relative group bg-white rounded-sm overflow-hidden shadow transition-shadow duration-500 aspect-[16/14]"
                        >
                            {/* Front (Image) - Slides Up & Fades Out on Hover */}
                            <div
                                className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
      group-hover:-translate-y-48 group-hover:opacity-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Back (Text Panel) - Slides Up & Fades In on Hover */}
                            <div
                                className="absolute inset-0 p-4 flex items-center justify-center
      opacity-0 translate-y-48 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
      group-hover:opacity-100 group-hover:translate-y-0
      bg-gradient-to-b from-blue-500 to-purple-500"
                            >
                                <h3 className="font-semibold text-base text-white text-center">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

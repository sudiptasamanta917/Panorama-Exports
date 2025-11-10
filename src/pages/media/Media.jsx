import React, { useState } from "react";
import TopHeader from "../../assets/Media/TopHeader.jpg";
import RightHeader1 from "../../assets/Media/right.png";
import RightHeader2 from "../../assets/Media/right.png";

import NewsletterImg1 from "../../assets/Media/Img1.jpg";

const tabsData = {
    Newsletter: [
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
            image: NewsletterImg1,
        },
        {
            id: 3,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg1,
        },
        {
            id: 4,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg1,
        },
        {
            id: 5,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg1,
        },
        {
            id: 6,
            title: "PanoTEAM UP Training Sessions",
            date: "December 11, 2024",
            image: NewsletterImg1,
        },
    ],
    Workshop: [
        {
            id: 1,
            title: "Launching our third Sustainability Report for FY 2023-24",
            date: "December 11, 2024",
            image: NewsletterImg1,
        },
    ],
    Community: [
        {
            id: 1,
            title: "Three years into running Migrant Support Center",
            date: "May 30, 2025",
            image: NewsletterImg1,
        },
    ],
    News: [
        {
            id: 1,
            title: "Launching our third Sustainability Report for FY 2023-24",
            date: "December 11, 2024",
            image: NewsletterImg1,
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
                                Panorama Exports Sustainable Fashion
                                Innovation
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {(tabsData[activeTab] || []).map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 rounded-sm overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                {/* <div className="text-xs text-gray-500 mb-1">
                                    {item.date}
                                </div> */}
                                <h3 className="font-semibold text-base text-gray-900 text-center">
                                    {item.title}
                                </h3>
                                {/* <button className="mt-3 text-blue-800 hover:underline text-sm">
                                    Read more
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

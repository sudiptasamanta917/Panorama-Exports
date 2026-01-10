import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import TopHeader from "../../assets/Media/LeftImg.webp";
import RightHeader1 from "../../assets/Media/RightImg1.webp";
import RightHeader2 from "../../assets/Media/RightImg2.webp";

import NewsletterImg1 from "../../assets/Media/Workshop/Img1.webp";
import NewsletterImg2 from "../../assets/Media/Workshop/Img2.webp";
import NewsletterImg3 from "../../assets/Media/Workshop/Img3.webp";
import NewsletterImg4 from "../../assets/Media/Workshop/Img4.webp";
import NewsletterImg5 from "../../assets/Media/Workshop/Img5.webp";
import NewsletterImg6 from "../../assets/Media/Workshop/Img6.webp";
import NewsletterImg7 from "../../assets/Media/Workshop/Img7.webp";
import NewsletterImg8 from "../../assets/Media/Workshop/Img8.webp";
import NewsletterImg9 from "../../assets/Media/Workshop/Img9.webp";
import NewsletterImg10 from "../../assets/Media/Workshop/Img10.webp";

import Safety from "../../assets/Media/Workshop/Safety.webp";

import Environment1 from "../../assets/Media/Workshop/Environment1.webp";
import Environment2 from "../../assets/Media/Workshop/Environment2.webp";
import Environment3 from "../../assets/Media/Workshop/DSC03107.webp";
import Environment4 from "../../assets/Media/Workshop/CM100651.webp";

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
        {
            id: 15,
            title: "Environment Day",
            date: "",
            image: Environment4,
        },
    ],
    Newsletter: [
        {
            id: 1,
            title: "Panorama Exports Newsletter",
            date: "",
            url: "/media/November2025.pdf",
        },
        {
            id: 2,
            title: "Panorama Exports Newsletter",
            date: "",
            url: "/media/Christmas Newletter.pdf",
        },
    ],
    Community: [],
    News: [],
};

const tabNames = Object.keys(tabsData);

export default function Media() {
    const [activeTab, setActiveTab] = useState(tabNames[0]);
    const [numPages, setNumPages] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    const handleLoadSuccess = ({ numPages }) => setNumPages(numPages);

    //  Update width on resize (for responsiveness)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Decide PDF page width (responsive breakpoints)
    function getPageWidth() {
        if (width >= 1530) return 1300; // 2xl screens
        if (width >= 1280) return 1100; // xl screens
        if (width >= 1024) return 900; // lg
        if (width >= 768) return 700; // md
        if (width >= 640) return 600; // sm
        return Math.min(width - 32, 300); // xs
    }

    return (
        <div className="bg-white">
            <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
            {/* Top Hero Section */}
            <section className="w-full py-1">
                <div className="flex gap-2">
                    {/* Card 1 */}
                    <div className="md:w-[70%] w-full relative overflow-hidden shadow-lg group">
                        <img
                            src={TopHeader}
                            alt="The Missing Link in Scaling Sustainable Fashion Innovation"
                            className="w-full aspect-[16/6] object-contain group-hover:scale-105 duration-200"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end bg-gradient-to-t from-black/40 via-black/20 to-transparent px-4 py-3">
                            <h2 className="text-white sm:font-semibold 2xl:text-4xl lg:text-2xl sm:text-lg text-sm 2xl:pb-16 lg:pb-10 md:pb-6 sm:pb-5 pb-1">
                                Panorama Exports Sustainable Fashion Innovation
                            </h2>
                        </div>
                    </div>
                    <div className="hidden md:block w-[30%] flex flex-col">
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
                                <h2 className="text-white lg:font-semibold 2xl:text-2xl lg:text-lg text-sm text-center">
                                    Panorama Exports Media & News
                                </h2>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative mt-2 overflow-hidden shadow-lg group">
                            <img
                                src={RightHeader2}
                                alt="The Manufacturing Perspective 2025"
                                className="w-full aspect-[16/6.9] object-contain "
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 via-black/30 to-transparent px-4 py-3">
                                {/* <div className="text-xs text-gray-200">
                                    Media & Research | September 30, 2025
                                </div> */}
                                <h2 className="text-white lg:font-semibold 2xl:text-2xl lg:text-lg text-sm text-center">
                                    The Manufacturing Perspective
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <div className="mt-5 md:max-w-7xl mx-auto px-4">
                <nav className="flex md:space-x-8 lg:space-x-16 sm:space-x-5 space-x-3 text-[12px]">
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
            {activeTab === "Newsletter" && (
                <div className="md:max-w-7xl mx-auto w-full px-4 py-8">
                    <div className="flex flex-col gap-5">
                        {tabsData[activeTab].map((item) => (
                            <div key={item.id} className="">
                                <Document
                                    file={item.url}
                                    onLoadSuccess={handleLoadSuccess}
                                    onLoadError={(err) =>
                                        console.error("PDF load error:", err)
                                    }
                                    className="w-full flex flex-col items-center"
                                >
                                    {Array.from(new Array(numPages), (_, i) => (
                                        <Page
                                            key={`page_${i + 1}`}
                                            pageNumber={i + 1}
                                            width={getPageWidth()}
                                            className="mb-4 border"
                                        />
                                    ))}
                                </Document>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab !== "Newsletter" && (
                <div className="md:max-w-7xl mx-auto px-4 py-8">
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
            )}
        </div>
    );
}

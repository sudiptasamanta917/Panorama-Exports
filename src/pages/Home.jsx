import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoEnterOutline } from "react-icons/io5";
import DynamicText from '../components/DynamicText';
import craftingTomorrowImage from "../assets/CraftingTomorrow/panorama crafting tomorrow image.jpeg";
import GlobalFootprintImage from "../assets/GlobalFootprint/global_business.jpg";
import GlobalMap from "../components/GlobalMap";
import plant1 from "../assets/OurInfrastructure/unit_1.jpg";
import plant2 from "../assets/OurInfrastructure/unit_2.jpg";
import plant3 from "../assets/OurInfrastructure/unit_3.jpg";
import warehouse from "../assets/OurInfrastructure/unit_4.jpg";
import CommunityImage from "../assets/Community.webp";
import MediaScrollSection from "../components/MediaScrollSection";
import FlipCard from "../components/FlipCard";


import { FaMapMarkerAlt } from "react-icons/fa";
import { div } from "framer-motion/client";

// Hero data
const heroSlides = [
    {
        id: 1,
        image: "https://i.ytimg.com/vi/oBt85Jgjvng/maxresdefault.jpg",
        dynamicText: "DENIM"
    },
    {
        id: 2,
        image: "https://cdn.britannica.com/22/196922-050-06BDAB62/Rotor-spinning-machines-cotton-factory.jpg",
        dynamicText: "COTTON"
    },
    {
        id: 3,
        image: "https://www.apparelentrepreneurship.com/wp-content/uploads/2022/12/manufacturing.jpg",
        dynamicText: "MANUFACTURING"
    },
    {
        id: 4,
        image: "https://www.cndc.co/wp-content/uploads/2018/02/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171222120559-1200x480.jpg",
        dynamicText: "ENVIRONMENT"
    },
    {
        id: 5,
        image: "https://indiseam.com/wp-content/uploads/2023/05/Top-garment-manufacturers-in-India.webp",
        dynamicText: "QUALITY"
    }
];



export default function Home() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        // Set initial slide index
        setCurrentSlideIndex(0);
        
        // Initialize autoplay with a slight delay
        const autoplayTimer = setTimeout(() => {
            if (swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, 100);
        
        // Handle slide changes
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);
            
            // Announce slide changes for screen readers
            const activeSlide = heroSlides[newIndex];
            if (activeSlide) {
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.setAttribute('aria-atomic', 'true');
                announcement.className = 'sr-only';
                announcement.textContent = `Slide ${newIndex + 1} of ${heroSlides.length}: PANORAMA ${activeSlide.dynamicText}`;
                document.body.appendChild(announcement);
                
                // Clean up announcement after screen reader has time to read it
                setTimeout(() => {
                    if (document.body.contains(announcement)) {
                        document.body.removeChild(announcement);
                    }
                }, 1000);
            }
        };
        
        swiper.on('slideChange', handleSlideChange);
        
        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off('slideChange', handleSlideChange);
        };
    }, []);

    const units = [
        {
            id: 1,
            title: "Unit 01",
            address:
                "Plot No 08, DLF Industrial Area Phase – I, Faridabad, Haryana",
            locationUrl: "/indiamap",
            image: plant1,
        },
        {
            id: 2,
            title: "Unit 02",
            address:
                "Plot No. 11 DLF Industrial Area– Phase I, Faridabad, Haryana",
            locationUrl: "/indiamap",
            image: plant2,
        },
        {
            id: 3,
            title: "Unit 03",
            address: "Plot No 67, Sector 27C, Faridabad, Haryana",
            locationUrl: "/indiamap",
            image: plant3,
        },
        {
            id: 4,
            title: "Unit 04",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/indiamap",
            image: warehouse,
        },
    ];

    return (
        <div className="relative">
            {/* Hero Carousel */}
            <div className="relative z-10 h-screen md:h-screen">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    speed={800}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        waitForTransition: true,
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    className="h-full"
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={slide.id} className="relative">
                            {/* Background Image */}
                            <picture className="block w-full h-full">
                                <source
                                    srcSet={`${slide.image}?format=webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={slide.image}
                                    alt={`PANORAMA ${slide.dynamicText}`}
                                    className="w-full h-full object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </picture>

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Fixed Text Content - Outside of Swiper */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="2xl:w-[65%] xl:w-[70%] lg:w-[90%] w-[97%] ml-20 px-4 md:px-8 flex items-center">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                            <span className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                                PANORAMA |{" "}
                            </span>
                            <DynamicText
                                slides={heroSlides}
                                currentIndex={currentSlideIndex}
                            />
                        </h1>
                    </div>
                </div>

                {/* Custom Navigation Arrows */}
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                    aria-label="Previous slide"
                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                    aria-label="Next slide"
                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"></div>
            </div>

            <div className="bg-white pt-6">
                {/* Crafting Tomorrow Content */}
                <div
                    style={{
                        backgroundImage: `url(${craftingTomorrowImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                    }}
                    className="bg-[#182123] px-6 md:px-20 mb-6 h-[80vh] text-white flex flex-col items-center justify-center relative"
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 z-0"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
                            Crafting Tomorrow
                        </h1>

                        <Link to="/craftingtomorrow">
                            <button className="mt-10 lg:text-lg md:text-md text-sm md:px-6 px-4 md:py-3 py-1 md:rounded-xl rounded-md group inline-flex items-center gap-2 border text-white bg-transparent border-white hover:bg-white hover:text-blue-900 font-semibold shadow-[0_6px_10px_#ffffff88] hover:shadow-[0_8px_12px_#ffffffcc] transform hover:-translate-y-1 transition-all duration-300">
                                Click to Read More
                                <IoEnterOutline className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Global Footprint Content */}
                <div className="py-8 mt-6 text-[#01276a] w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            Global Presence
                            <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                Our International Presence
                            </div>
                        </div>
                        <div className="w-[50%] mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600">
                                Our cutting-edge manufacturing facilities and
                                advanced warehouse systems span across key
                                regions of India. Each location is engineered
                                for efficiency, sustainability, and scale.
                            </p>
                            <Link to="">
                                <button className="my-4 group inline-flex items-center  font-semibold md:text-lg text-sm">
                                    Find Us Globally
                                    <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <GlobalMap />

                {/* Diversified Business section */}
                <div className="py-8 mt-6 text-[#01276a] w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            Diversified Business
                            <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                Global-Grade Facilities
                            </div>
                        </div>
                        <div className="w-[50%] mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600">
                                Our cutting-edge manufacturing facilities and
                                advanced warehouse systems span across key
                                regions of India. Each location is engineered
                                for efficiency, sustainability, and scale.
                            </p>
                            <Link to="">
                                <button className="my-4 group inline-flex items-center  font-semibold md:text-lg text-sm">
                                    View More
                                    <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Grid of unit images */}
                <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-2 mb-6 rounded-b-md">
                    {units.map((unit, index) => (
                        <div key={index} className="">
                            <FlipCard
                                imageUrl={unit.image}
                                title={unit.title}
                                address={unit.address}
                                locationUrl={unit.locationUrl}
                                text="View in Map"
                                id={unit.id}
                            />
                        </div>
                    ))}
                </div>

                {/* People section */}
                <div className="py-8 text-[#01276a] w-[90%] mx-auto px-6 md:px-20 rounded-t-md mt-6">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            People
                            <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                From our Internal
                            </div>
                        </div>
                        <div className="w-[50%] mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600">
                                Stay connected with Panorama Exports presence
                                through our press releases, media reports and
                                updates.
                            </p>
                            <Link to="">
                                <button className="my-4 group inline-flex items-center hover:text-red-600 font-semibold md:text-lg text-sm">
                                    Visit People
                                    <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <MediaScrollSection />

                {/* Community section */}
                <div className="py-8 text-[#01276a] mt-6 w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            Community
                            <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                Our purpose in action
                            </div>
                        </div>
                        <div className="w-[50%] mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600">
                                At Panorama Export, we believe that success goes
                                beyond financial progress. It encompasses our
                                shared responsibility to enable a sustainable
                                way of life for all sections of the society.
                            </p>
                            <Link to="">
                                <button className="my-4 group inline-flex items-center hover:text-red-600 font-semibold md:text-lg text-sm">
                                    Visit Community
                                    <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${CommunityImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                    }}
                    className="mt-2 h-[60vh] text-white flex items-center justify-start relative overflow-hidden"
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 z-0"></div>
                    <div className="w-[70%] mx-auto relative z-10">
                        <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] w-[400px] whitespace-nowrap">
                            Panorama's Great Community
                        </h1>
                        <div className="w-[400px] my-4">
                            Quality materials is a powerful catalyst for change,
                            and Panorama is committed to harnessing its
                            transform potential.
                        </div>
                        <Link to="">
                            <button className="mt-10 lg:text-lg md:text-md text-sm md:px-6 px-4 md:py-3 py-1 md:rounded-xl rounded-md group inline-flex items-center gap-2 border text-white bg-transparent border-white hover:bg-white hover:text-blue-900 font-semibold shadow-[0_6px_10px_#ffffff88] hover:shadow-[0_8px_12px_#ffffffcc] transform hover:-translate-y-1 transition-all duration-300">
                                Click to Read More
                                <IoEnterOutline className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

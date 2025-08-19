import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoEnterOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import DynamicText from '../components/DynamicText';
import GlobalMap from "../components/GlobalMap";
import LiveMap from "../components/LiveMap";
import MediaScrollSection from "../components/MediaScrollSection";
import FlipCard from "../components/FlipCard";
import Certifications from "../components/Certifications";

import craftingTomorrowImage from "../assets/CraftingTomorrow/panorama crafting tomorrow image.jpeg";
import GlobalFootprintImage from "../assets/GlobalFootprint/global_business.jpg";
import plant1 from "../assets/OurInfrastructure/unit_1.jpg";
import plant2 from "../assets/OurInfrastructure/unit_2.jpg";
import plant3 from "../assets/OurInfrastructure/unit_3.jpg";
import warehouse from "../assets/OurInfrastructure/unit_4.jpg";
import CommunityImage from "../assets/Community.jpg";

import Hero1 from "../assets/HeroImages/01.png";
import Hero2 from "../assets/HeroImages/02.png";
import Hero3 from "../assets/HeroImages/03.png";
import Hero4 from "../assets/HeroImages/04.png";
import Hero05 from "../assets/HeroImages/05.png";
import Hero06 from "../assets/HeroImages/06.png";


// Hero data
const heroSlides = [
    {
        id: 1,
        image: Hero1,
        dynamicText: "WEAR YOUR STORY",
    },
    {
        id: 2,
        image: Hero2,
        dynamicText: "ELEGANCE UNVEILED",
    },
    {
        id: 3,
        image: Hero3,
        dynamicText: "THE WARM ALCOVE",
    },
    {
        id: 4,
        image: Hero4,
        dynamicText: "THREADS OF LEGACY",
    },
    {
        id: 5,
        image: Hero05,
        dynamicText: "AHEAD OF THE CURVE",
    },
    {
        id: 6,
        image: Hero06,
        dynamicText: "WORK PLAY",
    },
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
            lat: 28.468845,
            lng: 77.31234,
            title: "Unit 01",
            subtitle: "Faridabad",
            address:
                "Plot No 08, DLF Industrial Area Phase – I, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant1,
        },
        {
            id: 2,
            lat: 28.539579,
            lng: 77.289271,
            title: "Unit 02",
            subtitle: "Faridabad",
            address:
                "Plot No. 11 DLF Industrial Area– Phase I, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant2,
        },
        {
            id: 3,
            lat: 28.468817,
            lng: 77.304441,
            title: "Unit 03",
            subtitle: "Faridabad",
            address: "Plot No 67, Sector 27C, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: plant3,
        },
        {
            id: 4,
            lat: 28.6139,
            lng: 77.209,
            title: "Unit 04",
            subtitle: "Panorama Warehouse",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: warehouse,
        },
        {
            id: 5,
            lat: 28.5139,
            lng: 77.22,
            title: "Unit 05",
            subtitle: "Panorama Warehouse",
            address: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
            locationUrl: "/unitmap",
            image: warehouse,
        },
    ];

    return (
        <div className="relative">
            {/* Hero Carousel */}
            <div className="relative z-10 sm:h-screen h-[380px] md:h-screen">
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
                                    className="w-full sm:h-screen h-[380px] object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </picture>

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Fixed Text Content - Outside of Swiper */}
                <div className="absolute mt-[65vh] 2xl:ml-[100px] m-[50px] h-[20vh] inset-0 flex items-center justify-start pointer-events-none z-20">
                    <div className="2xl:w-[65%] xl:w-[70%] lg:w-[90%] w-[97%] sm:ml-20 px-4 md:px-8 flex items-center">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex ">
                            <span className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl flex items-center">
                                PANORAMA <RxDividerVertical className="text-[80px]" />{" "}
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
                    className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full sm:flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
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
                    className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full sm:flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
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

            <div className="bg-white sm:pt-6">
                {/* Crafting Tomorrow Content */}
                <div
                    style={{
                        backgroundImage: `url(${craftingTomorrowImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                    }}
                    className="bg-[#182123] px-6 md:px-20 mb-6 sm:h-[80vh] h-[380px] text-white flex flex-col items-center justify-center relative"
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 z-0"></div>
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
                    <div className="sm:flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            Global Presence
                            <div className="text-sm md:text-lg mt-3 md:mb-14 mb-5 text-gray-600 ml-1">
                                Our International Presence
                            </div>
                        </div>
                        <div className="md:w-[50%] md:mx-4">
                            <p className="2xl:text-xl lg:text-lg md:text-sm text-[8px] text-gray-600">
                                Our cutting-edge manufacturing facilities and
                                advanced warehouse systems span across key
                                regions of India. Each location is engineered
                                for efficiency, sustainability, and scale.
                            </p>
                            <Link to="">
                                <button className="my-4 group inline-flex items-center  font-semibold md:text-lg sm:text-sm text-[9px]">
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
                            Manufacturing Excellence
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
                {/* <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-2 mb-6 rounded-b-md">
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
                </div> */}
                {/* Google Map section */}
                <div className="w-[90%] mx-auto px-6 md:px-20">
                    <LiveMap
                        locations={units}
                        center={[28.5, 77.3]}
                        zoom={11}
                    />
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

                {/* Certifications section */}
                <div className="py-4 text-[#01276a] mt-6 w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
                    <div className="flex items-center justify-start">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            Certifications
                            <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                Our legal certificates
                            </div>
                        </div>
                    </div>
                </div>
                <Certifications />

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
                    <div className="absolute inset-0 bg-black/50 z-0"></div>
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

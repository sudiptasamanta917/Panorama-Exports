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
import FlipCard from "../components/flipCard/FlipCard";
import Certifications from "../components/Certifications";

import GlobalFootprintImage from "../assets/GlobalFootprint/global_business.jpg";
import GoogleMapUnits from "../components/GoogleMapUnits";
import CommunityImage from "../assets/Community/community1.jpg";

import Hero1 from "../assets/HeroImages/01.png";
import Hero2 from "../assets/HeroImages/02.png";
import Hero3 from "../assets/HeroImages/03.png";
import Hero4 from "../assets/HeroImages/04.png";
import Hero05 from "../assets/HeroImages/05.png";
import Hero06 from "../assets/HeroImages/07.png";


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

// Brands images
import brand1 from "../assets/GlobalFootprint/brands/25487.webp";
import brand2 from "../assets/GlobalFootprint/brands/Boden-new-logo.jpg";
import brand3 from "../assets/GlobalFootprint/brands/Boots_logo.svg.png";
import brand4 from "../assets/GlobalFootprint/brands/brand.gif";
import brand5 from "../assets/GlobalFootprint/brands/ceclogo.webp";
import brand6 from "../assets/GlobalFootprint/brands/channels4_profile.jpg";
import brand7 from "../assets/GlobalFootprint/brands/DKNY-Donna-Karan-New-York-logo.webp";
import brand8 from "../assets/GlobalFootprint/brands/Etam-logo.jpg";
import brand9 from "../assets/GlobalFootprint/brands/Falabella_Logo.png";
import brand10 from "../assets/GlobalFootprint/brands/george (1).svg";
import brand11 from "../assets/GlobalFootprint/brands/george.svg";
import brand12 from "../assets/GlobalFootprint/brands/images (1).png";
import brand13 from "../assets/GlobalFootprint/brands/images.jpg";
import brand14 from "../assets/GlobalFootprint/brands/images.png";
import brand15 from "../assets/GlobalFootprint/brands/KS.png";
import brand16 from "../assets/GlobalFootprint/brands/logo_FARM-RIO.png";
import brand17 from "../assets/GlobalFootprint/brands/Mango-logo.jpg";
import brand18 from "../assets/GlobalFootprint/brands/marea_by_liz_joy_logo.jpg";
import brand19 from "../assets/GlobalFootprint/brands/Matalan-logo.png";
import brand20 from "../assets/GlobalFootprint/brands/Mothercare-Emblem.png";
import brand21 from "../assets/GlobalFootprint/brands/Mothercare-Logo.png";
import brand22 from "../assets/GlobalFootprint/brands/Shinsegae_logo.svg.png";
import brand23 from "../assets/GlobalFootprint/brands/street-one-logo-png_seeklo.png";
import brand24 from "../assets/GlobalFootprint/brands/Tesco_Logo.svg.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20, brand21, brand22, brand23, brand24];

// Crafting Tomorrow images
import img1 from "../assets/CraftingTomorrow/01.png";
import img2 from "../assets/CraftingTomorrow/2.png";
import img3 from "../assets/CraftingTomorrow/3.png";
import img4 from "../assets/CraftingTomorrow/4.png";

const crImages = [img1, img2, img3, img4];

export default function Home() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % crImages.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, []);

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
                <div className="absolute 3xl:mt-[65vh] 2xl:mt-[65vh] xl:mt-[65vh] lg:mt-[65vh] md:mt-[65vh] sm:mt-[65vh] mt-[20vh] 2xl:ml-[30px] md:m-[10px] h-[20vh] inset-0 flex items-center justify-start pointer-events-none z-20">
                    <div className="2xl:w-[65%] xl:w-[70%] lg:w-[90%] w-[97%] sm:ml-20 px-4 md:px-8 flex items-center">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex ">
                            <span className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl flex items-center">
                                PANORAMA{" "}
                                <RxDividerVertical className="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[30px]" />{" "}
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

            <div className="bg-white sm:pt-6 pt-2">
                {/* Crafting Tomorrow Content */}
                <div className="relative bg-[#182123] px-6 md:px-20 mb-6 sm:h-[80vh] h-[380px] text-white flex flex-col items-center justify-center overflow-hidden">
                    {/* Background Slideshow */}
                    {crImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    ))}

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 z-0"></div>

                    {/* Text + Button (always fixed on top) */}
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-2xl shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] flex flex-wrap gap-4">
                            <p className="font-bold">Crafting</p> Tomorrow
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
                <div className="py-8 mt-6 text-[#01276a] mx-auto px-6 md:px-20 rounded-t-md">
                    <div className="flex items-center justify-center 2xl:px-5 gap-6">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular flex flex-wrap gap-4">
                            <p className="font-bold">Global</p> Presence
                        </div>
                    </div>
                </div>
                {/* Brands logo section */}
                <div className="w-full mb-10">
                    <div className="overflow-hidden w-full py-6 bg-white space-y-6">
                        {/* Row 1 */}
                        <div className="flex w-max animate-marquee gap-4">
                            {[...brands, ...brands].map((brand, idx) => (
                                <div
                                    key={`row1-${idx}`}
                                    className="flex-shrink-0 flex items-center justify-center"
                                >
                                    <div className="bg-white border-2 border-[#d4af37] rounded-sm px-6 py-4 flex items-center justify-center shadow-[-6px_-6px_13px_#ab9777]">
                                        <img
                                            src={brand}
                                            alt="brand"
                                            className="2xl:h-20 lg:h-16 md:h-12 h-10 2xl:w-28 lg:w-24 md:w-20 w-16 object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 2 */}
                        <div className="flex w-max animate-marquee-reverse gap-4">
                            {[...brands, ...brands].map((brand, idx) => (
                                <div
                                    key={`row2-${idx}`}
                                    className="flex-shrink-0 flex items-center justify-center"
                                >
                                    <div className="bg-white border-2 border-[#d4af37] rounded-sm px-6 py-4 flex items-center justify-center shadow-[-6px_-6px_13px_#ab9777]">
                                        <img
                                            src={brand}
                                            alt="brand"
                                            className="2xl:h-20 lg:h-16 md:h-12 h-10 2xl:w-28 lg:w-24 md:w-20 w-16 object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tailwind custom animations */}
                        <style>
                            {`
                            @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                            }
                            @keyframes marquee-reverse {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                            }
                            .animate-marquee {
                            animation: marquee 60s linear infinite;
                            }
                            .animate-marquee-reverse {
                            animation: marquee-reverse 60s linear infinite;
                            }
                            `}
                        </style>
                    </div>
                </div>
                <GlobalMap />

                {/* Integrated Units section */}
                <div className="py-8 mt-6 text-[#01276a] w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular flex flex-wrap gap-4">
                            <p className="font-bold">5 Integrated</p> Units
                            {/* <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                Global-Grade Facilities
                            </div> */}
                        </div>
                        <div className="w-[50%] mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600">
                                Seamless cut-to-pack capabilities for
                                quality and speed.
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
                <div className="">
                    <GoogleMapUnits />
                </div>

                {/* People section */}
                <div className="py-8 text-[#01276a] w-[90%] mx-auto px-6 md:px-20 rounded-t-md mt-6">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-regular">
                            People
                            <div className="text-sm md:text-lg mt-3 mb-14 text-gray-600 ml-1">
                                The soul of Panorama is its people
                            </div>
                        </div>
                        <div className="w-[50%] mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600">
                                7,000+ individuals, 50% women, all united by
                                passion, purpose, and creativity. We foster
                                safe, inclusive spaces, invest in
                                skill-building, and champion equal
                                opportunity—growing together, every step of the
                                way.
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
                                Our motto: People. Progress. Purpose. At
                                Panorama, we cultivate a culture of
                                responsibility, inclusion, and continuous
                                growth: Empowered Employees: Enhancing skills
                                for personal and professional growth. Health &
                                Wellness: Strengthening awareness and preventive
                                care. Ethical & Fair Workplace : Upholding
                                dignity, human rights, and grievance redressed
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
                    <div className="absolute inset-0 bg-black/30 z-0"></div>
                    <div className="w-[70%] mx-auto relative z-10">
                        <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] w-[400px] whitespace-nowrap">
                            {/* Panorama's Great Community */}
                        </h1>
                        <div className="md:w-[400px] my-4 lg:text-lg md:text-md sm:text-sm text-[12px]">
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

/// VisionMission.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bgImage from "../../assets/OurStory/visionMission/main_bg.webp";
import visionMission from "../../assets/OurStory/visionMission/vision-mission.webp";
import CoreValues from "./CoreValues";
import DirectorBg1 from "../../assets/Founders/bg 03.png";
import DirectorBg2 from "../../assets/Founders/bg 02.png";
import RajanPng from "../../assets/Founders/rajan copy.png";
import NavinPng from "../../assets/Founders/Navin copy.png";

const labels = {
    "#vision-values": "VisionValues",
    "#core-values": "CoreValues",
};

const directors = [
    {
        id: 1,
        name: "Rajan Sahni",
        role: "Director",
        bg: DirectorBg1,
        img: RajanPng,
        message: `Innovation is our language—spoken through
              designs that inspire and lead globally. We
              don't just follow trends—we anticipate them,
              crafting future-ready fashion with purpose.
              Every creation is a translation of insight,
              technology, and timeless craftsmanship.`,
    },
    {
        id: 2,
        name: "Navin Sahni",
        role: "Director",
        bg: DirectorBg2,
        img: NavinPng,
        message: `Our identity is crafted through integrity and defined by an unwavering commitment to brilliance & values that shape every garment, every partnership, and every milestone on our global journey.`,
    },
];

const executiveDirectors = [
    {
        id: 1,
        name: "Rajan Sahni",
        role: "Director",
        bg: DirectorBg1,
        img: RajanPng,
        message: `Innovation is our language—spoken through
              designs that inspire and lead globally. We
              don't just follow trends—we anticipate them,
              crafting future-ready fashion with purpose.
              Every creation is a translation of insight,
              technology, and timeless craftsmanship.`,
    },
    {
        id: 2,
        name: "Navin Sahni",
        role: "Director",
        bg: DirectorBg2,
        img: NavinPng,
        message: `Our identity is crafted through integrity and defined by an unwavering commitment to brilliance & values that shape every garment, every partnership, and every milestone on our global journey.`,
    },
];

export default function VisionMission() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    // Smooth scroll on hash change
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.querySelector(location.hash);
                if (section) {
                    const yOffset = -80; // adjust based on your navbar/breadcrumb height
                    const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    // swiper for director and 
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
            const activeSlide = directors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.setAttribute('aria-atomic', 'true');
                announcement.className = 'sr-only';
                announcement.textContent = `Slide ${newIndex + 1} of ${
                    directors.length
                }: PANORAMA ${activeSlide.dynamicText}`;
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

    return (
        <>
            {/* Vision Sections */}
            <section id="vision-values" className="bg-white">
                <div
                    ref={ref}
                    className="w-full h-[100vh] bg-cover bg-center flex flex-col items-start justify-end"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="text-white font-medium bg-black/80 px-[10%] pb-[4%] pt-[2%]">
                        <motion.h1
                            className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
                            variants={{
                                hidden: { opacity: 0, y: 1 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.8 }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        >
                            Woven into Every Thread
                        </motion.h1>
                        <motion.div
                            className="2xl:text-3xl lg:text-2xl md:text-xl text-lg mt-4"
                            variants={{
                                hidden: { opacity: 0, y: 1 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                ease: "easeInOut",
                            }}
                        >
                            Our vision shapes the future of fashion; our values
                            guide every stitch. We don’t just make clothing—we
                            build trust, innovate with intent, and create with
                            heart.
                        </motion.div>
                    </div>
                </div>
                {/* <h2 className="w-[90%] mx-auto py-16 px-6 md:px-20 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Vision & Mission
                </h2> */}
                <div
                    className="relative w-full h-[100vh] mt-4 flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${visionMission})` }}
                >
                    {/* Overlay black */}
                    <div className="absolute inset-0 lg:bg-black/10 md:bg-black/20 bg-black/60" />

                    <div className="relative z-10 w-[90%] mx-auto flex justify-between text-center text-white">
                        {/* Vision */}
                        <motion.div
                            className="2xl:w-[35%] w-[30%] flex flex-col items-center justify-center font-semibold mb-8 md:mb-0"
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="xl:text-5xl md:text-4xl text-3x mb-4">
                                Our Vision
                            </h2>
                            <p className="xl:text-xl md:text-lg sm:text-md text-sm text-gray-200">
                                To be the world’s most trusted apparel partner,
                                championing technology, sustainability, and
                                design excellence.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            className="2xl:w-[35%] w-[30%] flex flex-col items-center justify-center font-semibold"
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="xl:text-5xl md:text-4xl text-3xl mb-4">
                                Our Mission
                            </h2>
                            <p className="xl:text-xl md:text-lg sm:text-md text-sm text-gray-200">
                                To exceed expectations through innovation,
                                efficiency, and a people-first
                                culture-redefining global apparel manufacturing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Values Sections */}
            <section id="core-values" className="w-full bg-[#f3ebdf]">
                <CoreValues />
            </section>
            {/* Directors's Message Sections */}
            <section
                id="director-message"
                className="bg-white w-[90%] mx-auto px-6 md:px-20"
            >
                <h2 className="sm:py-16 py-5 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Director's Message
                </h2>
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
                    className="h-full rounded-md overflow-hidden"
                >
                    {directors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative">
                                {/* background image */}
                                <img
                                    src={director.bg}
                                    alt="Director background"
                                    className="w-full object-contain rounded-md"
                                />
                                <div className="absolute top-0 left-0 inset-0 bg-transparent w-full h-full">
                                    <img
                                        src={director.img}
                                        alt={director.name}
                                        className="h-full w-full"
                                    />
                                    <div
                                        className={`w-[50%] ${
                                            director.id === 2 ? "hidden" : ""
                                        } absolute top-0 inset-0 py-10 flex items-center`}
                                    >
                                        <div className="w-[90%] ml-auto flex flex-col items-end justify-center">
                                            <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] text-white md:font-semibold text-justify leading-relaxed 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                {director.message}
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-lg font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className={`w-[50%] ml-auto ${
                                            director.id === 1 ? "hidden" : ""
                                        } absolute top-0 inset-0 py-10 flex items-center`}
                                    >
                                        <div className="w-[90%] mr-auto flex flex-col items-start justify-center">
                                            <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] text-white md:font-semibold text-justify leading-relaxed 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                {director.message}
                                            </div>
                                            <h1 className="text-white 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full text-end 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-lg font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full text-end 2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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
            </section>
            {/* Executive Directors's Message Sections */}
            <section
                id="director-message"
                className="bg-white w-[90%] mx-auto px-6 md:px-20 pb-16"
            >
                <h2 className="sm:py-16 py-5 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Executive Director's Message
                </h2>
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
                    className="h-full rounded-md overflow-hidden"
                >
                    {directors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative">
                                {/* background image */}
                                <img
                                    src={director.bg}
                                    alt="Director background"
                                    className="w-full object-contain rounded-md"
                                />
                                <div className="absolute top-0 left-0 inset-0 bg-transparent w-full h-full">
                                    <img
                                        src={director.img}
                                        alt={director.name}
                                        className="h-full w-full"
                                    />
                                    <div
                                        className={`w-[50%] ${
                                            director.id === 2 ? "hidden" : ""
                                        } absolute top-0 inset-0 py-10 flex items-center`}
                                    >
                                        <div className="w-[90%] ml-auto flex flex-col items-end justify-center">
                                            <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] text-white md:font-semibold text-justify leading-relaxed 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                {director.message}
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-lg font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className={`w-[50%] ml-auto ${
                                            director.id === 1 ? "hidden" : ""
                                        } absolute top-0 inset-0 py-10 flex items-center`}
                                    >
                                        <div className="w-[90%] mr-auto flex flex-col items-start justify-center">
                                            <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] text-white md:font-semibold text-justify leading-relaxed 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                {director.message}
                                            </div>
                                            <h1 className="text-white 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full text-end 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-lg font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full text-end 2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-[8px] md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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
            </section>
        </>
    );
}

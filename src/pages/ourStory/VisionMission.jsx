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
// import RajanPng from "../../assets/Founders/rajan copy.png";
// import NavinPng from "../../assets/Founders/Navin copy.png";
// import ShivaanPng from "../../assets/Founders/shivaan copy.png";
// import SidharthPng from "../../assets/Founders/Sidharth.png";
import RajanPng from "../../assets/Founders/rajan.png";
import NavinPng from "../../assets/Founders/navin.png";
import ShivaanPng from "../../assets/Founders/shivaan.png";
import SidharthPng from "../../assets/Founders/Sidharth.png";

const labels = {
    "#vision-values": "VisionValues",
    "#core-values": "CoreValues",
    "#leadership": "leadership",
};

const directors = [
    {
        id: 1,
        name: "Rajan Sahni",
        role: "Director",
        bg: RajanPng,
        img: RajanPng,
        message: `Innovation is our language-spoken through
              designs that inspire and lead globally. We
              don't just follow trends-we anticipate them,
              crafting future-ready fashion with purpose.
              Every creation is a translation of insight,
              technology, and timeless craftsmanship.`,
    },
    {
        id: 2,
        name: "Navin Sahni",
        role: "Director",
        bg: NavinPng,
        img: NavinPng,
        message: `Our identity is crafted through integrity and defined by an unwavering commitment to brilliance & values that shape every garment, every partnership, and every milestone on our global journey.`,
    },
];

const executiveDirectors = [
    {
        id: 1,
        name: "Shivaan Sahni ",
        role: "Executive Director",
        bg: ShivaanPng,
        img: ShivaanPng,
        message: `Each thread tells a story of trust, transformation, and thoughtful design. We’re weaving a future of equity, innovation, and sustainability. Excellence isn’t just an outcome-it’s our mindset, culture, and commitment.`,
    },
    {
        id: 2,
        name: "Sidharth Sahni",
        role: "Executive Director",
        bg: SidharthPng,
        img: SidharthPng,
        message: `Panorama is a harmony of team strength and individual mastery-each creation rooted in emotion, unity, and excellence. Our legacy is built not just in factories, but in the future, we help uplift.`,
    },
];

export default function VisionMission() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
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

    // swiper for directors...........
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

        // Handle slide change for directors................
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = directors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
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

        swiper.on("slideChange", handleSlideChange);

        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off("slideChange", handleSlideChange);
        };
    }, []);

    // swiper for executive-directors...........
    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        // Set initial slide index
        setCurrentSlideIndex1(0);

        // Initialize autoplay with a slight delay
        const autoplayTimer = setTimeout(() => {
            if (swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, 100);

        // Handle slide change for executive-directors................
        const handleSlideChange1 = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex1(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = executiveDirectors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${
                    executiveDirectors.length
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

        swiper.on("slideChange", handleSlideChange1);

        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off("slideChange", handleSlideChange1);
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
                    <motion.div
                        className="text-white bg-gradient-to-t from-black/90 via-black/80 via-black/70 to-transparent px-[10%] pb-[4%] pt-[10%]"
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Woven into Every Thread
                        </h1>
                        <div className="text-lg sm:text-xl md:text-xl xl:text-2xl mt-4 w-[60%] text-justify font-relaxed">
                            Our vision shapes the future of fashion; our values
                            guide every stitch. We don’t just make clothing-we
                            build trust, innovate with intent, and create with
                            heart.
                        </div>
                    </motion.div>
                </div>
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
            <section id="leadership" className="bg-white">
                <h2 className="w-[90%] mx-auto px-6 md:px-20 sm:py-16 py-5 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Director's Message
                </h2>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    speed={600}
                    autoplay={{
                        delay: 4000,
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
                    className="h-full overflow-hidden bg-[#5b4e39]"
                >
                    {directors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="w-full bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${director.bg})`,
                                    aspectRatio: "16/9", // image ratio wise height ...................
                                }}
                            >
                                <div className="bg-transparent w-full h-full flex items-center">
                                    <div
                                        className={`w-[50%] ${
                                            director.id === 2 ? "hidden" : ""
                                        } py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="w-[90%] ml-auto flex flex-col items-end justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[8px] text-white text-justify leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                    <div
                                        className={`w-[50%] ml-auto ${
                                            director.id === 1 ? "hidden" : ""
                                        } py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="w-[90%] mr-auto flex flex-col items-start justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[8px] text-white text-justify leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"></div>
            </section>
            {/* Executive Directors's Message Sections */}
            <section id="director-message" className="bg-white">
                <h2 className="w-[90%] mx-auto px-6 md:px-20 sm:py-16 py-5 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    Executive Director's Message
                </h2>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    speed={600}
                    autoplay={{
                        delay: 4000,
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
                    className="h-full overflow-hidden bg-[#5b4e39]"
                >
                    {executiveDirectors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="w-full bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${director.bg})`,
                                    aspectRatio: "16/9", // image ratio wise height ...................
                                }}
                            >
                                <div className="bg-transparent w-full h-full flex items-center">
                                    <div
                                        className={`w-[50%] ${
                                            director.id === 2 ? "hidden" : ""
                                        } py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="w-[90%] ml-auto flex flex-col items-end justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[8px] text-white text-justify leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                    <div
                                        className={`w-[50%] ml-auto ${
                                            director.id === 1 ? "hidden" : ""
                                        } py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="w-[90%] mr-auto flex flex-col items-start justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[8px] text-white text-justify leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg md:font-semibold xl:mt-5 md:mt-2">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"></div>
            </section>
        </>
    );
}

/// VisionMission.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

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

import VisionImage from "../../assets/OurStory/visionMission/Vision.jpeg";
import MissionImage from "../../assets/OurStory/visionMission/Mission.jpg";

const labels = {
    "#vision-values": "VisionValues",
    "#core-values": "CoreValues",
    "#leadership": "leadership",
};

// const VisionImages = [
//     {
//         id: 1,
//         image: VisionImage,
//         text: "Vision",
//         subtext: "To be the world’s most trusted apparel partner, championing technology, sustainability, and design excellence.",
//     },
//     {
//         id: 2,
//         image: MissionImage,
//         text: "Mission",
//         subtext: "To exceed expectations through innovation, efficiency, and a people-first culture-redefining global apparel manufacturing.",
//     },
// ];

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

const crumbs = [
    { label: "Vision & Values", path: "/vision-values" },
    { label: "Core Values", path: "/vision-values#core-values" },
    { label: "Leadership", path: "/vision-values#leadership" },
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

    const { ref: visionRef, inView: visionInView } = useInView({
        threshold: 0.3, // 30% of vision & values visible = considered "in view", this for breadcrums control............
    });
    const { ref: corevalueRef, inView: corevalueInView } = useInView({
        threshold: 0.3, // same for core values for breadcrums control............
    });
    const { ref: leadershipRef, inView: leadershipInView } = useInView({
        threshold: 0.3, // same for leadership for breadcrums control............
    });
    
    // Determine which breadcrumb is active
    const activeCrumb = visionInView ? "Vision & Values" : corevalueInView ? "Core Values" : leadershipInView ? "Leadership" : null;

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
            <div
                ref={ref}
                className="w-full h-[100vh] bg-cover bg-center flex flex-col items-start justify-end"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <motion.div
                    className="text-white bg-gradient-to-t from-black/90 via-black/80 via-black/70 to-transparent px-[10%] pb-[4%] pt-[10%]"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Woven into Every Thread
                    </h1>
                    <div className="text-lg sm:text-xl md:text-xl xl:text-2xl mt-4 w-[100%] text-justify font-relaxed">
                        Our vision shapes the future of fashion; our values
                        guide every stitch. We don’t just make clothing-we build
                        trust, innovate with intent, and create with heart.
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div className="sticky top-20 z-40 shadow-md bg-blue-950 text-lg py-3 transition-all duration-300">
                <div className="w-[90%] mx-auto px-6 md:px-20 flex items-center justify-center gap-6">
                    {crumbs.map((crumb, index) => (
                        <span
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <Link
                                to={crumb.path}
                                className={`hover:underline sm:text-xl text-lg sm:my-1 ${
                                    activeCrumb === crumb.label
                                        ? "font-semibold text-white"
                                        : "text-gray-300"
                                }`}
                            >
                                {crumb.label}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>

            {/* Vision Sections */}
            <section id="vision-values" ref={visionRef} className="bg-white">
                {/* <div className="w-[70%] mx-auto px-6 md:px-20 sm:py-16 py-5 grid md:grid-cols-2 xl:gap-20 gap-10">
                    {VisionImages.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden shadow-lg group"
                        >
                            <img
                                src={item.image}
                                alt="vision"
                                className="w-full object-contain transform transition-transform duration-[4000ms] ease-out group-hover:scale-[1.1]"
                            />
                          
                            <div className="absolute inset-0 py-[10%] bg-gradient-to-t from-blue-950/50 via-blue-950/40 via-blue-950/30 via-blue-950/20 to-transparent group-hover:from-blue-950/90 group-hover:via-blue-950/80 group-hover:via-blue-950/50 group-hover:via-blue-950/40 group-hover:to-transparent transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mx-[10%]">
                                    {item.text}
                                </p>
                                <p className="mx-[10%] mt-4 text-white">
                                    {item.subtext}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="bg-white w-full py-16 flex flex-col items-center">
                    {/* Mission and Vision blocks */}
                    <div className="w-full my-5 flex flex-col">
                        <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                            <div className="flex justify-end items-center w-[40%]">
                                <div className="">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-black">
                                        Our Mission
                                        <br />& Vision
                                    </h2>

                                    <div className="mt-2 w-28 lg:w-36 2xl:w-48 h-1 bg-blue-800 rounded border" />
                                    <div className="mt-1 w-28 lg:w-36 2xl:w-48 h-1 bg-gray-400 rounded border" />
                                </div>
                            </div>
                            {/* Mission */}
                            <div className="flex items-center justify-between bg-[#f2f2f2] shadow-xl mb-4 w-[60%]">
                                <div className="flex items-center w-full">
                                    <div className="overflow-hidden flex items-center justify-center relative">
                                        <img
                                            src={MissionImage}
                                            alt="Mission"
                                            className="object-cover w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[250px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[250px]"
                                        />
                                        <div class="absolute inset-0 bg-green-200 mix-blend-multiply opacity-40"></div>
                                    </div>
                                    <div className="mx-8 my-6">
                                        <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-black">
                                            Mission
                                        </h3>
                                        <p className="text-sm xl:text-md 2xl:text-lg text-gray-700 2xl:max-w-xl lg:max-w-md max-w-xs mt-1">
                                            To exceed expectations through
                                            innovation, efficiency, and a
                                            people-first culture—redefining
                                            global apparel manufacturing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex items-center justify-between bg-[#f2f2f2] shadow-xl w-[55%] mt-8 xl:mt-12">
                            <div className="flex items-center justify-end w-full">
                                <div className="text-end mx-8 my-6">
                                    <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-black">
                                        Vision
                                    </h3>
                                    <p className="text-sm xl:text-md 2xl:text-lg text-gray-700 2xl:max-w-xl lg:max-w-md max-w-xs mt-1">
                                        To be the world’s most trusted apparel
                                        partner, championing technology,
                                        sustainability, and design excellence.
                                    </p>
                                </div>
                                <div className="overflow-hidden flex items-center justify-center relative">
                                    <img
                                        src={VisionImage}
                                        alt="Mission"
                                        className="object-cover w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[250px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[250px]"
                                    />
                                    <div class="absolute inset-0 bg-green-300 mix-blend-multiply opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div
                    className="relative w-full h-[100vh] mt-4 flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${visionMission})` }}
                >
                    <div className="absolute inset-0 lg:bg-black/10 md:bg-black/20 bg-black/60" />
                    <div className="relative z-10 w-[90%] mx-auto flex justify-between text-center text-white">
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
                </div> */}
            </section>
            {/* Values Sections */}
            <section
                id="core-values"
                ref={corevalueRef}
                className="w-full bg-[#f3ebdf]"
            >
                <CoreValues />
            </section>
            {/* Directors's Message Sections */}
            <section id="leadership" ref={leadershipRef} className="bg-white">
                <h2 className="w-[90%] mx-auto px-6 md:px-20 sm:py-16 py-5 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        DIRECTOR'S MESSAGE
                    </h1>
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
                                    aspectRatio: "16/7", // image ratio wise height ...................
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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        EXECUTIVE DIRECTOR'S MESSAGE
                    </h1>
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
                                    aspectRatio: "16/7", // image ratio wise height ...................
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

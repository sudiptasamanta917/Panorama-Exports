import { useEffect } from "react";
import { motion } from "framer-motion";

import HumanResources from "./HumanResources";
import HealthSafety from "./HealthSafety";
import PeoplePurpose from "./PeoplePurpose";
import SidharthPng from "../../assets/Founders/Sidharth.png";
import OurStrengthImg from "../../assets/Innovation/Header/frontbg.jpg";
import CommitmentImg from "../../assets/Innovation/Header/frontbg.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/Responsible/Slider1/1.png";
import img2 from "../../assets/Responsible/Slider1/2.png";
import img3 from "../../assets/Responsible/Slider1/3.png";
import img4 from "../../assets/Responsible/Slider1/1.png";
import img5 from "../../assets/Responsible/Slider1/2.png";
import img6 from "../../assets/Responsible/Slider1/3.png";

import MissionImage from "../../assets/OurStory/visionMission/Mission.jpg";
import VisionImage from "../../assets/OurStory/visionMission/Vision.jpeg";

const executiveDirectors = [
    {
        id: 1,
        name: "Sidharth Sahni & Shivaan Sahni",
        role: "Executive Director",
        bg: SidharthPng,
        img: SidharthPng,
        message: `We empower aspirational collaborators with a flexible, globally scaled platform that unlocks potential, nurtures ambition, and enables them to realize their true worth`,
    },
];

const industries = [
    "Aluminium",
    "Carbon black",
    "Copper",
    "Cement",
    "Chemicals",
    "Fibres",
];

const WeBelieveImages = [
    {
        id: 1,
        image: VisionImage,
        text: "Team Work",
        subtext:
            "",
    },
    {
        id: 2,
        image: MissionImage,
        text: "Forward Thinking",
        subtext:
            "",
    },
    {
        id: 1,
        image: VisionImage,
        text: "Speed To Action",
        subtext:
            "",
    },
    {
        id: 2,
        image: MissionImage,
        text: "Customer Centricity",
        subtext:
            "",
    },
];

function Peoples() {

    const images = [img1, img2, img3, img4, img5, img6];

    // Scroll to top when opening the page...........
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="bg-white">
                <div className="w-full h-20 bg-gray-900"></div>
                {/* <div className="w-[90%] mx-auto 2xl:pt-16  py-12 px-6 md:px-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                        People
                    </h2>
                </div>
                <HumanResources />
                <HealthSafety />
                <PeoplePurpose /> */}

                {executiveDirectors.map((director) => (
                    <div
                        key={director.id}
                        className="w-full bg-contain bg-center"
                        style={{
                            backgroundImage: `url(${director.bg})`,
                            aspectRatio: "16/7", // maintain image ratio
                        }}
                    >
                        <div className="bg-transparent w-full h-full flex items-center">
                            {/* Left Side (Hidden for this director id=2) */}
                            {/* <div
                                className={`w-[50%] py-10 flex items-center`}
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
                                    viewport={{ once: false, amount: 0.3 }}
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
                            </div> */}

                            {/* Right Side (Visible for id=2) */}
                            <div
                                className={`w-[50%] ml-auto py-10 flex items-center`}
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
                                    viewport={{ once: false, amount: 0.3 }}
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
                                    <h1 className="text-white w-full text-end 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                        {director.name}
                                    </h1>
                                    <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg md:font-semibold xl:mt-5 md:mt-2">
                                        {director.role}
                                    </h3>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            {/* <section className="bg-blue-950 w-full h-14"></section> */}
            <section>
                <div className="w-[80%] mx-auto 2xl:pt-16 py-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        People
                    </h2>
                    <p className="text-sm sm:text-md lg:text-lg py-3 mt-5 text-justify leading-relaxed">
                        Driven by our People First ethos, Panorama Exports
                        embraces integrity, inclusivity, and respect as the
                        cornerstones of its culture. Through collaboration and
                        meaningful connections, we empower our people to deliver
                        impactful, equitable, and lasting results.
                    </p>
                </div>
            </section>
            <section className="w-full bg-blue-950 flex justify-center py-20">
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[45%] pl-10 pr-20 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-950">
                            Our Strength
                        </h2>
                        <p className="mt-4 leading-relaxed text-sm md:text-base text-justify">
                            The true fabric of Panorama is made of people -
                            5,000 individuals, each adding their own thread of
                            talent, passion, and creativity. With women making
                            up half our team, we are proud to champion equality,
                            empowerment, and opportunity for all. We invest in
                            skills, foster safe and inclusive spaces, and
                            encourage every voice to be part of our shared
                            journey. When our people grow, we grow
                            together—building a company where success is
                            measured not just in output, but in the lives, we
                            enrich.
                        </p>

                        {/* Industry Links */}
                        {/* <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">
                            {industries.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center gap-2 text-red-700 hover:text-red-900 text-sm md:text-base"
                                >
                                    {item} <FaArrowRight className="text-xs" />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[55%]">
                        <img
                            src={OurStrengthImg}
                            alt="Innovation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="w-[80%] mx-auto 2xl:pt-16 py-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        Life at Panorama
                    </h2>
                </div>
                <div className="w-[80%] mx-auto">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                            bulletClass:
                                "swiper-pagination-bullet !bg-gray-400",
                            bulletActiveClass:
                                "swiper-pagination-bullet-active !bg-blue-500",
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-6"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="w-full h-auto bg-white">
                                    <img
                                        src={img}
                                        alt={`gallery-${i}`}
                                        className="w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom pagination container BELOW images */}
                    <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
                </div>
            </section>

            <section>
                <div className="w-[80%] mx-auto 2xl:pt-16 py-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        We believe in
                    </h2>
                </div>
                <div className="w-[80%] mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-4">
                    {WeBelieveImages.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden shadow-lg group"
                        >
                            <img
                                src={item.image}
                                alt="vision"
                                className="w-full object-contain transform transition-transform duration-[4000ms] ease-out group-hover:scale-[1.1]"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 py-[10%] bg-gradient-to-t from-blue-950/50 via-blue-950/40 via-blue-950/30 via-blue-950/20 to-transparent group-hover:from-blue-950/90 group-hover:via-blue-950/80 group-hover:via-blue-950/50 group-hover:via-blue-950/40 group-hover:to-transparent transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-white text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mx-[10%] text-center">
                                    {item.text}
                                </p>
                                <p className="mx-[10%] mt-4 text-white">
                                    {item.subtext}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full bg-blue-950 flex justify-center py-20">
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[45%] pl-10 pr-20 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-950">
                            Commitment to Care & Compliance
                        </h2>
                        <p className="mt-4 leading-relaxed text-sm md:text-base text-justify">
                            Panorama fosters a culture of accountability,
                            ensuring rigorous compliance with global labour
                            laws, buyer mandates, and ethical business
                            practices. Our unwavering commitment to workers’
                            rights and brand protection is anchored in:
                            <p>• Ensuring Workplace Safety & Fair Wages </p>
                            <p>• Promoting Equality & Zero Discrimination </p>
                            <p>• Banning Child & Forced Labour</p>
                            <p>
                                • Maintaining Ethical & Safe Working Conditions
                            </p>
                            We take a firm stand against workplace misconduct,
                            reinforcing a zero tolerance approach to harassment,
                            discrimination, and exploitation-upholding dignity,
                            respect, and fairness for all.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[55%]">
                        <img
                            src={CommitmentImg}
                            alt="Innovation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Peoples;

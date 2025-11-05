import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aet from "../../assets/Crafted_Precision/Sustainable_Designs/2.png";
import aet1 from "../../assets/Crafted_Precision/Sustainable_Designs/1.png";
import aet2 from "../../assets/Crafted_Precision/Sustainable_Designs/3.png";
import aet3 from "../../assets/Crafted_Precision/Sustainable_Designs/Sus.png";

const mfgImages = [
    {
        title: "manufacturing excellence",
        img: aet,
    },
];

function SustainableDesigns() {
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

        // Handle slide change for mfgImages................
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = mfgImages[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${
                    mfgImages.length
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

    return (
        <>
            <section className="bg-white">
                <div className="w-full h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto py-16 px-6 md:px-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        SUSTAINABLE DESIGNS
                    </h1>
                    {/* <h3 className="mt-5">
                      To enrich lives by building a dynamic, responsible, and
                      trusted global enterprise.
                  </h3> */}
                </div>
                <div className="mb-10">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        initialSlide={0}
                        speed={600}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            waitForTransition: true,
                            enabled: true,
                        }}
                        className="w-full overflow-hidden bg-[#5b4e39]"
                    >
                        {mfgImages.map((mfg, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative">
                                    {/* background image */}
                                    <img
                                        src={mfg.img}
                                        alt={mfg.title}
                                        className="w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="my-16 text-justify md:w-[70%] w-[95%] mx-auto text-xl text-blue-950">
                    <p className="font-bold text-2xl my-2 text-center">
                        Sustainable Designs
                    </p>
                    Blending heritage craftsmanship with advanced,
                    resource-efficient systems, we transform creativity into
                    conscious innovation. Every piece we create reflects a
                    commitment to reducing waste, maximizing value, and shaping
                    a more sustainable future for fashion.
                </div>
            </section>
            {/* Images Area */}
            <section className="grid grid-cols-3 gap-0">
                <div className="">
                    <img src={aet1} alt="" />
                </div>
                <div className="border-x-2 border-blue-800">
                    <img src={aet2} alt="" />
                </div>
                <div className="">
                    <img src={aet3} alt="" />
                </div>
            </section>
        </>
    );
}

export default SustainableDesigns;

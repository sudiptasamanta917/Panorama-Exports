import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mfg from "../../assets/Crafted_Precision/Smart_Warehousing/mfg.png";
import mfg1 from "../../assets/Crafted_Precision/Smart_Warehousing/1.png";
import mfg2 from "../../assets/Crafted_Precision/Smart_Warehousing/2.png";
import mfg3 from "../../assets/Crafted_Precision/Smart_Warehousing/3.jpg";

const mfgImages = [
    {
        title: "Smart Warehousing",
        img: mfg,
    },
];

function SmartWarehousing() {
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
                        SMART WAREHOUSING
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
                        Smart Warehousing
                    </p>
                    Powered by intelligent automation and digital precision, our
                    warehousing ecosystem ensures every garment moves seamlessly
                    from line to logistics. Real-time tracking, optimized
                    storage, and streamlined dispatch make efficiency not just a
                    process—but a promise.
                </div>
            </section>
            {/* Images Area */}
            <section className="grid grid-cols-3 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                <div className="">
                    <img src={mfg1} alt="" />
                </div>
                <div className="">
                    <img src={mfg2} alt="" />
                </div>
                <div className="">
                    <img src={mfg3} alt="" />
                </div>
            </section>
        </>
    );
}

export default SmartWarehousing;

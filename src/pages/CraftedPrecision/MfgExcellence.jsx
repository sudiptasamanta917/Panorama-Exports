import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mfg1 from "../../assets/Crafted_Precision/Manufacturing_Excellence/1.png";
import mfg2 from "../../assets/Crafted_Precision/Manufacturing_Excellence/2.png";
import mfg3 from "../../assets/Crafted_Precision/Manufacturing_Excellence/3.png";

const mfgImages = [
    {
        title: "manufacturing excellence",
        img: mfg1,
    },
    {
        title: "manufacturing excellence",
        img: mfg2,
    },
    {
        title: "manufacturing excellence",
        img: mfg3,
    },
];

function MfgExcellence() {
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                        Manufacturing Excellence
                    </h2>
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
                <div className="my-16 text-center w-[90%] mx-auto text-xl text-blue-950">
                    <p className="font-bold">Manufacturing Excellence </p>Five
                    high-tech cut-to-pack production units form the core of our
                    capabilities—driven by cutting-edge technology and the
                    craftsmanship of our talented teams, ensuring precision from
                    first cut to final pack.
                </div>
            </section>
        </>
    );
}

export default MfgExcellence;

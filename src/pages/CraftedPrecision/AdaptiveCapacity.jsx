import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aet1 from "../../assets/Crafted_Precision/Adaptive_Capacity/01.jpg";
import aet2 from "../../assets/Crafted_Precision/Adaptive_Capacity/02.jpg";
import aet3 from "../../assets/Crafted_Precision/Adaptive_Capacity/03.jpg";

const mfgImages = [
    {
        title: "Adaptive Capacity",
        img: aet1,
    },
    {
        title: "Adaptive Capacity",
        img: aet2,
    },
    {
        title: "Adaptive Capacity",
        img: aet3,
    },
];

function AdaptiveCapacity() {
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
                        Adaptive Capacity
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
                        className="h-full overflow-hidden bg-[#5b4e39]"
                    >
                        {mfgImages.map((mfg, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative">
                                    {/* background image */}
                                    <img
                                        src={mfg.img}
                                        alt={mfg.title}
                                        className="w-full h-[60vh] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="my-16 text-center w-[90%] mx-auto text-xl text-blue-950">
                    <p className="font-bold">Adaptive Capacity</p>
                    Flexible operations that scale efficiently for every order
                    ensuring the consistency and cohesion that define our “Made
                    in India” promise.
                </div>
            </section>
        </>
    );
}

export default AdaptiveCapacity;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aet1 from "../../assets/Crafted_Precision/Art_in_Every_Thread/1.png";
import aet2 from "../../assets/Crafted_Precision/Art_in_Every_Thread/2.png";
import aet3 from "../../assets/Crafted_Precision/Art_in_Every_Thread/3.png";

const mfgImages = [
    {
        title: "manufacturing excellence",
        img: aet2,
    },
];

const VisionImages = [
    {
        id: 1,
        image: aet1,
        text: "",
        subtext: "",
    },
    {
        id: 2,
        image: aet3,
        text: "",
        subtext: "",
    },
];

function ArtInEveryThread() {
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
                        ART IN EVERY THREAD
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
                <div className="my-16 md:w-[70%] w-[95%] mx-auto text-xl text-blue-950 text-justify">
                    <p className="font-bold text-2xl my-2 text-center">
                        Art in Every Thread
                    </p>
                    Bridging innovation and heritage, our modern embroidery
                    ecosystem delivers superior intricacy and flawless
                    execution. Each design is crafted with engineered precision
                    and creative mastery, reflecting a harmony of tradition,
                    technology, and aesthetic excellence.
                </div>
            </section>
            <section className="">
                <div className="lg:w-[100%] mx-auto px-6 md:px-8 lg:px-10 2xl:px-12 md:py-12 py-5 grid lg:grid-cols-2 2xl:gap-12 lg:gap-10 md:gap-8 gap-6">
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
                            {/* Overlay */}
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
                </div>
            </section>
        </>
    );
}

export default ArtInEveryThread;

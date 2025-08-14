import { useState, useRef, useEffect } from "react";
import Media1 from "../assets/Media/media_1.png";
import Media2 from "../assets/Media/media_2.jpg";

const stats = [
    { number: "7000+", label: "EMPLOYEES" },
    { number: "50%", label: "WOMENS" },
    { number: "18 MILLION", label: "ANNUALLY GARMENTS" },
    { number: "5", label: "UNITS" },
];

const images = [Media1, Media2];

const MediaScrollSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [enableTransition, setEnableTransition] = useState(true);
    const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    // Animate number counts
    const animateCounts = () => {
        setAnimatedNumbers(stats.map(() => 0)); // reset before animating

        stats.forEach((stat, index) => {
            // Extract numeric value
            const match = stat.number.match(/[\d,\.]+/);
            const targetValue = match
                ? parseFloat(match[0].replace(/,/g, ""))
                : 0;

            const increment = Math.max(1, Math.ceil(targetValue / 80)); // smooth speed

            const interval = setInterval(() => {
                setAnimatedNumbers((prev) => {
                    const newValues = [...prev];
                    if (newValues[index] < targetValue) {
                        newValues[index] = Math.min(
                            newValues[index] + increment,
                            targetValue
                        );
                    } else {
                        clearInterval(interval);
                    }
                    return newValues;
                });
            }, 40); // ms per frame
        });
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounts();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current && sectionRef.current) {
                observerRef.current.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Carousel logic
    const extended = [...images, images[0]];

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((i) => i + 1);
        }, 2000);
        return () => clearInterval(id);
    }, []);

    const handleTransitionEnd = () => {
        if (currentIndex === images.length) {
            setEnableTransition(false);
            setCurrentIndex(0);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setEnableTransition(true));
            });
        }
    };

    return (
        <div className="bg-white w-[90%] mx-auto px-6 md:px-20 py-10 flex gap-4">
            <div
                ref={sectionRef}
                className="xl:w-[60%] w-[50%] grid grid-cols-2 xl:gap-6 gap-4"
            >
                {stats.map((stat, index) => {
                    const match = stat.number.match(/[\d,\.]+/);
                    const suffix = stat.number.replace(/[\d,\.]+/, "");
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl hover:shadow-xl transition-shadow duration-300"
                            style={{
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.15), 0 -4px 12px rgba(0,0,0,0.1)",
                            }}
                        >
                            <span className="2xl:text-4xl xl:text-3xl text-2xl font-bold text-gray-800">
                                {animatedNumbers[index]}
                                {suffix}
                            </span>
                            <span className="2xl:text-lg xl:text-md text-sm font-semibold tracking-wide text-gray-500 mt-1">
                                {stat.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="xl:w-[40%] w-[50%] overflow-hidden rounded-lg">
                <div
                    onTransitionEnd={handleTransitionEnd}
                    className={`flex ${
                        enableTransition
                            ? "transition-transform duration-700"
                            : ""
                    }`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {extended.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-full h-[50vh] flex-shrink-0 bg-center bg-cover"
                            style={{ backgroundImage: `url(${src})` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaScrollSection;

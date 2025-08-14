import { useEffect, useRef, useState } from "react";
import globalMap from "../assets/GlobalFootprint/map.png";

export default function GlobalMap() {
    const [countries, setCountries] = useState(0);
    const [offices, setOffices] = useState(0);
    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    const animateCounts = () => {
        setCountries(0);
        setOffices(0);

        let cInterval = setInterval(() => {
            setCountries((prev) => {
                if (prev < 35) return prev + 1;
                clearInterval(cInterval);
                return prev;
            });
        }, 80); // slower speed (100ms per increment)

        let oInterval = setInterval(() => {
            setOffices((prev) => {
                if (prev < 120) return prev + 1;
                clearInterval(oInterval);
                return prev;
            });
        }, 20); // slower speed for offices
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounts(); // replay animation every time it appears
                    }
                });
            },
            { threshold: 0.5 } // triggers when 50% visible
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

    return (
        <div
            ref={sectionRef}
            className="bg-gradient-to-r from-green-500 to-blue-900 px-6 md:px-20 xl:h-[60vh] h-[50vh] w-full mt-2 text-white flex items-center justify-between gap-6 relative"
        >
            <div className="xl:h-[50vh] h-[40vh] xl:w-[40%] w-[50%]">
                <h1 className="mt-5 2xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] text-center">
                    Worldwide Expansion
                </h1>
                <div className="mt-20 flex justify-center items-center gap-8">
                    <div className="text-xl flex items-center gap-2 text-gray-300">
                        <p className="text-4xl font-semibold text-red-950">
                            {countries}+
                        </p>{" "}
                        Countries
                    </div>
                    <div className="text-xl flex items-center gap-2 text-gray-300">
                        <p className="text-4xl font-semibold text-red-950">
                            {offices}+
                        </p>{" "}
                        Offices
                    </div>
                </div>
            </div>

            <div
                className={`bg-[url(${globalMap})] xl:w-[60%] w-[50%] xl:h-[50vh] h-[40vh] bg-contain bg-no-repeat relative z-10 flex flex-col items-center justify-center w-full h-full`}
            ></div>
        </div>
    );
}

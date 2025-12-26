import { useEffect, useRef } from "react";

const AutoPlayVideo = ({
    src,
    loopTime = 5000,
    threshold = 0.5,
    className = "",
    videoClassName = "",
    bgColor = "#000",
}) => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();

                    intervalRef.current = setInterval(() => {
                        if (videoRef.current) {
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                        }
                    }, loopTime);
                } else {
                    videoRef.current?.pause();
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            },
            { threshold }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [loopTime, threshold]);

    return (
        <div
            ref={sectionRef}
            className={`w-full overflow-hidden ${className}`}
            style={{ backgroundColor: bgColor }}
        >
            <video
                ref={videoRef}
                src={src}
                muted
                playsInline
                preload="auto"
                className={`w-full h-auto object-cover ${videoClassName}`}
            />
        </div>
    );
};

export default AutoPlayVideo;

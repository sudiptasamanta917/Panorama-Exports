import React, { useState, useEffect } from "react";
import craftingTomorrowImage from "../assets/CraftingTomorrow/panorama crafting tomorrow image.jpeg";
import { CiPlay1 } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function CraftingTomorrow() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            {/* Crafting Tomorrow Content */}
            <div
                style={{
                    backgroundImage: `url(${craftingTomorrowImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                }}
                className="pt-4 w-full h-screen text-white flex flex-col items-center justify-center relative"
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-7xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
                        Crafting Tomorrow
                    </h1>

                    <div className="mt-4 text-2xl shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] text-center max-w-5xl">
                        True fashion tells a bigger story—of people, purpose, and
                        planet. With every thread, we strive to weave dignity into
                        design, merging timeless artistry with a future-forward
                        responsibility.
                    </div>

                    <button
                        onClick={handleToggleModal}
                        className="mt-10 group inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-white bg-transparent border-white hover:bg-white hover:text-blue-900 text-lg font-semibold shadow-[0_6px_10px_#ffffff88] hover:shadow-[0_8px_12px_#ffffffcc] transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Watch Now
                        <CiPlay1 className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            {/*video Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 border">
                    <div className="relative w-full max-w-4xl aspect-video">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-white text-3xl z-10"
                            onClick={handleToggleModal}
                        >
                            <IoClose />
                        </button>

                        {/* YouTube Iframe */}
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/kUTbjidUD4Q?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

import React, { useEffect, useRef } from "react";

import C1 from "../assets/Certificates/c1.jpg";
import C2 from "../assets/Certificates/c2.jpg";
import C3 from "../assets/Certificates/c3.jpg";
import C4 from "../assets/Certificates/c4.jpg";
import C5 from "../assets/Certificates/c5.jpg";
import C6 from "../assets/Certificates/c6.jpg";
import C7 from "../assets/Certificates/c7.jpg";
import C8 from "../assets/Certificates/c8.jpg";
import C9 from "../assets/Certificates/c9.jpg";
import C10 from "../assets/Certificates/c10.jpg";
import C11 from "../assets/Certificates/c11.jpg";
import C12 from "../assets/Certificates/c12.jpg";

const certificates = [
    { id: 1, src: C1, alt: "Certificate 1" },
    { id: 2, src: C2, alt: "Certificate 2" },
    { id: 3, src: C3, alt: "Certificate 3" },
    { id: 4, src: C4, alt: "Certificate 4" },
    { id: 5, src: C5, alt: "Certificate 5" },
    { id: 6, src: C6, alt: "Certificate 6" },
    { id: 7, src: C7, alt: "Certificate 7" },
    { id: 8, src: C8, alt: "Certificate 8" },
    { id: 9, src: C9, alt: "Certificate 9" },
    { id: 10, src: C10, alt: "Certificate 10" },
    { id: 11, src: C11, alt: "Certificate 11" },
    { id: 12, src: C12, alt: "Certificate 12" },
];

const CertificateSlider = () => {
   

    return (
        <div className="overflow-hidden w-full">
            {/* scrolling container */}
            <div className="flex animate-scroll">
                {[...certificates, ...certificates].map((cert, idx) => (
                    <div
                        key={idx}
                        className="2xl:w-1/4 lg:w-1/3 w-1/2 gap-4 flex-shrink-0 p-4 flex items-center justify-center"
                    >
                        <img
                            src={cert.src}
                            alt={cert.alt}
                            className="w-full object-contain rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.2)]"
                        />
                    </div>
                ))}
            </div>

            {/* Tailwind custom animation */}
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default CertificateSlider;

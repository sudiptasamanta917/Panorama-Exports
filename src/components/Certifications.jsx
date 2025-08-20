import React, { useEffect, useRef } from "react";

import C1 from "../assets/Certificates/cert 1.png";
import C2 from "../assets/Certificates/cert 2.png";
import C3 from "../assets/Certificates/cert 3.png";
import C4 from "../assets/Certificates/cert 4.png";
import C5 from "../assets/Certificates/cert 5.png";
import C6 from "../assets/Certificates/cert 6.png";
import C7 from "../assets/Certificates/cert 7.png";
import C8 from "../assets/Certificates/cert 8.png";

const certificates = [
    { id: 1, src: C1, alt: "Certificate 1" },
    { id: 2, src: C2, alt: "Certificate 2" },
    { id: 3, src: C3, alt: "Certificate 3" },
    { id: 4, src: C4, alt: "Certificate 4" },
    { id: 5, src: C5, alt: "Certificate 5" },
    { id: 6, src: C6, alt: "Certificate 6" },
    { id: 7, src: C7, alt: "Certificate 7" },
    { id: 8, src: C8, alt: "Certificate 8" },
];

const CertificateSlider = () => {
   

    return (
        <div className="p-6 w-[90%] mx-auto md:px-20">
            {/* grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:w-[60%] lg:w-[80%] mx-auto">
                {certificates.map((cert, idx) => (
                    <div key={idx} className="">
                        <img
                            src={cert.src}
                            alt={cert.alt}
                            className="object-contain shadow-[0_0_12px_rgba(0,0,0,0.2)]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateSlider;

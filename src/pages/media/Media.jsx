import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Media() {
    const [numPages, setNumPages] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    const handleLoadSuccess = ({ numPages }) => setNumPages(numPages);

    //  Update width on resize (for responsiveness)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-100vw min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full h-20 bg-gray-900"></div>

            <div className="w-full flex justify-center overflow-auto">
                <Document
                    file="/media/November2025.pdf"
                    onLoadSuccess={handleLoadSuccess}
                    onLoadError={(err) => console.error("PDF load error:", err)}
                    className="w-full flex flex-col items-center"
                >
                    {Array.from(new Array(numPages), (_, i) => (
                        <Page
                            key={`page_${i + 1}`}
                            pageNumber={i + 1}
                            width={Math.min(width, 1600)}
                            className="mb-4 shadow-lg"
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}

export default Media;

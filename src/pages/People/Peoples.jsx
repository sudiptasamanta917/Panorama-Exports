import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "../../assets/People/Human_Resources/01.jpg";
import p2 from "../../assets/People/Human_Resources/02.jpg";
import p3 from "../../assets/People/Human_Resources/03.jpg";
import p4 from "../../assets/People/Human_Resources/05.jpg";
import HumanResources from "./HumanResources";

const peopleImages = [
    {
        src: p1,
        alt: "Human_Resources 1",
    },
    {
        src: p2,
        alt: "Human_Resources 2",
    },
    {
        src: p3,
        alt: "Human_Resources 3",
    },
    {
        src: p4,
        alt: "Human_Resources 3",
    },
];

function Peoples() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? peopleImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === peopleImages.length - 1 ? 0 : prev + 1));
    };

  return (
      <>
          <section className="bg-white pb-10">
              <div className="w-full h-20 bg-gray-900"></div>
              <div className="w-[90%] mx-auto py-16 px-6 md:px-20">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                      Human Resources
                  </h2>
              </div>
              <HumanResources />
          </section>
          <section className="bg-white">
              <div className="w-[90%] mx-auto py-16 px-6 md:px-20">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                      Human Resources
                  </h2>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                  <div
                      className="relative flex items-center justify-center w-full h-[400px] overflow-hidden"
                      style={{
                          perspective: "2000px",
                          transformStyle: "preserve-3d",
                          WebkitTransformStyle: "preserve-3d",
                          WebkitBackfaceVisibility: "hidden",
                          backfaceVisibility: "hidden",
                      }}
                  >
                      {peopleImages.map((pImg, i) => {
                          let style = {};
                          let classNames = `absolute transition-all duration-700 ease-in-out bg-blue-900 flex items-center justify-center transform-gpu ${
                              i === index
                                  ? "w-[30%] z-20 shadow-2xl border-[12px] border-blue-900 scale-100 opacity-100"
                                  : "w-[43%] scale-90 z-10 opacity-90"
                          }`;

                          if (i === index) {
                              style = {
                                  transform:
                                      "rotateY(0deg) translateX(0) scale(1)",
                                  opacity: 1,
                                  backfaceVisibility: "hidden",
                                  WebkitBackfaceVisibility: "hidden",
                              };
                          } else if (i === (index + 1) % peopleImages.length) {
                              style = {
                                  transform:
                                      "rotateY(-40deg) translateX(82%) scale(0.85)",
                                  opacity: 0.9,
                                  backfaceVisibility: "hidden",
                                  WebkitBackfaceVisibility: "hidden",
                              };
                          } else if (
                              i ===
                              (index - 1 + peopleImages.length) %
                                  peopleImages.length
                          ) {
                              style = {
                                  transform:
                                      "rotateY(40deg) translateX(-82%) scale(0.85)",
                                  opacity: 0.9,
                                  backfaceVisibility: "hidden",
                                  WebkitBackfaceVisibility: "hidden",
                              };
                          } else {
                              classNames += " hidden";
                          }

                          return (
                              <div key={i} className={classNames} style={style}>
                                  <img
                                      src={pImg.src}
                                      alt={pImg.alt}
                                      className={`w-full ${
                                          i === index
                                              ? "h-[300px]"
                                              : "h-[310px]"
                                      }  object-cover`}
                                  />
                              </div>
                          );
                      })}
                  </div>

                  <div className="flex gap-8 mb-10 mt-2">
                      <button
                          onClick={prevSlide}
                          className="px-1 py-[2px] flex items-center justify-center border border-gray-400 hover:bg-gray-100"
                      >
                          <ChevronLeft />
                      </button>
                      <button
                          onClick={nextSlide}
                          className="px-1 py-[2px] flex items-center justify-center border border-gray-400 hover:bg-gray-100"
                      >
                          <ChevronRight />
                      </button>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Peoples


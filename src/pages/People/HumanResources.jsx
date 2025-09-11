import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "../../assets/People/Human_Resources/01.jpg";
import p2 from "../../assets/People/Human_Resources/02.jpg";
import p3 from "../../assets/People/Human_Resources/03.jpg";
import p4 from "../../assets/People/Human_Resources/05.jpg";

function HumanResources() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

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

  const goTo = (newIndex) => {
    setPrevIndex(index);       // store old index
    setIndex(newIndex);        // set new index
    setTimeout(() => {
      setPrevIndex(null);      // clear old index AFTER animation
    }, 700); // match duration-700
  };

  const prevSlide = () => {
    goTo(index === 0 ? peopleImages.length - 1 : index - 1);
  };

  const nextSlide = () => {
    goTo(index === peopleImages.length - 1 ? 0 : index + 1);
  };

  return (
      <div
          className="relative flex items-center justify-center w-full h-[400px]"
          style={{ perspective: "2000px" }}
      >
          {peopleImages.map((pImg, i) => {
              let style = {};
              let classNames =
                  "absolute transition-all duration-700 ease-in-out transform-gpu w-[40%]";

              if (i === index) {
                  // center
                  style = {
                      transform: "translateX(0) rotateY(0deg) scale(1)",
                      opacity: 1,
                      zIndex: 20,
                  };
                  classNames += " shadow-2xl border-[12px] border-blue-900";
              } else if (i === (index + 1) % peopleImages.length) {
                  // right card
                  style = {
                      transform: "translateX(82%) rotateY(-40deg) scale(0.85)",
                      opacity: 1,
                      zIndex: 10,
                  };
              } else if (
                  i ===
                  (index - 1 + peopleImages.length) % peopleImages.length
              ) {
                  // left card
                  style = {
                      transform: "translateX(-82%) rotateY(40deg) scale(0.85)",
                      opacity: 1,
                      zIndex: 10,
                  };
              } else {
                  // keep them mounted but invisible
                  style = {
                      transform: "translateX(0) rotateY(0deg) scale(0.8)",
                      opacity: 0,
                      zIndex: 0,
                  };
              }

              return (
                  <div key={i} className={classNames} style={style}>
                      <img
                          src={pImg.src}
                          alt={pImg.alt}
                          className="w-full h-[310px] object-cover"
                      />
                  </div>
              );
          })}

          {/* buttons */}
          <div className="absolute top-[100%] flex gap-8 mb-10 border">
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
  );
}

export default HumanResources;
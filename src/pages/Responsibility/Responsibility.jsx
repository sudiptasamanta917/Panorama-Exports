import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";

function Responsibility() {

    return (
        <section className="w-full">
            <div className="w-full h-20 bg-gray-900"></div>
            <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                Responsibility Route
                <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1">
                    Sustainability is stitched into everything we do.
                </div>
            </div>

            {/* Slider1 wrapper */}
            <Slider1 />
            <div className="w-full h-14 bg-gray-900"></div>
            {/* Slider2 wrapper */}
            <Slider2 />
            <div className="w-full h-14 bg-gray-900"></div>
            {/* Slider2 wrapper */}
            <Slider3 />
            <div className="w-full h-14 bg-gray-900"></div>
            {/* Slider2 wrapper */}
            <Slider4 />
        </section>
    );
}

export default Responsibility;

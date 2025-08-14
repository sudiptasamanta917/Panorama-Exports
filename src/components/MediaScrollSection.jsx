import Media1 from "../assets/Media/media_1.png";
import Media2 from "../assets/Media/media_2.jpg";
import Media3 from "../assets/Media/media_3.jpg";
import FlipCard from "./FlipCard";

// const images = [Media1, Media2, Media3];
const stats = [
    { number: "7000+", label: "EMPLOYEES" },
    { number: "50%", label: "WOMENS" },
    { number: "18 MILLION", label: "ANNUALLY GARMENTS" },
    { number: "5", label: "UNITS" },
];

const MediaScrollSection = () => {
    return (
        <div className="bg-white w-[90%] mx-auto px-6 md:px-20 py-10 flex">
            <div className="w-[60%] grid grid-cols-2 gap-2">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center p-8 text-center ${
                            index !== stats.length - 1
                                ? "sm:border-r border-gray-300"
                                : ""
                        }`}
                    >
                        <span className="2xl:text-4xl xl:text-3xl text-2xl font-bold text-gray-500">
                            {stat.number}
                        </span>
                        <span className="2xl:text-lg xl:text-md text-sm font-semibold tracking-wide text-gray-500 mt-1">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="w-[40%]"><img src={Media1} alt="" /></div>
        </div>
    );
};

export default MediaScrollSection;

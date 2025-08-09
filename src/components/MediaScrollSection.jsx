import Media1 from "../assets/Media/media_1.png";
import Media2 from "../assets/Media/media_2.jpg";
import Media3 from "../assets/Media/media_3.jpg";
import FlipCard from "./FlipCard";

const images = [Media1, Media2, Media3];

const MediaScrollSection = () => {
    return (
        <div className="text-white text-center">
            <div className="grid grid-cols-3">
                {images.map((src, i) => (
                    <div key={i} className="">
                        <FlipCard imageUrl={src} text={""} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaScrollSection;

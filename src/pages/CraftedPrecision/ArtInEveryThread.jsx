import React from "react";

const ArtInEveryThread = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/art-thread-bg.jpg')", // replace with your image path
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 animate-fadeInDown">
          Art in Every Thread
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl leading-relaxed font-light mb-10 animate-fadeInUp">
          State-of-the-art embroidery units for{" "}
          <span className="font-semibold text-yellow-300">
            intricate craftsmanship
          </span>{" "}
          & revolutionary quality.
        </p>

        {/* Decorative line */}
        <div className="w-32 h-1 bg-yellow-400 mx-auto mb-10 animate-scaleIn"></div>

        {/* Feature Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 animate-fadeInLeft">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
              Intricate Craftsmanship
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Our embroidery units merge heritage artistry with modern design,
              ensuring each garment carries a story of dedication and detail.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 animate-fadeInRight">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
              Revolutionary Quality
            </h3>
            <p className="text-gray-200 leading-relaxed">
              With advanced machines and skilled artisans, we achieve precision
              that redefines embroidery for global fashion.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards 0.3s; }
          .animate-fadeInLeft { animation: fadeInLeft 1s ease forwards 0.5s; }
          .animate-fadeInRight { animation: fadeInRight 1s ease forwards 0.7s; }
          .animate-scaleIn { animation: scaleIn 1s ease forwards 0.9s; }
        `}
      </style>
    </div>
  );
};

export default ArtInEveryThread;

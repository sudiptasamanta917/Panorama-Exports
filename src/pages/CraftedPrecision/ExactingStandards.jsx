import React from "react";

const ExactingStandards = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/exacting-standards-bg.jpg')", // replace with your image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6 animate-fadeInDown">
          Exacting Standards
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl leading-relaxed font-light mb-12 animate-fadeInUp">
          Each garment tells its own{" "}
          <span className="text-yellow-400 font-semibold">unique sourcing story</span>{" "}
          and travels a carefully managed journey from start to finish—
          passing through{" "}
          <span className="text-yellow-400 font-semibold">multi-stage quality checks</span>{" "}
          to meet our uncompromising standards.
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 animate-fadeInLeft">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              1. Sourcing
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Carefully chosen raw materials from trusted partners, ensuring authenticity and sustainability.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 animate-scaleIn">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              2. Crafting
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Skilled artisans and modern technology combine to shape garments with precision and care.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 animate-fadeInRight">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              3. Quality Checks
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Multiple inspection stages guarantee durability, comfort, and flawless finishing.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
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

export default ExactingStandards;

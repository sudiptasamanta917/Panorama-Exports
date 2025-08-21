import React from "react";

const SustainableDesigns = () => {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 tracking-wide mb-6 animate-fadeInDown">
                    Sustainable Designs
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-light mb-12 animate-fadeInUp">
                    We blend <span className="text-green-600 font-semibold">timeless design</span>{" "}
                    with <span className="text-green-600 font-semibold">lean processes</span> to
                    reduce waste and maximize impact.
                </p>

                {/* 3 Highlights */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {/* Card 1 */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate-fadeInLeft">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                            🌱
                        </div>
                        <h3 className="text-xl font-semibold text-green-700 mb-3">
                            Eco-friendly Materials
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Using sustainable fabrics and ethical sourcing to minimize environmental impact.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate-scaleIn">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                            ♻️
                        </div>
                        <h3 className="text-xl font-semibold text-green-700 mb-3">
                            Lean Processes
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Streamlined production ensures less waste, energy efficiency, and optimized resources.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate-fadeInRight">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                            🌍
                        </div>
                        <h3 className="text-xl font-semibold text-green-700 mb-3">
                            Maximum Impact
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Designs that last longer, look timeless, and contribute to a better tomorrow.
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

export default SustainableDesigns;

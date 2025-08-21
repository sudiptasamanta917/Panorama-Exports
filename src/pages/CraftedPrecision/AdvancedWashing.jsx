import React from "react";

const AdvancedWashing = () => {
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 tracking-wide mb-6 animate-fadeInDown">
                    Advanced Washing
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-light mb-12 animate-fadeInUp">
                    From <span className="text-blue-600 font-semibold">enzyme washes</span> to{" "}
                    <span className="text-blue-600 font-semibold">complex finishes</span>, our
                    technology ensures <span className="font-bold text-gray-800">consistency</span>{" "}
                    at every step.
                </p>

                {/* 3 Tech Process Highlights */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {/* Step 1 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate-fadeInLeft">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
                            🧪
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">
                            Enzyme Precision
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Controlled enzyme applications enhance softness while preserving fabric strength.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate-scaleIn">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
                            ⚙️
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">
                            Complex Finishes
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            From stone-wash to advanced coatings, our processes bring durability and
                            unique textures.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate-fadeInRight">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
                            📏
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">
                            Consistent Quality
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Every batch is monitored with precision, ensuring uniformity and reliability.
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

export default AdvancedWashing;

import React from "react";

const AdaptiveCapacity = () => {
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-green-50 via-white to-green-100 flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 tracking-wide text-center mb-6 animate-fadeInDown">
                    Adaptive Capacity
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-light text-center mb-16 animate-fadeInUp">
                    Flexible operations that scale efficiently for{" "}
                    <span className="text-green-600 font-semibold">every order</span>, ensuring{" "}
                    <span className="font-bold text-gray-800">consistency and cohesion</span> that
                    define our{" "}
                    <span className="text-green-700 font-bold italic">“Made in India”</span>{" "}
                    promise.
                </p>

                {/* Growth Steps */}
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Step 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500 transform hover:scale-105 transition duration-500 animate-fadeInLeft">
                        <div className="text-green-600 text-5xl mb-4">🌱</div>
                        <h3 className="text-2xl font-semibold text-green-700 mb-3">
                            Small Orders
                        </h3>
                        <p className="text-gray-600">
                            Efficient setups for smaller batches, maintaining precision and quick
                            delivery.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500 transform hover:scale-105 transition duration-500 animate-scaleIn">
                        <div className="text-green-600 text-5xl mb-4">🌿</div>
                        <h3 className="text-2xl font-semibold text-green-700 mb-3">
                            Medium Scale
                        </h3>
                        <p className="text-gray-600">
                            Streamlined processes adapt seamlessly to growing order volumes while
                            ensuring consistency.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500 transform hover:scale-105 transition duration-500 animate-fadeInRight">
                        <div className="text-green-600 text-5xl mb-4">🌳</div>
                        <h3 className="text-2xl font-semibold text-green-700 mb-3">
                            Large Scale
                        </h3>
                        <p className="text-gray-600">
                            Advanced automation and capacity planning deliver bulk orders with
                            uniform quality and reliability.
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

export default AdaptiveCapacity;

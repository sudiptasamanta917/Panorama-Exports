import React from "react";
import { Warehouse, PackageSearch, Truck, Cpu } from "lucide-react";

const SmartWarehousing = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Glow effect background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Header Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Smart Warehousing
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Hi-tech systems streamline <span className="font-semibold text-purple-300">storage</span> and{" "}
                        <span className="font-semibold text-indigo-300">shipping</span>, redefining speed and efficiency
                        with precision logistics.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    {/* Card 1 */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <Warehouse className="w-12 h-12 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Automated Storage</h3>
                        <p className="text-gray-300 text-sm">
                            AI-driven layouts for optimized space utilization and faster inventory access.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <PackageSearch className="w-12 h-12 text-indigo-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                        <p className="text-gray-300 text-sm">
                            Smart scanners ensure 100% traceability of every package in motion.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <Truck className="w-12 h-12 text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Seamless Shipping</h3>
                        <p className="text-gray-300 text-sm">
                            AI-powered routing accelerates deliveries while cutting logistics costs.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <Cpu className="w-12 h-12 text-green-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
                        <p className="text-gray-300 text-sm">
                            Data-driven insights for predictive demand planning and flawless operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartWarehousing;

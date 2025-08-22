import React from "react";
import { Layers, Leaf, Factory, Scissors, Cpu } from "lucide-react";

const InnovationThatLeads = () => {
  const features = [
    {
      title: "CAD & 3D Draping",
      description:
        "Visualizing designs with precision before production, ensuring accuracy and reducing errors.",
      icon: <Layers className="w-10 h-10 text-indigo-400" />,
    },
    {
      title: "Textile Ingenuity",
      description:
        "From loom to luxury—eco-conscious fabrics, refined finishing, and Made in India artistry.",
      icon: <Leaf className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Lean Manufacturing",
      description:
        "Blending innovation with craftsmanship to reduce waste, enhance efficiency, and deliver uncompromised quality.",
      icon: <Factory className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "UBT Sewing Tech",
      description:
        "Seam integrity meets advanced performance with ultra-bond thread for resilience in activewear & outerwear.",
      icon: <Scissors className="w-10 h-10 text-red-400" />,
    },
    {
      title: "Digital Sampling",
      description:
        "Speed, accuracy, and minimal waste—design smarter iterations before large-scale production.",
      icon: <Cpu className="w-10 h-10 text-blue-400" />,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Innovation that Leads
        </h2>
        <p className="text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          At Panorama, innovation is how we stay ahead—and stay true.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovationThatLeads;

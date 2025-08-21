import React from "react";
import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Crafted with Excellence",
      desc: "A blend of work & play — allowing passion & precision to coexist — where artisan skill meets advanced technology. Every piece is made with unmatched care, pride, and creativity.",
    },
    {
      title: "One Team, One Dream",
      desc: "Designers, artisans, and technologists working in perfect sync to bring visions to life.",
    },
    {
      title: "Innovating with Purpose",
      desc: "Honoring heritage while embracing the future — creating clothing that resonates globally.",
    },
    {
      title: "Planet-First Process",
      desc: "From mindful materials to low-impact methods, sustainability leads every decision. Our sensitivity to the environment is at the heart of our process.",
    },
    {
      title: "Proudly Made in India",
      desc: "Every garment tells a story of culture, soul, and craftsmanship rooted in India — designed to connect with the world.",
    },
  ];

  return (
    <>
      <div className="bg-blue-950 h-20 mb-12"></div>
      <section className="relative px-6 py-20 md:px-20">
        {/* Background with texture + gradient */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-gray-50/90 backdrop-blur-sm"></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Our Core Values
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              The foundation of everything we create — a blend of heritage,
              innovation, and responsibility.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-blue-700 w-7 h-7" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValues;

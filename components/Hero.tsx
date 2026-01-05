import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://picsum.photos/seed/alejahero/1920/1080"
          alt="Architectural Masterpiece"
          className="w-full h-[120%] object-cover object-center grayscale-[30%] contrast-125"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto">
        <motion.div
           style={{ opacity }}
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
            <h2 className="text-xs md:text-sm font-sans tracking-[0.5em] uppercase text-white mb-6">
                Real Estate Collection
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-8 mix-blend-overlay">
                Beyond <br /> 
                <span className="italic font-light">Expectation</span>
            </h1>
        </motion.div>

        <motion.div
            style={{ opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-[-20vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
            <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-50"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">Scroll to Explore</span>
        </motion.div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-noise z-30 opacity-30"></div>
    </section>
  );
};

export default Hero;

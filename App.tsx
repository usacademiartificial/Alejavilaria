import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import PropertyShowcase from './components/PropertyShowcase';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-av-black min-h-screen selection:bg-av-gold selection:text-black cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-av-gold origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <PropertyShowcase />
        {/* Additional Immersive Section */}
        <section className="h-[80vh] relative flex items-center justify-center overflow-hidden bg-white text-black">
            <div className="absolute inset-0">
                 <img 
                    src="https://picsum.photos/seed/archdetail/1920/1080" 
                    className="w-full h-full object-cover opacity-20"
                    alt="Detail"
                 />
            </div>
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="mb-12 md:mb-0">
                    <h3 className="text-5xl md:text-7xl font-serif mb-6">Expertise in<br/>every detail.</h3>
                    <p className="font-sans max-w-sm text-gray-600 leading-relaxed">
                        We don't just sell properties; we curate lifestyles. Our team of architects, designers, and consultants ensure every square meter serves a purpose.
                    </p>
                </div>
                <div className="flex justify-center">
                     <div className="relative w-64 h-80 md:w-80 md:h-96 bg-black overflow-hidden group">
                        <img 
                            src="https://picsum.photos/seed/person/600/800" 
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            alt="Agent" 
                        />
                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                            <span className="font-serif text-lg">Alejandra Vilaria</span>
                            <span className="block text-[10px] tracking-widest uppercase text-gray-500">Founder</span>
                        </div>
                     </div>
                </div>
            </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;

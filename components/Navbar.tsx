import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Properties', href: '#properties' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500 flex justify-between items-center mix-blend-difference text-white`}>
        <a href="#" className="font-serif text-2xl tracking-widest font-bold uppercase z-50">
          Alejavilaria
        </a>

        <div className="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] uppercase z-50">
          <button onClick={() => setIsOpen(true)} className="hover:text-gray-300 transition-colors group flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white block group-hover:w-12 transition-all duration-300"></span>
            Menu
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-av-black z-40 flex items-center justify-center overflow-hidden"
          >
            {/* Animated Background Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute h-full w-[1px] bg-white left-[20%]" style={{ left: `${20 * (i + 1)}%` }}></div>
                ))}
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
                <div className="hidden md:block relative h-[60vh] overflow-hidden">
                    <img 
                        src="https://picsum.photos/seed/archmenu/800/1200" 
                        alt="Interior" 
                        className="object-cover w-full h-full grayscale opacity-60"
                    />
                    <div className="absolute bottom-8 left-8">
                        <p className="font-serif text-3xl italic text-white">"Home is not a place,<br/>it's a feeling."</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {menuItems.map((item, index) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="font-serif text-4xl md:text-6xl text-white hover:text-gray-400 transition-colors flex items-center gap-4 group"
                    >
                        <span className="text-sm font-sans tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{index + 1}</span>
                        {item.label}
                    </motion.a>
                    ))}
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row gap-8 font-sans text-xs tracking-widest uppercase text-gray-400"
                    >
                        <div>
                            <p className="mb-2 text-white">Madrid</p>
                            <p>Calle de Alcalá, 42</p>
                            <p>+34 91 123 45 67</p>
                        </div>
                        <div>
                            <p className="mb-2 text-white">Social</p>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white">Instagram</a>
                                <a href="#" className="hover:text-white">LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-500"
            >
                <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

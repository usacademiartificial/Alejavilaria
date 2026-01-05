import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Philosophy: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const text = "We believe that a home is more than structure; it is the silent witness to your life's most profound moments. At Alejavilaria, we curate spaces that breathe, inspire, and endure.";

  const words = text.split(" ");

  return (
    <section id="philosophy" className="py-32 md:py-48 px-6 bg-av-black relative">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/4">
                <span className="block w-12 h-[1px] bg-white/50 mb-4"></span>
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-gray-400">Our Ethos</span>
            </div>
            
            <div className="w-full md:w-3/4" ref={ref}>
                <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight flex flex-wrap gap-x-3 gap-y-1">
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: i * 0.02, ease: "easeOut" }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                ))}
                </h3>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 text-gray-500 font-sans leading-relaxed max-w-lg"
                >
                    Founded on the principles of architectural integrity and timeless elegance, Alejavilaria connects discerning clients with properties that define the modern landscape of luxury living.
                </motion.p>

                <motion.div
                     initial={{ scaleX: 0 }}
                     animate={isInView ? { scaleX: 1 } : {}}
                     transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                     className="mt-16 w-full h-[1px] bg-white/20 origin-left"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

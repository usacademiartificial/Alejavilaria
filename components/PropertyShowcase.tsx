import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Property } from '../types';
import { ArrowUpRight } from 'lucide-react';

const properties: Property[] = [
  {
    id: 1,
    title: "The Glass Pavilion",
    location: "Madrid, La Moraleja",
    price: "€4,500,000",
    description: "A transparent masterpiece nestled in nature.",
    image: "https://picsum.photos/seed/house1/1200/800",
    features: ["5 Beds", "6 Baths", "2000 m²"]
  },
  {
    id: 2,
    title: "Urban Sanctuary",
    location: "Barcelona, Eixample",
    price: "€2,800,000",
    description: "Historical architecture meets modern minimalism.",
    image: "https://picsum.photos/seed/house2/1200/800",
    features: ["3 Beds", "3 Baths", "450 m²"]
  },
  {
    id: 3,
    title: "Coastal Horizon",
    location: "Ibiza, Es Cubells",
    price: "€8,200,000",
    description: "Infinity views merging sea and sky.",
    image: "https://picsum.photos/seed/house3/1200/800",
    features: ["6 Beds", "8 Baths", "Private Beach"]
  },
  {
    id: 4,
    title: "Alpine Retreat",
    location: "Andorra",
    price: "€3,100,000",
    description: "Warmth and luxury in the heart of the mountains.",
    image: "https://picsum.photos/seed/house4/1200/800",
    features: ["4 Beds", "Spa", "Ski-in/Ski-out"]
  }
];

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
    return (
        <div className="group relative w-[80vw] md:w-[40vw] h-[60vh] md:h-[70vh] flex-shrink-0 bg-av-gray overflow-hidden cursor-pointer mr-8 md:mr-16">
            <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end border-b border-white/30 pb-6 mb-6">
                    <div>
                        <p className="text-xs font-sans tracking-[0.2em] uppercase text-gray-300 mb-2">{property.location}</p>
                        <h3 className="text-3xl md:text-4xl font-serif text-white">{property.title}</h3>
                    </div>
                    <p className="text-xl font-serif text-av-gold italic">{property.price}</p>
                </div>
                
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex gap-4 text-xs font-sans text-white/80 tracking-wider">
                        {property.features.map((f, i) => (
                            <span key={i} className="border border-white/20 px-3 py-1 rounded-full">{f}</span>
                        ))}
                    </div>
                    <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

const PropertyShowcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="properties" ref={targetRef} className="relative h-[400vh] bg-av-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Section Title */}
        <div className="absolute top-12 left-6 md:left-12 z-10 mix-blend-difference">
            <h2 className="text-[10vw] leading-none font-serif text-white opacity-10 pointer-events-none">
                Selection
            </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-4 px-12 md:px-24">
            {/* Intro Card */}
            <div className="w-[30vw] md:w-[20vw] flex-shrink-0 flex flex-col justify-center pr-12">
                <span className="w-16 h-[2px] bg-av-gold mb-8"></span>
                <h3 className="text-4xl font-serif text-white mb-6">Curated Residences</h3>
                <p className="text-gray-400 font-sans text-sm leading-loose">
                    Explore our exclusive portfolio of properties. Each residence is chosen for its unique character, architectural significance, and potential to become a home.
                </p>
                <div className="mt-12 flex items-center gap-4 text-white text-xs tracking-widest uppercase animate-pulse">
                    <span>Drag</span>
                    <div className="w-12 h-[1px] bg-white"></div>
                </div>
            </div>

            {properties.map((p) => (
                <PropertyCard key={p.id} property={p} />
            ))}
            
            {/* End Card */}
             <div className="w-[30vw] md:w-[20vw] flex-shrink-0 flex items-center justify-center">
                <a href="#" className="w-40 h-40 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 font-sans text-sm tracking-widest uppercase">
                    View All
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyShowcase;

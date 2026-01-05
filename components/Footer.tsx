import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-5">
                <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-none">
                    Let's talk <br/> <span className="text-av-gold italic">Real Estate.</span>
                </h2>
                <a href="mailto:hello@alejavilaria.com" className="text-xl md:text-2xl font-sans hover:opacity-70 transition-opacity decoration-av-gold underline underline-offset-8">
                    hello@alejavilaria.com
                </a>
            </div>
            
            <div className="md:col-span-3 md:col-start-7 flex flex-col gap-8">
                <div>
                    <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Visit Us</h4>
                    <p className="font-serif text-xl text-gray-300">
                        Calle de Serrano, 88<br/>
                        28006 Madrid, Spain
                    </p>
                </div>
                <div>
                    <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Call Us</h4>
                    <p className="font-serif text-xl text-gray-300">
                        +34 91 555 01 23
                    </p>
                </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-8">
                <div>
                    <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Follow</h4>
                    <ul className="flex flex-col gap-2 font-serif text-xl text-gray-300">
                        <li><a href="#" className="hover:text-av-gold transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-av-gold transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-av-gold transition-colors">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/10">
            <div className="mb-6 md:mb-0">
                <span className="font-serif text-3xl font-bold tracking-wider">Alejavilaria</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 text-xs font-sans text-gray-600 tracking-widest uppercase">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>© 2024 Alejavilaria</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

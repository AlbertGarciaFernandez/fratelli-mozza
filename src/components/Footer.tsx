import React from 'react';
import brandLogo from '../../assets/logo.png';
import brandName from '../../assets/name.png';

export function Footer() {
  return (
    <footer className="bg-neutral text-cream py-10 sm:py-12 px-5 sm:px-6 border-t-8 border-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img src={brandLogo.src} alt="" className="w-[32rem] max-w-[80vw]" />
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-3 text-cream">
          <img src={brandName.src} alt="Fratelli Mozza" className="w-40 sm:w-48 h-auto brightness-0 invert" />
        </div>

        <div className="text-center text-sm font-medium text-cream/75">
          <p>Carrer de Sant Martí, 106 · Cerdanyola del Vallès</p>
          <a href="tel:+34930272858" className="hover:text-cream transition-colors">930 272 858</a>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 font-heading uppercase tracking-widest text-xs sm:text-sm">
          <a href="#" className="hover:text-cream/70 transition-colors">Instagram</a>
          <a href="#" className="hover:text-cream/70 transition-colors">Facebook</a>
          <a href="#" className="hover:text-cream/70 transition-colors">TripAdvisor</a>
        </div>
        
        <div className="text-sm font-medium text-cream/60">
          © {new Date().getFullYear()} Fratelli Mozza. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}

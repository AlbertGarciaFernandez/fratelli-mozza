import React from 'react';
import { LogoMascot, PizzaIcon } from './Icons';

export function Footer() {
  return (
    <footer className="bg-neutral text-cream py-10 sm:py-12 px-5 sm:px-6 border-t-8 border-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <LogoMascot className="w-[800px] h-[800px]" />
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-3 text-cream">
          <PizzaIcon className="w-10 h-10" />
          <span className="font-heading text-2xl sm:text-3xl uppercase tracking-tighter">Fratelli Mozza</span>
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

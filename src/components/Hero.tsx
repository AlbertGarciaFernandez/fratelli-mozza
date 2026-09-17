import React from 'react';
import { LogoMascot, PizzaIcon } from './Icons';
import brandLogo from '../../assets/logo.png';

export function Hero({ onOpenReservation }: { onOpenReservation?: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-cream pt-24 pb-20 sm:pt-28 overflow-hidden border-b-4 border-primary">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 md:left-20 text-primary opacity-20 animate-float pointer-events-none">
        <PizzaIcon className="w-32 h-32 md:w-48 md:h-48 animate-spin-slow blur-[2px]" />
      </div>
      <div className="absolute bottom-32 right-5 md:right-20 text-primary opacity-20 animate-float-delayed pointer-events-none">
        <LogoMascot className="w-40 h-40 md:w-56 md:h-56 blur-[3px]" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <img src={brandLogo.src} alt="Fratelli Mozza · 100% Italian ingredients" className="w-[min(74vw,22rem)] md:w-[min(32vw,30rem)] h-auto text-primary mb-7" />

        <p className="font-heading text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.18em] text-primary mb-4">
          Acqua, farina e sale
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-primary font-heading uppercase tracking-widest text-sm sm:text-lg md:text-2xl mb-10 md:mb-12 px-4">
          <span>Pizzeria Artigianale</span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>Cerdanyola del Vallès</span>
        </div>
        
        <div className="flex w-full max-w-md flex-col sm:flex-row gap-4 sm:gap-5 px-4">
          <a href="#carta" className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-cream font-heading uppercase tracking-widest text-base sm:text-lg border-4 border-primary text-center hover:bg-cream hover:text-primary transition-[background-color,color,box-shadow,transform] shadow-[6px_6px_0px_0px_var(--color-primary-dark)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5">
            Ver la carta
          </a>
          <button onClick={(e) => { e.preventDefault(); onOpenReservation?.(); }} className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-cream text-primary font-heading uppercase tracking-widest text-base sm:text-lg border-4 border-primary hover:bg-primary-dark hover:border-primary-dark hover:text-cream transition-[background-color,border-color,color,box-shadow,transform] shadow-[6px_6px_0px_0px_var(--color-primary-dark)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5">
            Reservar
          </button>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary">
        <span className="font-heading uppercase text-[10px] tracking-widest">Scendi giù</span>
        <div className="w-0.5 h-9 sm:h-12 bg-primary animate-pulse"></div>
      </div>
    </section>
  );
}

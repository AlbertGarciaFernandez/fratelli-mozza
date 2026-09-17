import React from 'react';
import { WheatIcon } from './Icons';

const ingredients = [
  "Tomate San Marzano D.O.P.",
  "Harina Caputo 00",
  "Mozzarella Fior di Latte",
  "Aceite de Oliva Virgen Extra",
  "Prosciutto di Parma",
  "Pecorino Romano",
  "Albahaca Fresca",
  "Masa madre de 48h",
];

export function Ingredients() {
  return (
    <section className="bg-primary text-cream py-10 sm:py-12 md:py-20 border-y-4 border-neutral overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 bg-texture opacity-30 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center mb-8 md:mb-16 relative z-10">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter">
          Calidad sin compromisos
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden w-full whitespace-nowrap z-10 py-4 border-y-2 border-cream/30">
        <div className="animate-ticker flex whitespace-nowrap items-center">
          {/* We duplicate the array multiple times to ensure smooth infinite scrolling */}
          {[...ingredients, ...ingredients, ...ingredients].map((item, index) => (
            <React.Fragment key={index}>
              <span className="font-heading text-xl sm:text-2xl md:text-4xl uppercase tracking-widest mx-5 md:mx-10 text-cream">
                {item}
              </span>
              <WheatIcon className="w-8 h-8 md:w-12 md:h-12 text-cream shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

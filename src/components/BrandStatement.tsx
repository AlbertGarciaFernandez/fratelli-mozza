import React from 'react';
import { TomatoIcon } from './Icons';

export function BrandStatement() {
  return (
    <section className="bg-primary text-cream py-20 sm:py-24 md:py-36 px-5 sm:px-6 relative overflow-hidden border-b-4 border-cream">
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 bg-texture opacity-30 mix-blend-overlay"></div>
      
      <div className="absolute top-10 right-10 text-cream/20 rotate-12">
        <TomatoIcon className="w-40 h-40" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-8 md:mb-10 leading-[0.95]">
          La vera pizza napoletana, hecha con alma y fuego.
        </h2>
        
        <p className="text-base sm:text-xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto">
          En Fratelli Mozza respetamos la tradición. Masa de fermentación lenta, ingredientes importados de Italia y mucho amor. No es solo una pizza, es una experiencia auténtica y sin pretensiones en el corazón de Cerdanyola.
        </p>
        
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-cream"></div>
        </div>
      </div>
    </section>
  );
}

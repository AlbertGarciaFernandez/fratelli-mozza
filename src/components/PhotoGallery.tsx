import React from 'react';
import chefImage from '../assets/images/pizza_chef_throwing_dough_1789593996946.jpg';
import pizzaImage from '../assets/images/neapolitan_margherita_pizza_1789594007204.jpg';
import atmosphereImage from '../assets/images/trattoria_atmosphere_1789594018642.jpg';

export function PhotoGallery() {
  return (
    <section id="galeria" className="bg-cream py-14 sm:py-16 md:py-24 bg-texture border-b-4 border-primary">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 mb-10 md:mb-14">
        <p className="font-heading text-xs sm:text-sm uppercase tracking-[0.24em] text-primary mb-3">Dalla cucina alla tavola</p>
        <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-primary max-w-3xl">
          Forno caldo,<br className="sm:hidden" /> mani italiane
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 px-4 sm:px-6 max-w-screen-2xl mx-auto">
        
        <div className="lg:col-span-2 aspect-[16/9] md:aspect-auto md:h-[600px] bg-neutral border-4 border-primary overflow-hidden group shadow-[6px_6px_0px_0px_var(--color-primary)]">
          <img 
            src={chefImage.src}
            alt="Pizza chef preparing dough" 
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="aspect-square bg-neutral border-4 border-primary overflow-hidden group shadow-[6px_6px_0px_0px_var(--color-primary)]">
            <img 
              src={pizzaImage.src}
              alt="Delicious margherita pizza" 
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-neutral border-4 border-primary overflow-hidden group shadow-[6px_6px_0px_0px_var(--color-primary)]">
            <img 
              src={atmosphereImage.src}
              alt="Restaurant atmosphere" 
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

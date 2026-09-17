import React from 'react';
import { LogoMascot } from './Icons';
import brothersImage from '../assets/images/two_italian_brothers_1789594031598.jpg';
import brandName from '../../assets/name.png';

export function Story() {
  return (
    <section id="storia" className="bg-cream py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-texture">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-primary border-4 border-primary overflow-hidden shadow-[10px_10px_0px_0px_var(--color-neutral)] md:shadow-[16px_16px_0px_0px_var(--color-neutral)]">
            <img 
              src={brothersImage.src}
              alt="Two brothers making pizza" 
              className="w-full h-full object-cover grayscale-[30%] sepia-[20%]"
            />
          </div>
          <div className="absolute -bottom-7 -right-3 sm:-right-7 md:-bottom-10 md:-right-10 bg-cream border-4 border-primary p-4 sm:p-6 rounded-full rotate-12">
            <LogoMascot className="w-20 h-20 sm:w-24 sm:h-24 text-primary" />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter text-primary mb-8 md:mb-10 leading-[0.95]">
            Due Fratelli,<br/>Una Passione
          </h2>
          
          <div className="space-y-5 md:space-y-6 text-base sm:text-xl text-neutral font-medium leading-relaxed">
            <p>
              Fratelli Mozza nació de un sueño sencillo: traer el verdadero sabor de nuestra infancia en Nápoles a las calles de Cerdanyola del Vallès.
            </p>
            <p>
              Somos dos hermanos que crecieron entre harina, tomates y hornos de leña. Aprendimos que la buena comida no necesita trucos, solo tiempo, ingredientes honestos y el calor de un buen horno.
            </p>
            <p>
              Hoy, nuestra trattoria es un rincón donde las familias se reúnen, los amigos brindan y la pizza se disfruta como debe ser: con las manos y una sonrisa.
            </p>
          </div>
          
          <div className="mt-10 md:mt-12">
            <img src={brandName.src} alt="Fratelli Mozza" className="w-44 opacity-70" />
          </div>
        </div>

      </div>
    </section>
  );
}

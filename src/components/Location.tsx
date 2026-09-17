import React from 'react';
import { PizzaIcon } from './Icons';

export function Location() {
  return (
    <>
        <section id="reservar" className="bg-primary-dark text-cream py-24 sm:py-28 md:py-32 px-5 sm:px-6 border-t-4 border-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-30 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <PizzaIcon className="w-20 h-20 mx-auto mb-10 text-cream animate-spin-slow" />
          <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter mb-7 md:mb-10 leading-[0.95]">Prenota un tavolo</h2>
          <p className="text-lg sm:text-2xl font-medium mb-9 md:mb-12">Te esperamos con el horno encendido y la masa lista.</p>
          <a href="tel:+34931234567" className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-cream text-primary-dark font-heading uppercase tracking-widest text-lg sm:text-2xl border-4 border-cream hover:bg-transparent hover:text-cream transition-colors">
            Llamar ahora
          </a>
        </div>
      </section>
      
      <section id="contacto" className="bg-primary text-cream py-20 sm:py-24 md:py-32 px-5 sm:px-6 border-t-4 border-neutral bg-texture">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter mb-12 md:mb-16 text-center leading-[0.95]">Ci vediamo presto</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-10 md:space-y-12">
              <div>
                <h3 className="font-heading text-3xl uppercase tracking-widest mb-4">Dove Siamo</h3>
                <p className="text-xl font-medium">Carrer de Sant Martí, 106<br/>08290 Cerdanyola del Vallès<br/>Barcelona</p>
              </div>
              
              <div>
                <h3 className="font-heading text-3xl uppercase tracking-widest mb-4">Orari</h3>
                <ul className="text-base sm:text-xl font-medium space-y-2">
                  <li className="flex flex-wrap justify-between gap-x-4 border-b-2 border-cream/30 pb-2 text-cream/60">
                    <span>Martes / Dimarts</span>
                    <span>Chiuso / Tancat</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 border-b-2 border-cream/30 pb-2">
                    <span>Miércoles - Jueves</span>
                    <span>19:30 - 23:00</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 border-b-2 border-cream/30 pb-2">
                    <span>Viernes - Sábado</span>
                    <span>13:30 - 16:00 / 19:30 - 23:30</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 border-b-2 border-cream/30 pb-2">
                    <span>Domingo</span>
                    <span>13:30 - 16:00</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 border-b-2 border-cream/30 pb-2 text-cream/60">
                    <span>Lunes</span>
                    <span>Chiuso (Cerrado)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-3xl uppercase tracking-widest mb-4">Contatto</h3>
                <p className="text-xl font-medium">📞 <a href="tel:+34930272858" className="hover:text-cream/70 transition-colors">930 272 858</a></p>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-auto border-4 border-cream p-2 rotate-1 hover:rotate-0 transition-transform bg-cream">
              <iframe 
                src="https://www.google.com/maps?q=Carrer+de+Sant+Mart%C3%AD,+106,+Cerdanyola+del+Vall%C3%A8s&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Cerdanyola"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { X, Send } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-neutral/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Postcard Container */}
      <div className="relative bg-cream bg-texture w-full max-w-4xl max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl rounded-sm z-10 flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-3 text-primary hover:bg-primary/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-primary/30 border-dashed relative">
          <h2 className="font-heading text-4xl sm:text-5xl uppercase text-primary mb-2 leading-none">Prenota</h2>
          <p className="font-body text-primary/70 mb-8 italic">Reserva tu mesa en Fratelli Mozza.</p>
          
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div>
              <label className="block font-heading text-xs uppercase tracking-widest text-primary mb-2">Nombre</label>
              <input type="text" required className="w-full bg-transparent border-b-2 border-primary/40 focus:border-primary outline-none px-0 py-2 font-body text-primary placeholder-primary/30 transition-colors" placeholder="Tu nombre..." />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-heading text-xs uppercase tracking-widest text-primary mb-2">Personas</label>
                <input type="number" min="1" max="20" required className="w-full bg-transparent border-b-2 border-primary/40 focus:border-primary outline-none px-0 py-2 font-body text-primary placeholder-primary/30 transition-colors" placeholder="2" />
              </div>
              <div>
                <label className="block font-heading text-xs uppercase tracking-widest text-primary mb-2">Fecha</label>
                <input type="date" required className="w-full bg-transparent border-b-2 border-primary/40 focus:border-primary outline-none px-0 py-2 font-body text-primary placeholder-primary/30 transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block font-heading text-xs uppercase tracking-widest text-primary mb-2">Mensaje Especial</label>
              <textarea rows={2} className="w-full bg-transparent border-b-2 border-primary/40 focus:border-primary outline-none px-0 py-2 font-body text-primary placeholder-primary/30 transition-colors resize-none" placeholder="Alergias, trona, celebraciones..."></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 border-2 border-primary text-primary font-heading uppercase tracking-widest hover:bg-primary hover:text-cream transition-colors flex items-center justify-center gap-2 mt-4 group">
              <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Confirmar Reserva
            </button>
          </form>
        </div>
        
        {/* Right Side: Stamp & Address */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 relative flex flex-col justify-between bg-texture-dark">
          <div className="flex justify-between items-start mb-8 md:mb-12">
            <div className="flex flex-col gap-1 mt-4 ml-2 opacity-40">
              <div className="w-16 h-[2px] bg-primary rounded-full"></div>
              <div className="w-16 h-[2px] bg-primary rounded-full"></div>
              <div className="w-16 h-[2px] bg-primary rounded-full"></div>
              <div className="w-16 h-[2px] bg-primary rounded-full"></div>
            </div>

            <div className="w-20 h-24 border-[3px] border-primary/40 flex items-center justify-center p-1.5 opacity-80 rotate-3">
               <div className="w-full h-full border-[1.5px] border-primary/30 flex flex-col items-center justify-center text-center p-1 bg-cream/50">
                 <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Poste</span>
                 <span className="text-[11px] uppercase tracking-widest text-primary">Italiane</span>
               </div>
            </div>
          </div>
          
          <div className="mt-auto space-y-6 pt-8">
             <div className="flex flex-col gap-2 border-b border-primary/20 pb-2">
                <span className="font-heading text-[10px] uppercase tracking-widest text-primary/60">Destinatario</span>
                <span className="font-heading text-2xl uppercase text-primary">Fratelli Mozza</span>
             </div>
             
             <div className="flex flex-col gap-2 border-b border-primary/20 pb-2">
                <span className="font-heading text-[10px] uppercase tracking-widest text-primary/60">Indirizzo</span>
                 <span className="font-body text-primary italic text-lg leading-tight">Carrer de Sant Martí, 106<br/>Cerdanyola del Vallès, Barcelona</span>
             </div>
             
             <div className="flex flex-col gap-2 border-b border-primary/20 pb-2">
                <span className="font-heading text-[10px] uppercase tracking-widest text-primary/60">Contatto</span>
                 <span className="font-body text-primary italic text-lg leading-tight">930 272 858</span>
             </div>
          </div>
          
          <div className="absolute bottom-12 right-6 opacity-[0.07] -rotate-12 pointer-events-none">
             <div className="w-40 h-40 rounded-full border-[6px] border-primary flex items-center justify-center p-2">
               <div className="w-full h-full rounded-full border-4 border-primary border-dashed flex flex-col items-center justify-center text-center">
                 <span className="font-heading text-xl tracking-[0.2em] uppercase mt-2">Approvato</span>
                 <span className="font-body text-sm italic mt-1">100% Vera Pizza</span>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

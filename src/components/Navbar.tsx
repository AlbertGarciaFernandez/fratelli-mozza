import React, { useState } from 'react';
import { PizzaIcon } from './Icons';
import { Menu, X } from 'lucide-react';
import brandName from '../../assets/name.png';

export function Navbar({ onOpenReservation }: { onOpenReservation?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#carta', label: 'Carta' },
    { href: '#storia', label: 'La nostra storia' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-cream/95 backdrop-blur-sm border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[4.5rem] sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-primary hover:scale-[1.03] transition-transform shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={brandName.src} alt="Fratelli Mozza" className="w-32 sm:w-40 h-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-heading text-sm uppercase tracking-widest text-primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary-dark transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={(e) => { e.preventDefault(); onOpenReservation?.(); }}
              className="px-6 py-2 bg-primary text-cream hover:bg-primary-dark transition-colors rounded-full border-2 border-primary"
            >
              Reservar
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 -mr-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cream bg-texture flex flex-col pt-24 px-6 pb-6 animate-in slide-in-from-top-4 duration-300 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-7 font-heading text-[clamp(1.75rem,8vw,2.5rem)] uppercase tracking-tighter text-primary items-center justify-center flex-1">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-dark transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
              </a>
            ))}
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                setIsMobileMenuOpen(false);
                onOpenReservation?.(); 
              }}
              className="mt-8 px-10 py-4 bg-primary text-cream hover:bg-primary-dark transition-colors rounded-full border-2 border-primary text-xl w-full max-w-sm"
            >
              Reservar Mesa
            </button>
          </div>
          
          {/* Decorative element for mobile menu */}
          <div className="flex justify-center mt-auto py-8 text-primary/30">
            <PizzaIcon className="w-16 h-16 animate-spin-slow" />
          </div>
        </div>
      )}
    </>
  );
}

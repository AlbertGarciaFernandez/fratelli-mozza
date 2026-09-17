import React from 'react';
import { WineGlassIcon } from './Icons';
import { menuData } from '../data/menu';
import brandLogo from '../../assets/logo.png';
import { Wheat, Shell, Egg, Fish, Bean, Sprout, Milk, Nut, Leaf, Droplet, CircleDot, Wine, Flower, Snail, Circle, Utensils, Pizza, ChefHat, CakeSlice, CupSoda, Coffee, Infinity as InfinityIcon } from 'lucide-react';

export const AllergenIcon = ({ num, className = "w-4 h-4" }: { num: string | number, className?: string }) => {
  const n = typeof num === 'string' ? parseInt(num.trim(), 10) : num;
  switch (n) {
    case 1: return <Wheat className={className} strokeWidth={2.5} />;
    case 2: return <Shell className={className} strokeWidth={2.5} />;
    case 3: return <Egg className={className} strokeWidth={2.5} />;
    case 4: return <Fish className={className} strokeWidth={2.5} />;
    case 5: return <Bean className={className} strokeWidth={2.5} />;
    case 6: return <Sprout className={className} strokeWidth={2.5} />;
    case 7: return <Milk className={className} strokeWidth={2.5} />;
    case 8: return <Nut className={className} strokeWidth={2.5} />;
    case 9: return <Leaf className={className} strokeWidth={2.5} />;
    case 10: return <Droplet className={className} strokeWidth={2.5} />;
    case 11: return <CircleDot className={className} strokeWidth={2.5} />;
    case 12: return <Wine className={className} strokeWidth={2.5} />;
    case 13: return <Flower className={className} strokeWidth={2.5} />;
    case 14: return <Snail className={className} strokeWidth={2.5} />;
    default: return null;
  }
};

const MenuItem = ({ name, price, desc, allergens, image }: { name: string, price: string, desc?: string, allergens?: string, image?: string }) => {
  const allergenList = allergens ? allergens.split(',').map(a => a.trim()) : [];
  return (
    <div className="mb-5 sm:mb-8 group break-inside-avoid">
      {image && (
        <div className="mb-4 overflow-hidden rounded-sm border-[1.5px] border-primary/40">
          <img src={image} alt={name} className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale-[20%] sepia-[10%]" />
        </div>
      )}
      <div className="flex items-end justify-between w-full mb-0.5">
        <h4 className="font-heading text-[0.9rem] sm:text-lg md:text-xl uppercase text-primary leading-tight max-w-[72%] break-words">{name}</h4>
        <div className="flex-grow mx-2 border-b-[1.5px] border-dotted border-primary/50 relative min-w-[10px] top-[-6px] sm:top-[-8px]"></div>
        <span className="font-body font-bold text-sm sm:text-base md:text-lg text-primary whitespace-nowrap leading-none shrink-0">{price} €</span>
      </div>
      {(desc || allergenList.length > 0) && (
        <div className="text-xs sm:text-sm text-primary/80 font-medium leading-relaxed pr-1 sm:pr-4 mt-1">
          {desc}
          {allergenList.length > 0 && (
            <span className="inline-flex items-center gap-1 ml-2 align-middle">
              {allergenList.map(a => (
                <span key={a} className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full border border-primary/60 text-primary" title={`Alérgeno ${a}`}>
                  <AllergenIcon num={a} className="w-[8px] h-[8px]" />
                </span>
              ))}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const CategoryHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="relative mb-5 sm:mb-8 pb-2 border-b-[1.5px] border-primary flex justify-between items-end mt-10 md:mt-0">
    <div>
      {subtitle && <h3 className="font-heading italic text-lg sm:text-xl md:text-2xl text-primary leading-none mb-1 sm:mb-2">{subtitle}</h3>}
      <h2 className="font-heading text-[clamp(1.8rem,7vw,3rem)] uppercase text-primary leading-[0.9] max-w-[calc(100vw-6rem)]">{title}</h2>
    </div>
    {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mb-1 shrink-0 ml-4" strokeWidth={1.5} />}
  </div>
);

const PageFooter = ({ pageNum }: { pageNum: string }) => (
  <div className="flex items-center justify-between text-primary mt-12 pt-4 text-[8px] sm:text-[9px] md:text-[10px] font-body tracking-[0.15em] sm:tracking-[0.2em] uppercase border-t-[1.5px] border-primary">
    <InfinityIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0" strokeWidth={1.5} />
    <span className="text-center px-2 sm:px-4 truncate">
      Fratelli Mozza <span className="hidden sm:inline">· Cerdanyola del Vallès</span>
    </span>
    <span className="shrink-0">{pageNum}</span>
  </div>
);

const MenuCover = () => (
    <div className="bg-primary bg-texture-dark text-cream min-h-[min(90vh,52rem)] flex flex-col items-center justify-center p-5 sm:p-8 relative overflow-hidden mb-8 border-b-8 border-cream">
    <div className="absolute top-8 left-8 flex items-center gap-4">
      <div className="w-10 h-10 border border-cream/30 rounded-full flex items-center justify-center">
        <Pizza className="w-5 h-5" />
      </div>
      <span className="text-xs tracking-[0.2em] uppercase font-bold">CARTA</span>
    </div>
    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase opacity-80 whitespace-nowrap hidden sm:block">
      Pizzeria Italiana • Carta
    </div>
    
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-16">
      <img src={brandLogo.src} alt="Fratelli Mozza" className="w-[min(78vw,27rem)] h-auto mb-10 sm:mb-16" />
      
        <h2 className="font-heading text-2xl sm:text-4xl md:text-6xl text-center uppercase leading-[0.9] max-w-2xl mt-4 sm:mt-8 px-4">
        100% Italian<br/>Ingredients
      </h2>
    </div>
    
    <div className="absolute bottom-8 text-[9px] md:text-xs tracking-[0.4em] uppercase text-center w-full">
      Cerdanyola del Vallès
    </div>
  </div>
);

export function MenuSection() {
  return (
    <>
    <MenuCover />
    <section id="carta" className="bg-cream bg-texture py-8 sm:py-10 md:py-16 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-10 md:gap-y-16">
          
          {/* PAGE 1: ENTRANTES, CALZONI, PUCCE */}
          <div className="flex flex-col h-full">
            <CategoryHeader title="Entrantes" icon={Leaf} />
            <div className="flex flex-col mb-10">
              {menuData.entrantes.map((item, i) => <MenuItem key={`ent-${i}`} {...item} />)}
            </div>
            
            <CategoryHeader title="Calzoni" icon={ChefHat} />
            <div className="flex flex-col mb-10">
              {menuData.calzoni.map((item, i) => <MenuItem key={`calz-${i}`} {...item} />)}
            </div>

            <CategoryHeader title="Pucce" icon={Wheat} />
            <div className="flex flex-col mb-10">
              {menuData.pucce.map((item, i) => <MenuItem key={`puc-${i}`} {...item} />)}
            </div>

            <CategoryHeader title="Ingredienti Extra" icon={Pizza} />
            <div className="flex flex-col mb-auto">
              {menuData.extras.map((item, i) => <MenuItem key={`ext-${i}`} {...item} />)}
            </div>
            <PageFooter pageNum="01" />
          </div>
          
          {/* PAGE 2: CLASSICHE & SPECIALI */}
          <div className="flex flex-col h-full">
            <CategoryHeader title="Classiche" subtitle="Pizze" icon={CircleDot} />
            <div className="flex flex-col mb-10">
              {menuData.pizzeClassiche.map((item, i) => <MenuItem key={`class-${i}`} {...item} />)}
            </div>
            
            <CategoryHeader title="Le Nostre Speciali" subtitle="Pizze" icon={Pizza} />
            <div className="flex flex-col mb-auto">
              {menuData.pizzeSpeciali.map((item, i) => <MenuItem key={`spec-${i}`} {...item} />)}
            </div>
            <PageFooter pageNum="02" />
          </div>

          {/* PAGE 3: DOLCI & CAFE */}
          <div className="flex flex-col h-full">
            <CategoryHeader title="Dolci" icon={CakeSlice} />
            <div className="flex flex-col mb-10">
              {menuData.dolci.map((item, i) => <MenuItem key={`dolc-${i}`} {...item} />)}
            </div>
            
            <CategoryHeader title="Cafè & Copas" icon={Coffee} />
            <div className="mb-8">
              <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 border-b border-primary/20 pb-2">Café</h4>
              {menuData.cafeCopas.cafe.map((item, i) => <MenuItem key={`cafe-${i}`} {...item} />)}
            </div>
            <div className="flex flex-col mb-auto">
              <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 border-b border-primary/20 pb-2">Chupitos y Copas</h4>
              {menuData.cafeCopas.copas.map((item, i) => <MenuItem key={`cop-${i}`} {...item} />)}
            </div>
            <PageFooter pageNum="03" />
          </div>

          {/* PAGE 4: BEBIDAS & VINI */}
          <div className="flex flex-col h-full">
            <CategoryHeader title="Bebidas" icon={CupSoda} />
            <div className="mb-8">
              <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 border-b border-primary/20 pb-2">Refrescos y Agua</h4>
              {menuData.bebidas.refrescos.map((item, i) => <MenuItem key={`refr-${i}`} {...item} />)}
            </div>
            <div className="mb-10">
              <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 border-b border-primary/20 pb-2">Cervezas y Aperitivo</h4>
              {menuData.bebidas.cervezas.map((item, i) => <MenuItem key={`cerv-${i}`} {...item} />)}
            </div>

            <CategoryHeader title="Vini" icon={Wine} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-auto gap-y-8 sm:gap-y-0">
              <div>
                <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 border-b border-primary/20 pb-2">Tintos</h4>
                {menuData.vini.tintos.map((item, i) => <MenuItem key={`tint-${i}`} {...item} />)}
                
                <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 mt-8 border-b border-primary/20 pb-2">Rosados</h4>
                {menuData.vini.rosados.map((item, i) => <MenuItem key={`ros-${i}`} {...item} />)}
              </div>
              <div>
                <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 border-b border-primary/20 pb-2">Blancos</h4>
                {menuData.vini.blancos.map((item, i) => <MenuItem key={`bla-${i}`} {...item} />)}
                
                <h4 className="font-heading text-sm uppercase tracking-widest text-primary/80 mb-4 mt-8 border-b border-primary/20 pb-2">Espumosos</h4>
                {menuData.vini.espumosos.map((item, i) => <MenuItem key={`esp-${i}`} {...item} />)}
              </div>
            </div>
            <PageFooter pageNum="04" />
          </div>

        </div>

        {/* ALERGENOS LEGEND - FULL WIDTH AT THE END */}
        <div className="mt-12 md:mt-16 pt-12 md:pt-16">
          <CategoryHeader title="Alérgenos" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 pt-4">
            {menuData.alergenos.map((a, i) => (
              <div key={`alerg-${i}`} className="flex items-start gap-3">
                <span className="w-[18px] h-[18px] mt-0.5 rounded-full border border-primary text-primary flex items-center justify-center shrink-0">
                  <AllergenIcon num={a.num} className="w-2.5 h-2.5" />
                </span>
                <span className="font-body text-xs md:text-sm text-primary/80 font-medium leading-tight">{a.name}</span>
              </div>
            ))}
          </div>
          <PageFooter pageNum="05" />
        </div>

      </div>
    </section>
    </>
  );
}

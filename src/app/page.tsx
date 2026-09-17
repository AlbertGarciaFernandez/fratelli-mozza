'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BrandStatement } from '../components/BrandStatement';
import { MenuSection } from '../components/MenuSection';
import { Ingredients } from '../components/Ingredients';
import { PhotoGallery } from '../components/PhotoGallery';
import { Story } from '../components/Story';
import { Location } from '../components/Location';
import { Footer } from '../components/Footer';
import { ReservationModal } from '../components/ReservationModal';

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-cream text-neutral overflow-x-hidden selection:bg-primary selection:text-cream relative">
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />
      <BrandStatement />
      <MenuSection />
      <Ingredients />
      <PhotoGallery />
      <Story />
      <Location />
      <Footer />
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </div>
  );
}

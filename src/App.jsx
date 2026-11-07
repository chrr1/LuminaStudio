import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StudioSection from './components/StudioSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import PinnedWallSection from './components/PinnedWallSection';
import FeaturedWorkSection from './components/FeaturedWorkSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PackagesSection from './components/PackagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaFooterSection from './components/CtaFooterSection';
import BookingModal from './components/BookingModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [currency, setCurrency] = useState('IDR');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const handleOpenBooking = (pkg = null) => {
    setActivePackage(pkg);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setActivePackage(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#171717] font-sans selection:bg-[#D34826] selection:text-white relative">
      
      {/* Top Floating Editorial Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        setCurrency={setCurrency}
      />

      <main>
        {/* Fan-Out Aperture Perspective Hero */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* (01) The Studio Philosophy & 4x4 Mosaic with Yellow Post-it Notes */}
        <StudioSection onOpenBooking={() => handleOpenBooking()} />

        {/* Signature Craft: Interactive Before vs After Retouch Slider */}
        <BeforeAfterSection />

        {/* Archive Moodboard: Pinned to the Wall with Masking Tape */}
        <PinnedWallSection onSelectPhoto={(item) => setActiveLightboxItem(item)} />

        {/* (02) Curated Portfolio: Featured Works */}
        <FeaturedWorkSection onSelectPhoto={(item) => setActiveLightboxItem(item)} />

        {/* (03) Services in Darkroom Theme Contrast (What We Do) */}
        <ServicesSection onOpenBooking={() => handleOpenBooking()} />

        {/* (04) Process / How it Works 4 Steps */}
        <ProcessSection />

        {/* (05) Packages & Live Add-ons Calculator with Currency Toggle */}
        <PackagesSection
          currency={currency}
          onSelectPackage={(pkg) => handleOpenBooking(pkg)}
        />

        {/* (06) Kind Words - Printed Paper Testimonials with Red Dashed Lines */}
        <TestimonialsSection />

        {/* (07) Action Banner (Terracotta) & Giant Wordmark Footer */}
        <CtaFooterSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Interactive Booking Modal with Add-ons & WhatsApp Gateway */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialPackage={activePackage}
        currency={currency}
      />

      {/* Frame Inspector Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

    </div>
  );
}

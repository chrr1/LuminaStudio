import React, { useState } from 'react';
import { ArrowUpRight, Aperture, Eye } from 'lucide-react';
import { HERO_SLICES, STUDIO_INFO } from '../data/studioData';

export default function HeroSection({ onOpenBooking }) {
  const [activeSlice, setActiveSlice] = useState(null);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-[#E3DFD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAN-OUT APERTURE PERSPECTIVE CONTAINER */}
        <div className="relative w-full max-w-5xl mx-auto mb-16 sm:mb-20">
          
          {/* Main Visual Display Fan (Image slices container with overflow-hidden) */}
          <div className="relative h-[250px] sm:h-[330px] md:h-[400px] w-full overflow-hidden rounded-t-xl bg-[#E8E4DA] border-t border-x border-[#D9D4C7] shadow-sm">
            
            {/* Split Perspective Panels */}
            <div className="grid grid-cols-4 h-full w-full">
              {HERO_SLICES.map((slice) => (
                <div
                  key={slice.id}
                  onMouseEnter={() => setActiveSlice(slice.id)}
                  onMouseLeave={() => setActiveSlice(null)}
                  className={`relative h-full overflow-hidden border-r border-[#171717]/20 cursor-pointer transition-all duration-700 ease-out group ${
                    activeSlice === slice.id ? 'opacity-100 scale-[1.02] z-10' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  <img
                    src={slice.image}
                    alt={slice.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/55 transition-colors" />

                  {/* Micro label on slice */}
                  <div className="absolute top-3 left-2.5 right-2.5 text-left">
                    <span className="inline-block text-[8px] sm:text-[9px] font-mono tracking-widest text-white/95 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                      {slice.subtitle}
                    </span>
                  </div>

                  <div className="absolute bottom-10 sm:bottom-12 left-2.5 right-2.5 text-left">
                    <p className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider uppercase drop-shadow-md">
                      {slice.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Baseline Divider Strip */}
          <div className="h-6 sm:h-7 bg-[#DDD8CC] border-b border-x border-[#CBC5B6] w-full rounded-b-sm" />

          {/* Central Camera Shutter / Lens Iris Graphic (PLACED OUTSIDE OVERFLOW-HIDDEN CONTAINER) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 pointer-events-auto">
            <div className="relative w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full bg-[#171717] p-2 shadow-2xl border-4 border-[#F7F5F0] flex items-center justify-center group cursor-pointer transition-transform hover:scale-105 active:scale-95">
              
              {/* Outer Lens Metallic Bezel with concentric rings */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2D2D2D] via-[#1A1A1A] to-[#0A0A0A] border-2 border-white/20 flex items-center justify-center relative overflow-hidden shadow-inner">
                
                {/* Lens Optical Reflections */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/15 rounded-full blur-[2px]" />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#D34826]/20 rounded-full blur-[4px]" />
                
                {/* Inner Optical Lens Glass Element */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#141414] to-[#252528] border border-white/30 flex items-center justify-center shadow-inner relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full" />
                  <Aperture className="text-white/90 group-hover:rotate-90 group-hover:text-[#D34826] transition-all duration-700 relative z-10" size={28} />
                </div>

              </div>

              {/* Lens Specification Marking Badge */}
              <div className="absolute -bottom-2 bg-[#D34826] text-white text-[8px] font-mono tracking-widest px-2 py-0.5 rounded-full uppercase shadow-md font-bold whitespace-nowrap">
                50mm f/1.4
              </div>

            </div>
          </div>

        </div>

        {/* HERO TYPOGRAPHY & HEADLINE (With generous top padding to clear the central lens) */}
        <div className="pt-8 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Big Dual-Tone Headline */}
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-[0.92] text-[#171717]">
                SOME MOMENTS <br />
                ARE LIVED. <br />
                <span className="text-[#D34826]">OURS ARE CAPTURED.</span>
              </h1>
            </div>

            {/* Subtext and Action Buttons */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-5">
              <p className="text-xs sm:text-sm md:text-base font-sans text-[#555555] leading-relaxed max-w-md">
                {STUDIO_INFO.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenBooking()}
                  className="bg-[#D34826] hover:bg-[#B93D1E] text-white px-5 sm:px-6 py-3 text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 rounded-[2px]"
                >
                  <span>BOOK A SESSION</span>
                  <ArrowUpRight size={15} />
                </button>

                <a
                  href="#work"
                  className="border border-[#171717] hover:bg-[#171717] hover:text-white text-[#171717] px-5 sm:px-6 py-3 text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 transition-all active:scale-95 bg-white/60 rounded-[2px]"
                >
                  <span>VIEW WORK</span>
                  <Eye size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Editorial Ribbon / Micro Labels */}
          <div className="mt-12 sm:mt-14 pt-5 border-t border-[#E3DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-widest text-[#777777] gap-2">
            <div>
              PHOTOGRAPHY • VIDEO EDITING • PICTURE RETOUCH
            </div>
            <div className="text-[#D34826] font-semibold">
              PEOPLE. PLACES. PERSPECTIVES.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export default function StudioSection({ onOpenBooking }) {
  const tiles = Array.from({ length: 16 }, (_, i) => i);
  // High quality portrait photo of the studio founder
  const portraitUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

  return (
    <section id="the-studio" className="py-20 md:py-28 border-b border-[#E3DFD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Metrics */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Section Tag */}
            <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold">
              (01) THE STUDIO
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.95] text-[#171717]">
              WE DON'T TAKE PHOTOS. <br />
              <span className="text-[#D34826]">WE MAKE THEM.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg font-sans text-[#4A4A4A] leading-relaxed max-w-xl">
              {STUDIO_INFO.name} is a photography and visual studio based in Jakarta, Indonesia. We shoot portraits, weddings, events and editorial work, then finish every frame by hand. Honest light, real emotion, and images that still feel right in twenty years.
            </p>

            {/* Metrics Divider */}
            <div className="pt-6 border-t border-[#D9D4C7]">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {STUDIO_INFO.stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl sm:text-5xl md:text-6xl font-display text-[#D34826]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono tracking-wider text-[#666666]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4x4 Mosaic Tile Grid (Single continuous image sliced into 16 tiles) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square p-2">
              
              {/* Backing Frame & 4x4 Grid Container */}
              <div className="grid grid-cols-4 grid-rows-4 gap-1 sm:gap-1.5 w-full h-full p-2 bg-[#EAE6DC] shadow-lg border border-[#D5D0C2] rounded">
                {tiles.map((tileIndex) => {
                  const row = Math.floor(tileIndex / 4);
                  const col = tileIndex % 4;
                  return (
                    <div
                      key={tileIndex}
                      className="relative overflow-hidden bg-neutral-900 shadow-sm border border-black/10 rounded-[2px] group"
                    >
                      {/* Precisely offset image so the 16 tiles form ONE continuous portrait */}
                      <img
                        src={portraitUrl}
                        alt="Studio Founder Portrait"
                        className="absolute max-w-none object-cover contrast-105 transition-all duration-500 pointer-events-none select-none"
                        style={{
                          width: '400%',
                          height: '400%',
                          left: `-${col * 100}%`,
                          top: `-${row * 100}%`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* POST-IT NOTE 1: Top Right */}
              <div className="absolute -top-3 -right-2 sm:-right-4 w-32 sm:w-36 p-3 bg-[#FEF3C7] text-[#171717] shadow-postit border border-[#FDE68A] rotate-3 z-20 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-lg sm:text-xl font-bold leading-tight">
                  Founded in 2020, Jakarta
                </p>
              </div>

              {/* POST-IT NOTE 2: Left Middle */}
              <div className="absolute top-1/3 -left-3 sm:-left-5 w-32 sm:w-36 p-3 bg-[#FEF3C7] text-[#171717] shadow-postit border border-[#FDE68A] -rotate-6 z-20 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-lg sm:text-xl font-bold leading-tight">
                  150+ shoots & counting
                </p>
              </div>

              {/* POST-IT NOTE 3: Bottom Right */}
              <div className="absolute bottom-10 -right-3 sm:-right-5 w-36 sm:w-40 p-3 bg-[#FEF3C7] text-[#171717] shadow-postit border border-[#FDE68A] rotate-2 z-20 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-base sm:text-lg font-bold leading-tight">
                  Every frame retouched by hand.
                </p>
              </div>

              {/* POST-IT NOTE 4: Bottom Left (Terracotta Orange) */}
              <div
                onClick={() => onOpenBooking()}
                className="absolute -bottom-3 left-4 sm:left-6 w-32 sm:w-36 p-3 bg-[#D34826] text-white shadow-postit -rotate-3 z-30 cursor-pointer hover:rotate-0 hover:scale-105 transition-all rounded-[2px]"
                title="Pesan Sesi Anda Sekarang"
              >
                <p className="font-handwriting text-lg sm:text-xl font-bold leading-tight text-white">
                  Next shoot: yours?
                </p>
                <div className="text-[10px] font-mono tracking-wider opacity-90 mt-0.5 uppercase underline">
                  Book now →
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

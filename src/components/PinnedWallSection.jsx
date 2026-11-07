import React from 'react';
import { PINNED_WALL_ITEMS } from '../data/studioData';
import { ZoomIn } from 'lucide-react';

export default function PinnedWallSection({ onSelectPhoto }) {
  return (
    <section id="the-wall" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E3DFD5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
              (00) ARCHIVE & OUTTAKES
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.95] text-[#171717]">
              PINNED TO <br />
              <span className="text-[#D34826]">THE WALL.</span>
            </h2>
          </div>

          <div className="max-w-md text-left md:text-right">
            <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed mb-2">
              Outtakes, test shots and favourite frames. The ones that never made the client gallery but still ended up on our studio wall.
            </p>
            <div className="text-[11px] font-mono tracking-widest text-[#D34826] font-semibold">
              SHOT ON FILM + DIGITAL • 2020 — 2026
            </div>
          </div>
        </div>

        {/* Pinned Moodboard Wall Grid */}
        <div className="relative bg-[#FAF8F5] p-6 sm:p-10 md:p-12 rounded-xl border border-[#E5E0D5] shadow-sm">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-start">
            
            {PINNED_WALL_ITEMS.map((item) => {
              if (item.type === 'contact-sheet') {
                return (
                  <div
                    key={item.id}
                    style={{ transform: `rotate(${item.rotation})` }}
                    className="relative bg-white p-4 shadow-polaroid border border-[#DCD7CB] flex flex-col items-center justify-center text-center col-span-2 sm:col-span-1 aspect-[4/5] transition-all hover:scale-105 hover:z-30 cursor-default rounded-[2px]"
                  >
                    <div className="masking-tape-corner -top-2.5 left-1/2 -translate-x-1/2" />
                    
                    <div className="space-y-2 font-mono text-[9px] sm:text-[10px] tracking-widest text-[#171717] uppercase font-bold py-4">
                      {item.content.map((text, idx) => (
                        <div key={idx} className="border-b border-[#EAE6DC] pb-1.5 last:border-none">
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectPhoto(item)}
                  style={{ transform: `rotate(${item.rotation})` }}
                  className="relative group bg-white p-2.5 pb-4 shadow-polaroid border border-[#E0DCD2] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-polaroid-hover hover:z-30 rounded-[2px]"
                >
                  {/* Masking tape styling based on item */}
                  {item.tape === 'top' && (
                    <div className="masking-tape-corner -top-2.5 left-1/2 -translate-x-1/2" />
                  )}
                  {item.tape === 'top-double' && (
                    <>
                      <div className="masking-tape-corner -top-2.5 left-2 w-9 rotate-[-8deg]" />
                      <div className="masking-tape-corner -top-2.5 right-2 w-9 rotate-[8deg]" />
                    </>
                  )}
                  {item.tape === 'corners' && (
                    <>
                      <div className="masking-tape-corner -top-2 -left-2 rotate-[-40deg] w-10" />
                      <div className="masking-tape-corner -bottom-2 -right-2 rotate-[-40deg] w-10" />
                    </>
                  )}

                  {/* Image Container with B&W / Filter */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 rounded-[2px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover contrast-105 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm">
                        <ZoomIn size={12} />
                        <span>INSPECT</span>
                      </div>
                    </div>
                  </div>

                  {/* Micro caption under photo */}
                  <div className="pt-2 text-center">
                    <p className="text-[10px] font-mono tracking-tight text-[#666666] truncate group-hover:text-[#D34826] transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Wall Badges and Handwritten note */}
          <div className="mt-10 pt-5 border-t border-[#E8E3D7] flex flex-wrap items-center justify-between gap-4">
            
            {/* Stamp "STILL ON FILM." */}
            <div className="border-2 border-[#171717] px-3 py-1 font-mono text-xs uppercase font-bold tracking-widest text-[#171717] rotate-[-2deg] bg-white shadow-sm">
              STILL ON FILM.
            </div>

            {/* Handwritten Note in Caveat Script */}
            <div className="font-handwriting text-2xl sm:text-3xl font-bold text-[#D34826] rotate-[-1deg]">
              fav frames — keep these!
            </div>

            <div className="text-[10px] sm:text-[11px] font-mono text-[#888888] tracking-widest">
              TAP ANY PHOTO TO VIEW CAMERA & FILM SPECS
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

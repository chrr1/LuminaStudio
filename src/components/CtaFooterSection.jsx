import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function CtaFooterSection({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp}?text=Halo%20${encodeURIComponent(STUDIO_INFO.name)},%20saya%20ingin%20tanya%20jadwal%20dan%20paket%20sesi%20foto.`;

  return (
    <>
      {/* (07) ACTION BANNER (BURNT TERRACOTTA) */}
      <section id="contact" className="py-20 md:py-24 bg-[#D34826] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="space-y-2">
              <div className="text-xs font-mono tracking-widest text-white/80 font-semibold">
                (07) LET'S TALK
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white leading-[0.95]">
                LET'S CREATE SOMETHING <br />
                TIMELESS.
              </h2>
            </div>

            <div className="flex flex-col sm:items-start lg:items-end space-y-3">
              <button
                onClick={() => onOpenBooking()}
                className="bg-white hover:bg-neutral-100 text-[#171717] px-7 py-3.5 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-all rounded"
              >
                <span>BOOK A SESSION</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono tracking-widest text-white/90 hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle size={14} />
                <span>OR WHATSAPP {STUDIO_INFO.whatsappDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER (DARK NOIR BRUTALIST) */}
      <footer className="bg-[#141414] text-white pt-16 pb-8 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Info Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-14 border-b border-[#252525]">
            
            {/* Tagline */}
            <div className="md:col-span-5">
              <p className="text-xs font-mono tracking-widest uppercase text-[#888888] leading-relaxed max-w-sm">
                WHERE MOMENTS BECOME TIMELESS VISUALS. PORTRAITS, FILMS AND RETOUCHING WITH A DISTINCT TOUCH.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#D34826] uppercase font-bold">
                PAGES
              </div>
              <ul className="space-y-2 text-xs font-mono text-[#AAAAAA]">
                <li><a href="#home" className="hover:text-white transition-colors">HOME</a></li>
                <li><a href="#the-studio" className="hover:text-white transition-colors">THE STUDIO</a></li>
                <li><a href="#before-after" className="hover:text-white transition-colors">BEFORE / AFTER</a></li>
                <li><a href="#the-wall" className="hover:text-white transition-colors">THE WALL</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">PORTFOLIO</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors">PACKAGES</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-4 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#D34826] uppercase font-bold">
                LOCATION & INQUIRIES
              </div>
              <div className="space-y-1.5 text-xs font-mono text-[#AAAAAA]">
                <div>{STUDIO_INFO.location}</div>
                <div>INSTAGRAM: <span className="text-white">{STUDIO_INFO.instagram}</span></div>
                <div>WHATSAPP: <span className="text-white">{STUDIO_INFO.whatsappDisplay}</span></div>
                <div>EMAIL: <span className="text-white">{STUDIO_INFO.email}</span></div>
              </div>
            </div>

          </div>

          {/* GIANT STUDIO WORDMARK */}
          <div className="pt-10 overflow-hidden text-center sm:text-left select-none">
            <div className="font-display text-[15vw] sm:text-[14vw] leading-[0.8] uppercase tracking-tight text-white flex flex-wrap items-center justify-between">
              <span className="text-[#D34826]">{STUDIO_INFO.brandFirst}</span>
              <span className="text-white">{STUDIO_INFO.brandSecond}</span>
            </div>
          </div>

          {/* Copyright & Sub-strip */}
          <div className="mt-8 pt-5 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-widest text-[#666666] gap-2">
            <div>
              © {new Date().getFullYear()} {STUDIO_INFO.name}. ALL RIGHTS RESERVED.
            </div>
            <div>
              HONEST LIGHT • REAL EMOTION • TIMELESS FRAMES
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

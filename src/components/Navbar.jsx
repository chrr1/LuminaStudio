import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Navbar({ onOpenBooking, currency, setCurrency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'STUDIO', href: '#the-studio' },
    { name: 'THE WALL', href: '#the-wall' },
    { name: 'PORTFOLIO', href: '#work' },
    { name: 'RETOUCH', href: '#before-after' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PACKAGES', href: '#packages' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E3DFD5]' : 'bg-[#F7F5F0]/80 backdrop-blur-sm py-4 border-b border-[#EAE6DC]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name (Single Line Guaranteed) */}
          <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#171717] flex items-center justify-center text-white group-hover:bg-[#D34826] transition-colors">
              <Camera size={15} />
            </div>
            <div className="font-display text-2xl sm:text-3xl tracking-wider text-[#171717] whitespace-nowrap leading-none flex items-center gap-1.5">
              <span>{STUDIO_INFO.brandFirst}</span>
              <span className="text-[#D34826]">{STUDIO_INFO.brandSecond}</span>
            </div>
          </a>

          {/* Desktop Nav Links (Clean Single Line, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[11px] font-mono tracking-widest text-[#555555]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap hover:text-[#D34826] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D34826] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
            {/* Currency Switcher */}
            <button
              onClick={() => setCurrency(currency === 'NGN' ? 'IDR' : 'NGN')}
              className="px-2.5 py-1.5 text-[10px] font-mono border border-[#D5D0C3] bg-white rounded hover:border-[#171717] transition-colors text-[#555] whitespace-nowrap"
              title="Ganti Format Mata Uang"
            >
              CURRENCY: <span className="font-bold text-[#171717]">{currency}</span>
            </button>

            {/* Book A Session Button */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#D34826] hover:bg-[#B93D1E] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <span>BOOK A SESSION</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setCurrency(currency === 'NGN' ? 'IDR' : 'NGN')}
              className="px-2 py-1 text-[10px] font-mono border border-[#D5D0C3] bg-white rounded text-[#555]"
            >
              {currency}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#171717] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#E3DFD5] px-6 py-5 shadow-xl transition-all">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono tracking-widest text-[#171717] hover:text-[#D34826] py-1 border-b border-[#EAE6DC]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#D34826] hover:bg-[#B93D1E] text-white py-3 text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-2 mt-2 shadow-sm"
            >
              <span>BOOK A SESSION</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

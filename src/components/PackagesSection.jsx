import React, { useState } from 'react';
import { PACKAGES, ADD_ONS } from '../data/studioData';
import { Check, Plus, Calculator } from 'lucide-react';

export default function PackagesSection({ currency, onSelectPackage }) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const toggleAddOn = (id) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
              (05) PACKAGES
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#171717]">
              PICK A <span className="text-[#D34826]">PACKAGE</span>
            </h2>
          </div>

          <div className="text-xs font-mono tracking-wider text-[#666666]">
            ALL PACKAGES INCLUDE COLOR GRADING & PRIVATE CLOUD VAULT
          </div>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-14">
          {PACKAGES.map((pkg) => {
            const isDark = pkg.isMostBooked;
            const price = currency === 'IDR' ? pkg.priceIDR : pkg.priceNGN;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-7 sm:p-9 transition-all duration-300 rounded ${
                  isDark
                    ? 'bg-[#181818] text-white shadow-2xl md:-translate-y-2 border border-[#2E2E2E]'
                    : 'bg-white text-[#171717] shadow-sm border border-[#E3DFD5]'
                }`}
              >
                {/* Top Badge for Most Booked */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono tracking-widest uppercase font-bold text-[#888888]">
                    {pkg.name}
                  </span>
                  
                  {pkg.isMostBooked && (
                    <span className="bg-[#D34826] text-white text-[10px] font-mono tracking-widest px-2.5 py-1 font-bold uppercase rounded">
                      MOST BOOKED
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="mb-5">
                  <div className={`text-3xl sm:text-5xl font-display tracking-tight ${
                    isDark ? 'text-[#D34826]' : 'text-[#171717]'
                  }`}>
                    {price}
                  </div>
                  <p className={`text-xs font-sans mt-2.5 leading-relaxed ${
                    isDark ? 'text-[#B0B0B0]' : 'text-[#666666]'
                  }`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className={`pt-5 border-t mb-7 space-y-3 flex-grow ${
                  isDark ? 'border-[#2D2D2D]' : 'border-[#EAE6DC]'
                }`}>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-mono tracking-wide">
                      <span className="text-[#D34826] font-bold">—</span>
                      <span className={isDark ? 'text-[#DDD]' : 'text-[#444]'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <button
                  onClick={() => onSelectPackage({ ...pkg, selectedAddOns })}
                  className={`w-full py-3.5 text-xs font-mono uppercase tracking-widest font-semibold transition-all active:scale-95 rounded ${
                    isDark
                      ? 'bg-[#D34826] hover:bg-[#B93D1E] text-white shadow-sm'
                      : 'bg-[#171717] hover:bg-[#D34826] text-white'
                  }`}
                >
                  BOOK THIS PACKAGE
                </button>

              </div>
            );
          })}
        </div>

        {/* INTERACTIVE ADD-ONS SELECTOR */}
        <div className="bg-white border border-[#DDD8CD] p-6 sm:p-8 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D34826] uppercase font-bold mb-2">
            <Calculator size={15} />
            <span>OPTIONAL STUDIO ADD-ONS</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#171717] mb-5">
            KUSTOMISASI SESI DENGAN LAYANAN TAMBAHAN
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {ADD_ONS.map((addon) => {
              const isSelected = selectedAddOns.includes(addon.id);
              const priceTag = currency === 'IDR' ? addon.priceDisplayIDR : addon.priceDisplayNGN;

              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`cursor-pointer p-3.5 rounded border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#D34826]/10 border-[#D34826] shadow-sm'
                      : 'bg-[#FBFBF9] border-[#DDD8CD] hover:border-[#171717]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono font-medium text-[#222]">
                      {addon.name}
                    </span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isSelected ? 'bg-[#D34826] border-[#D34826] text-white' : 'border-[#CCC]'
                    }`}>
                      {isSelected ? <Check size={11} strokeWidth={3} /> : <Plus size={10} className="text-[#888]" />}
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#D34826]">
                    {priceTag}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-3.5 border-t border-[#EAE6DC] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#666] gap-2">
            <span>
              {selectedAddOns.length > 0 
                ? `${selectedAddOns.length} Add-on terpilih dan akan otomatis dihitung saat klik tombol booking.`
                : 'Pilih add-on di atas jika Anda memerlukan MUA, jam ekstra, atau cetak kanvas.'}
            </span>

            {selectedAddOns.length > 0 && (
              <button
                onClick={() => setSelectedAddOns([])}
                className="text-[#D34826] underline hover:text-[#171717]"
              >
                Reset Add-ons
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

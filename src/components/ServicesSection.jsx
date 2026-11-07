import React from 'react';
import { SERVICES } from '../data/studioData';

export default function ServicesSection({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#141414] text-white border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
            (03) SERVICES
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
            WHAT WE <span className="text-[#D34826]">DO</span>
          </h2>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col group bg-[#1C1C1C] border border-[#2B2B2B] p-6 hover:border-[#D34826]/70 transition-all duration-300 rounded"
            >
              
              {/* Card Index / Number */}
              <div className="flex items-center justify-between text-xs font-mono text-[#D34826] mb-4">
                <span>0{index + 1}</span>
                <span className="w-6 h-[1px] bg-[#333333] group-hover:w-12 group-hover:bg-[#D34826] transition-all" />
              </div>

              {/* Service Imagery */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-[#2B2B2B] mb-5 rounded">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Service Name */}
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-white mb-2.5 group-hover:text-[#D34826] transition-colors">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-[#A0A0A0] leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* Tags / Sub-services */}
              <div className="pt-4 border-t border-[#2A2A2A]">
                <div className="text-[10px] font-mono tracking-wider text-[#777777] uppercase leading-relaxed">
                  {service.tags.join(' • ')}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

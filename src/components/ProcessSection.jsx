import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
            (04) PROCESS
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#171717]">
            HOW IT <span className="text-[#D34826]">WORKS</span>
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="flex flex-col pt-4 border-t-2 border-[#171717] relative">
              
              {/* Big Step Number */}
              <div className="text-4xl sm:text-5xl font-display text-[#D34826] mb-1">
                {step.step}
              </div>

              {/* Step Title */}
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-[#171717] mb-2.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

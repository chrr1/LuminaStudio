import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
              (06) KIND WORDS
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.95] text-[#171717]">
              NOTES LEFT <br />
              <span className="bg-[#FEF3C7] px-2 py-0.5 inline-block rotate-[-1deg] shadow-sm border border-[#FDE68A]/60">
                ON THE PRINTS.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-left md:text-right">
            <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed mb-2.5">
              Real words from real clients. After every shoot we print the nicest message and pin it to the studio wall.
            </p>
            <div className="text-xs font-mono tracking-wider text-[#D34826] font-semibold flex items-center md:justify-end gap-1.5">
              <div className="flex text-[#D34826]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span>4.9 ON GOOGLE • 150+ SHOOTS</span>
            </div>
          </div>
        </div>

        {/* Floating Print Slips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              className={`bg-white p-6 shadow-polaroid border border-[#E0DCD2] relative transition-transform duration-300 hover:scale-[1.02] hover:z-20 rounded-[2px] ${
                idx % 2 === 0 ? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]'
              }`}
            >
              {/* Masking tape on top */}
              <div className="masking-tape-corner -top-2.5 left-1/2 -translate-x-1/2" />

              {/* Source tag & Stars */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex text-[#D34826] gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#999999] uppercase">
                  {review.source}
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm font-sans text-[#171717] font-medium leading-relaxed mb-5 italic">
                "{review.quote}"
              </p>

              {/* Perforated Red Dashed Line */}
              <div className="border-b-2 border-dashed border-[#D34826]/40 mb-3.5" />

              {/* Author & Shoot Details with Mini Thumbnail */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-9 h-9 object-cover border border-[#DDD] rounded-[2px]"
                />
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#171717]">
                    {review.author}
                  </div>
                  <div className="text-[10px] font-mono tracking-tight text-[#888888] uppercase">
                    {review.packageBooked}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

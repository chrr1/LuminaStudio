import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_WORKS } from '../data/studioData';

export default function FeaturedWorkSection({ onSelectPhoto }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'PORTRAIT', 'WEDDING', 'EDITORIAL', 'COMMERCIAL'];

  const filteredWorks = activeCategory === 'ALL'
    ? FEATURED_WORKS
    : FEATURED_WORKS.filter(item => item.category.toUpperCase() === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
              (02) PORTFOLIO
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#171717]">
              FEATURED <span className="text-[#D34826]">WORK</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all uppercase rounded ${
                  activeCategory === cat
                    ? 'bg-[#171717] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#555] border border-[#DDD8CD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectPhoto({
                id: work.id,
                title: work.title,
                image: work.image,
                camera: "Medium Format Hasselblad",
                film: "Analog Tone / Hand Graded",
                lens: "80mm Prime",
                note: `Client: ${work.client} — Category: ${work.category}`
              })}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-[#DDD8CD] shadow-sm mb-4 rounded-[2px]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Corner Label */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW FULL
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Meta & Title Row */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] tracking-widest mb-1">
                <span>{work.category}</span>
                <span>{work.year}</span>
              </div>

              {/* Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-[#171717] group-hover:text-[#D34826] transition-colors">
                  {work.title}
                </h3>
                <ArrowUpRight className="text-[#888] group-hover:text-[#D34826] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" size={20} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

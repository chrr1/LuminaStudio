import React, { useState, useRef, useCallback, useEffect } from 'react';
import { BEFORE_AFTER_DATA } from '../data/studioData';
import { Sliders, CheckCircle, Split } from 'lucide-react';

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section id="before-after" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-2">
              (00) SIGNATURE CRAFT • RETOUCH BENCHMARK
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#171717]">
              BEFORE <span className="text-[#D34826]">&</span> AFTER
            </h2>
          </div>

          <div className="max-w-md text-left md:text-right">
            <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
              {BEFORE_AFTER_DATA.description}
            </p>
          </div>
        </div>

        {/* COMPARISON SLIDER STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#DCD7CA] shadow-md select-none cursor-ew-resize bg-neutral-900 touch-none"
            >
              
              {/* Image 2: AFTER (Master Retouched - Full Background) */}
              <img
                src={BEFORE_AFTER_DATA.afterImage}
                alt="After Retouch"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none filter contrast-110 saturate-110"
                draggable={false}
              />
              
              {/* After Tag */}
              <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 border border-[#D34826]/60 text-white text-[10px] font-mono tracking-wider font-bold rounded pointer-events-none z-10">
                {BEFORE_AFTER_DATA.afterLabel}
              </div>

              {/* Image 1: BEFORE (Raw Clip Viewport using CSS clip-path for 100% exact alignment) */}
              <div
                className="absolute inset-0 pointer-events-none transition-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
                }}
              >
                <img
                  src={BEFORE_AFTER_DATA.beforeImage}
                  alt="Before Raw"
                  className="absolute inset-0 w-full h-full object-cover filter saturate-[0.35] contrast-90 brightness-95"
                  draggable={false}
                />

                {/* Before Tag */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 border border-white/20 text-[#DDD] text-[10px] font-mono tracking-wider font-bold rounded pointer-events-none z-10">
                  {BEFORE_AFTER_DATA.beforeLabel}
                </div>
              </div>

              {/* Central Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#D34826] shadow-md z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Circle Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#D34826] shadow-lg flex items-center justify-center text-[#D34826]">
                  <Split size={14} className="rotate-90" />
                </div>
              </div>

            </div>

            {/* Quick Preset Buttons */}
            <div className="mt-3.5 flex flex-wrap items-center justify-between text-xs font-mono text-[#666666] gap-2">
              <span className="flex items-center gap-1.5">
                <Sliders size={13} className="text-[#D34826]" />
                <span>GESER ATAU KLIK SLIDER UNTUK MELIHAT PERBANDINGAN</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSliderPos(0)}
                  className="px-2.5 py-1 bg-white hover:bg-[#EAE6DC] text-[11px] rounded border border-[#D5D0C3] transition-colors"
                >
                  FULL AFTER
                </button>
                <button
                  onClick={() => setSliderPos(50)}
                  className="px-2.5 py-1 bg-[#D34826] text-white text-[11px] rounded font-bold shadow-sm hover:bg-[#BA3E1E] transition-colors"
                >
                  50 / 50
                </button>
                <button
                  onClick={() => setSliderPos(100)}
                  className="px-2.5 py-1 bg-white hover:bg-[#EAE6DC] text-[11px] rounded border border-[#D5D0C3] transition-colors"
                >
                  FULL RAW
                </button>
              </div>
            </div>

          </div>

          {/* Right Details: Specifications */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white border border-[#DCD7CA] p-6 rounded-lg space-y-4 shadow-sm">
              
              <div className="text-xs font-mono tracking-widest text-[#D34826] uppercase font-bold">
                STANDAR RETOUCHING STUDIO
              </div>

              <div className="space-y-3">
                {BEFORE_AFTER_DATA.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-[#333333]">
                    <CheckCircle size={15} className="text-[#D34826] flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3.5 border-t border-[#EAE6DC] text-xs font-sans text-[#666666] leading-relaxed">
                Kami menghindari filter instan berbasis AI yang menghapus pori-pori kulit. Setiap foto disempurnakan dengan teknik frequency separation dan dodge-and-burn manual 16-bit.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

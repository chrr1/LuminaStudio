import React, { useEffect } from 'react';
import { X, Camera, Film, Aperture, Info } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#181818] border border-[#333333] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] rounded-lg"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white/70 hover:text-[#D34826] bg-black/50 p-1.5 rounded-full backdrop-blur-sm transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Preview Box */}
        <div className="md:w-2/3 bg-black flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-[2px]"
          />
        </div>

        {/* Studio Specs Sidebar */}
        <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#2B2B2B] text-white overflow-y-auto">
          
          <div className="space-y-5">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#D34826] uppercase font-bold mb-1">
                STUDIO ARCHIVE • FRAME INSPECT
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
                {item.title}
              </h3>
            </div>

            {/* Technical Metadata Box */}
            <div className="bg-[#202020] p-4 border border-[#2E2E2E] rounded space-y-3 font-mono text-xs text-[#BBB]">
              
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#2D2D2D]">
                <Camera size={14} className="text-[#D34826]" />
                <span className="text-[10px] text-[#888] uppercase">Camera:</span>
                <span className="text-white font-medium ml-auto">{item.camera || 'Custom Studio Rig'}</span>
              </div>

              <div className="flex items-center gap-2.5 pb-2 border-b border-[#2D2D2D]">
                <Film size={14} className="text-[#D34826]" />
                <span className="text-[10px] text-[#888] uppercase">Film / Stock:</span>
                <span className="text-white font-medium ml-auto">{item.film || 'Hand Graded Raw'}</span>
              </div>

              <div className="flex items-center gap-2.5 pb-2 border-b border-[#2D2D2D]">
                <Aperture size={14} className="text-[#D34826]" />
                <span className="text-[10px] text-[#888] uppercase">Lens / Optic:</span>
                <span className="text-white font-medium ml-auto">{item.lens || '85mm f/1.4 Prime'}</span>
              </div>

            </div>

            {/* Photographer Note */}
            {item.note && (
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-[#888] uppercase flex items-center gap-1.5">
                  <Info size={12} className="text-[#D34826]" />
                  <span>DARKROOM NOTES</span>
                </div>
                <p className="text-xs font-sans text-[#DDD] italic leading-relaxed">
                  "{item.note}"
                </p>
              </div>
            )}
          </div>

          <div className="pt-5 border-t border-[#262626] mt-5">
            <button
              onClick={onClose}
              className="w-full bg-[#D34826] hover:bg-[#B93D1E] text-white py-2.5 text-xs font-mono uppercase tracking-widest font-semibold transition-colors rounded"
            >
              CLOSE INSPECTION
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

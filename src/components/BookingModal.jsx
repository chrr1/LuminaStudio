import React, { useState, useEffect } from 'react';
import { X, Check, MessageCircle } from 'lucide-react';
import { PACKAGES, ADD_ONS, STUDIO_INFO } from '../data/studioData';

export default function BookingModal({ isOpen, onClose, initialPackage, currency }) {
  const [selectedPkg, setSelectedPkg] = useState(initialPackage?.id || 'signature');
  const [selectedAddOns, setSelectedAddOns] = useState(initialPackage?.selectedAddOns || []);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    locationType: 'In-Studio',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkg(initialPackage.id);
      if (initialPackage.selectedAddOns) {
        setSelectedAddOns(initialPackage.selectedAddOns);
      }
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const currentPkgObj = PACKAGES.find(p => p.id === selectedPkg) || PACKAGES[1];

  // Calculate total price with add-ons
  const basePriceNum = currency === 'IDR' ? currentPkgObj.rawPriceIDR : currentPkgObj.rawPriceNGN;
  const addOnsTotal = selectedAddOns.reduce((acc, addonId) => {
    const item = ADD_ONS.find(a => a.id === addonId);
    if (!item) return acc;
    return acc + (currency === 'IDR' ? item.priceIDR : item.priceNGN);
  }, 0);

  const grandTotalNum = basePriceNum + addOnsTotal;
  const formattedGrandTotal = currency === 'IDR'
    ? `Rp ${grandTotalNum.toLocaleString('id-ID')}`
    : `₦${grandTotalNum.toLocaleString()}`;

  const toggleAddOnInModal = (id) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const addOnNames = selectedAddOns.map(id => {
      const match = ADD_ONS.find(a => a.id === id);
      return match ? match.name : id;
    });

    const addOnText = addOnNames.length > 0 ? addOnNames.join(', ') : 'None';

    const message = `Halo ${STUDIO_INFO.name}, saya ingin booking sesi foto:%0A%0A` +
      `• Paket: ${currentPkgObj.name}%0A` +
      `• Add-on Tambahan: ${addOnText}%0A` +
      `• Estimasi Total: ${formattedGrandTotal}%0A` +
      `• Nama: ${formData.name || '-' }%0A` +
      `• No. WhatsApp: ${formData.phone || '-' }%0A` +
      `• Tanggal Sesi: ${formData.date || '-' }%0A` +
      `• Lokasi: ${formData.locationType}%0A` +
      `• Catatan: ${formData.notes || 'Tidak ada'}`;

    window.open(`https://wa.me/${STUDIO_INFO.whatsapp}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-[#F7F5F0] border-2 border-[#171717] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto rounded-lg">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#171717] hover:text-[#D34826] transition-colors"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-[#D34826] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check size={32} />
            </div>
            <h3 className="text-3xl font-display uppercase tracking-wide text-[#171717]">
              BOOKING REQUEST SENT!
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#555] max-w-md mx-auto">
              Terima kasih! Pesan booking Anda telah diteruskan ke tim {STUDIO_INFO.name}. Kami akan segera mengonfirmasi ketersediaan jadwal dalam kurun waktu 24 jam.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 bg-[#171717] hover:bg-[#D34826] text-white px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-semibold transition-colors rounded"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-5">
              <div className="text-xs font-mono tracking-widest text-[#D34826] font-semibold mb-1">
                RESERVATION / JADWAL SESI
              </div>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#171717]">
                BOOK YOUR <span className="text-[#D34826]">SESSION</span>
              </h2>
              <p className="text-xs font-sans text-[#666] mt-0.5">
                Pilih paket dan tentukan tanggal yang Anda inginkan.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-5">
              
              {/* Select Package Radio Cards */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#444] mb-2 font-bold">
                  PILIH PAKET
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkg(pkg.id)}
                      className={`cursor-pointer p-3 border rounded transition-all ${
                        selectedPkg === pkg.id
                          ? 'border-[#D34826] bg-[#D34826]/10 shadow-sm'
                          : 'border-[#D5D0C2] bg-white hover:border-[#171717]'
                      }`}
                    >
                      <div className="text-[10px] font-mono tracking-wider font-bold text-[#171717]">
                        {pkg.name}
                      </div>
                      <div className="text-base sm:text-lg font-display text-[#D34826] mt-0.5">
                        {currency === 'IDR' ? pkg.priceIDR : pkg.priceNGN}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-on options */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#444] mb-1.5 font-bold">
                  PILIHAN ADD-ON TAMBAHAN
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {ADD_ONS.map((addon) => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOnInModal(addon.id)}
                        className={`cursor-pointer p-2 rounded border flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-[#D34826]/10 border-[#D34826] text-[#171717]'
                            : 'bg-white border-[#D5D0C2] text-[#666]'
                        }`}
                      >
                        <span className="truncate pr-1 text-[10px] sm:text-[11px]">{addon.name}</span>
                        <span className="text-[#D34826] font-bold flex-shrink-0 text-[10px]">
                          {currency === 'IDR' ? addon.priceDisplayIDR : addon.priceDisplayNGN}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#444] mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Alex Pratama"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#D5D0C2] p-2 text-xs font-sans rounded focus:outline-none focus:border-[#D34826]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#444] mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D5D0C2] p-2 text-xs font-sans rounded focus:outline-none focus:border-[#D34826]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#444] mb-1">
                    Perkiraan Tanggal Sesi *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-[#D5D0C2] p-2 text-xs font-sans rounded focus:outline-none focus:border-[#D34826]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#444] mb-1">
                    Tipe Lokasi
                  </label>
                  <select
                    value={formData.locationType}
                    onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                    className="w-full bg-white border border-[#D5D0C2] p-2 text-xs font-sans rounded focus:outline-none focus:border-[#D34826]"
                  >
                    <option value="In-Studio">In-Studio Shoot</option>
                    <option value="On-Location Outdoor">On-Location / Outdoor</option>
                    <option value="Wedding / Venue Event">Wedding / Venue Event</option>
                  </select>
                </div>

              </div>

              {/* Total Calculation Bar */}
              <div className="bg-white p-3.5 border border-[#D5D0C2] rounded flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-mono tracking-widest text-[#888] uppercase">
                    ESTIMASI TOTAL INVESTASI
                  </div>
                  <div className="text-xs font-mono text-[#555]">
                    {currentPkgObj.name} {selectedAddOns.length > 0 && `+ ${selectedAddOns.length} Add-on`}
                  </div>
                </div>

                <div className="text-xl sm:text-2xl font-display text-[#D34826]">
                  {formattedGrandTotal}
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] rounded"
              >
                <MessageCircle size={16} />
                <span>KIRIM BOOKING VIA WHATSAPP</span>
              </button>

            </form>
          </div>
        )}

      </div>

    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { restaurantInfo } from "@/data/info";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "", phone: "", date: "", time: "", guests: "2 Orang", notes: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      setError("Mohon lengkapi semua field yang wajib (*).");
      return;
    }

    const text = `Halo Warung Iga Mas Yono, saya ingin melakukan reservasi sesuai data di atas.\n\nNama: ${formData.name}\nNomor HP: ${formData.phone}\nTanggal Reservasi: ${formData.date}\nJam Reservasi: ${formData.time}\nJumlah Tamu: ${formData.guests}\nCatatan: ${formData.notes || "-"}`;

    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="reservasi" className="py-20 md:py-32 px-4 md:px-8 bg-iga-light-surface relative border-t border-iga-outline-variant/10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Form */}
        <div className="space-y-8 bg-white p-6 md:p-8 lg:p-12 rounded-lg border border-iga-outline-variant/20 shadow-sm">
          <div className="space-y-2">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">Reservasi</h2>
            <p className="font-body text-[16px] leading-[24px] text-iga-on-tertiary/80">Pastikan tempat Anda untuk pengalaman kuliner yang tak terlupakan.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 font-body text-sm bg-red-50 p-3 rounded">{error}</p>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="font-body text-[13px] tracking-[0.1em] font-semibold text-iga-on-tertiary/70 uppercase">Nama Lengkap *</label>
                <input type="text" placeholder="Masukkan nama Anda" value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-iga-outline-variant/40 focus:border-brand-red focus:ring-0 px-0 py-2 font-body text-[16px] text-iga-on-tertiary placeholder:text-iga-on-tertiary/30 transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="font-body text-[13px] tracking-[0.1em] font-semibold text-iga-on-tertiary/70 uppercase">Nomor HP/WA *</label>
                <input type="tel" placeholder="08xx-xxxx-xxxx" value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-iga-outline-variant/40 focus:border-brand-red focus:ring-0 px-0 py-2 font-body text-[16px] text-iga-on-tertiary placeholder:text-iga-on-tertiary/30 transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="font-body text-[13px] tracking-[0.1em] font-semibold text-iga-on-tertiary/70 uppercase">Tanggal *</label>
                <input type="date" value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-iga-outline-variant/40 focus:border-brand-red focus:ring-0 px-0 py-2 font-body text-[16px] text-iga-on-tertiary transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="font-body text-[13px] tracking-[0.1em] font-semibold text-iga-on-tertiary/70 uppercase">Jam *</label>
                <input type="time" value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-iga-outline-variant/40 focus:border-brand-red focus:ring-0 px-0 py-2 font-body text-[16px] text-iga-on-tertiary transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="font-body text-[13px] tracking-[0.1em] font-semibold text-iga-on-tertiary/70 uppercase">Jumlah Tamu *</label>
                <select value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-iga-outline-variant/40 focus:border-brand-red focus:ring-0 px-0 py-2 font-body text-[16px] text-iga-on-tertiary transition-colors">
                  <option value="1-2 Orang">1-2 Orang</option>
                  <option value="3-4 Orang">3-4 Orang</option>
                  <option value="5-8 Orang">5-8 Orang</option>
                  <option value="9-15 Orang">9-15 Orang</option>
                  <option value="Lebih dari 15">Lebih dari 15</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="font-body text-[13px] tracking-[0.1em] font-semibold text-iga-on-tertiary/70 uppercase">Catatan Tambahan</label>
              <textarea rows={2} placeholder="Alergi, perayaan khusus, dll. (Opsional)" value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-iga-outline-variant/40 focus:border-brand-red focus:ring-0 px-0 py-2 font-body text-[16px] text-iga-on-tertiary placeholder:text-iga-on-tertiary/30 transition-colors" />
            </div>
            
            <button type="submit"
              className="w-full py-4 bg-brand-red text-white font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-brand-red/90 transition-all mt-4 hover:shadow-lg hover:shadow-brand-red/20 active:scale-[0.98]">
              RESERVASI VIA WHATSAPP
            </button>
          </form>
        </div>

        {/* Image / Banner (Replacing old map section to keep layout nice) */}
        <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg hidden lg:block">
          <Image 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
            alt="Suasana Warung Iga Mas Yono" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="font-display text-3xl font-medium mb-2">Suasana Nyaman & Hangat</h3>
            <p className="font-body text-white/80">Sempurna untuk acara keluarga, makan siang bisnis, atau perayaan spesial Anda bersama orang terkasih.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

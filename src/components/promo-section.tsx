"use client";

import Image from "next/image";
import { getPromos } from "@/data/promo";

export default function PromoSection() {
  // Hanya ambil promo yang aktif, maksimal 2
  const activePromos = getPromos().filter(p => p.status === 'Aktif').slice(0, 2);

  if (activePromos.length === 0) return null;

  return (
    <section id="promo" className="py-20 md:py-32 px-4 md:px-8 bg-iga-light-surface relative border-t border-iga-outline-variant/20">
      <div className="max-w-[1280px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-body text-[12px] tracking-[0.2em] font-semibold text-brand-red uppercase mb-2 block">
            Penawaran Eksklusif
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Promo Spesial
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto opacity-70" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {activePromos.map((promo) => (
            <div key={promo.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-iga-outline-variant/30 flex flex-col hover:-translate-y-1">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image src={promo.image} alt={promo.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-iga-primary text-iga-on-primary text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-md">
                    Special Offer
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-[26px] font-semibold text-iga-on-tertiary mb-3 leading-tight group-hover:text-brand-red transition-colors">{promo.name}</h3>
                <p className="font-body text-[14.5px] text-iga-on-tertiary-variant mb-6 flex-grow leading-relaxed">{promo.description}</p>
                <div className="mt-auto border-t border-iga-outline-variant/20 pt-6">
                  <div className="flex items-center gap-3 text-[12px] font-body text-iga-on-tertiary-variant mb-6 uppercase tracking-wider">
                    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Berlaku hingga {new Date(promo.endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <a href="#reservasi" className="block bg-black text-white px-6 py-4 rounded font-body text-[13px] tracking-[0.1em] font-semibold uppercase hover:bg-brand-red transition-all duration-300 text-center w-full shadow-md">
                    Klaim Promo Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

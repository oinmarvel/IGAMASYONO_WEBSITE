"use client";

import { restaurantInfo } from "@/data/info";

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 md:py-32 px-4 md:px-8 bg-white relative border-t border-iga-outline-variant/10">
      <div className="max-w-[1280px] mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Lokasi Cabang
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto opacity-50" />
          <p className="font-body text-[16px] leading-[24px] text-iga-on-tertiary/80">
            Kunjungi cabang Warung Iga Mas Yono terdekat dari Anda
          </p>
        </div>

        <div className="space-y-16">
          {restaurantInfo.branches.map((branch, index) => (
            <div key={branch.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <h3 className="font-display text-3xl font-bold text-iga-on-tertiary">{branch.name}</h3>
                <div className="space-y-4 font-body text-iga-on-tertiary/80">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-red mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{branch.operationalHours}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>{branch.phone}</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-6 py-3 rounded font-body text-[13px] tracking-[0.1em] font-semibold uppercase hover:bg-brand-red/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    Petunjuk Arah
                  </a>
                </div>
              </div>
              
              <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-iga-outline-variant/20 bg-gray-100">
                <iframe 
                  src={branch.embedMapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map Lokasi ${branch.name}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

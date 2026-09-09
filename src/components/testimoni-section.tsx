"use client";

import { useState } from "react";
import Image from "next/image";
import { getFilteredReviews, reviewStats } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-brand-red" : "text-iga-outline-variant/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimoniSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = getFilteredReviews();

  return (
    <section id="testimoni" className="py-20 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden border-t border-iga-outline-variant/20">
      {/* Background decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Kisah Rasa Pelanggan
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto opacity-70" />
          
          <div className="flex flex-col items-center justify-center gap-2 mt-6 bg-white py-4 px-8 rounded-full shadow-sm border border-iga-outline-variant/30 inline-flex mx-auto">
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-bold text-brand-red">{reviewStats.averageRating}</span>
              <div className="flex flex-col items-start">
                <StarRating rating={Math.round(reviewStats.averageRating)} />
                <p className="font-body text-[13px] text-iga-on-tertiary-variant mt-1">Berdasarkan {reviewStats.totalReviews} ulasan Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.slice(0, 8).map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl border border-iga-outline-variant/30 hover:border-brand-red/40 transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm">
                  <Image src={t.authorPhoto} alt={t.authorName} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-display text-[16px] font-semibold text-iga-on-tertiary leading-tight mb-1">{t.authorName}</div>
                  <div className="font-body text-[12px] text-iga-on-tertiary-variant uppercase tracking-wider">{new Date(t.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="font-body text-[14.5px] text-iga-on-tertiary/80 mt-5 flex-grow italic line-clamp-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              
              <div className="mt-6 pt-5 border-t border-iga-outline-variant/20 flex justify-end">
                <svg className="w-5 h-5 text-gray-300 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          {testimonials.length > 0 && (
            <>
              <div className="bg-white p-8 rounded-xl border border-iga-outline-variant/30 shadow-md">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm">
                    <Image src={testimonials[activeIndex].authorPhoto} alt={testimonials[activeIndex].authorName} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-display text-[16px] font-semibold text-iga-on-tertiary leading-tight mb-1">{testimonials[activeIndex].authorName}</div>
                    <div className="font-body text-[12px] text-iga-on-tertiary-variant uppercase tracking-wider">{new Date(testimonials[activeIndex].date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                  </div>
                </div>
                <StarRating rating={testimonials[activeIndex].rating} />
                <p className="font-body text-[14.5px] text-iga-on-tertiary/80 mt-5 italic line-clamp-4 leading-relaxed">&ldquo;{testimonials[activeIndex].text}&rdquo;</p>
              </div>
              <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2 px-4 max-w-[200px] mx-auto">
                {testimonials.slice(0, 5).map((_, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${i === activeIndex ? "bg-brand-red w-6" : "bg-iga-outline-variant/40"}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#menu" className="px-8 py-4 bg-brand-red text-white font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-brand-red/90 transition-all shadow-md hover:shadow-lg text-center w-full sm:w-auto">
            Coba Menu Favorit Pelanggan
          </a>
          <a href="https://maps.google.com/?q=Warung+Iga+Mas+Yono" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border border-iga-outline-variant/40 text-iga-on-tertiary font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-iga-surface-variant transition-all shadow-sm text-center w-full sm:w-auto">
            Lihat Semua Review Google
          </a>
        </div>
      </div>
    </section>
  );
}

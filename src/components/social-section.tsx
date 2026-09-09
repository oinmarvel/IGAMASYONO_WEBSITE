"use client";

import Image from "next/image";
import { restaurantInfo } from "@/data/info";

const socialFeeds = [
  { id: 1, platform: 'instagram', image: "/images/sosmed_ig1.jpeg", caption: "Iga Bakar Madu kesukaan kalian! Sudah coba yang pedas?", date: "2 Hari yang lalu" },
  { id: 2, platform: 'tiktok', image: "/images/sosmed_tiktok1.jpeg", caption: "Menu buka puasa hari ini. Jangan lupa reservasi tempat ya!", date: "5 Hari yang lalu" },
  { id: 3, platform: 'instagram', image: "/images/sosmed_ig2.jpeg", caption: "Terima kasih rombongan dari Jakarta sudah mampir ke cabang Pamularsih.", date: "1 Minggu yang lalu" },
  { id: 4, platform: 'tiktok', image: "/images/sosmed_tiktok2.jpeg", caption: "Paket Keluarga besar siap menemani akhir pekanmu.", date: "2 Minggu yang lalu" },
];

export default function SocialSection() {
  return (
    <section id="social" className="py-20 md:py-32 px-4 md:px-8 bg-iga-light-surface relative border-t border-iga-outline-variant/10">
      <div className="max-w-[1280px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Aktivitas Terbaru
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto opacity-70" />
          <p className="font-body text-[16px] leading-[24px] text-iga-on-tertiary-variant max-w-2xl mx-auto">
            Ikuti perjalanan kuliner dan keseruan pelanggan kami setiap harinya
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialFeeds.map((post) => (
            <a 
              key={post.id} 
              href={post.platform === 'instagram' ? restaurantInfo.instagramUrl : restaurantInfo.tiktokUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500 border border-iga-outline-variant/20"
            >
              <Image src={post.image} alt={post.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105 ease-out" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              
              <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                {post.platform === 'instagram' ? (
                  <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.22-2.42.92-4.88 2.88-6.23 1.57-1.1 3.54-1.42 5.45-1.02V13.8c-1.03-.22-2.14-.14-3.05.41-.85.51-1.39 1.42-1.41 2.41-.01 1.05.61 2.05 1.52 2.47 1.25.59 2.83.39 3.84-.55.77-.72 1.17-1.79 1.18-2.86.03-5.06.01-10.13.02-15.19z"/>
                  </svg>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-[14px] font-body line-clamp-3 mb-3 leading-relaxed drop-shadow-md">{post.caption}</p>
                <p className="text-white/70 text-[11px] font-body tracking-wider uppercase">{post.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-full sm:w-auto items-center gap-3 px-8 py-3.5 bg-white border border-iga-outline-variant/30 text-iga-on-tertiary font-body text-[12px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-iga-surface-variant transition-all shadow-sm">
            <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href={restaurantInfo.tiktokUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-full sm:w-auto items-center gap-3 px-8 py-3.5 bg-black text-white font-body text-[12px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-black/80 transition-all shadow-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.22-2.42.92-4.88 2.88-6.23 1.57-1.1 3.54-1.42 5.45-1.02V13.8c-1.03-.22-2.14-.14-3.05.41-.85.51-1.39 1.42-1.41 2.41-.01 1.05.61 2.05 1.52 2.47 1.25.59 2.83.39 3.84-.55.77-.72 1.17-1.79 1.18-2.86.03-5.06.01-10.13.02-15.19z"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida/ADBb0uh6o54Rfr5us3udHecGeKqaNPZz66gXl86Vvw_bNj5h6AtSzjDzS0MDiYpLlt9dfzqIbk5T2_52worj29Ln8Ps8pB6QvWozzCFwLcOKP5X4QVVqXGbKDgAipBZ2dw2aZ1xm1gNx5zeYaPSnswJkKc33BxaeLB9HhM1dqmUgLr4MK3bpiJwiSdZnNIhcyEGMy6njZyHPcGRR0vBpOln7xIdTF4EaKwo0AleYGL8-hBaakC7xEDziXB-iTw"
          alt="Iga Bakar Premium - Hero background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-iga-background/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto space-y-8 mt-12 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-display text-[48px] md:text-[80px] leading-[56px] md:leading-[90px] tracking-[-0.02em] font-semibold text-white drop-shadow-lg">
          Warung Iga Mas Yono
        </h1>

        <div className="space-y-4">
          <p className="font-body text-[20px] md:text-[24px] leading-[32px] text-white/90 max-w-2xl mx-auto font-medium">
            Iga Bakar Lezat, Puas Dinikmati.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-2 border border-iga-surface-tint/30 bg-iga-surface-tint/10 rounded-full backdrop-blur-sm">
            <span className="font-body text-[16px] md:text-[18px] text-iga-surface-tint font-semibold tracking-wide">
              ✨ Nasi & Lalapan Sepuasnya
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-brand-red/90 transition-all text-center animate-pulse-glow hover:animate-none shadow-lg shadow-brand-red/20"
          >
            LIHAT MENU
          </a>
          <a
            href="#reservasi"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-white/10 hover:border-white transition-all text-center backdrop-blur-sm"
          >
            RESERVASI
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-iga-on-tertiary-variant/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

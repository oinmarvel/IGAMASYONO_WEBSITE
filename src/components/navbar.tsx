"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Reservasi", href: "#reservasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["reservasi", "testimoni", "galeri", "tentang", "menu"];
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${id}`);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("#");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-iga-surface/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-iga-outline-variant/20"
          : "bg-iga-surface/60 backdrop-blur-md border-b border-iga-outline-variant/10"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 w-full max-w-[1280px] mx-auto">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-display text-[32px] leading-[40px] font-medium tracking-tighter text-iga-primary flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida/ADBb0uge3KU5_La04EmPfIaKOrb2gcSdp4lUnbTBt4f8sEww0VjDEe4_Wv2T2G6J7BnTlqfW0ckUY615O9mFY4LWlOUXIsOtifuXPXZts12BdOGNVLqUoy_wb3FytFAljfM3_LPM9o0rJPukhSfiBoRj6Dt90HezWzYqV_R0LIHlySyWaTIHwz6iRnwrDTIm1qqniGZ5ePbqttPQzP5XGKCyIKjRwsS5h31Sb23n7CTGgiRLWRbU9h4AwToKpw"
            alt="Warung Iga Mas Yono Logo"
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
          <span className="hidden sm:inline">IGA MAS YONO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-body text-[13px] leading-[16px] tracking-[0.1em] font-semibold uppercase transition-all duration-300 pb-1 ${
                activeSection === link.href
                  ? "text-iga-primary border-b border-iga-primary"
                  : "text-iga-on-tertiary hover:text-iga-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#reservasi"
          className="hidden lg:inline-flex bg-iga-secondary-container text-iga-on-secondary hover:bg-iga-secondary-container/90 px-6 py-2.5 rounded font-body text-[13px] leading-[16px] tracking-[0.1em] font-semibold uppercase transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/20"
        >
          PESAN MEJA
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-iga-primary p-2 hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 bg-iga-surface/95 backdrop-blur-lg border-t border-iga-outline-variant/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-body text-[13px] tracking-[0.1em] font-semibold uppercase py-3 px-4 rounded-lg transition-all duration-300 ${
                activeSection === link.href
                  ? "text-iga-primary bg-iga-primary/10"
                  : "text-iga-on-tertiary hover:text-iga-primary hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservasi"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-iga-secondary-container text-iga-on-secondary px-6 py-3 rounded font-body text-[13px] tracking-[0.1em] font-semibold uppercase text-center transition-colors hover:bg-iga-secondary-container/90"
          >
            PESAN MEJA
          </a>
        </nav>
      </div>
    </header>
  );
}

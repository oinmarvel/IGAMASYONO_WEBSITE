"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { galleryData, galleryCategories } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "semua") return galleryData;
    return galleryData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <section id="galeri" className="py-20 md:py-32 px-4 md:px-8 bg-iga-light-surface">
      <div className="max-w-[1280px] mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Galeri Kami
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto opacity-50" />
          <p className="font-body text-[16px] leading-[24px] text-iga-on-tertiary/80">
            Momen berharga dan hidangan spesial di Warung Iga Mas Yono
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-start md:justify-center gap-4 md:gap-8 border-b border-iga-outline-variant/20 overflow-x-auto pb-1 no-scrollbar">
          {galleryCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`font-body text-[13px] tracking-[0.1em] font-semibold uppercase pb-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id ? "text-brand-red border-brand-red" : "text-iga-on-tertiary/70 border-transparent hover:text-brand-red hover:border-brand-red"
              }`}>{cat.label}</button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((img, i) => (
            <div key={img.id} onClick={() => setSelectedIndex(i)} className="rounded-lg overflow-hidden group shadow-sm hover:shadow-md cursor-pointer relative aspect-square">
              <Image
                src={img.imageUrl}
                alt={img.altText}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white font-body text-sm font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 text-center px-4">
                  {img.altText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}>
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="relative flex-grow rounded-lg overflow-hidden">
                <Image 
                  src={filteredItems[selectedIndex].imageUrl} 
                  alt={filteredItems[selectedIndex].altText} 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-body text-lg">{filteredItems[selectedIndex].altText}</p>
                <p className="text-white/60 font-body text-sm mt-1">{selectedIndex + 1} / {filteredItems.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

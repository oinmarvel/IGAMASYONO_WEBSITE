"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { menuItems, menuCategories, formatPrice, MenuItem } from "@/data/menu";
import { Search, X, ChevronDown } from "lucide-react";
import { restaurantInfo } from "@/data/info";

type SortOption = "rekomendasi" | "termurah" | "termahal" | "nama-a-z";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("rekomendasi");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    let result = menuItems;

    // Filter Kategori
    if (activeCategory !== "semua") {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "termurah":
          return a.price - b.price;
        case "termahal":
          return b.price - a.price;
        case "nama-a-z":
          return a.name.localeCompare(b.name);
        case "rekomendasi":
        default:
          return (a.isBestSeller === b.isBestSeller) ? 0 : a.isBestSeller ? -1 : 1;
      }
    });

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const handleOrderWhatsApp = (itemName: string) => {
    const text = `Halo Warung Iga Mas Yono, saya tertarik memesan menu ${itemName}.`;
    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="menu" className="py-20 md:py-32 px-4 md:px-8 bg-white bg-texture-paper relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
            Menu Spesial Kami
          </h2>
          <div className="h-px w-24 bg-brand-red mx-auto" />
          <p className="font-body text-[16px] leading-[24px] text-iga-on-tertiary-variant">
            Pilihan terbaik untuk lidah yang mendambakan kemewahan rasa
          </p>
          <div className="mt-4 pt-2">
            <span className="inline-block bg-iga-primary/10 text-iga-primary-container border border-iga-primary/20 font-body text-[14px] md:text-[15px] font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
              ✨ Nasi & Lalapan Sepuasnya
            </span>
          </div>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-iga-light-surface border border-iga-outline-variant/50 rounded-full py-3 pl-12 pr-4 font-body text-[14px] text-iga-on-tertiary focus:outline-none focus:border-iga-primary focus:ring-1 focus:ring-iga-primary transition-all shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-iga-on-tertiary-variant/70" />
          </div>
          <div className="relative flex items-center gap-3 w-full md:w-auto">
            <span className="font-body text-[13px] font-medium text-iga-on-tertiary-variant shrink-0">Urutkan:</span>
            <div className="relative w-full md:w-56">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full appearance-none bg-iga-light-surface border border-iga-outline-variant/50 rounded-full py-3 pl-5 pr-10 font-body text-[14px] text-iga-on-tertiary focus:outline-none focus:border-iga-primary focus:ring-1 focus:ring-iga-primary transition-all shadow-sm cursor-pointer"
              >
                <option value="rekomendasi">Rekomendasi</option>
                <option value="termurah">Harga Terendah</option>
                <option value="termahal">Harga Tertinggi</option>
                <option value="nama-a-z">Nama A-Z</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-iga-on-tertiary-variant/70 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex justify-start md:justify-center gap-6 md:gap-10 mb-14 border-b border-iga-outline-variant/30 overflow-x-auto pb-1 no-scrollbar">
          {menuCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`font-body text-[13px] tracking-[0.1em] font-medium uppercase pb-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id ? "text-brand-red border-brand-red" : "text-iga-on-tertiary-variant border-transparent hover:text-brand-red hover:border-brand-red/50"
              }`}>{cat.label}</button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-iga-on-tertiary-variant text-lg">Menu tidak ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-iga-light-surface rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col border border-iga-outline-variant/20 cursor-pointer" onClick={() => setSelectedItem(item)}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  {item.isBestSeller && <span className="absolute top-4 right-4 bg-iga-primary text-iga-on-primary text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest shadow-md">Best Seller</span>}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-[22px] font-semibold text-iga-on-tertiary mb-2 leading-snug">{item.name}</h3>
                  <p className="font-body text-[14px] text-iga-on-tertiary/70 mb-6 flex-grow line-clamp-2 leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center mt-auto border-t border-iga-outline-variant/20 pt-4">
                    <span className="font-body text-[18px] font-medium text-brand-red">{formatPrice(item.price)}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleOrderWhatsApp(item.name); }}
                      className="text-brand-red hover:text-brand-red/80 font-body text-[13px] font-semibold uppercase tracking-wider transition-colors duration-300">Pesan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Micro UX CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#reservasi" className="px-8 py-4 bg-brand-red text-white font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-brand-red/90 transition-all shadow-md hover:shadow-lg text-center w-full sm:w-auto">
            Reservasi Tempat Sekarang
          </a>
          <a href={restaurantInfo.grabFoodUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-green-700 border border-green-200 font-body text-[13px] tracking-[0.1em] font-semibold uppercase rounded hover:bg-green-50 transition-all shadow-sm hover:shadow-md text-center w-full sm:w-auto">
            Pesan via GrabFood
          </a>
        </div>

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity" onClick={() => setSelectedItem(null)}></div>
            <div className="relative bg-iga-light-surface rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl transform transition-all animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-iga-on-tertiary rounded-full shadow-sm transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[60vh]">
                <Image src={selectedItem.image} alt={selectedItem.name} fill className="object-cover" />
                {selectedItem.isBestSeller && (
                  <span className="absolute top-6 left-6 bg-iga-primary text-iga-on-primary text-[11px] font-bold px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-md">Best Seller</span>
                )}
              </div>
              
              <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col overflow-y-auto">
                <span className="font-body text-[12px] tracking-[0.2em] font-semibold text-iga-on-tertiary-variant uppercase mb-4 block">{selectedItem.category}</span>
                <h3 className="font-display text-[32px] md:text-[40px] font-semibold text-iga-on-tertiary mb-4 leading-tight">{selectedItem.name}</h3>
                <span className="font-body text-[24px] font-medium text-brand-red mb-8 block">{formatPrice(selectedItem.price)}</span>
                
                <div className="h-px w-full bg-iga-outline-variant/30 mb-8"></div>
                
                <p className="font-body text-[16px] leading-[1.8] text-iga-on-tertiary/70 mb-10">{selectedItem.description}</p>
                
                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => { handleOrderWhatsApp(selectedItem.name); setSelectedItem(null); }}
                    className="flex-1 bg-brand-red text-white py-4 rounded font-body text-[13px] tracking-[0.15em] font-semibold uppercase hover:bg-brand-red/90 transition-all hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    <span>Pesan via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

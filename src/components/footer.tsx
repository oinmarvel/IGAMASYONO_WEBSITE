import { restaurantInfo } from "@/data/info";

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 bg-white border-t border-iga-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 gap-8 max-w-[1280px] mx-auto">
        <div className="font-display text-[32px] leading-[40px] font-medium text-iga-on-tertiary">
          IGA MAS YONO
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#menu" className="font-body text-[13px] tracking-[0.1em] font-semibold uppercase text-iga-on-tertiary/70 hover:text-brand-red transition-colors">Menu</a>
          <a href="#promo" className="font-body text-[13px] tracking-[0.1em] font-semibold uppercase text-iga-on-tertiary/70 hover:text-brand-red transition-colors">Promo</a>
          <a href="#lokasi" className="font-body text-[13px] tracking-[0.1em] font-semibold uppercase text-iga-on-tertiary/70 hover:text-brand-red transition-colors">Lokasi</a>
          <a href="#faq" className="font-body text-[13px] tracking-[0.1em] font-semibold uppercase text-iga-on-tertiary/70 hover:text-brand-red transition-colors">FAQ</a>
          <a href={restaurantInfo.grabFoodUrl} target="_blank" rel="noopener noreferrer" className="font-body text-[13px] tracking-[0.1em] font-semibold uppercase text-green-600 hover:text-green-700 transition-colors">Pesan GrabFood</a>
        </div>
        <div className="font-body text-[16px] leading-[24px] text-iga-on-tertiary/70 text-center md:text-right">
          © {new Date().getFullYear()} Warung Iga Mas Yono. Cita Rasa Nusantara yang Tak Terlupakan.
        </div>
      </div>
    </footer>
  );
}

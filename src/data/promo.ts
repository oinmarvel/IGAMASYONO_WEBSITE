export type PromoStatus = "Aktif" | "Akan Datang" | "Berakhir";

export interface PromoItem {
  id: string;
  name: string;
  description: string;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string; // Format: YYYY-MM-DD
  image: string;
  status: PromoStatus;
}

// Menentukan status promo secara dinamis berdasarkan tanggal saat ini
export const getPromoStatus = (startDate: string, endDate: string): PromoStatus => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999); // Set to end of day

  if (now < start) {
    return "Akan Datang";
  } else if (now >= start && now <= end) {
    return "Aktif";
  } else {
    return "Berakhir";
  }
};

export const promoData: Omit<PromoItem, "status">[] = [
  {
    id: "promo-senin",
    name: "Promo Hari Senin - Diskon 20%",
    description: "Awali minggu Anda dengan semangat! Dapatkan diskon 20% untuk semua menu Iga Bakar khusus di hari Senin.",
    startDate: "2026-06-01",
    endDate: "2026-06-30",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "promo-weekend",
    name: "Paket Keluarga Akhir Pekan",
    description: "Nikmati Paket Keluarga Besar dengan potongan harga khusus setiap hari Sabtu dan Minggu. Free 4 porsi es teh manis!",
    startDate: "2026-06-01",
    endDate: "2026-06-30",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "promo-kemerdekaan",
    name: "Promo Spesial Kemerdekaan 17 Agustus",
    description: "Rayakan kemerdekaan bersama Iga Mas Yono. Beli 2 Iga Bakar Original, gratis 1 Sop Iga Sapi.",
    startDate: "2026-08-10",
    endDate: "2026-08-17",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "promo-lebaran",
    name: "Hampers Lebaran Iga Mas Yono",
    description: "Berbagi kelezatan di hari yang fitri dengan paket Hampers Iga Bakar Premium eksklusif kami.",
    startDate: "2026-03-01",
    endDate: "2026-04-10",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop",
  }
];

export const getPromos = (): PromoItem[] => {
  return promoData.map(promo => ({
    ...promo,
    status: getPromoStatus(promo.startDate, promo.endDate)
  }));
};

export type GalleryCategory = "makanan" | "restoran" | "event" | "pelanggan";

export interface GalleryItem {
  id: string;
  imageUrl: string;
  altText: string;
  category: GalleryCategory;
}

export const galleryCategories: { id: string; label: string }[] = [
  { id: "semua", label: "Semua Foto" },
  { id: "makanan", label: "Makanan" },
  { id: "restoran", label: "Suasana Restoran" },
  { id: "event", label: "Event Khusus" },
  { id: "pelanggan", label: "Momen Pelanggan" },
];

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: "/images/igabakar.JPG",
    altText: "Iga Bakar khas Warung Iga Mas Yono",
    category: "makanan"
  },
  {
    id: "g2",
    imageUrl: "/images/igagongso.JPG",
    altText: "Iga Gongso bumbu rempah yang kaya rasa",
    category: "makanan"
  },
  {
    id: "g3",
    imageUrl: "/images/galeri1.JPG",
    altText: "Suasana nyaman di dalam restoran Warung Iga Mas Yono",
    category: "restoran"
  },
  {
    id: "g4",
    imageUrl: "/images/galeri3.JPG",
    altText: "Momen makan bersama di Warung Iga Mas Yono",
    category: "pelanggan"
  },
  {
    id: "g5",
    imageUrl: "/images/nasgor.JPG",
    altText: "Nasi Goreng Iga yang menggugah selera",
    category: "makanan"
  },
  {
    id: "g6",
    imageUrl: "/images/sopiga.JPG",
    altText: "Sop Iga hangat dengan kuah gurih",
    category: "makanan"
  },
  {
    id: "g7",
    imageUrl: "/images/kangkung.JPG",
    altText: "Lalapan segar pelengkap hidangan",
    category: "makanan"
  },
  {
    id: "g8",
    imageUrl: "/images/catauge.JPG",
    altText: "Pilihan sayuran segar di Warung Iga Mas Yono",
    category: "makanan"
  }
];

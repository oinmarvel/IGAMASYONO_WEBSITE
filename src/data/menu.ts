export type MenuCategory = "iga bakar" | "paket keluarga" | "makanan utama" | "minuman" | "dessert";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isBestSeller: boolean;
  isAvailable: boolean;
}

export const menuCategories: { id: string; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "iga bakar", label: "Iga Bakar" },
  { id: "paket keluarga", label: "Paket Keluarga" },
  { id: "makanan utama", label: "Makanan Utama" },
  { id: "minuman", label: "Minuman" },
  { id: "dessert", label: "Dessert" },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Iga Bakar",
    description: "Iga sapi empuk dengan bumbu bakar khas Warung Iga Mas Yono, gurih, meresap, dan menggugah selera.",
    price: 38000,
    image: "/images/igabakar.JPG",
    category: "iga bakar",
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Iga Bakar Premium",
    description: "Versi premium dari Iga Bakar dengan potongan daging yang lebih banyak dan lebih puas dinikmati.",
    price: 58000,
    image: "/images/iga-bakar.jpg",
    category: "iga bakar",
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Nasi Goreng Iga Mas Yono",
    description: "Nasi goreng gurih dengan cita rasa khas yang dipadukan dengan kelezatan iga.",
    price: 29000,
    image: "/images/nasgor.JPG",
    category: "makanan utama",
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Sup Iga",
    description: "Sup iga dengan kuah gurih dan hangat, dipadukan dengan iga yang empuk dan kaya rasa.",
    price: 38000,
    image: "/images/sopiga.JPG",
    category: "makanan utama",
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Iga Gongso",
    description: "Iga sapi dengan bumbu gongso yang kaya rempah, gurih, manis, dan meresap hingga ke daging.",
    price: 38000,
    image: "/images/igagongso.JPG",
    category: "makanan utama",
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Iga Penyet",
    description: "Iga empuk yang dipenyet dengan sambal khas, menghadirkan perpaduan gurih, pedas, dan nikmat.",
    price: 38000,
    image: "/images/igapenyet.JPG",
    category: "makanan utama",
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: 7,
    name: "Ayam Goreng Kremes",
    description: "Ayam goreng gurih dan renyah dengan taburan kremes yang nikmat.",
    price: 17000,
    image: "/images/ayamkremes.JPG",
    category: "makanan utama",
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: 8,
    name: "Sate Lilit",
    description: "Sate lilit dengan cita rasa gurih dan bumbu khas yang nikmat. Pilihan: 5 tusuk / 10 tusuk",
    price: 20000,
    image: "/images/satelilit.JPG",
    category: "makanan utama",
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: 9,
    name: "Bandeng Cabut Duri Bakar",
    description: "Bandeng cabut duri yang dibakar dengan bumbu gurih hingga harum dan nikmat disantap bersama nasi dan lalapan.",
    price: 29000,
    image: "/images/bandeng.JPG",
    category: "makanan utama",
    isBestSeller: false,
    isAvailable: true,
  }
];

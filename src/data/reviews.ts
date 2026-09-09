export interface Review {
  id: string;
  authorName: string;
  authorPhoto: string;
  rating: number; // 1 to 5
  text: string;
  date: string; // ISO format or formatted string
}

export const reviewsData: Review[] = [
  {
    id: "r1",
    authorName: "Budi Santoso",
    authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Iga bakarnya benar-benar juara! Dagingnya sangat empuk, bumbunya meresap sampai ke tulang. Pelayanannya juga sangat ramah dan cepat. Pasti akan kembali lagi ke sini bersama keluarga besar.",
    date: "2026-05-10"
  },
  {
    id: "r2",
    authorName: "Siti Aminah",
    authorPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Baru pertama kali nyoba Iga Bakar Madu dan rasanya luar biasa. Manis dan gurihnya pas, tekstur dagingnya meleleh di mulut. Tempatnya juga nyaman untuk makan malam.",
    date: "2026-05-15"
  },
  {
    id: "r3",
    authorName: "Andi Wijaya",
    authorPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    rating: 4,
    text: "Rasa iganya enak, sambalnya juga mantap pedasnya. Hanya saja saat weekend tempatnya cukup ramai jadi harus sedikit menunggu untuk mendapatkan meja. Overall sangat memuaskan.",
    date: "2026-05-20"
  },
  {
    id: "r4",
    authorName: "Rina Kartika",
    authorPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Suasana restorannya sangat nyaman, cocok untuk kumpul keluarga. Kami memesan Paket Keluarga dan porsinya sangat mengenyangkan. Pelayanan sangat responsif.",
    date: "2026-05-25"
  },
  {
    id: "r5",
    authorName: "Hendra Gunawan",
    authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    rating: 4,
    text: "Sop iga sapinya segar, kuah kaldunya gurih tidak bikin enek. Harga sepadan dengan porsi dan kualitas rasanya.",
    date: "2026-05-28"
  },
  {
    id: "r6",
    authorName: "Maya Sari",
    authorPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 3,
    text: "Rasanya lumayan enak, tapi harganya sedikit lebih mahal dibandingkan tempat lain. Pelayanan standar.",
    date: "2026-04-10"
  }
];

// Dapatkan hanya review dengan rating >= 4, dan urutkan rating tertinggi lalu terbaru
export const getFilteredReviews = (): Review[] => {
  return reviewsData
    .filter(r => r.rating >= 4)
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating; // Descending by rating (5 first)
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime(); // Descending by date
    });
};

export const reviewStats = {
  averageRating: 4.8,
  totalReviews: 324
};

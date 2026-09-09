export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah bisa reservasi tempat sebelumnya?",
    answer: "Tentu! Anda sangat disarankan untuk melakukan reservasi terutama saat akhir pekan atau hari libur nasional untuk memastikan ketersediaan tempat. Anda bisa menggunakan form reservasi di website kami atau menghubungi WhatsApp cabang terdekat."
  },
  {
    id: "faq-2",
    question: "Apakah tersedia pemesanan melalui GrabFood?",
    answer: "Ya, kami tersedia di GrabFood. Anda bisa mencari 'Warung Iga Mas Yono' di aplikasi Grab atau mengklik tombol pesan GrabFood yang ada di website kami untuk dihubungkan langsung ke cabang terdekat."
  },
  {
    id: "faq-3",
    question: "Apakah menerima metode pembayaran QRIS?",
    answer: "Ya, kami menerima berbagai metode pembayaran non-tunai termasuk QRIS, kartu debit, kartu kredit, dan transfer bank, selain pembayaran tunai."
  },
  {
    id: "faq-4",
    question: "Apakah menerima reservasi untuk acara ulang tahun?",
    answer: "Sangat bisa. Kami menyediakan paket khusus untuk acara ulang tahun, lengkap dengan dekorasi ringan (dengan reservasi minimal H-3). Silakan hubungi nomor WhatsApp kami untuk informasi lebih detail."
  },
  {
    id: "faq-5",
    question: "Apakah menerima reservasi rombongan (lebih dari 20 orang)?",
    answer: "Ya, kami bisa mengakomodasi reservasi rombongan. Mohon lakukan reservasi maksimal H-2 agar kami dapat mempersiapkan tempat dan pelayanan yang maksimal untuk rombongan Anda."
  },
  {
    id: "faq-6",
    question: "Apakah menerima pesanan nasi box / catering?",
    answer: "Kami menerima pesanan catering dan nasi box untuk berbagai acara seperti rapat, syukuran, atau acara kantor. Minimum pemesanan adalah 20 box dengan pemesanan H-2."
  },
  {
    id: "faq-7",
    question: "Jam berapa Warung Iga Mas Yono buka?",
    answer: "Cabang Pamularsih buka setiap hari mulai pukul 11:00 hingga 22:00 WIB. Sedangkan Cabang Banyumanik buka setiap hari mulai pukul 10:00 hingga 21:00 WIB."
  }
];

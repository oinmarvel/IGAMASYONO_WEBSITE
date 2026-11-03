import Image from "next/image";

export default function StorySection() {
  return (
    <section id="tentang" className="py-20 md:py-32 px-4 md:px-8 bg-white relative border-t border-iga-outline-variant/10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 border border-brand-red/30 translate-x-4 translate-y-4 rounded-lg" />
            <Image
              src="/images/story-chef.png"
              alt="Chef preparing premium grilled ribs"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="space-y-8">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-medium text-iga-on-tertiary">
              Cerita Rasa Kami
            </h2>
            <p className="font-body text-[18px] leading-[28px] text-iga-on-tertiary/90">
              Bermula dari resep warisan keluarga yang dijaga ketat selama tiga generasi, Warung Iga Mas Yono hadir untuk mengangkat derajat kuliner tradisional Nusantara ke panggung premium.
            </p>
            <p className="font-body text-[16px] leading-[24px] text-iga-on-tertiary/70">
              Kami percaya bahwa bahan baku terbaik adalah kunci. Setiap potong iga dipilih secara teliti, dimarinasi dengan rempah-rempah eksotis pilihan dari berbagai pelosok Indonesia, dan dimasak dengan teknik presisi untuk menghasilkan tekstur yang tak tertandingi. Ini bukan sekadar makanan, ini adalah perayaan cita rasa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-red">3</div>
                <div className="font-body text-xs uppercase tracking-wider text-iga-on-tertiary/60 mt-1">Generasi</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-red">15+</div>
                <div className="font-body text-xs uppercase tracking-wider text-iga-on-tertiary/60 mt-1">Tahun Berdiri</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-brand-red">50K+</div>
                <div className="font-body text-xs uppercase tracking-wider text-iga-on-tertiary/60 mt-1">Pelanggan</div>
              </div>
            </div>

            <div className="pt-4">
              <Image
                src="/images/logo.svg"
                alt="Iga Mas Yono Signature"
                width={64}
                height={64}
                className="opacity-30 grayscale mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

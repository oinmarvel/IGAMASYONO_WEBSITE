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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpdQbBJrwO9UE1bpRsgRBeXUKcNN-trli8_Wdf6Obkdw78_FH9hZOZNFlhzc8VTuE9i4BKMWggMdLcOWTVNZ95f43BX5AZaM3R7P4f6EDZDmxFWpGl1osQfNtmC4RvTXWvDoJu8nHOAWnQWKgMqGQ4IXZC7XGBwgO57VtMOvPePFLGjCus4Jl1XVV1ojKcF3FXSmaN7aHtAUM82DsZ8_HmU11J44Lh5nMIXyCtrd5ENaJSeslonE4xpDo1cdSyVMrLBXWZ1vOS4A"
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
                src="https://lh3.googleusercontent.com/aida/ADBb0uge3KU5_La04EmPfIaKOrb2gcSdp4lUnbTBt4f8sEww0VjDEe4_Wv2T2G6J7BnTlqfW0ckUY615O9mFY4LWlOUXIsOtifuXPXZts12BdOGNVLqUoy_wb3FytFAljfM3_LPM9o0rJPukhSfiBoRj6Dt90HezWzYqV_R0LIHlySyWaTIHwz6iRnwrDTIm1qqniGZ5ePbqttPQzP5XGKCyIKjRwsS5h31Sb23n7CTGgiRLWRbU9h4AwToKpw"
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

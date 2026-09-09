import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";
import PromoSection from "@/components/promo-section";
import StorySection from "@/components/story-section";
import GallerySection from "@/components/gallery-section";
import TestimoniSection from "@/components/testimoni-section";
import ReservationSection from "@/components/reservation-section";
import LocationSection from "@/components/location-section";
import FAQSection from "@/components/faq-section";
import SocialSection from "@/components/social-section";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <SocialSection />
        <TestimoniSection />
        <PromoSection />
        <StorySection />
        <GallerySection />
        <LocationSection />
        <ReservationSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

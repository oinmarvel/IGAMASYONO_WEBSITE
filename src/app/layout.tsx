import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { restaurantInfo } from "@/data/info";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Warung Iga Mas Yono | Iga Bakar Premium Nusantara",
  description: restaurantInfo.description,
  keywords: restaurantInfo.seo.keywords,
  openGraph: {
    title: "Warung Iga Mas Yono | Iga Bakar Premium Nusantara",
    description: restaurantInfo.description,
    type: "website",
    locale: "id_ID",
    siteName: restaurantInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Warung Iga Mas Yono | Iga Bakar Premium Nusantara",
    description: restaurantInfo.description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurantInfo.name,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    "@id": "",
    "url": "https://igamasyono.com",
    "telephone": restaurantInfo.phoneNumber,
    "menu": "https://igamasyono.com/#menu",
    "acceptsReservations": "True",
    "servesCuisine": "Indonesian",
    "location": restaurantInfo.branches.map(b => ({
      "@type": "Place",
      "name": b.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": b.address,
        "addressLocality": "Semarang",
        "addressRegion": "Jawa Tengah",
        "addressCountry": "ID"
      }
    }))
  };

  return (
    <html
      lang="id"
      className={`${ebGaramond.variable} ${hankenGrotesk.variable} dark`}
    >
      <body className="bg-iga-background text-iga-on-background antialiased selection:bg-iga-primary-container selection:text-iga-on-primary-container min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}

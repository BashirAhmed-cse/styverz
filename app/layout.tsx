import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

// Use Inter font for English text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Stayverz - আপনার অ্যাপার্টমেন্ট থেকে আয় করুন",
  description: "আপনার অব্যবহৃত অ্যাপার্টমেন্ট থেকে মাসে ১,০০,০০০+ টাকা আয় করুন",
  keywords: "apartment, income, rental, stayverz, বাংলাদেশ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/logo.png" 
          as="image" 
          type="image/png"
        />
        {/* Preload Bangla font */}
        <link
          rel="preload"
          href="/fonts/LiAdorNoirrit-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Add viewport for better mobile performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

// Use Inter font for better performance with static export
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
    <html lang="en" className="scroll-smooth">
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
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Add performance monitoring script if needed */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
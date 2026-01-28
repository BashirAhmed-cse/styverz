'use client';

import { useState, useRef, useEffect } from 'react';
import Hero from '@/components/Hero';
import HeroLanding from '@/components/HeroLanding';
import { Suspense } from 'react';
import { LoadingFallback } from '@/components/LoadingFallback';
import { SuccessStorySection } from '@/components/SuccessStorySection';
import { HowWork } from '@/components/HowWork';
import { FAQSection } from '@/components/FAQSection';
import HostGallery from '@/components/HostGallery';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Track when components start appearing
  const sectionRefs = {
    successStory: useRef<HTMLDivElement>(null),
    howWork: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    landing: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Set initial loading timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Check scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Top loading bar that shows during initial load */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-orange-100">
          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse w-full"></div>
        </div>
      )}

      {/* Section loading indicators when scrolling */}
      {scrolled && (
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse delay-150"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse delay-300"></div>
        </div>
      )}

      <Suspense fallback={<LoadingFallback />}>
        {/* Each section has its own loading state */}
        <div className="relative">
          <Hero />
          
          {/* Show loading indicator below Hero when scrolling */}
          {scrolled && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-6 h-6 border-2 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        <div ref={sectionRefs.successStory}>
          <SuccessStorySection />
        </div>

        <div ref={sectionRefs.howWork}>
          <HowWork />
        </div>

        <div ref={sectionRefs.gallery}>
          <HostGallery />
        </div>

        <div ref={sectionRefs.faq}>
          <FAQSection />
        </div>

        <div ref={sectionRefs.landing}>
          <HeroLanding />
        </div>
      </Suspense>
    </div>
  );
}
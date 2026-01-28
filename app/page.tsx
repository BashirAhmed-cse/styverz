import Hero from '@/components/Hero';
import HeroLanding from '@/components/HeroLanding';
import { Suspense } from 'react';
import { LoadingFallback } from '@/components/LoadingFallback';

// Static components that don't need dynamic import for static export
import { SuccessStorySection } from '@/components/SuccessStorySection';
import { HowWork } from '@/components/HowWork';
import { FAQSection } from '@/components/FAQSection';
import HostGallery from '@/components/HostGallery';

export default function Main() {
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <SuccessStorySection />
        <HowWork />
        <HostGallery />
        <FAQSection />
        <HeroLanding />
      </Suspense>
    </div>
  );
}
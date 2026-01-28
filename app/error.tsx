'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          কিছু সমস্যা হয়েছে
        </h1>
        
        <p className="text-gray-600 mb-8">
          দুঃখিত, পৃষ্ঠাটি লোড করতে সমস্যা হয়েছে।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-[#f15a26] hover:bg-[#d14a1e] text-white px-6 py-3 rounded-full"
          >
            আবার চেষ্টা করুন
          </Button>
          
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="border-[#f15a26] text-[#f15a26] hover:bg-[#f15a26]/10 px-6 py-3 rounded-full"
          >
            হোমপেজে ফিরে যান
          </Button>
        </div>
      </div>
    </div>
  );
}
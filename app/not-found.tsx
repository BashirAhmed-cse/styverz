import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-lg text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-gray-900 mb-2 tracking-tighter">
            ৪০৪
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#f15a26] to-orange-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-10 animate-pulse delay-700" />
        </div>

        {/* Title with gradient */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          পৃষ্ঠাটি পাওয়া যায়নি
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-2">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি
        </p>
        
        {/* Additional info */}
        <p className="text-gray-500 mb-8">
          পৃষ্ঠাটি সরানো হয়েছে, মুছে ফেলা হয়েছে, অথবা এখানে কোন পৃষ্ঠা নেই
        </p>

        {/* Decorative separator */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#f15a26] to-transparent" />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="bg-gradient-to-r from-[#f15a26] to-orange-500 hover:from-[#d14a1e] hover:to-orange-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            size="lg"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="text-lg font-semibold">হোমপেজে ফিরে যান</span>
            </Link>
          </Button>
          
         
        </div>

        

        {/* Footer note */}
        <p className="mt-8 text-sm text-gray-500">
          সমস্যা চলতে থাকলে{' '}
          <Link 
            href="/contact" 
            className="text-[#f15a26] hover:text-[#d14a1e] underline underline-offset-2 font-medium"
          >
            আমাদের সাথে যোগাযোগ করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
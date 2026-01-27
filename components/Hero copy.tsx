// app/page.tsx
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";


export default function Hero() {
  return (
    <div className="min-h-screen bg-[#fdfaf7] font-sans">
      {/* Header / Navbar */}
     

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24 lg:py-32 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Stayverz - এ আপনার অব্যবহৃত অ্যাপার্টমেন্ট
              <br />
              এনালিস্ট করে মাসে ১,০০,০০০+ টাকা আয় করুন
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              বাংলাদেশজুড়ে ১,০০০+ হোস্টের সাথে যুক্ত হন, যারা কোনো মার্কেটিং ছাড়াই নিয়মিত ভাড়া আয় করছেন।
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-7 rounded-full shadow-lg"
              >
                বিস্তারিত জানুন
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-orange-100/70 p-8 md:p-10 lg:p-12 max-w-lg mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
              ফ্রি কনসালটেশন নিন, আয় শুরু করুন
            </h2>

            <form className="space-y-5">
              <Input placeholder="নাম" className="h-12 text-base" />
              <Input placeholder="ফোন নম্বর" className="h-12 text-base" />
              <Input placeholder="ইমেইল" className="h-12 text-base" />
              <Input placeholder="লোকেশন" className="h-12 text-base" />

              <Select>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="প্রপার্টি ধরন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-apartment">পুরো অ্যাপার্টমেন্ট</SelectItem>
                  <SelectItem value="single-room">সিঙ্গেল রুম</SelectItem>
                  <SelectItem value="shared">শেয়ার্ড</SelectItem>
                  <SelectItem value="other">অন্যান্য</SelectItem>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-7 mt-4 rounded-xl shadow-md"
              >
                সাবমিট
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
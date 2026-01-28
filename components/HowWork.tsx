// components/HowWork.tsx
'use client';

import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function HowWork() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: { scale: 0.95 }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const videoOverlayContent = {
    title: "৩০ হাজার+ টাকা মাসে আয়",
    subtitle: "Stayverz এর সাথে কীভাবে?"
  };

  const paragraphs = [
    "আপনার যদি একটি রুম, ফ্ল্যাট বা বাড়ি থাকে, সেটি শুধু থাকার জায়গা নয়—সঠিক ব্যবস্থাপনায় এটি হতে পারে আপনার নিয়মিত মাসিক আয়ের উৎস। Stayverz ইতিমধ্যেই এমন অনেক হোস্টের সাথে কাজ করছে যারা আগে কম আয় করতেন, আর এখন তাদের প্রপার্টি থেকে নিয়মিত বড় অংকের আয় পাচ্ছেন।",
    "Stayverz প্রথমে আপনার প্রপার্টির লোকেশন, ধরন ও চাহিদা বিশ্লেষণ করে ফ্রি কনসালটেশন-এ জানায়, বাস্তবে আপনার কত আয় হওয়া সম্ভব। এরপর আমরা প্রফেশনাল লিস্টিং, আকর্ষণীয় ছবি ও স্মার্ট প্রাইসিং দিয়ে আপনার প্রপার্টিকে বাজারে সঠিকভাবে তুলে ধরি, যাতে সেটি সঠিক দামে ও নিয়মিত বুক হয়।"
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#fdfaf7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - YouTube Video Embed */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          >
            {/* Container with specific aspect ratio for 600x800 */}
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: "100%",
                height: "0",
                paddingBottom: "100.33%" /* 800/600 * 100 = 133.33% */,
              }}
            >
              {/* Video Thumbnail/Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f15a26] to-[#ff7b42]">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <PlayCircle className="w-12 h-12 md:w-14 md:h-14 text-[#f15a26]" />
                  </motion.div>
                </div>

                {/* Video Overlay Text */}
                <motion.div 
                  variants={overlayVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute bottom-6 left-6 right-6 text-white z-10"
                >
                  <h3 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                    {videoOverlayContent.title}
                  </h3>
                  <p className="text-lg mt-2 drop-shadow-md">
                    {videoOverlayContent.subtitle}
                  </p>
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Decorative corner elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg"
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
          >
            {/* Title */}
            <motion.h2 
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            >
              কীভাবে Stayverz-এর সাথে মাসে লক্ষাধিক টাকা আয় করবেন?
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={paragraphVariants}
                  className="relative pl-4 border-l-2 border-[#f15a26]/20"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
  size="lg"
  className="hidden sm:inline-flex bg-gradient-to-r from-[#f15a26] to-[#ff7b42] hover:from-[#d14a1e] hover:to-[#e65a2e] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group"
>
  <span className="flex items-center gap-3">
    এখনই শুরু করুন
    <motion.span
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowRight className="h-5 w-5" />
    </motion.span>
  </span>
</Button>
            </motion.div>

            {/* Stats/Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="pt-6 border-t border-gray-200 mt-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "১,০০০+", label: "সক্রিয় হোস্ট" },
                  { number: "৯৫%", label: "সন্তুষ্টি হার" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="text-2xl md:text-3xl font-bold text-[#f15a26]">{stat.number}</div>
                    <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
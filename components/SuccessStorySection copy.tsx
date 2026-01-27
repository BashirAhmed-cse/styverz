// components/SuccessStorySection.tsx
'use client';

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SuccessStorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stepContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepItemVariants = {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const playButtonVariants = {
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.3 + 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const steps = [
    {
      number: "০১",
      title: "আপনার প্রপার্টির সম্ভাবনা বুঝে নিন",
      description: "প্রতিটি প্রপার্টির আয় ক্ষমতা আলাদা, যা নির্ভর করে লোকেশন, প্রপার্টির ধরন, রুম সংখ্যা এবং আশেপাশের চাহিদার উপর। Stayverz-এর ফ্রি কনসালটেশন সেশনে আমরা এই বিষয়গুলো বিশ্লেষণ করি এবং অনুমান নয়, বাস্তব মার্কেট ডেটার উপর ভিত্তি করে আপনাকে জানাই আপনার প্রপার্টি থেকে মাসে কত আয় করা সম্ভব। এতে করে শুরুতেই আপনার একটি পরিষ্কার ধারণা তৈরি হয়।",
      color: "amber"
    },
    {
      number: "০২",
      title: "প্রফেশনাল লিস্টিং ও সঠিক প্রাইসিং",
      description: "অনেক হোস্ট নিজেরা ভাড়া দিতে গিয়ে বাজারের তুলনায় কম ভাড়ায় আটকে যান বা সারা বছর একই ভাড়া ধরে রাখেন। Stayverz আপনার প্রপার্টির জন্য আকর্ষণীয় লিস্টিং তৈরি করে, মানসম্মত ছবি ব্যবহার করে এবং চাহিদা, সিজন ও বুকিং ট্রেন্ড অনুযায়ী ভাড়া নির্ধারণ করে। এর ফলে আপনার প্রপার্টি কম দামে নয়, বরং সঠিক সময়ে সঠিক দামে বুক হয়।",
      color: "amber"
    },
    {
      number: "০৩",
      title: "ফ্রি মার্কেটিং ও বুকিং ব্যবস্থাপনা",
      description: "Stayverz-এর সবচেয়ে বড় সুবিধা হলো—আমরা সম্পূর্ণ মার্কেটিং ও বুকিং ব্যবস্থাপনা নিজেরা করি। আপনার প্রপার্টির প্রচার, গেস্টের খোঁজ, বুকিং কনফার্মেশন এবং গেস্ট সাপোর্ট—সবকিছু আমাদের টিম সামলায়। এতে করে আপনাকে প্রতিদিন ফোন ধরা, মেসেজের উত্তর দেওয়া বা গেস্ট নিয়ে দুশ্চিন্তা করতে হয় না, অথচ আপনার বুকিং চলতে থাকে নিয়মিতভাবে।",
      color: "amber"
    },
    {
      number: "০৪",
      title: "প্রপার্টি নিরাপত্তা",
      description: "অনেক প্রপার্টি মালিকের প্রধান দুশ্চিন্তা থাকে নিরাপত্তা নিয়ে। Stayverz-এ আমরা এই বিষয়টিকে সর্বোচ্চ গুরুত্ব দিই। গেস্ট যাচাই, স্পষ্ট নিয়ম-কানুন এবং প্রয়োজন হলে দ্রুত সাপোর্ট—এই সবকিছুর মাধ্যমে আপনার প্রপার্টি নিরাপদভাবে ভাড়া দেওয়া নিশ্চিত করা হয়। এর ফলে আপনি নিশ্চিন্তে আপনার প্রপার্টি Stayverz-এর সাথে দিতে পারেন।",
      color: "amber"
    },
    {
      number: "০৫",
      title: "লেনদেনের স্বচ্ছতা",
      description: "Stayverz-এর সাথে কাজ করলে আপনার আয় পুরোপুরি স্বচ্ছ থাকে। আপনি সব সময় স্পষ্টভাবে জানতে পারেন আপনার প্রপার্টিতে কত বুকিং হয়েছে, সেই বুকিং থেকে মোট কত আয় এসেছে এবং কোন সময়ে আপনার এলাকায় গেস্টদের চাহিদা বেশি থাকে। এই তথ্যগুলো বিশ্লেষণ করে আমরা ভবিষ্যতে কীভাবে আপনার আয় আরও বাড়ানো যায় সে বিষয়ে পরামর্শ দিই, যাতে আপনার আয় পরিকল্পিতভাবে বৃদ্ধি পায় এবং স্থায়ী হয়।",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string }> = {
      orange: { bg: "bg-orange-100", text: "text-orange-600" },
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      amber: { bg: "bg-amber-100", text: "text-amber-600" }
    };
    return colors[color] || colors.orange;
  };

  return (
    <section ref={sectionRef} className="mt-4 bg-gradient-to-b from-white to-[#FFFDF9]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Video Section */}
        <motion.div 
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900">
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10">
                <div className="text-center space-y-4">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg sm:text-xl md:text-2xl font-bold"
                  >
                    দেখুন কিভাবে ১০০০+ হোস্ট Stayverz এর সাথে আয় করছেন
                  </motion.h3>
                  <div className="flex items-center justify-center gap-3">
                    <motion.div 
                      variants={floatingAnimation}
                      animate="animate"
                      className="relative group"
                    >
                      <motion.button
                        variants={playButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl"
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-green-600 fill-green-600" />
                      </motion.button>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:animate-none"></div>
                    </motion.div>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-base md:text-lg font-medium"
                    >
                      ভিডিওটি দেখুন
                    </motion.span>
                  </div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          variants={stepContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {steps.map((step, index) => {
            const colorClasses = getColorClasses(step.color);
            return (
              <motion.div
                key={index}
                variants={stepItemVariants}
                className="space-y-4 group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    custom={index}
                    variants={numberVariants}
                    whileHover="hover"
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                    style={{ backgroundColor: colorClasses.bg.replace('bg-', '').replace('-100', '') }}
                  >
                    <span className={`font-bold text-xl ${colorClasses.text}`}>
                      {step.number}
                    </span>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.5 }}
                    className="text-xl md:text-2xl font-bold text-gray-900"
                  >
                    {step.title}
                  </motion.h3>
                </div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.3 + 1, duration: 0.7 }}
                  className="text-gray-700 text-base md:text-lg leading-relaxed pl-16"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Conclusion Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-16 space-y-8"
        >
          <div className="space-y-6">
            <motion.p 
              variants={textVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              সব প্রপার্টি থেকেই এক রকম আয় হয় না, তবে সঠিক গাইডেন্স পেলে অনেক
              প্রপার্টিই মাসে লক্ষাধিক টাকা আয়ের সম্ভাবনা রাখে। তাই অনুমান বা
              শোনা কথার উপর নির্ভর না করে বাস্তব হিসাব জানার সবচেয়ে ভালো উপায়
              হলো কথা বলা। আপনি চাইলে আজই Stayverz-এর ফ্রি কনসালটেশন সেশন নিতে
              পারেন, যেখানে কোনো ফি নেই, কোনো বাধ্যবাধকতা নেই—শুধু আপনার
              প্রপার্টির জন্য সৎ ও বাস্তব পরামর্শ।
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 3, duration: 0.5, type: "spring" }}
              className="text-xl md:text-2xl font-bold text-gray-900"
            >
              আপনার প্রপার্টি নিয়ে কথা বলি। এটি হতে পারে আপনার নিয়মিত আয়ের
              পরবর্তী বড় সিদ্ধান্ত।
            </motion.h3>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 3.5, type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(241, 90, 38, 0.3), 0 10px 10px -5px rgba(241, 90, 38, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f15a26] to-[#ff7b42] hover:from-[#d14a1e] hover:to-[#e65a2e] text-white text-lg px-10 py-7 rounded-xl shadow-lg transition-all duration-300 font-semibold"
              >
                ফ্রি কন্সালটেশন নিন, আর্নিং শুরু করুন
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
// components/SuccessStorySection.tsx
"use client";

import {
  Play,
  CircleCheckBig,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SuccessStorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });



  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const steps = [
    {
      number: "০১",
      title: "আপনার প্রপার্টির সম্ভাবনা বুঝে নিন।",
      description:
        "প্রতিটি প্রপার্টির আয় ক্ষমতা আলাদা, যা নির্ভর করে লোকেশন, প্রপার্টির ধরন, রুম সংখ্যা এবং আশেপাশের চাহিদার উপর। Stayverz-এর ফ্রি কনসালটেশন সেশনে আমরা এই বিষয়গুলো বিশ্লেষণ করি এবং অনুমান নয়, বাস্তব মার্কেট ডেটার উপর ভিত্তি করে আপনাকে জানাই আপনার প্রপার্টি থেকে মাসে কত আয় করা সম্ভব। এতে করে শুরুতেই আপনার একটি পরিষ্কার ধারণা তৈরি হয়।",
    },
    {
      number: "০২",
      title: "প্রফেশনাল লিস্টিং ও সঠিক প্রাইসিং।",
      description:
        "অনেক হোস্ট নিজেরা ভাড়া দিতে গিয়ে বাজারের তুলনায় কম ভাড়ায় আটকে যান বা সারা বছর একই ভাড়া ধরে রাখেন। Stayverz আপনার প্রপার্টির জন্য আকর্ষণীয় লিস্টিং তৈরি করে, মানসম্মত ছবি ব্যবহার করে এবং চাহিদা, সিজন ও বুকিং ট্রেন্ড অনুযায়ী ভাড়া নির্ধারণ করে। এর ফলে আপনার প্রপার্টি কম দামে নয়, বরং সঠিক সময়ে সঠিক দামে বুক হয়।",
    },
    {
      number: "০৩",
      title: "ফ্রি মার্কেটিং ও বুকিং ব্যবস্থাপনা।",
      description:
        "Stayverz-এর সবচেয়ে বড় সুবিধা হলো—আমরা সম্পূর্ণ মার্কেটিং ও বুকিং ব্যবস্থাপনা নিজেরা করি। আপনার প্রপার্টির প্রচার, গেস্টের খোঁজ, বুকিং কনফার্মেশন এবং গেস্ট সাপোর্ট—সবকিছু আমাদের টিম সামলায়। এতে করে আপনাকে প্রতিদিন ফোন ধরা, মেসেজের উত্তর দেওয়া বা গেস্ট নিয়ে দুশ্চিন্তা করতে হয় না, অথচ আপনার বুকিং চলতে থাকে নিয়মিতভাবে।",
    },
    {
      number: "০৪",
      title: "প্রপার্টি নিরাপত্তা।",
      description:
        "অনেক প্রপার্টি মালিকের প্রধান দুশ্চিন্তা থাকে নিরাপত্তা নিয়ে। Stayverz-এ আমরা এই বিষয়টিকে সর্বোচ্চ গুরুত্ব দিই। গেস্ট যাচাই, স্পষ্ট নিয়ম-কানুন এবং প্রয়োজন হলে দ্রুত সাপোর্ট—এই সবকিছুর মাধ্যমে আপনার প্রপার্টি নিরাপদভাবে ভাড়া দেওয়া নিশ্চিত করা হয়। এর ফলে আপনি নিশ্চিন্তে আপনার প্রপার্টি Stayverz-এর সাথে দিতে পারেন।",
    },
    {
      number: "০৫",
      title: "লেনদেনের স্বচ্ছতা। ",
      description:
        "Stayverz-এর সাথে কাজ করলে আপনার আয় পুরোপুরি স্বচ্ছ থাকে। আপনি সব সময় স্পষ্টভাবে জানতে পারেন আপনার প্রপার্টিতে কত বুকিং হয়েছে, সেই বুকিং থেকে মোট কত আয় এসেছে এবং কোন সময়ে আপনার এলাকায় গেস্টদের চাহিদা বেশি থাকে। এই তথ্যগুলো বিশ্লেষণ করে আমরা ভবিষ্যতে কীভাবে আপনার আয় আরও বাড়ানো যায় সে বিষয়ে পরামর্শ দিই, যাতে আপনার আয় পরিকল্পিতভাবে বৃদ্ধি পায় এবং স্থায়ী হয়।",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-16 max-w-6xl">
        {/* Video Section - EXACTLY THE SAME */}
        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Thumbnail Image */}
            <div className="absolute inset-0">
              <img
                src="/thumnail.png"
                alt="Stayverz Success Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Floating Elements (optional, can be removed if not needed) */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full" />
              <div className="absolute top-10 right-10 w-6 h-6 bg-white/15 rounded-full" />
              <div className="absolute bottom-8 left-10 w-10 h-10 bg-white/10 rounded-full" />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="text-center space-y-6 max-w-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                    className="relative group"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 fill-emerald-600" />
                    </motion.button>
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping group-hover:animate-none"></div>
                    <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Section - TEXT EXACTLY THE SAME */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              কীভাবে এবং কেনো Stayverz এর সাথে আপনি আয় করবেন?
            </h2>
            <p className="text-lg text-gray-800 font-bold">
              আপনার যদি একটি রুম, ফ্ল্যাট বা বাড়ি থাকে, সেটি শুধু থাকার জায়গা
              নয়—সঠিক ব্যবস্থাপনায় এটি হতে পারে আপনার নিয়মিত মাসিক আয়ের উৎস।
              Stayverz ইতিমধ্যেই এমন অনেক হোস্টের সাথে কাজ করছে যারা আগে কম আয়
              করতেন, আর এখন তাদের প্রপার্টি থেকে নিয়মিত বড় অংকের আয় পাচ্ছেন।
            </p>
          </motion.div>

          {/* Steps Section - UPDATED TO MATCH YOUR REQUESTED STYLE */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.8 + index * 0.1 }}
                className=""
              >
                <div className="flex items-start gap-2">
                  <CircleCheckBig className="text-orange-500 w-6 h-6 font-bold flex-shrink-0 mt-1" />
                  <div className="text-gray-700 text-lg leading-relaxed">
                    <span className="font-bold text-gray-900">
                      স্টেপ {step.number}: {step.title}
                    </span>{" "}
                    {step.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text Section - EXACTLY THE SAME */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-6"
        >
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed font-bold"
            >
              সব প্রপার্টি থেকেই এক রকম আয় হয় না, তবে সঠিক গাইডেন্স পেলে অনেক
              প্রপার্টিই মাসে লক্ষাধিক টাকা আয়ের সম্ভাবনা রাখে। তাই অনুমান বা
              শোনা কথার উপর নির্ভর না করে বাস্তব হিসাব জানার সবচেয়ে ভালো উপায়
              হলো কথা বলা। আপনি চাইলে আজই Stayverz-এর ফ্রি কনসালটেশন সেশন নিতে
              পারেন, যেখানে কোনো ফি নেই, কোনো বাধ্যবাধকতা নেই—শুধু আপনার
              প্রপার্টির জন্য সৎ ও বাস্তব পরামর্শ।
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed font-bold mt-5"
            >
              আপনার প্রপার্টি নিয়ে কথা বলি। এটি হতে পারে আপনার নিয়মিত আয়ের
              পরবর্তী বড় সিদ্ধান্ত।
            </motion.p>
          </div>

          {/* CTA Button - EXACTLY THE SAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              delay: 2.4,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="flex justify-center mt-8"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(241, 90, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f15a26] via-[#ff6b35] to-[#ff7b42] hover:from-[#d14a1e] hover:via-[#e65a2e] hover:to-[#f56b3e] text-white text-lg md:text-xl px-12 py-7 rounded-2xl shadow-xl transition-all duration-300 font-bold group"
              >
                <span className="flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="inline-block"
                  >
                    💬
                  </motion.span>
                  ফ্রি কন্সালটেশন নিন, আর্নিং শুরু করুন
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

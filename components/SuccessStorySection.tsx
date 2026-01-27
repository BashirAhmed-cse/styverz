// components/SuccessStorySection.tsx
'use client';

import { Play, CheckCircle, TrendingUp, Shield, DollarSign, BarChart } from "lucide-react";
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
        staggerChildren: 0.1,
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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const stepItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const steps = [
    {
      number: "01",
      title: "আপনার প্রপার্টির সম্ভাবনা বুঝে নিন",
      description: "প্রতিটি প্রপার্টির আয় ক্ষমতা আলাদা, যা নির্ভর করে লোকেশন, প্রপার্টির ধরন, রুম সংখ্যা এবং আশেপাশের চাহিদার উপর। Stayverz-এর ফ্রি কনসালটেশন সেশনে আমরা এই বিষয়গুলো বিশ্লেষণ করি এবং অনুমান নয়, বাস্তব মার্কেট ডেটার উপর ভিত্তি করে আপনাকে জানাই আপনার প্রপার্টি থেকে মাসে কত আয় করা সম্ভব।",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-orange-500 to-amber-500"
    },
    {
      number: "02",
      title: "প্রফেশনাল লিস্টিং ও সঠিক প্রাইসিং",
      description: "Stayverz আপনার প্রপার্টির জন্য আকর্ষণীয় লিস্টিং তৈরি করে, মানসম্মত ছবি ব্যবহার করে এবং চাহিদা, সিজন ও বুকিং ট্রেন্ড অনুযায়ী ভাড়া নির্ধারণ করে। এর ফলে আপনার প্রপার্টি কম দামে নয়, বরং সঠিক সময়ে সঠিক দামে বুক হয়।",
      icon: DollarSign,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "ফ্রি মার্কেটিং ও বুকিং ব্যবস্থাপনা",
      description: "Stayverz-এর সবচেয়ে বড় সুবিধা হলো—আমরা সম্পূর্ণ মার্কেটিং ও বুকিং ব্যবস্থাপনা নিজেরা করি। আপনার প্রপার্টির প্রচার, গেস্টের খোঁজ, বুকিং কনফার্মেশন এবং গেস্ট সাপোর্ট—সবকিছু আমাদের টিম সামলায়।",
      icon: BarChart,
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "প্রপার্টি নিরাপত্তা",
      description: "গেস্ট যাচাই, স্পষ্ট নিয়ম-কানুন এবং প্রয়োজন হলে দ্রুত সাপোর্ট—এই সবকিছুর মাধ্যমে আপনার প্রপার্টি নিরাপদভাবে ভাড়া দেওয়া নিশ্চিত করা হয়। এর ফলে আপনি নিশ্চিন্তে আপনার প্রপার্টি Stayverz-এর সাথে দিতে পারেন।",
      icon: Shield,
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      number: "05",
      title: "লেনদেনের স্বচ্ছতা",
      description: "Stayverz-এর সাথে কাজ করলে আপনার আয় পুরোপুরি স্বচ্ছ থাকে। আপনি সব সময় স্পষ্টভাবে জানতে পারেন আপনার প্রপার্টিতে কত বুকিং হয়েছে, সেই বুকিং থেকে মোট কত আয় এসেছে এবং কোন সময়ে আপনার এলাকায় গেস্টদের চাহিদা বেশি থাকে।",
      icon: CheckCircle,
      color: "bg-gradient-to-br from-red-500 to-rose-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Video Section */}
        <motion.div 
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-800">
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full" />
              <div className="absolute top-10 right-10 w-6 h-6 bg-white/15 rounded-full" />
              <div className="absolute bottom-8 left-10 w-10 h-10 bg-white/10 rounded-full" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 z-10">
                <div className="text-center space-y-6 max-w-2xl">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                  >
                    দেখুন কিভাবে ১০০০+ হোস্ট Stayverz এর সাথে আয় করছেন
                  </motion.h3>
                  
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
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="space-y-2 text-center sm:text-left"
                    >
                      <span className="text-lg md:text-xl font-medium block">
                        ভিডিওটি দেখুন
                      </span>
                      <span className="text-sm text-white/80 block">
                        ২:৪৫ মিনিট
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Steps Section - Improved YouTube-like Design */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stayverz-এর ৫-স্টেপ সফলতার পথ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              সহজ এবং স্বচ্ছ প্রক্রিয়ায় কিভাবে আমরা হোস্টদের মাসে ১ লক্ষ+ টাকা আয় করতে সাহায্য করছি
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-orange-500 via-blue-500 to-green-500 hidden md:block" />
            
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    variants={stepItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.8 + index * 0.15 }}
                    className={`relative group ${
                      isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute top-6 left-0 md:left-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white shadow-lg ${
                      isEven ? 'md:left-1/2' : 'md:right-1/2 md:left-auto md:translate-x-1/2'
                    }`}>
                      <motion.div
                        variants={numberVariants}
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ background: step.color }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-gray-500 font-bold text-lg md:text-xl">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Step Card */}
                    <div className={`ml-16 md:ml-0 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-100 ${
                      isEven ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-start gap-4">
                        <motion.div
                          variants={iconVariants}
                          whileHover="hover"
                          className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center`}
                          style={{ background: step.color }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.9 + index * 0.15 }}
                            className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                          >
                            {step.title}
                          </motion.h3>
                          
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                            className="text-gray-600 leading-relaxed text-base md:text-lg"
                          >
                            {step.description}
                          </motion.p>
                          
                          {/* Progress Indicator */}
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${(index + 1) * 20}%` } : { width: 0 }}
                            transition={{ delay: 1.1 + index * 0.15, duration: 0.8, ease: "easeOut" }}
                            className="mt-6 h-1.5 rounded-full bg-gradient-to-r from-gray-200 to-gray-200 overflow-hidden"
                          >
                            <div 
                              className="h-full rounded-full"
                              style={{ 
                                background: step.color,
                                width: `${(index + 1) * 20}%`
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Conclusion & CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 md:mt-24 space-y-8"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              সব প্রপার্টি থেকেই এক রকম আয় হয় না, তবে সঠিক গাইডেন্স পেলে অনেক
              প্রপার্টিই মাসে লক্ষাধিক টাকা আয়ের সম্ভাবনা রাখে। তাই অনুমান বা
              শোনা কথার উপর নির্ভর না করে বাস্তব হিসাব জানার সবচেয়ে ভালো উপায়
              হলো কথা বলা।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 2.2, type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-200"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                আপনার প্রপার্টি নিয়ে কথা বলি। এটি হতে পারে আপনার নিয়মিত আয়ের
                পরবর্তী বড় সিদ্ধান্ত।
              </h3>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 2.4, type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(241, 90, 38, 0.4)"
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
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
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
// app/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "backOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(241, 90, 38, 0.3), 0 10px 10px -5px rgba(241, 90, 38, 0.2)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(241, 90, 38, 0.1)",
      transition: { duration: 0.2 }
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

  return (
    <div className="min-h-screen hero-section font-sans rounded-2xl">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            {/* Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <motion.h1 
                variants={textVariants}
                className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-bold leading-snug md:leading-tight text-gray-900"
              >
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-[#f15a26]"
                >
                  Stayverz
                </motion.span>{" "}
                -{" "}
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-gray-800"
                >
                  এ
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                variants={textVariants}
                className="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-3.5xl xl:text-4xl font-bold leading-snug md:leading-tight text-gray-900"
              >
                আপনার অব্যবহৃত অ্যাপার্টমেন্ট এনালিস্ট করে মাসে{" "}
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.8, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15 
                  }}
                  className="text-green-600 inline-block"
                >
                  ১,০০,০০০+ টাকা
                </motion.span>{" "}
                আয় করুন
              </motion.h2>
              
              <motion.p 
                variants={textVariants}
                className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2 md:pt-4"
              >
                বাংলাদেশজুড়ে ১,০০০+ হোস্টের সাথে যুক্ত হন, যারা কোনো মার্কেটিং ছাড়াই নিয়মিত ভাড়া আয় করছেন।
              </motion.p>
            </div>

            {/* Features List */}
            <div className="pt-2 md:pt-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                {[
                  { icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />, text: "কোনো মার্কেটিং লাগবে না", color: "bg-green-50" },
                  { icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />, text: "সম্পূর্ণ সাপোর্ট", color: "bg-blue-50" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className={`flex items-center gap-1.5 sm:gap-2 ${feature.color} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-default`}
                  >
                    {feature.icon}
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4 md:pt-6 lg:pt-8"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#f15a26] to-[#ff7b42] hover:from-[#d14a1e] hover:to-[#e65a2e] text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full transition-all duration-300"
                >
                  <span className="font-semibold">বিস্তারিত জানুন</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Floating decorative elements */}
            <motion.div 
              variants={floatingAnimation}
              animate="animate"
              className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-orange-200 rounded-full blur-xl opacity-30 md:opacity-50"
            />
            <motion.div 
              variants={floatingAnimation}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-blue-200 rounded-full blur-xl opacity-20 md:opacity-30"
            />
            
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl border border-orange-100 p-4 sm:p-6 md:p-8 lg:p-10 relative z-10">
              {/* Form Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center mb-4 sm:mb-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-2.5xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  ফ্রি কন্সালটেশন নিন, আরনিং শুরু করুন !
                </h2>
              </motion.div>

              {/* Form */}
              <form className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { placeholder: "আপনার নাম", icon: "👤", type: "text" },
                    { placeholder: "ফোন নম্বর", icon: "📱", type: "tel" },
                    { placeholder: "ইমেইল এড্রেস", icon: "✉️", type: "email" },
                    { placeholder: "লোকেশন", icon: "📍", type: "text" }
                  ].map((field, index) => (
                    <motion.div
                      key={field.placeholder}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="relative"
                    >
                      <Input 
                        placeholder={field.placeholder}
                        className="h-10 sm:h-11 md:h-12 text-sm sm:text-base pl-10 sm:pl-12 border-gray-300 focus:border-[#f15a26] focus:ring-[#f15a26] rounded-lg sm:rounded-xl transition-all duration-200"
                        type={field.type as any}
                      />
                      <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {field.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Property Type Select */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="relative"
                >
                  <Select>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <SelectTrigger className="h-10 sm:h-11 md:h-12 text-sm sm:text-base pl-10 sm:pl-12 border-gray-300 focus:border-[#f15a26] focus:ring-[#f15a26] rounded-lg sm:rounded-xl transition-all duration-200">
                        <div className="absolute left-3 sm:left-4 text-gray-400">🏠</div>
                        <SelectValue placeholder="প্রপার্টি ধরন নির্বাচন করুন" />
                      </SelectTrigger>
                    </motion.div>
                    <SelectContent className="text-sm sm:text-base">
                      <SelectItem value="full-apartment">পুরো অ্যাপার্টমেন্ট</SelectItem>
                      <SelectItem value="single-room">সিঙ্গেল রুম</SelectItem>
                      <SelectItem value="shared">শেয়ার্ড রুম</SelectItem>
                      <SelectItem value="commercial">কমার্শিয়াল স্পেস</SelectItem>
                      <SelectItem value="other">অন্যান্য</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#f15a26] to-[#ff7b42] hover:from-[#d14a1e] hover:to-[#e65a2e] text-white text-base sm:text-lg py-5 sm:py-6 md:py-7 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg transition-all duration-300 mt-2 sm:mt-4"
                    >
                      <span className="font-semibold">সাবমিট করুন</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
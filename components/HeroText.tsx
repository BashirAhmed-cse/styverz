'use client';

import { Button } from "@/components/ui/button";
import { CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

interface HeroTextProps {
  animationVariants?: any;
}

export default function HeroText({ animationVariants }: HeroTextProps) {
  // Animation variants
  const containerVariants = animationVariants?.containerVariants || {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = animationVariants?.textVariants || {
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

  const featureVariants = animationVariants?.featureVariants || {
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

  const buttonVariants = animationVariants?.buttonVariants || {
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

  return (
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
            className="hidden sm:inline-flex w-full sm:w-auto bg-gradient-to-r from-[#f15a26] to-[#ff7b42] hover:from-[#d14a1e] hover:to-[#e65a2e] text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full transition-all duration-300"
          >
            <span className="font-semibold">বিস্তারিত জানুন</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
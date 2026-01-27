// components/HeroLanding.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const peachContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(241, 90, 36, 0.1)"
    }
  };

  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center bg-white px-4 md:px-10 overflow-hidden">
      
      {/* Logo Animation */}
      <motion.div 
        className="w-full max-w-6xl mb-12 flex justify-start"
        variants={logoVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col items-start">
          <motion.img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-32 xs:h-9 xs:w-36 sm:h-10 sm:w-40 md:h-11 md:w-44 lg:h-12 lg:w-48"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="relative w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        
        {/* Peach Container with Animation */}
        <motion.div 
          className="w-full lg:w-[92%] bg-[#FFF1EB] rounded-[30px] border border-orange-200 p-10 md:p-20 min-h-[380px] flex items-center"
          variants={peachContainerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          
          {/* Left Content - Text with Staggered Animation */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-6"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-[1.2]"
              variants={itemVariants}
            >
              আজই আপনার ফ্ল্যাট থেকে <br /> আয় শুরু করুন
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl font-medium text-gray-800"
              variants={itemVariants}
            >
              ১ মিনিটে রেজিস্ট্রেশন করুন – আমাদের টিম <br /> আপনাকে গাইড করবে
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Overlapping Form with Slide-in Animation */}
        <motion.div 
          className="w-full lg:w-[400px] mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20"
          variants={formVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          whileHover={{ 
            y: -5,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <div className="bg-white rounded-[30px] shadow-2xl border border-orange-200 p-8 md:p-10 w-full">
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-center mb-8 text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              ফ্রি কনসালটেশন নিন, আর্নিং শুরু করুন
            </motion.h3>

            <form className="space-y-4">
              {["নাম", "ফোন নাম্বার", "ইমেইল", "লোকেশন"].map((placeholder, index) => (
                <motion.div
                  key={placeholder}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Input
                    placeholder={placeholder}
                    className="h-12 bg-white border-gray-300 rounded-xl focus:ring-[#F15A24] transition-all duration-200"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Select>
                  <SelectTrigger className="h-12 bg-white border-gray-300 rounded-xl text-gray-500">
                    <SelectValue placeholder="প্রপার্টি ধরন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">পুরো অ্যাপার্টমেন্ট</SelectItem>
                    <SelectItem value="room">সিঙ্গেল রুম</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div variants={buttonVariants}>
                  <Button className="w-full h-14 bg-[#F15A24] hover:bg-[#D64A1D] text-white text-xl font-bold rounded-2xl mt-4 shadow-lg shadow-orange-200">
                    সাবমিট
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
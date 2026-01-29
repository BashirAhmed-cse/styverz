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
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface HeroFormProps {
  animationVariants?: any;
}

export default function HeroForm({ animationVariants }: HeroFormProps) {
  const { submitToLocalStorage, isLoading } = useLocalStorage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: ""
  });

  // Animation variants
  const formVariants = animationVariants?.formVariants || {
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

  const inputVariants = animationVariants?.inputVariants || {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(241, 90, 38, 0.1)",
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

  const floatingAnimation = animationVariants?.floatingAnimation || {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitToLocalStorage(formData);
    
    // Reset form on success
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      propertyType: ""
    });
  };

  return (
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
        className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  bg-orange-200 rounded-full blur-xl opacity-30 md:opacity-50"
      />
      <motion.div 
        variants={floatingAnimation}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-blue-200 rounded-full blur-xl opacity-20 md:opacity-30"
      />
      
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl border border-orange-500 p-4 sm:p-6 md:p-8 lg:p-10 relative z-10">
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
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
          <div className="space-y-3 sm:space-y-4">
            {[
              { name: "name", placeholder: "নাম", icon: "👤", type: "text" },
              { name: "phone", placeholder: "ফোন নম্বর", icon: "📱", type: "tel" },
              { name: "email", placeholder: "ইমেইল", icon: "✉️", type: "email" },
              { name: "location", placeholder: "লোকেশন", icon: "📍", type: "text" }
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                whileFocus="focus"
                variants={inputVariants}
                className="relative"
              >
                <Input 
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="h-10 sm:h-11 md:h-12 text-sm sm:text-base pl-10 sm:pl-12 border-gray-300 focus:border-[#f15a26] focus:ring-[#f15a26] rounded-lg sm:rounded-xl transition-all duration-200"
                  type={field.type as any}
                  required
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
            <Select onValueChange={handleSelectChange} value={formData.propertyType}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <SelectTrigger className="h-10 sm:h-11 md:h-12 text-sm sm:text-base pl-10 sm:pl-12 border-gray-300 focus:border-[#f15a26] focus:ring-[#f15a26] rounded-lg sm:rounded-xl transition-all duration-200">
                  <div className="absolute left-3 sm:left-4 text-gray-400">🏠</div>
                  <SelectValue placeholder="প্রপার্টি ধরন" />
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
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#f15a26] to-[#ff7b42] hover:from-[#d14a1e] hover:to-[#e65a2e] text-white text-base sm:text-lg py-5 sm:py-6 md:py-7 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg transition-all duration-300 mt-2 sm:mt-4"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    সাবমিট হচ্ছে...
                  </>
                ) : (
                  <span className="font-semibold">সাবমিট</span>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}
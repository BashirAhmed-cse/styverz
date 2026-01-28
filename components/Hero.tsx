'use client';

import { motion } from "framer-motion";
import HeroText from "@/components/HeroText";
import HeroForm from "@/components/HeroForm";

// Centralized animation variants
const animationVariants = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  },
  textVariants: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  formVariants: {
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
  },
  featureVariants: {
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
  },
  buttonVariants: {
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
  },
  inputVariants: {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(241, 90, 38, 0.1)",
      transition: { duration: 0.2 }
    }
  },
  floatingAnimation: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

export default function Hero() {
  return (
    <div className="min-h-screen hero-section font-sans rounded-2xl">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Text Content */}
          <HeroText animationVariants={animationVariants} />
          
          {/* Right - Form Card */}
          <HeroForm animationVariants={animationVariants} />
        </div>
      </main>
    </div>
  );
}
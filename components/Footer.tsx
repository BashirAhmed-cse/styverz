// components/Footer.tsx
'use client';

import { Facebook, Youtube, Linkedin, Heart, ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.95]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.98]);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show/hide back to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.8 }
  };

  const floatingButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const links = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            variants={floatingButtonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 md:right-8 z-50 w-12 h-12 bg-[#f15a26] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Footer */}
      <motion.footer 
        style={{ opacity, scale }}
        className="bg-gradient-to-r from-[#f15a26] to-[#ff7b42] text-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-8 px-6 md:px-12"
          >
            {/* Links Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base"
                variants={containerVariants}
              >
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={linkItemVariants}
                    custom={index}
                    whileHover="hover"
                    className="relative group font-medium tracking-wide"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                className="flex items-center gap-6"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    custom={index}
                    className="relative group"
                  >
                    <div className="relative z-10 p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-all duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute inset-0 bg-white/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Copyright Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-white/20 text-center"
            >
              <p className="text-sm md:text-base flex items-center justify-center gap-2">
                © {currentYear} Stayverz. All rights reserved.
                <Heart className="h-4 w-4 text-white/70 fill-white/30" />
              </p>
              <p className="text-xs md:text-sm mt-2 text-white/70">
                Made with passion for property owners worldwide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
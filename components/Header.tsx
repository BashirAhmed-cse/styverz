// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { User, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logo click - navigate to home
  const handleLogoClick = () => {
    router.push('/');
  };

  // Handle login click
  const handleLoginClick = () => {
    router.push('/login');
  };

  // Handle signup click
  const handleSignupClick = () => {
    router.push('/signup');
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className={`w-full py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo with animation */}
        <motion.div 
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img 
            src="/logo.png" 
            alt="Stayverz Logo" 
            className="h-8 w-32 xs:h-9 xs:w-36 sm:h-10 sm:w-40 md:h-11 md:w-44 lg:h-12 lg:w-48"
          />
        </motion.div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleLoginClick}
              className="gap-1.5 border-[#f15a26] text-gray-700 hover:bg-[#f15a26]/10 hover:border-[#f15a26] hover:text-[#f15a26] text-xs sm:text-sm md:text-base"
            >
              <User className="h-3 w-3 sm:h-4 sm:w-4" />
              Login
            </Button>
          </motion.div>
          
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <Button 
              size="sm"
              onClick={handleSignupClick}
              className="bg-[#f15a26] hover:bg-[#d14a1e] text-white font-medium px-3 sm:px-4 text-xs sm:text-sm md:text-base"
            >
              Sign Up
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <motion.div 
                  className="flex items-center cursor-pointer"
                  onClick={handleLogoClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src="/logo.png" 
                    alt="Stayverz Logo" 
                    className="h-8 w-32"
                  />
                </motion.div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-6 space-y-6">
                <motion.div
                  custom={0}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      handleLoginClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-start gap-3 border-[#f15a26] text-gray-700 hover:bg-[#f15a26]/10 hover:border-[#f15a26] hover:text-[#f15a26] text-base"
                  >
                    <User className="h-5 w-5" />
                    Login
                  </Button>
                </motion.div>
                
                <motion.div
                  custom={1}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Button 
                    size="lg"
                    onClick={() => {
                      handleSignupClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-center bg-[#f15a26] hover:bg-[#d14a1e] text-white font-medium text-base"
                  >
                    Sign Up
                  </Button>
                </motion.div>

                {/* Mobile Menu Links */}
                <motion.div
                  custom={2}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-6 border-t"
                >
                  <nav className="space-y-4">
                    <Link 
                      href="/" 
                      className="block py-3 text-gray-700 hover:text-[#f15a26] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className="block py-3 text-gray-700 hover:text-[#f15a26] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/how-it-works" 
                      className="block py-3 text-gray-700 hover:text-[#f15a26] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block py-3 text-gray-700 hover:text-[#f15a26] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
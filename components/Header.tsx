'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { StaticImage } from './StaticImage';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
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
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => router.push('/')}
        >
          <StaticImage 
            src="/logo.png" 
            alt="Stayverz Logo" 
            width={192}
            height={48}
            priority={true}
            className="h-8 w-32 xs:h-9 xs:w-36 sm:h-10 sm:w-40 md:h-11 md:w-44 lg:h-12 lg:w-48"
          />
        </div>

        {/* Desktop Buttons - Simplified */}
        {/* <div className="hidden sm:flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => router.push('/login')}
            className="gap-1.5 border-[#f15a26] text-gray-700 hover:bg-[#f15a26]/10 hover:border-[#f15a26] hover:text-[#f15a26] text-xs sm:text-sm md:text-base"
          >
            Login
          </Button>
          
          <Button 
            size="sm"
            onClick={() => router.push('/signup')}
            className="bg-[#f15a26] hover:bg-[#d14a1e] text-white font-medium px-3 sm:px-4 text-xs sm:text-sm md:text-base"
          >
            Sign Up
          </Button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.header>

      {/* Simple Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] sm:hidden">
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b">
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => {
                  router.push('/');
                  setIsMobileMenuOpen(false);
                }}
              >
                <StaticImage 
                  src="/logo.png" 
                  alt="Stayverz Logo" 
                  width={128}
                  height={32}
                  className="h-8 w-32"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  router.push('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-center border-[#f15a26] text-gray-700 hover:bg-[#f15a26]/10 hover:border-[#f15a26] hover:text-[#f15a26] text-base"
              >
                Login
              </Button>
              
              <Button 
                size="lg"
                onClick={() => {
                  router.push('/signup');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-center bg-[#f15a26] hover:bg-[#d14a1e] text-white font-medium text-base"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;
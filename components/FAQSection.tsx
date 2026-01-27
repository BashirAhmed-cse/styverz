// components/FAQSection.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer?: string;
  isOpenByDefault?: boolean;
};

const faqItems: FAQItem[] = [
  {
    question: 'Stayverz কী?',
    answer: 'Stayverz হল একটি স্বয়ংক্রিয় আতিথেয়তা ব্যবস্থাপনা প্ল্যাটফর্ম যা হোস্টদের তাদের সম্পত্তি ব্যবস্থাপনা, বুকিং এবং আয় বাড়াতে সহায়তা করে।'
  },
  {
    question: 'আমি কীভাবে Stayverz-এ আয় শুরু করবো?',
    answer: 'আমাদের প্ল্যাটফর্মে নিবন্ধন করুন, আপনার সম্পত্তির তালিকা তৈরি করুন, ক্যালেন্ডার সেট আপ করুন এবং আপনার প্রথম বুকিং গ্রহণ শুরু করুন।'
  },
  {
    question: 'আমি কি মাসে ১,০০,০০০ টাকার বেশি আয় করতে পারি?',
    answer: 'হ্যাঁ, অনেক হোস্ট মাসে ১ লাখ টাকার বেশি আয় করছেন। আয় নির্ভর করে আপনার সম্পত্তির অবস্থান, সুযোগ-সুবিধা এবং মৌসুমের উপর।'
  },
  {
    question: 'Stayverz কি নিরাপদ?',
    answer: 'হ্যাঁ, Stayverz সম্পূর্ণ নিরাপদ। আমরা এনক্রিপ্টেড লেনদেন, সুরক্ষিত ডেটা স্টোরেজ এবং যাচাইকৃত ব্যবহারকারীর সিস্টেম ব্যবহার করি।'
  },
  {
    question: 'পেমেন্ট কীভাবে পাবো?',
    answer: 'এটি প্রায় সম্পূর্ণ স্বয়ংক্রিয় সিস্টেম হিসেবে কাজ করে। আপনি আপনার আসন্ন বুকিংয়ের জন্য ক্যালেন্ডার তৈরি ও শিডিউল করতে পারেন। Analyzer AI, Tracker, AI Reporter ব্যবহার করে এক ক্লিকেই আপনার এবং আপনার টিমের জন্য একটি মসৃণ বিজনেস প্ল্যান তৈরি করা যায়।',
    isOpenByDefault: true,
  },
  {
    question: 'আমার সবসময় গেস্ট ম্যানেজ করতে হবে?',
    answer: 'না, Stayverz স্বয়ংক্রিয় মেসেজিং, চেক-ইন/চেক-আউট এবং গেস্ট কমিউনিকেশন হ্যান্ডেল করে, যাতে আপনি কম সময় ব্যয় করে বেশি আয় করতে পারেন।'
  },
  {
    question: 'Stayverz ব্যবহার করতে কোনো অগ্রিম ফি দিতে হয়?',
    answer: 'না, Stayverz কোন অগ্রিম ফি নেয় না। আমরা শুধুমাত্র সফল বুকিং সম্পন্ন হলে একটি ছোট কমিশন নিই।'
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDFB] to-[#FFF9F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-base md:text-lg text-[#666666] font-normal">
            We're happy to answer your questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-2.5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  },
                  closed: { 
                    scale: 1,
                    transition: { duration: 0.2 }
                  }
                }}
                className={cn(
                  'bg-white rounded-xl border transition-all duration-200 overflow-hidden',
                  isOpen 
                    ? 'border-[#FF6B35] shadow-[0_4px_12px_rgba(255,107,53,0.08)]' 
                    : 'border-[#E5E7EB] hover:border-[#FF6B35]/30'
                )}
              >
                {/* Question Button */}
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={isOpen}
                  whileHover={{ 
                    backgroundColor: isOpen ? 'transparent' : 'rgba(255, 107, 53, 0.02)'
                  }}
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.span 
                    className={cn(
                      'text-lg md:text-xl font-semibold leading-relaxed pr-8',
                      isOpen ? 'text-[#FF6B35]' : 'text-[#1A1A1A] group-hover:text-[#FF6B35]'
                    )}
                    animate={{ color: isOpen ? '#FF6B35' : '#1A1A1A' }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.question}
                  </motion.span>
                  
                  <motion.div 
                    className={cn(
                      'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
                      isOpen 
                        ? 'bg-[#FF6B35] text-white' 
                        : 'bg-[#F3F4F6] text-[#6B7280] group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35]'
                    )}
                    animate={{ 
                      rotate: isOpen ? 180 : 0,
                      backgroundColor: isOpen ? '#FF6B35' : '#F3F4F6'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <X className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer Panel with AnimatePresence for smooth exit */}
                <AnimatePresence initial={false}>
                  {isOpen && item.answer && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.1 }
                        }
                      }}
                    >
                      <div className="px-6 pb-6 pt-0 overflow-hidden">
                        <motion.div 
                          className="border-t border-[#F3F4F6] pt-6"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-[#4B5563] text-base leading-relaxed font-normal">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
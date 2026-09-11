"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines can vary based on scope and complexity. A small project may take 2–4 weeks, while larger projects typically take 1–3 months. I’ll provide an estimated timeline during our initial discussions.",
  },
  {
    question: "Do you work with specific industries or types of businesses?",
    answer:
      "We serve both residential and commercial clients alike. From small offices and retail shops to local homes and apartments, we handle everyday repairs and maintenance to keep your property running smoothly.",
  },
  {
    question: "What tools do you use for design?",
    answer:
      "We utilize advanced digital estimating software, accurate measurement tools, and modern layout apps to plan out structural repairs, shelving setups, or minor renovations before we even start sawing or drilling.",
  },
  {
    question: "What’s your pricing structure?",
    answer:
      "We offer transparent hourly rates for small fixes alongside flat fees for larger jobs. You will always receive a clear, upfront estimate covering both labor and materials before any repair work officially begins.",
  },
  {
    question: "How do you ensure the designs meet our goals?",
    answer:
      "We walk through the space with you, listen to your specific needs, and map out a clear plan. We will never start a project until you have fully approved the layout, materials, and overall repair strategy.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAFBF9] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          {/* Small label */}
          <span className="text-[#6B7280] text-sm font-medium font-figtree tracking-wide block mb-2">
            /Question & Answer
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F110F] tracking-tight leading-tight font-figtree mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>

          {/* Description */}
          <p className="text-[#6B7280] text-sm sm:text-base font-normal font-figtree max-w-xl mx-auto leading-relaxed">
            Have questions? We’ve answered some of the most common ones below.
          </p>
        </motion.div>

        {/* FAQ Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[920px] mx-auto bg-white rounded-[24px] sm:rounded-[32px] border border-[#E5E7EB] p-4 sm:p-6 md:p-8 shadow-xs"
        >
          <div className="flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              const isLast = index === faqData.length - 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    !isLast && !isOpen ? "border-b border-[#F3F4F6]" : ""
                  }`}
                >
                  {isOpen ? (
                    /* Expanded FAQ Design */
                    <motion.div
                      initial={{ opacity: 0.9, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#F0FDF4] rounded-[20px] p-5 sm:p-6 md:p-7 my-2 transition-all"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-base sm:text-lg font-bold text-[#0F110F] font-figtree pr-4 leading-snug">
                          {item.question}
                        </h3>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105">
                          <ChevronUp className="w-4 h-4 text-[#0F110F] stroke-[2.2]" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#4B5563] text-sm sm:text-[15px] font-normal leading-relaxed font-figtree mt-3 sm:mt-4 max-w-[820px]">
                            {item.answer}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    /* Closed FAQ Item */
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-5 sm:py-6 px-2 sm:px-4 flex items-center justify-between text-left focus:outline-none group transition-colors hover:bg-gray-50/50 rounded-xl"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-[#0F110F] font-figtree pr-4 leading-snug">
                        {item.question}
                      </h3>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EBFDF2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                        <ChevronDown className="w-4 h-4 text-[#16A34A] stroke-[2.2]" />
                      </div>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

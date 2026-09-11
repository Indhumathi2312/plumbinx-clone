"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface RollingNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

const DIGITS_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const RollingDigit: React.FC<{ digit: number; index: number; isInView: boolean }> = ({
  digit,
  index,
  isInView,
}) => {
  const targetIndex = 10 + digit;
  const targetPercent = -(targetIndex * (100 / DIGITS_ARRAY.length));

  return (
    <span className="inline-block relative overflow-hidden h-[1em] align-baseline">
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: isInView ? `${targetPercent}%` : "0%" }}
        transition={{
          duration: 1.6 + index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex flex-col items-center leading-none"
      >
        {DIGITS_ARRAY.map((num, i) => (
          <span key={i} className="h-[1em] flex items-center justify-center">
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export const RollingNumber: React.FC<RollingNumberProps> = ({
  value,
  suffix = "",
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const digits = String(value).split("").map(Number);

  return (
    <span ref={ref} className={`inline-flex items-baseline ${className}`}>
      {digits.map((digit, idx) => (
        <RollingDigit key={idx} digit={digit} index={idx} isInView={isInView} />
      ))}
      {suffix && <span className="inline-block">{suffix}</span>}
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Dark semi-transparent overlay matching reference muted tone */}
      <div className="absolute inset-0 bg-[#141b15]/55 backdrop-blur-[0.5px]" />

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 w-full flex-grow flex flex-col justify-center pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end w-full">
          
          {/* Left Column: Headline, Subtitle, Primary CTA, Reviews */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Headline with exact responsive font sizes & line breaks */}
            <h1 className="text-[32px] sm:text-[46px] md:text-[54px] lg:text-[60px] xl:text-[64px] font-bold text-white tracking-tight leading-[1.12] font-figtree">
              Reliable Plumbing Solutions,<br className="hidden sm:inline" />
              Anytime you Need Them
            </h1>

            {/* Paragraph Description */}
            <p className="text-white/90 text-sm sm:text-base md:text-[17px] max-w-xl font-normal leading-relaxed mt-4 sm:mt-6 mb-6 sm:mb-8 font-figtree">
              Expert plumbing services for homes and businesses. Fast, professional,
              <br className="hidden sm:inline" />
              and affordable because leaks don't wait ever.
            </p>

            {/* Primary CTA: Book a Free Call */}
            <Link
              href="#book-call"
              className="inline-flex items-center gap-3.5 bg-white text-[#0F110F] pl-6 sm:pl-7 pr-2 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all shadow-xl group"
            >
              <span className="font-figtree">Book a Free Call</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F110F] flex items-center justify-center text-[#02CD31] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
            </Link>

            {/* Star Rating & Verified Reviews */}
            <div className="mt-8 sm:mt-10 flex flex-col items-start gap-1.5">
              {/* 5 White Filled Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white stroke-none" />
                ))}
              </div>
              {/* Verified Text with Vertical Rolling Number Animation */}
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide font-figtree flex items-center gap-1">
                <RollingNumber value={500} suffix="+" />
                <span>Verified Reviews</span>
              </p>
            </div>

          </div>

          {/* Right Column: Glassmorphism Customer Statistics Card */}
          <div className="lg:col-span-5 flex justify-start md:justify-end w-full mt-6 lg:mt-0">
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 md:p-7 w-full max-w-[420px] shadow-2xl text-white">
              
              {/* Top Row: Animated 50K+ & Description */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-3xl sm:text-4xl md:text-[50px] font-extrabold tracking-tight text-white leading-none font-figtree">
                  <RollingNumber value={50} suffix="K+" />
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/90 leading-tight text-left font-figtree">
                  Cured satisfied customer
                  <br />
                  around the globe
                </p>
              </div>

              {/* Bottom Row: Customer Avatars & Contact Now CTA */}
              <div className="mt-5 sm:mt-6 pt-2 flex items-center justify-between gap-3">
                {/* Avatars */}
                <div className="flex items-center">
                  <Image
                    src="/images/myVf91w22Wlk4VWikUdOm3pgqQ.png"
                    alt="Satisfied Customers"
                    width={140}
                    height={40}
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </div>

                {/* Contact Now Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 sm:gap-2.5 bg-white text-[#0F110F] pl-3.5 sm:pl-4 pr-1.5 py-1.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-md group"
                >
                  <span className="font-figtree">Contact Now</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0F110F] flex items-center justify-center text-[#02CD31] transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

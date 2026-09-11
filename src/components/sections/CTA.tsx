"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const CTA: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto bg-[#0F110F] text-white rounded-[32px] sm:rounded-[48px] overflow-hidden px-6 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] font-figtree mb-5">
              Don’t Let Plumbing Problems Disrupt Your Day
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-figtree mb-8 max-w-xl">
              Whether it’s a small leak or a big installation, our expert plumbers are just one call away. Reliable, and affordable plumbing service today.
            </p>

            {/* Get Started White Pill Button */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-3.5 bg-white text-[#0F110F] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 group shadow-md mb-8"
            >
              <span className="font-figtree text-sm font-semibold">Get Started</span>
              <div className="w-8 h-8 rounded-full bg-[#0F110F] flex items-center justify-center text-[#02CD31] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </div>
            </Link>

            {/* 3 Checklist Feature Bullets */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-white/90 font-figtree">
                <CheckCircle2 className="w-5 h-5 text-[#02CD31] flex-shrink-0 stroke-[2]" />
                <span>Advanced leak detection & repair</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-white/90 font-figtree">
                <CheckCircle2 className="w-5 h-5 text-[#02CD31] flex-shrink-0 stroke-[2]" />
                <span>Drain cleaning & maintenance</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-white/90 font-figtree">
                <CheckCircle2 className="w-5 h-5 text-[#02CD31] flex-shrink-0 stroke-[2]" />
                <span>Priority scheduling</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column Plumber Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/cta-plumber.png"
                alt="Expert plumber working on pipes"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover pointer-events-none select-none"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;

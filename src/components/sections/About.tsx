"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#0F110F] pt-16 pb-16 sm:pt-24 sm:pb-24">
      {/* 1. COMPANY LOGOS AREA (EXACT ACCURATE IMAGE) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Centered header text */}
        <p className="text-center text-sm font-medium text-[#0F110F] mb-6 sm:mb-8 tracking-tight font-figtree">
          We working with more than 500+ companies
        </p>

        {/* Single Accurate Logo Banner Image */}
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/about-top-logos.png"
            alt="We working with more than 500+ companies"
            width={1100}
            height={120}
            unoptimized
            className="w-full h-auto max-w-[1020px] object-contain pointer-events-none select-none"
            priority
          />
        </div>
      </div>

      {/* 2. ABOUT US CONTENT AREA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-20 sm:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs sm:text-sm font-medium text-[#0F110F]/70 mb-3 tracking-tight font-figtree">
              /About us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0F110F]  leading-[1.18] font-figtree mb-6 ">
              With over 15+ years of
              <br />
              experience, our team
              <br />
              provides top-quality services
            </h2>

            <p className="text-xs sm:text-sm text-[#0F110F]/75 leading-relaxed max-w-xl mb-8 font-figtree ">
              From faucet repairs to full remodel installations, we handle it all
              <br className="hidden sm:inline" />
              with precision. And Installation, repair, and maintenance for
              <br className="hidden sm:inline" />
              efficient hot water in your home or business.
            </p>

            {/* Black Pill Button */}
            <Link
              href="#about"
              className="inline-flex items-center gap-3 bg-[#0F110F] text-white pl-5 pr-1.5 py-1.5 rounded-full font-medium text-xs sm:text-sm hover:bg-black transition-all group shadow-sm"
            >
              <span className="font-figtree">About Us</span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0F110F] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[410px] rounded-2xl overflow-hidden shadow-md border border-gray-100/80">
              <Image
                src="/images/about-plumber.png"
                alt="Plumber installing water pipes"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center pointer-events-none select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. STATISTICS AREA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        {/* Horizontal Divider */}
        <div className="w-full border-t border-gray-200/80 mb-12" />

        {/* 4 Centered Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F110F] tracking-tight font-figtree leading-none mb-2">
              15+
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#0F110F]/80 tracking-tight font-figtree">
              Years Combained Experience
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F110F] tracking-tight font-figtree leading-none mb-2">
              1500+
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#0F110F]/80 tracking-tight font-figtree">
              Project Completed
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F110F] tracking-tight font-figtree leading-none mb-2">
              98%+
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#0F110F]/80 tracking-tight font-figtree">
              Customer Satisfaction
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F110F] tracking-tight font-figtree leading-none mb-2">
              24/7
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#0F110F]/80 tracking-tight font-figtree">
              Always Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

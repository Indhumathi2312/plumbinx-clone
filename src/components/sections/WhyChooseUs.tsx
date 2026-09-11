"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#0F110F] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start">
            <div className="w-full">
              <span className="text-sm font-medium text-[#6B7280] mb-3 block font-figtree tracking-tight">
                /Why Choose us
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F110F] tracking-tight leading-[1.15] font-figtree mb-4">
                Why choose our Services
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mb-8 font-figtree">
                We combine expertise, reliability, and care to deliver the<br className="hidden sm:inline" />
                best experience every time.
              </p>
            </div>

            {/* Top Two Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full mb-5 sm:mb-6">
              
              {/* Card 1: Insured Professionals */}
              <div className="bg-white border border-gray-200/80 rounded-[22px] p-6 sm:p-7 flex flex-col items-start shadow-sm transition-all duration-200 hover:border-gray-300">
                <div className="mb-4 text-[#0F110F]">
                  <Users className="w-7 h-7 stroke-[1.7]" />
                </div>
                <h3 className="font-bold text-lg text-[#0F110F] mb-2 font-figtree tracking-tight">
                  Insured Professionals
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed font-figtree">
                  Our plumbers are trained<br />
                  experts who follow industry
                </p>
              </div>

              {/* Card 2: Transparent Pricing */}
              <div className="bg-white border border-gray-200/80 rounded-[22px] p-6 sm:p-7 flex flex-col items-start shadow-sm transition-all duration-200 hover:border-gray-300">
                <div className="mb-4 text-[#0F110F]">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 10c0-2.5 1.5-4 6-4s6 1.5 6 4c0 6-1.5 9.5-6 9.5S6 16 6 10z" />
                    <path d="M9 6c.5-1.2 1.5-1.8 3-1.8s2.5.6 3 1.8" />
                    <path d="M12 9.5v5" />
                    <path d="M10 10.8c.5-.5 1.2-.6 2-.6s1.8.3 1.8 1.1c0 1.5-3.8 1.2-3.8 2.7 0 .9 1 1.2 2 1.2s1.5-.2 2-.7" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-[#0F110F] mb-2 font-figtree tracking-tight">
                  Transparent Pricing
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed font-figtree">
                  We believe in honesty. Every<br />
                  service comes with upfront
                </p>
              </div>

            </div>

            {/* Bottom Dark CTA Card: Work Backed by Customer Satisfaction */}
            <div className="w-full bg-[#0F110F] text-white rounded-[22px] p-6 sm:p-8 flex flex-col items-start shadow-md">
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2 font-figtree tracking-tight">
                Work Backed by Customer Satisfaction
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-figtree max-w-lg mb-6">
                We ensure everything works perfectly and you're completely satisfied before we leave.
              </p>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 bg-white text-[#0F110F] pl-5 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all group"
              >
                <span className="font-figtree">About Us</span>
                <div className="w-7 h-7 rounded-full bg-[#0F110F] flex items-center justify-center text-[#02CD31] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </div>
              </Link>
            </div>

          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6 w-full h-full min-h-[460px] lg:min-h-[520px]">
            <div className="relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-[22px] overflow-hidden shadow-sm">
              <Image
                src="/images/jg0cGZE2MuRRQz7ChX9n2yeO4nY.png"
                alt="Professional construction worker"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover pointer-events-none select-none"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


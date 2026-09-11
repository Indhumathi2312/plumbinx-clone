"use client";

import React from "react";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-[#0F110F] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-sm font-medium text-[#9CA3AF] mb-3 block font-figtree tracking-tight">
              /How it Works
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] font-figtree mb-4">
              How Our Plumbing<br />
              Service Works
            </h2>

            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-md mb-8 font-figtree">
              A simple process designed to fix your plumbing<br className="hidden sm:inline" />
              issues quickly and hassle-free.
            </p>

            <Link
              href="#services"
              className="inline-flex items-center gap-3 bg-white text-[#0F110F] pl-5 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all group"
            >
              <span className="font-figtree">Our Services</span>
              <div className="w-7 h-7 rounded-full bg-[#0F110F] flex items-center justify-center text-[#02CD31] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </div>
            </Link>
          </div>

          {/* Right Column Process Cards with Timeline */}
          <div className="lg:col-span-7 w-full">
            <div className="relative pl-6 sm:pl-8 flex flex-col gap-5 sm:gap-6">
              
              {/* Continuous Green Vertical Timeline Line */}
              <div className="absolute left-[5px] sm:left-[7px] top-6 bottom-6 w-[2px] bg-[#02CD31]" />

              {/* Step 1 Card */}
              <div className="relative">
                {/* Green Indicator Dot 1 */}
                <div className="absolute -left-[25px] sm:-left-[33px] top-6 w-3.5 h-3.5 bg-[#02CD31] rounded-full ring-4 ring-[#0F110F] z-10" />
                
                <div className="bg-[#161816] border border-white/5 rounded-[22px] p-6 sm:p-7 shadow-sm transition-all duration-200 hover:border-white/10">
                  <div className="mb-4 text-[#02CD31]">
                    <Users className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2 font-figtree tracking-tight">
                    Schedule Your Service
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-figtree">
                    Call us or book online at your convenience. Our team is<br className="hidden sm:inline" />
                    available 24/7 for emergencies and same-day<br className="hidden sm:inline" />
                    appointments.
                  </p>
                </div>
              </div>

              {/* Step 2 Card */}
              <div className="relative">
                {/* Green Indicator Dot 2 */}
                <div className="absolute -left-[25px] sm:-left-[33px] top-6 w-3.5 h-3.5 bg-[#02CD31] rounded-full ring-4 ring-[#0F110F] z-10" />
                
                <div className="bg-[#161816] border border-white/5 rounded-[22px] p-6 sm:p-7 shadow-sm transition-all duration-200 hover:border-white/10">
                  <div className="mb-4 text-[#02CD31]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 10c0-2.5 1.5-4 6-4s6 1.5 6 4c0 6-1.5 9.5-6 9.5S6 16 6 10z" />
                      <path d="M9 6c.5-1.2 1.5-1.8 3-1.8s2.5.6 3 1.8" />
                      <path d="M12 9.5v5" />
                      <path d="M10 10.8c.5-.5 1.2-.6 2-.6s1.8.3 1.8 1.1c0 1.5-3.8 1.2-3.8 2.7 0 .9 1 1.2 2 1.2s1.5-.2 2-.7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2 font-figtree tracking-tight">
                    Get a Clear Estimate
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-figtree">
                    Our plumber inspects the issue, explains the solution, and<br className="hidden sm:inline" />
                    provides an upfront quote with no hidden charges.
                  </p>
                </div>
              </div>

              {/* Step 3 Card */}
              <div className="relative">
                {/* Green Indicator Dot 3 */}
                <div className="absolute -left-[25px] sm:-left-[33px] top-6 w-3.5 h-3.5 bg-[#02CD31] rounded-full ring-4 ring-[#0F110F] z-10" />
                
                <div className="bg-[#161816] border border-white/5 rounded-[22px] p-6 sm:p-7 shadow-sm transition-all duration-200 hover:border-white/10">
                  <div className="mb-4 text-[#02CD31]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2 font-figtree tracking-tight">
                    Professional Repair & Peace of Mind
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-figtree">
                    We complete the job efficiently and ensure everything<br className="hidden sm:inline" />
                    works perfectly — backed by our satisfaction guarantee.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

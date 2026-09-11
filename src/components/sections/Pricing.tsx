"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  isPopular?: boolean;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Package",
    monthlyPrice: "300",
    yearlyPrice: "3,600",
    features: [
      "Standard leak repair",
      "Faucet & fixture repair",
      "Cleaning & maintenance",
      "Priority scheduling",
      "Leak detection & repair",
    ],
  },
  {
    id: "standard",
    name: "Standard Package",
    monthlyPrice: "500",
    yearlyPrice: "6,000",
    isPopular: true,
    features: [
      "Advanced leak detection & repair",
      "Drain cleaning & maintenance",
      "Water heater inspection",
      "Standard leak repair",
      "24/7 priority support",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    monthlyPrice: "800",
    yearlyPrice: "9,600",
    features: [
      "Drain maintenance",
      "Pipe installation & replacement",
      "Water heater inspection",
      "24/7 priority support",
      "Leak detection & repair",
    ],
  },
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="w-full bg-white text-[#0F110F] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-sm font-medium text-[#6B7280] tracking-tight block mb-3 font-figtree">
            /Pricing Plan
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F110F] tracking-tight leading-[1.15] font-figtree mb-4">
            Our Flexible Pricing plan
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-figtree">
            From startups to scaling teams, we offer transparent<br className="hidden sm:inline" />
            pricing that fits your goals — and your budget.
          </p>
        </motion.div>

        {/* Monthly / Yearly Billing Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="bg-white border border-gray-200/90 rounded-full p-1.5 inline-flex items-center shadow-xs">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold font-figtree transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-[#0F110F] text-white shadow-sm"
                  : "text-[#0F110F] hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold font-figtree transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-[#0F110F] text-white shadow-sm"
                  : "text-[#0F110F] hover:text-black"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isDark = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? "bg-[#0F110F] text-white shadow-xl relative"
                    : "bg-[#F0FAF2] border border-[#E0F3E4] text-[#0F110F] shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <h3
                      className={`font-bold text-xl tracking-tight font-figtree ${
                        isDark ? "text-white" : "text-[#0F110F]"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    {isDark && (
                      <span className="bg-white text-[#0F110F] text-xs font-semibold px-3.5 py-1.5 rounded-full font-figtree shadow-sm">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline mb-6">
                    <span
                      className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-figtree ${
                        isDark ? "text-white" : "text-[#0F110F]"
                      }`}
                    >
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span
                      className={`text-xs font-medium ml-2 font-figtree ${
                        isDark ? "text-white/70" : "text-[#4B5563]"
                      }`}
                    >
                      USD/Per project
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="#contact"
                    className={`w-full text-center py-3 rounded-full font-semibold text-sm font-figtree block transition-all shadow-xs mb-8 ${
                      isDark
                        ? "bg-white text-[#0F110F] hover:bg-gray-100"
                        : "bg-[#D0F2D6] text-[#0F110F] hover:bg-[#C2EBC8]"
                    }`}
                  >
                    Get Started Now
                  </Link>

                  {/* Features List */}
                  <div>
                    <h4
                      className={`text-sm font-medium mb-4 font-figtree ${
                        isDark ? "text-white/60" : "text-[#6B7280]"
                      }`}
                    >
                      Available features:
                    </h4>
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <svg
                            className={`w-5 h-5 flex-shrink-0 ${
                              isDark ? "text-white" : "text-[#0F110F]"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          <span
                            className={`text-sm font-medium font-figtree ${
                              isDark ? "text-white/90" : "text-[#0F110F]"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;

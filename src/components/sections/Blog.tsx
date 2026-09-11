"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "essential-home-maintenance-tips",
    title: "Essential Home Maintenance Tips for Every Smart Homeowner",
    image: "/images/blog-1.png",
    date: "Nov 9, 2025",
    description: "Keep your home safe and lasting with simple maintenance tips.",
  },
  {
    id: "water-heater-repair-signs",
    title: "Signs Your Water Heater Truly Needs Repair or Replacement",
    image: "/images/blog-2.png",
    date: "Nov 9, 2025",
    description: "Spot water heater problems early with signs to avoid costly repairs.",
  },
  {
    id: "understanding-water-heater-types",
    title: "Understanding the Different Common Types of Water Heaters",
    image: "/images/blog-3.png",
    date: "Nov 9, 2025",
    description: "Choose the right water heater for your home’s comfort, and budget.",
  },
];

export const Blog: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#0F110F] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-sm font-medium text-[#6B7280] tracking-tight block mb-3 font-figtree">
            /Blog Post
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F110F] tracking-tight leading-[1.15] font-figtree mb-4">
            Plumbing Tips & Resources
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-figtree">
            Stay informed with expert advice, maintenance tips, and the latest trends in plumbing and home care.
          </p>
        </motion.div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#F0FDF4] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group cursor-pointer border border-[#DCFCE7]/60"
            >
              <div>
                {/* 1. Article Title (Top of card above image) */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0F110F] font-figtree mb-5 leading-snug group-hover:text-[#02CD31] transition-colors">
                  {post.title}
                </h3>

                {/* 2. Image Container */}
                <div className="relative w-full h-[210px] sm:h-[220px] rounded-[20px] overflow-hidden mb-5 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div>
                {/* 3. Date */}
                <span className="block text-xs font-semibold text-[#6B7280] font-figtree mb-2">
                  {post.date}
                </span>

                {/* 4. Description */}
                <p className="text-sm text-[#4B5563] leading-relaxed font-figtree">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;

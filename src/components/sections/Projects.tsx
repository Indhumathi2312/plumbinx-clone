"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "restaurant-drain-cleaning",
    title: "Restaurant Drain Cleaning – Local Café",
    category: "Commercial",
    description:
      "Responded within 30 minutes to fix a burst pipe in a high-rise apartment.",
    image: "/images/NcJA3hZQ5P6x2h4cplYNG7PDI.jpg",
  },
  {
    id: "modern-kitchen-renovation",
    title: "Modern Kitchen Renovation – Residential",
    category: "Residential",
    description:
      "Responded within 30 minutes to fix a burst pipe in a high-rise apartment.",
    image: "/images/ch3UkFDAPwf1yVdVdG0qSP54j8.png",
  },
  {
    id: "water-heater-installation",
    title: "Water Heater Installation – Family",
    category: "Installation",
    description:
      "Responded within 30 minutes to fix a burst pipe in a high-rise apartment.",
    image: "/images/XMi1Asu5eMFY63acJf7g4rCI8.png",
  },
  {
    id: "emergency-burst-pipe",
    title: "Emergency Burst Pipe Repair – Apartment",
    category: "Emergency",
    description:
      "Responded within 30 minutes to fix a burst pipe in a high-rise apartment.",
    image: "/images/5SH9EKu3BKVCSusHfyLb9gPSU.png",
  },
];

export const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[260vh] w-full bg-[#0F110F] text-white rounded-t-[32px] sm:rounded-t-[48px]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-8 sm:py-12">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Area */}
          <div className="mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-sm font-medium text-[#9CA3AF] tracking-tight block mb-3 font-figtree">
                /Our recent Projects
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] font-figtree mb-4">
                Recent Plumbing Projects
              </h2>

              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-figtree">
                From emergency repairs to full installations, here's a look at the quality work we deliver every day.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll-driven Horizontal Carousel Track */}
        <div className="w-full overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 px-4 sm:px-8 md:px-16 w-max"
          >
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="relative w-[500px] sm:w-[620px] lg:w-[720px] h-[320px] sm:h-[380px] lg:h-[420px] flex-shrink-0 rounded-[32px] overflow-hidden shadow-2xl group border border-white/10 flex flex-col justify-end p-6 sm:p-10 lg:p-12"
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 500px, 720px"
                  className="object-cover pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />

                {/* Dark Vignette Overlay matching exact reference images */}
                <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none z-[1]" />

                {/* Bottom Content Container Inside Image */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
                  {/* Left Side: Large Bold Title */}
                  <div className="max-w-[320px] sm:max-w-[380px]">
                    <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-white tracking-tight leading-[1.18] font-figtree">
                      {project.title}
                    </h3>
                  </div>

                  {/* Right Side: Description + View Details Button */}
                  <div className="flex flex-col items-start gap-4 max-w-[280px] sm:max-w-[300px]">
                    <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed font-figtree">
                      {project.description}
                    </p>

                    <Link
                      href={`#${project.id}`}
                      className="inline-flex items-center gap-3.5 bg-white text-[#0F110F] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 group/btn shadow-md w-fit"
                    >
                      <span className="font-figtree text-sm font-semibold">View details</span>
                      <div className="w-8 h-8 rounded-full bg-[#0F110F] flex items-center justify-center text-[#02CD31] transition-transform group-hover/btn:translate-x-0.5">
                        <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;




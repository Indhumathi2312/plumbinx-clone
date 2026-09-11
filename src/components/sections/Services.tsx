"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    description:
      "Fast, 24/7 response to leaks, bursts, and urgent plumbing issues — because problems happen.",
    image: "/images/5SH9EKu3BKVCSusHfyLb9gPSU.png",
  },
  {
    id: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    description:
      "From faucet repairs to full installations, we handle it all with precision.",
    image: "/images/4M8bLKTYRYdY8rVPpM64KxOhVIE.png",
  },
  {
    id: "water-heater-services",
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance services for efficient hot water in your home or business.",
    image: "/images/m6aNlWOSMjhEAzqkzrYpCo84cwY.png",
  },
];

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
  isActive: boolean;
  isLast: boolean;
  onActive: (index: number) => void;
}

const ServiceRow: React.FC<ServiceRowProps> = ({
  service,
  index,
  isActive,
  isLast,
  onActive,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { margin: "-25% 0px -25% 0px" });

  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [isInView, index, onActive]);

  return (
    <div
      ref={rowRef}
      className={`py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center cursor-pointer ${
        !isLast ? "border-b border-gray-200/80" : ""
      }`}
      onClick={() => onActive(index)}
    >
      {/* Left Column: Title, Description, Button */}
      <div className="lg:col-span-6 flex flex-col items-start text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F110F] tracking-tight font-figtree mb-4">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-lg mb-8 font-figtree">
          {service.description}
        </p>

        <Link
          href={`#${service.id}`}
          className="inline-flex items-center gap-3 bg-[#0F110F] text-white pl-5 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-black transition-all group shadow-sm"
        >
          <span className="font-figtree">Explore Service</span>
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0F110F] transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </div>
        </Link>
      </div>

      {/* Right Column: Expandable Height Image Container */}
      <div className="lg:col-span-6 w-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            height: isActive ? 380 : 100,
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full rounded-[24px] overflow-hidden shadow-sm bg-gray-100"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover pointer-events-none select-none transition-transform duration-700 hover:scale-[1.02]"
            priority={index === 0}
          />
        </motion.div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white text-[#0F110F] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-sm font-medium text-[#6B7280] tracking-tight block mb-3 font-figtree">
            /Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F110F] tracking-tight leading-[1.15] font-figtree mb-4">
            Our Plumbing Services
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-figtree">
            From quick repairs to full installations, we provide reliable solutions for every plumbing need.
          </p>
        </motion.div>

        {/* Services Accordion List */}
        <div className="flex flex-col">
          {servicesData.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              isActive={activeIndex === index}
              isLast={index === servicesData.length - 1}
              onActive={setActiveIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

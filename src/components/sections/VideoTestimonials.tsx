"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCardData {
  id: number;
  videoUrl: string;
  thumbnail: string;
  alt: string;
}

interface TestimonialCardData {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const videos: VideoCardData[] = [
  {
    id: 1,
    videoUrl: "/media/nFjM4Oplz3HRT9grLfu1HLvnCfw.mp4",
    thumbnail: "/images/clean-thumb-2.png",
    alt: "Customer testimonial video 1",
  },
  {
    id: 2,
    videoUrl: "/media/M6iyFwUn2XdfmM2bNfDd6ew1EvA.mp4",
    thumbnail: "/images/clean-thumb-1.png",
    alt: "Customer testimonial video 2",
  },
  {
    id: 3,
    videoUrl: "/media/RxY59Dx1BlSk8tr8Lpnw15lCA.mp4",
    thumbnail: "/images/clean-thumb-3.png",
    alt: "Customer testimonial video 3",
  },
];

const testimonials: TestimonialCardData[] = [
  {
    id: 1,
    name: "David Jones",
    role: "Homeowner",
    avatar: "/images/david-avatar.png",
    quote:
      '"We had a major leak at midnight, and their team arrived within 30 minutes. They fixed everything quickly and explained the problem clearly. Truly lifesavers!"',
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Restaurant Owner",
    avatar: "/images/michael-avatar.png",
    quote:
      '"Our kitchen drains kept clogging and interrupting service. Their experts solved the and gave us tips to prevent future problems. Professional and dependable!"',
  },
  {
    id: 3,
    name: "John Watson",
    role: "Office Manager",
    avatar: "/images/john-avatar.png",
    quote:
      '"We hired them for a full water heater installation in our office building. The work was done on time, within budget, and the system works perfectly."',
  },
];

export const VideoTestimonials: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = videos.find((v) => v.id === activeVideoId);

  const handleCardClick = (id: number) => {
    if (activeVideoId === id) {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    } else {
      setActiveVideoId(id);
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-sm font-medium text-[#6B7280] tracking-tight block mb-3 font-figtree">
            /Testimonial
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F110F] tracking-tight leading-[1.15] font-figtree mb-4">
            What Our Customers Say
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-figtree">
            We’re proud to have earned the trust of homeowners and businesses through quality service and reliable results
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Column 1 (Left) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Top Review Card (David Jones) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F0FDF4] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#DCFCE7]/60 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-emerald-100">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0F110F] font-figtree tracking-tight">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-xs text-[#6B7280] font-figtree">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-figtree font-medium">
                {testimonials[0].quote}
              </p>
            </motion.div>

            {/* Bottom Video Card 1 (Seated Man - Video 1) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => handleCardClick(1)}
              className={`relative w-full h-[360px] sm:h-[400px] lg:h-[430px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md cursor-pointer group transition-all duration-300 ${
                activeVideoId === 1 ? "ring-4 ring-[#02CD31]" : "hover:shadow-xl"
              }`}
            >
              {activeVideoId === 1 ? (
                <video
                  ref={videoRef}
                  src={videos[0].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <>
                  <Image
                    src={videos[0].thumbnail}
                    alt={videos[0].alt}
                    fill
                    unoptimized
                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                  {/* Centered Play Button Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-[#0F110F] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0F110F] translate-x-0.5" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {/* Column 2 (Center) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Top Video Card 2 (Pink Jacket Man - Video 2) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              onClick={() => handleCardClick(2)}
              className={`relative w-full h-[380px] sm:h-[420px] lg:h-[450px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md cursor-pointer group transition-all duration-300 ${
                activeVideoId === 2 ? "ring-4 ring-[#02CD31]" : "hover:shadow-xl"
              }`}
            >
              {activeVideoId === 2 ? (
                <video
                  ref={videoRef}
                  src={videos[1].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <>
                  <Image
                    src={videos[1].thumbnail}
                    alt={videos[1].alt}
                    fill
                    unoptimized
                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                  {/* Centered Play Button Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-[#0F110F] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0F110F] translate-x-0.5" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Bottom Review Card (John Watson) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#F0FDF4] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#DCFCE7]/60 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-emerald-100">
                  <Image
                    src={testimonials[2].avatar}
                    alt={testimonials[2].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0F110F] font-figtree tracking-tight">
                    {testimonials[2].name}
                  </h4>
                  <p className="text-xs text-[#6B7280] font-figtree">
                    {testimonials[2].role}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-figtree font-medium">
                {testimonials[2].quote}
              </p>
            </motion.div>
          </div>

          {/* Column 3 (Right) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Top Review Card (Michael Carter) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-[#F0FDF4] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#DCFCE7]/60 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-emerald-100">
                  <Image
                    src={testimonials[1].avatar}
                    alt={testimonials[1].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0F110F] font-figtree tracking-tight">
                    {testimonials[1].name}
                  </h4>
                  <p className="text-xs text-[#6B7280] font-figtree">
                    {testimonials[1].role}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-figtree font-medium">
                {testimonials[1].quote}
              </p>
            </motion.div>

            {/* Bottom Video Card 3 (Brown Coat Man - Video 3) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => handleCardClick(3)}
              className={`relative w-full h-[360px] sm:h-[400px] lg:h-[430px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md cursor-pointer group transition-all duration-300 ${
                activeVideoId === 3 ? "ring-4 ring-[#02CD31]" : "hover:shadow-xl"
              }`}
            >
              {activeVideoId === 3 ? (
                <video
                  ref={videoRef}
                  src={videos[2].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <>
                  <Image
                    src={videos[2].thumbnail}
                    alt={videos[2].alt}
                    fill
                    unoptimized
                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                  {/* Centered Play Button Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-[#0F110F] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0F110F] translate-x-0.5" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoTestimonials;

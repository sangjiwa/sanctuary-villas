"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data/testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#643c15] py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-14">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-xl text-[#fffdf3] tracking-[4px] mb-4"
          >
            Guest Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#eae7d9] text-base"
          >
            Hear from our guests about their unforgettable stays at Sanctuary
            Villas
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Swiper Container */}
          <div className="relative px-12 lg:px-16 min-h-[420px] md:min-h-[440px]">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              initialSlide={0}
              speed={600}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1.8,
                  spaceBetween: 40,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                // Force update after a brief delay to ensure loop works correctly
                setTimeout(() => {
                  swiper.update();
                  swiper.slideToLoop(0, 0);
                }, 50);
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="!overflow-visible"
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="!h-auto flex items-center justify-center"
                >
                  {({ isActive }) => (
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={isActive}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-light text-white rounded-full p-3 shadow-lg hover:bg-primary-light/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-light text-white rounded-full p-3 shadow-lg hover:bg-primary-light/90 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Custom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`
                  rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? "bg-primary-light w-8 h-2"
                      : "bg-[#cab797] w-2 h-2"
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

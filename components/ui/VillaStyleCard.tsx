"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { VillaStyle } from "@/types/villa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface VillaStyleCardProps {
  villa: VillaStyle;
  index: number;
}

export default function VillaStyleCard({ villa, index }: VillaStyleCardProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col gap-6"
    >
      {/* Image Slider */}
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          speed={600}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="h-full"
        >
          {villa.images.map((image, imgIndex) => (
            <SwiperSlide key={imgIndex}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`${villa.name} villa style at Sanctuary Villas Ubud - Image ${imgIndex + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 608px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-primary rounded-full p-2.5 shadow-lg hover:bg-white transition-colors"
          aria-label="Previous image"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-primary rounded-full p-2.5 shadow-lg hover:bg-white transition-colors"
          aria-label="Next image"
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

        {/* Custom Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {villa.images.map((_, imgIndex) => (
            <button
              key={imgIndex}
              onClick={() => swiperRef.current?.slideToLoop(imgIndex)}
              className={`
                rounded-full transition-all duration-300
                ${
                  imgIndex === activeIndex
                    ? "bg-white w-8 h-2"
                    : "bg-white/50 w-2 h-2"
                }
              `}
              aria-label={`Go to image ${imgIndex + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Villa Details */}
      <div className="flex flex-col gap-4 px-2">
        {/* Title */}
        <h3 className="font-serif text-[28px] leading-[42px] text-primary-dark">
          {villa.name}
        </h3>

        {/* Description */}
        <p className="text-primary text-base leading-[26px]">
          {villa.description}
        </p>

        {/* Room Types List */}
        <div className="flex flex-col gap-2">
          {villa.roomTypes.map((room, roomIndex) => (
            <div
              key={roomIndex}
              className="flex items-start gap-2 text-primary"
            >
              <span className="font-serif text-[30px] leading-6 min-w-[28px]">
                {room.count}
              </span>
              <p className="text-base leading-6 pt-0.5">{room.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

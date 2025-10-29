"use client";

import { motion } from "framer-motion";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function VideoSection() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container mx-auto px-8 lg:px-14">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl lg:text-5xl text-primary-dark tracking-[4px] mb-4"
          >
            Experience Sanctuary
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary text-base"
          >
            Take a virtual tour of our luxurious villas
          </motion.p>
        </div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl mx-auto shadow-2xl h-[576px]"
        >
          <VideoPlayer
            desktopSrc="/videos/nature-desktop.mp4"
            mobileSrc="/videos/nature-mobile.mp4"
            poster="/images/CE4A6306.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}

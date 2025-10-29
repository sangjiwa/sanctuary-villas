"use client";

import { motion } from "framer-motion";
import VillaStyleCard from "@/components/ui/VillaStyleCard";
import { VILLA_STYLES } from "@/lib/data/villas";

export default function VillaStylesSection() {
  return (
    <section id="villa-styles" className="bg-surface py-20 lg:py-24">
      <div className="container mx-auto px-8 md:px-8 lg:px-14">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-xl text-primary-dark tracking-[4px] mb-4"
          >
            Our Villa Styles
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary text-base max-w-2xl mx-auto"
          >
            Two distinctive architectural styles, each offering a unique
            sanctuary experience
          </motion.p>
        </div>

        {/* Villa Styles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
          {VILLA_STYLES.map((villa, index) => (
            <VillaStyleCard key={villa.id} villa={villa} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  const address = "Jalan Bisma, Ubud, Bali 80571, Indonesia";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="container mx-auto px-8 md:px-10 lg:px-14">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-base text-primary-dark tracking-[3.2px] text-center mb-12"
        >
          Find Us
        </motion.h2>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanctuary Villas Location"
          />
        </motion.div>
      </div>
    </section>
  );
}

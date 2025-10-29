"use client";

import { motion } from "framer-motion";

export default function ContactCTASection() {
  return (
    <section className="bg-[#cab797] py-20 lg:py-24">
      <div className="container mx-auto px-8 md:px-8 lg:px-14 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-xl text-primary-dark tracking-[4px] mb-4"
        >
          Have Questions?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary text-base mb-8 max-w-3xl mx-auto"
        >
          Our team is here to help you plan your perfect getaway. Contact us
          for personalized assistance.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/6287817274325"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-primary-light text-white text-sm font-medium leading-5 px-8 py-2 rounded-lg hover:bg-primary-light/90 transition-colors"
        >
          Message us on WhatsApp
        </motion.a>
      </div>
    </section>
  );
}

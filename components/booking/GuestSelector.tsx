"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GuestSelectorProps {
  onGuestsChange?: (adults: number, children: number) => void;
}

export default function GuestSelector({ onGuestsChange }: GuestSelectorProps) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdultsChange = (delta: number) => {
    const newAdults = Math.max(1, adults + delta);
    setAdults(newAdults);
    onGuestsChange?.(newAdults, children);
  };

  const handleChildrenChange = (delta: number) => {
    const newChildren = Math.max(0, children + delta);
    setChildren(newChildren);
    onGuestsChange?.(adults, newChildren);
  };

  return (
    <div className="space-y-6">
      {/* Adults */}
      <div className="flex items-center justify-between">
        <span className="text-primary-dark text-base">Adults</span>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAdultsChange(-1)}
            disabled={adults <= 1}
            className="w-8 h-8 flex items-center justify-center border border-primary rounded-md hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M3 8H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
          <span className="text-primary-dark text-base font-medium w-8 text-center">
            {adults}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAdultsChange(1)}
            className="w-8 h-8 flex items-center justify-center border border-primary rounded-md hover:bg-primary/10 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M8 3V13M3 8H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Children */}
      <div className="flex items-center justify-between">
        <span className="text-primary-dark text-base">Children</span>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChildrenChange(-1)}
            disabled={children <= 0}
            className="w-8 h-8 flex items-center justify-center border border-primary rounded-md hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M3 8H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
          <span className="text-primary-dark text-base font-medium w-8 text-center">
            {children}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChildrenChange(1)}
            className="w-8 h-8 flex items-center justify-center border border-primary rounded-md hover:bg-primary/10 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M8 3V13M3 8H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

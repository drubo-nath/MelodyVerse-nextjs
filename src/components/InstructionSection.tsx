"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Instructors } from "./Instructors";

export function InstructorSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 mx-auto"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mx-auto">
          Meet Our Instructors
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mx-auto">
          Build your career with music professionals from industry
        </div>
        <Instructors />
      </motion.div>
    </AuroraBackground>
  );
}

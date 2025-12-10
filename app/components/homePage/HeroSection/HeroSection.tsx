"use client";

import { heroData } from "@/app/data/HomePage/HeroSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Smooth scroll function
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="
    min-h-[750px] 
    sm:min-h-[750px] 
    lg:min-h-screen 
    bg-[#111111] 
    rounded-b-3xl 
    flex 
    items-center 
    justify-center 
    relative 
    px-4 
    sm:px-6 
    mb-10
  "
    >
      {/* Background radial gradient */}
      <div className="absolute w-full h-full top-0 left-0 z-10">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(110.76% 380.76% at -10.76% 115.89%, rgba(11, 92, 255, 0.13) 0%, rgba(11, 92, 255, 0) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-[1360px] w-full mx-auto relative z-[11]">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Heading */}
          <motion.h1
            className="
          font-semibold 
          text-[40px] 
          sm:text-[64px]
          text-center 
          uppercase 
          leading-normal 
          mb-8 
          max-w-[1220px] 
          w-full 
          mx-auto
        "
            variants={fadeInUp}
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              lineHeight: "1.1",
            }}
          >
            {heroData.titleLines.map((line, index) => (
              <span
                key={index}
                className={`block ${index === 2
                  ? "bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent"
                  : "text-white"
                  } mb-1`}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="
          text-white
          font-medium 
          leading-6 
          text-center 
          max-w-[870px] 
          mx-auto 
          mb-10
          text-[14px]
          sm:text-[18px]
        "
            variants={fadeInUp}
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            {heroData.ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`
              inline-flex 
              items-center 
              justify-center 
              px-8 
              py-4 
              rounded-full 
              font-medium 
              transition-all 
              duration-300 
              hover:shadow-lg 
              hover:shadow-blue-600/25 
              hover:scale-105 
              group 
              relative 
              overflow-hidden 
              min-w-[200px]
              w-full 
              sm:w-auto
              ${cta.style}
            `}
                style={{ fontSize: "1rem" }}
              >
                <span className="relative z-10">{cta.label}</span>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            onClick={scrollToNextSection}
            className="absolute bottom-0 right-5 hidden lg:block cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-10 left-5 w-40 h-40 sm:w-72 sm:h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-5 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl" />
    </section>

  );
}

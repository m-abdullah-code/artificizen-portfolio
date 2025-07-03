// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function HeroSection() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <section
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #101929 0%, #121111 100%)",
//       }}
//     >
//       {/* Background Pattern/Noise Effect */}
//       <div className="absolute inset-0 opacity-30">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
//             backgroundSize: "20px 20px",
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="container relative z-10">
//         <motion.div
//           className="text-center max-w-5xl mx-auto px-4"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           {/* Main Heading */}
//           <motion.h1
//             className="font-bold leading-tight mb-8"
//             variants={fadeInUp}
//             style={{
//               fontSize: "clamp(2.5rem, 8vw, 3rem)",
//               lineHeight: "1.1",
//             }}
//           >
//             <span className="text-white block mb-2">
//               WE HELP STARTUPS & BUSINESSES
//             </span>
//             <span className="text-white block mb-2">
//               TO LAUNCH POWERFUL AI PRODUCTS
//             </span>
//             <span className="block bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
//               IN DAYS, NOT MONTHS
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             className="text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
//             variants={fadeInUp}
//             style={{
//               fontSize: "clamp(1rem, 2vw, 1rem)", // Responsive: 16px to 18px on larger screens
//               lineHeight: "1.6",
//             }}
//           >
//             From MVPs to full-scale SaaS platforms, we design, build, and deploy
//             custom AI solutions that are fast, scalable, and built to grow with
//             your business. No bloated teams, no vague timelines. Just powerful,
//             reliable AI products that work from day one.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             variants={fadeInUp}
//           >
//             {/* Primary CTA */}
//             <Link
//               href="/consultation"
//               className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 group relative overflow-hidden min-w-[200px]"
//               style={{ fontSize: "1rem" }}
//             >
//               <span className="relative z-10">Book a free consultation</span>
//               {/* Shine effect */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
//             </Link>

//             {/* Secondary CTA */}
//             <Link
//               href="/portfolio"
//               className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-400 hover:text-white hover:bg-blue-600 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 group relative overflow-hidden min-w-[200px]"
//               style={{ fontSize: "1rem" }}
//             >
//               <span className="relative z-10">See Our Work</span>
//               {/* Shine effect */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
//             </Link>
//           </motion.div>

//           {/* Optional: Scroll Indicator */}
//           <motion.div
//             className="absolute bottom-0 left-[90%] transform -translate-x-1/2 hidden lg:block"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.6 }}
//           >
//             <div className="flex flex-col items-center text-gray-400">
//               <span className="text-sm mb-2">Scroll to explore</span>
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
//               >
//                 <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Background Decoration */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />
//     </section>
//   );
// }

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

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #101929 0%, #121111 100%)",
      }}
    >
      {/* Background Pattern/Noise Effect */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Heading */}
          <motion.h1
            className="font-bold leading-tight mb-8"
            variants={fadeInUp}
            style={{
              fontSize: "clamp(2.5rem, 8vw, 3rem)",
              lineHeight: "1.1",
            }}
          >
            {heroData.titleLines.map((line, index) => (
              <span
                key={index}
                className={`block ${
                  index === 2
                    ? "bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent"
                    : "text-white"
                } mb-2`}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
            style={{
              fontSize: "clamp(1rem, 2vw, 1rem)",
              lineHeight: "1.6",
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
                className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 group relative overflow-hidden min-w-[200px] ${cta.style}`}
                style={{ fontSize: "1rem" }}
              >
                <span className="relative z-10">{cta.label}</span>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
            ))}
          </motion.div>

          {/* Optional: Scroll Indicator */}
          <motion.div
            className="absolute bottom-0 left-[90%] transform -translate-x-1/2 hidden lg:block"
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />
    </section>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaPlay, FaPause } from "react-icons/fa";
// import { carouselData } from "@/app/data/HomePage/Testimonials";

// const InteractiveCarouselCard: React.FC = () => {
//   const [playing, setPlaying] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [counterValue, setCounterValue] = useState(0);
//   const targetValue = Number(carouselData.testimonial.stat.value);
//   console.log(targetValue, "target Value");

//   useEffect(() => {
//     let current = 0;
//     const duration = 1000;
//     const frameRate = 1000 / 60;
//     const increment = targetValue / (duration / frameRate);

//     const interval = setInterval(() => {
//       current += increment;
//       if (current >= targetValue) {
//         setCounterValue(targetValue);
//         clearInterval(interval);
//       } else {
//         setCounterValue(Math.floor(current));
//       }
//     }, frameRate);

//     return () => clearInterval(interval);
//   }, [targetValue]);

//   useEffect(() => {
//     let interval: NodeJS.Timeout | undefined;

//     if (playing) {
//       interval = setInterval(() => {
//         setCurrentIndex(
//           (prev) => (prev + 1) % carouselData.carouselImages.length
//         );
//       }, 2500);
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [playing]);

//   return (
//     <div className="flex flex-col lg:flex-row w-full rounded-lg overflow-hidden mt-12 mb-16">
//       {/* Left section */}
//       <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px]">
//         {/* Background Image */}
//         <Image
//           src={carouselData.image}
//           alt="Main"
//           fill
//           className="object-cover rounded-xl"
//           priority
//         />

//         {/* Carousel Overlay Slider */}
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
//           <div className="relative w-3/4 h-3/4 rounded-lg">
//             <div
//               className="flex h-full transition-transform duration-700 ease-in-out gap-5"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {carouselData.carouselImages.map((img, idx) => (
//                 <div key={idx} className="min-w-full h-full relative">
//                   <Image
//                     src={img}
//                     alt={`Carousel ${idx}`}
//                     fill
//                     className="object-cover rounded-xl"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Play/Pause Button */}
//         <button
//           className="absolute bottom-36 right-36 md:bottom-32 md:right-80 lg:right-56 xl:right-70 bg-white rounded-full p-3 shadow-md hover:scale-105 transition "
//           onClick={() => setPlaying((prev) => !prev)}
//         >
//           {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
//         </button>
//       </div>

//       {/* Right section */}
//       <div className="lg:w-1/2 p-6 flex items-center justify-center ">
//         <div className=" lg:max-w-[450px]">
//           <p className="text-base">{carouselData.testimonial.label}</p>
//           <p className="text-[clamp(1.5rem,5vw,3.2rem)] leading-[clamp(2rem,6vw,3.5rem)]">
//             {carouselData.testimonial.heading}
//           </p>
//           <div className="relative inline-block">
//             {/* Gradient Stroke */}
//             <p
//               className="absolute top-0 left-0 text-[100px] font-bold text-transparent"
//               style={{
//                 WebkitTextStroke: "2px transparent",
//                 color: "transparent",
//                 backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
//                 WebkitBackgroundClip: "text",
//                 zIndex: 0,
//               }}
//             >
//               {counterValue}+
//             </p>

//             {/* Solid Fill Text */}
//             <p className="text-[100px] font-bold text-white relative z-10">
//               {counterValue}+
//             </p>
//           </div>

//           {/* <p className="text-[100px] font-bold text-white drop-shadow-[0_0_2px_black]">
//             {carouselData.testimonial.stat.value}
//           </p> */}
//           <p className="text-xl leading-0">
//             {carouselData.testimonial.stat.label}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveCarouselCard;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import { carouselData } from "@/app/data/HomePage/Testimonials";

const InteractiveCarouselCard: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counterValue, setCounterValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const targetValue = Number(carouselData.testimonial.stat.value);
  const componentRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for in-view detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Counter animation when component comes into view
  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 1000; // Animation duration in ms
    const frameRate = 1000 / 60; // 60fps
    const increment = targetValue / (duration / frameRate);

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCounterValue(targetValue);
        clearInterval(interval);
      } else {
        setCounterValue(Math.floor(current));
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [isInView, targetValue]);

  // Carousel auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (playing) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prev) => (prev + 1) % carouselData.carouselImages.length
        );
      }, 2500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [playing]);

  return (
    <div
      ref={componentRef}
      className="flex flex-col lg:flex-row w-full rounded-lg overflow-hidden mt-12 mb-16"
    >
      {/* Left section */}
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px]">
        {/* Background Image */}
        <Image
          src={carouselData.image}
          alt="Main"
          fill
          className="object-cover rounded-xl"
          priority
        />

        {/* Carousel Overlay Slider */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
          <div className="relative w-3/4 h-3/4 rounded-lg">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out gap-5"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselData.carouselImages.map((img, idx) => (
                <div key={idx} className="min-w-full h-full relative">
                  <Image
                    src={img}
                    alt={`Carousel ${idx}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          className="absolute bottom-36 right-36 md:bottom-32 md:right-80 lg:right-56 xl:right-70 bg-white rounded-full p-3 shadow-md hover:scale-105 transition"
          onClick={() => setPlaying((prev) => !prev)}
        >
          {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>

      {/* Right section */}
      <div className="lg:w-1/2 p-6 flex items-center justify-center">
        <div className="lg:max-w-[450px]">
          <p className="text-base">{carouselData.testimonial.label}</p>
          <p className="text-[clamp(1.5rem,5vw,3.2rem)] leading-[clamp(2rem,6vw,3.5rem)]">
            {carouselData.testimonial.heading}
          </p>
          <div className="relative inline-block">
            {/* Gradient Stroke */}
            <p
              className="absolute top-0 left-0 text-[100px] font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px transparent",
                color: "transparent",
                backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                WebkitBackgroundClip: "text",
                zIndex: 0,
              }}
            >
              {counterValue}+
            </p>

            {/* Solid Fill Text */}
            <p className="text-[100px] font-bold text-white relative z-10">
              {counterValue}+
            </p>
          </div>
          <p className="text-xl leading-0">
            {carouselData.testimonial.stat.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCarouselCard;

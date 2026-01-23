"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { carouselData } from "@/app/data/HomePage/Testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CenterMode from "../../slickTestimonial/page";


const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start offset for infinite
  const [playing, setPlaying] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const targetValue = Number(carouselData.testimonial.stat.value);
  const componentRef = useRef<HTMLDivElement>(null);

  // Infinite loop slides: clone edges
  const origImages = carouselData.carouselImages;
  const origNames = carouselData.testimonial.names || [];
  const firstImg = origImages[0];
  const lastImg = origImages[origImages.length - 1];
  const firstName = origNames[0];
  const lastName = origNames[origNames.length - 1];
  const slides = [lastImg, ...origImages, firstImg];
  const names = [lastName, ...origNames, firstName];
  const numOrigSlides = origImages.length;
  const step = 325; // 320px width + 5px gap

  /* Counter Animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (componentRef.current) observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= targetValue) {
        setCounterValue(targetValue);
        clearInterval(interval);
      } else setCounterValue(current);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView]);

  /* Re-enable transition after reset */
  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => setTransitionEnabled(true), 50); // Slight delay for smoothness
    }
  }, [currentIndex, transitionEnabled]);

  /* Transition end for seamless reset */
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(numOrigSlides);
    } else if (currentIndex === slides.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  /* Navigation */
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(slides.length - 1, prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  /* Auto Play */
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <section ref={componentRef} className="w-full py-10 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">

        {/* LEFT UI CARD - Carousel */}
        <div className="relative w-full lg:w-[50%] bg-black rounded-[25px] sm:rounded-[40px] overflow-hidden pt-5 pb-16">

          {/* Background image */}
          <Image
            src={carouselData.image}
            alt="Background"
            fill
            className="object-cover opacity-60"
          />

          {/* Carousel slides */}
          <div
            className="relative z-10 flex items-center h-[250px] sm:h-[350px] md:h-[420px] overflow-hidden"
            onTransitionEnd={handleTransitionEnd}
          >
            <div
              className="flex gap-4 sm:gap-5"
              style={{
                transform: `translateX(-${currentIndex * step}px)`,
                transition: transitionEnabled ? "transform 700ms ease-in-out" : "none",
              }}
            >
              {slides.map((img, index) => (
                <div
                  key={`${img.src}-${index}`}
                  className="relative w-[220px] sm:w-[320px] flex-shrink-0 h-[250px] sm:h-[420px] rounded-[18px] sm:rounded-[22px] bg-black/30 backdrop-blur-lg overflow-hidden border border-white/10"
                >
                  <Image
                    src={img}
                    alt={`Testimonial ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <p className="absolute -right-8 sm:-right-10 bottom-12 sm:bottom-20 -rotate-90 text-white text-[20px] sm:text-[38px] font-semibold whitespace-nowrap z-30">
                    {names[index]}
                  </p>
                  {/* <button
                    onClick={() => setPlaying((prev) => !prev)}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 sm:p-5 shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <FaPlay className="text-black text-lg sm:text-xl" />
                  </button> */}
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next buttons */}
          <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 flex gap-2 sm:gap-3 z-20">
            <button
              onClick={prevSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white/30 transition cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white/30 transition cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-2 sm:px-6 mt-8 lg:mt-0 text-center lg:text-left">
          <p className="text-sm sm:text-base font-medium text-[#333333]">/ testimonials /</p>
          <h2 className="text-[28px] sm:text-4xl md:text-5xl font-normal leading-snug text-[#333333] mt-2 sm:mt-4">
            Hear What Winning Team Says About Us.
          </h2>

          {/* STAT COUNTER */}
          <div className="mt-6 sm:mt-10">
            <p className="text-[48px] sm:text-[80px] md:text-[100px] font-bold leading-snug outline-text">
              {counterValue}+
            </p>
            <p className="text-lg sm:text-xl font-semibold leading-snug text-[#333333] mt-2">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default TestimonialSection;
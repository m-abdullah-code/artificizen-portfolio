import AboutUsSection from "@/app/components/homePage/AboutUsSection/AboutUsSection";
import HeroSection from "@/app/components/homePage/HeroSection/HeroSection";
import ServicesSection from "@/app/components/homePage/ServicesSection/ServicesSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
    </>
  );
};

export default HomePage;

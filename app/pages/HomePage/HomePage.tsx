import AboutUsSection from "@/app/components/homePage/AboutUsSection/AboutUsSection";
import HeroSection from "@/app/components/homePage/HeroSection/HeroSection";
import ServicesSection from "@/app/components/homePage/ServicesSection/ServicesSection";
import ProjectSection from "../../components/homePage/ProjectSection/ProjectSection"
import React from "react";
import AwardsSection from "@/app/components/homePage/AwardsSection/AwardsSection";
import BlogSection from "@/app/components/homePage/BlogSection/BlogSection";
import StorySection from "@/app/components/homePage/StorySection/StorySection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ProjectSection/>
      <AwardsSection/>
      <BlogSection/>
      <StorySection/>
    </>
  );
};

export default HomePage;

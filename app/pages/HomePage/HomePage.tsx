import React, { lazy } from "react";

import HeroSection from "@/app/components/homePage/HeroSection/HeroSection";

const ServicesSection = lazy(() => import("@/app/shared/ServicesSection"));
const AboutUsSection = lazy(() => import("@/app/components/homePage/AboutUsSection/AboutUsSection"))
const ProjectSection = lazy(() => import("@/app/components/homePage/ProjectSection/ProjectSection"))
const AwardsSection = lazy(() => import("@/app/components/homePage/AwardsSection/AwardsSection"))
const TestimonialsSection = lazy(() => import("@/app/components/homePage/TestimonialsSection/Testimonials"))
const AiFuture = lazy(() => import("@/app/components/homePage/AiFutureSection/AiFuture"))
const BlogSection = lazy(() => import("@/app/shared/BlogSection"))
const StorySection = lazy(() => import("@/app/shared/StorySection"))
const ChooseUs = lazy(() => import("@/app/components/homePage/WhyChooseUsSection/ChooseUs"))
const Footer = lazy(() => import("@/app/components/layout/Footer/Footer"))

import { servicesData } from "@/app/data/HomePage/ServicesCard";
import { blogSectionData } from "@/app/data/HomePage/BlogSection";
import { storySectionData } from "@/app/data/HomePage/UserStory";

const HomePage = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <ServicesSection data={servicesData} />
        <AboutUsSection />
        <ProjectSection />
        <AwardsSection />
        <TestimonialsSection />
        <AiFuture />
        <ChooseUs />
        <BlogSection data={blogSectionData} />
        <StorySection data={storySectionData} />
        <Footer
          headings={[
            "Have an Idea?",
            "A Challenge?",
            "Or Just Curious",
            "About What AI Can",
            "Do For Your Business?",
          ]}
          description="Let’s collaborate to bring your AI vision to life with speed and precision."
          gradientIndex={0}
          gradientWordCount={0}
        />
      </div>
    </>
  );
};

export default HomePage;

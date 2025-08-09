import AboutUsSection from "@/app/components/homePage/AboutUsSection/AboutUsSection";
import HeroSection from "@/app/components/homePage/HeroSection/HeroSection";
import ServicesSection from "@/app/shared/ServicesSection";
import ProjectSection from "../../components/homePage/ProjectSection/ProjectSection";
import React from "react";
import AwardsSection from "@/app/components/homePage/AwardsSection/AwardsSection";
import BlogSection from "@/app/shared/BlogSection";
import StorySection from "@/app/shared/StorySection";
import TestimonialsSection from "../../components/homePage/TestimonialsSection/Testimonials";
import AiFuture from "@/app/components/homePage/AiFutureSection/AiFuture";
import ChooseUs from "@/app/components/homePage/WhyChooseUsSection/ChooseUs";
import Footer from "@/app/components/layout/Footer/Footer";
import { servicesData } from "@/app/data/HomePage/ServicesCard";
import { blogSectionData } from "@/app/data/HomePage/BlogSection";
import { storySectionData } from "@/app/data/HomePage/UserStory";

const HomePage = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <div className="p-5">
          <ServicesSection data={servicesData} />
          <AboutUsSection />
          <ProjectSection />
          <AwardsSection />
          <TestimonialsSection />
        </div>
        <AiFuture />
        <div className="p-5">
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
      </div>
    </>
  );
};

export default HomePage;

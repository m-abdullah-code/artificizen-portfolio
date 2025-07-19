import AboutUsSection from "@/app/components/homePage/AboutUsSection/AboutUsSection";
import HeroSection from "@/app/components/homePage/HeroSection/HeroSection";
import ServicesSection from "@/app/components/homePage/ServicesSection/ServicesSection";
import ProjectSection from "../../components/homePage/ProjectSection/ProjectSection";
import React from "react";
import AwardsSection from "@/app/components/homePage/AwardsSection/AwardsSection";
import BlogSection from "@/app/components/homePage/BlogSection/BlogSection";
import StorySection from "@/app/components/homePage/StorySection/StorySection";
import TestimonialsSection from "../../components/homePage/TestimonialsSection/Testimonials";
import AiFuture from "@/app/components/homePage/AiFutureSection/AiFuture";
import ChooseUs from "@/app/components/homePage/WhyChooseUsSection/ChooseUs";
import Footer from "@/app/components/layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="p-10">
        <ServicesSection />
        <AboutUsSection />
        <ProjectSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>
      <AiFuture />
      <div className="p-10">
        <ChooseUs />
        <BlogSection />
        <StorySection />
        <Footer
          headings={[
            "Have an Idea?",
            "A Challenge?",
            "Or Just Curious",
            "About What AI Can",
            "Do For Your Buisness?",
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

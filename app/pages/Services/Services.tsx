import ServicesSection from "@/app/shared/ServicesSection";
import { serviceData } from "@/app/data/ServicesPage/AISolutions/AiSolutions";
import { servicesData } from "../../data/ServicesPage/AISolutions/ServicesCard";
import React from "react";
import TopBannerCard from "@/app/shared/TopBannerCard";
import BlogSection from "@/app/shared/BlogSection";
import { blogSectionData } from "@/app/data/ServicesPage/AISolutions/BlogSection";
import StorySection from "@/app/shared/StorySection";
import { storySectionData } from "@/app/data/ServicesPage/AISolutions/UserStory";
import Footer from "@/app/components/layout/Footer/Footer";

const Services = () => {
  return (
    <>
      <div className="container max-w-full">
        <TopBannerCard
          imageSrc={serviceData.image}
          title={serviceData.heading}
          description={serviceData.content}
        />
      </div>
      <div className="mt-10">
        <ServicesSection data={servicesData} />
      </div>
      <div className="mt-10">
        <BlogSection data={blogSectionData} />
      </div>
      <div className="mt-10">
        <StorySection data={storySectionData} />
      </div>
      <div>
        <Footer
          headings={serviceData.footer.headings}
          description={serviceData.footer.description}
          gradientIndex={serviceData.footer.gradientIndex}
          gradientWordCount={serviceData.footer.gradientWordCount}
        />
      </div>
    </>
  );
};

export default Services;

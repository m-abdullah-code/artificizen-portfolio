// import ServicesSection from "@/app/shared/ServicesSection";
const ServicesSection = lazy(() => import("@/app/shared/ServicesSection"));
const BlogSection = lazy(() => import("@/app/shared/BlogSection"));
const StorySection = lazy(() => import("@/app/shared/StorySection"));
const Footer = lazy(() => import("@/app/components/layout/Footer/Footer"));

import { serviceData } from "@/app/data/ServicesPage/AISolutions/AiSolutions";
import { servicesData } from "@/app/data/ServicesPage/AISolutions/ServicesCard";
import React, { lazy } from "react";
import TopBannerCard from "@/app/shared/TopBannerCard";
import { blogSectionData } from "@/app/data/ServicesPage/AISolutions/BlogSection";
import { storySectionData } from "@/app/data/ServicesPage/AISolutions/UserStory";

const Services = () => {
  return (
    <>
      <div className="">
        <TopBannerCard
          imageSrc={serviceData.image}
          title={serviceData.heading}
          description={serviceData.content} 
          breadcrumb={["Home", "Services"]}
        />
      </div>
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <ServicesSection data={servicesData} />
      </div>
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <BlogSection data={blogSectionData} />
      </div>
      <div className="px-4 sm:px-6 py-10 sm:py-12">
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

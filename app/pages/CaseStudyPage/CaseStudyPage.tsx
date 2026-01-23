import CaseStudy from "@/app/components/caseStudyPage/CaseStudy";
import { caseStudyData } from "@/app/data/CaseStudyPage/CasseStudyPage";
import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";

const CaseStudyPage = () => {
  return (
    <div className="">
      <div className="">
        <TopBannerCard
          imageSrc={caseStudyData.topBanner.imageSrc}
          title={caseStudyData.topBanner.title}
          description={caseStudyData.topBanner.description}
          breadcrumb={["Home", "Case Studies"]}
        />
        <div className="">
            <CaseStudy /> 
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;

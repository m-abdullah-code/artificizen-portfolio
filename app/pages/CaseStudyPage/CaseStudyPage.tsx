import CaseStudy from "@/app/components/caseStudyPage/CaseStudy";
import { caseStudyData } from "@/app/data/CaseStudyPage/CasseStudyPage";
import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";

const CaseStudyPage = () => {
  return (
    <div className="p-5 md:p-10 mt-18">
      <TopBannerCard
        imageSrc={caseStudyData.topBanner.imageSrc}
        title={caseStudyData.topBanner.title}
        description={caseStudyData.topBanner.description}
      />
      <div className="mt-10">
        <CaseStudy />
      </div>
    </div>
  );
};

export default CaseStudyPage;

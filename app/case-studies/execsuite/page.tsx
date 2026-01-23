import React from "react";
import CaseStudiesDynamicPage from "@/app/components/CaseStudiesDynamicPage/caseStudiesDynamicPage";
import { caseStudiesData } from "../../data/CaseStudyPage/ExexSuite";
const MediMatchpage = () => {
  return (
    <div className="">
      <CaseStudiesDynamicPage data={caseStudiesData} />
    </div>
  );
};

export default MediMatchpage;

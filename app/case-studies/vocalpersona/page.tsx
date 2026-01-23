import React from "react";
import CaseStudiesDynamicPage from "@/app/components/CaseStudiesDynamicPage/caseStudiesDynamicPage";
import { caseStudiesData } from "../../data/CaseStudyPage/VocalPersona";
const VocalPersonapage = () => {
  return (
    <div className="">
      <CaseStudiesDynamicPage data={caseStudiesData} />
    </div>
  );
};

export default VocalPersonapage;

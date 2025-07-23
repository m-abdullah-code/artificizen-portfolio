import React from "react";
import CaseStudiesDynamicPage from "@/app/components/CaseStudiesDynamicPage/caseStudiesDynamicPage";
import { caseStudiesData } from "../../data/CaseStudyPage/VocalPersona";
const VocalPersonapage = () => {
  return (
    <div className="mt-20 p-5 md:p-10">
      <CaseStudiesDynamicPage data={caseStudiesData} />
    </div>
  );
};

export default VocalPersonapage;

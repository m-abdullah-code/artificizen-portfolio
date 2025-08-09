import React from "react";
import CaseStudiesDynamicPage from "@/app/components/CaseStudiesDynamicPage/caseStudiesDynamicPage";
import { caseStudiesData } from "../../data/CaseStudyPage/AgentForge";
const AgentForgepage = () => {
  return (
    <div className="mt-20 p-5">
      <CaseStudiesDynamicPage data={caseStudiesData} />
    </div>
  );
};

export default AgentForgepage;

import React from "react";
import CaseStudiesDynamicPage from "@/app/components/CaseStudiesDynamicPage/caseStudiesDynamicPage";
import { caseStudiesData } from "../../data/CaseStudyPage/AgentForge";
const AgentForgepage = () => {
  return (
    <div className="">
      <CaseStudiesDynamicPage data={caseStudiesData} />
    </div>
  );
};

export default AgentForgepage;

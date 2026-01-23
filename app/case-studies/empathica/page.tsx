import React from "react";
import CaseStudiesDynamicPage from "@/app/components/CaseStudiesDynamicPage/caseStudiesDynamicPage";
import { caseStudiesData } from "../../data/CaseStudyPage/Empathica";
const Empathicapage = () => {
  return (
    <div className="">
      <CaseStudiesDynamicPage data={caseStudiesData} />
    </div>
  );
};


export default Empathicapage;

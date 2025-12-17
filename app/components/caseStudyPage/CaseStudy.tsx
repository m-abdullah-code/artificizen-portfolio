import React from "react";
import { CaseStudyCard } from "../../shared/CaseStudyCard";
import Footer from "../layout/Footer/Footer";
import { caseStudyData } from "@/app/data/CaseStudyPage/CasseStudyPage";

const CaseStudy = () => {
  // Chunk the cards array into groups of 2
  const chunkedCards = [];
  for (let i = 0; i < caseStudyData.cards.length; i += 2) {
    chunkedCards.push(caseStudyData.cards.slice(i, i + 2));
  }

  return (
    <>
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto space-y-4">
          {chunkedCards.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-4">
              {row.map((card, cardIndex) => (
                <div
                  key={card.heading}
                  className={`w-full ${rowIndex % 2 === 0
                      ? cardIndex === 0
                        ? "md:w-[60%]"
                        : "md:w-[40%]"
                      : cardIndex === 0
                        ? "md:w-[40%]"
                        : "md:w-[60%]"
                    }`}
                >
                  <CaseStudyCard
                    btn1={card.btn1}
                    btn2={card.btn2}
                    day={card.day}
                    date={card.date}
                    heading={card.heading}
                    imageSrc={card.imageSrc}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>


      <Footer
        headings={caseStudyData.footer.headings}
        description={caseStudyData.footer.description}
        gradientIndex={caseStudyData.footer.gradientIndex}
        gradientWordCount={caseStudyData.footer.gradientWordCount}
      />
    </>
  );
};

export default CaseStudy;

import React from "react";
import GenericCard from "@/app/shared/CardWithContent";
import { cardData } from "@/app/data/HomePage/AboutUsSection";

const AboutUsSection = () => {
  return (
    <div>
      <div className=" p-10 mt-8 w-full">
        {cardData.map((card, index) => (
          <GenericCard
            key={index}
            topText={card.topText}
            heading={card.heading}
            content={card.content}
            image={card.image}
            buttonText={card.buttonText}
            imagePosition={card.imagePosition}
            lineIndex={card.lineIndex}
            wordCount={card.wordCount}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;

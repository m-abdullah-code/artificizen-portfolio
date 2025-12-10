import React from "react";
import GenericCard from "@/app/shared/CardWithContent";
import { cardData } from "@/app/data/HomePage/AboutUsSection";

const AboutUsSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6">
      {cardData.map((card, index) => (
        <GenericCard
          key={index}
          topText={card.topText}
          heading={card.heading}
          content={card.content}
          image={card.image}
          buttonText={card.buttonText}
          href={card.href}
          imagePosition={card.imagePosition}
          lineIndex={card.lineIndex}
          wordCount={card.wordCount}
        />
      ))}
    </section>

  );
};

export default AboutUsSection;

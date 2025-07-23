import React from "react";
import Card from "@/app/shared/Card";
import { SectionData } from "@/app/interfaces/Card";

const ServicesSection = ({ data }: { data: SectionData }) => {
  return (
    <div>
      <div className="max-w-5xl">
        <p className="text-[clamp(1rem,3vw,1.25rem)]">{data.path}</p>
        <p className="text-[clamp(1.5rem,5vw,3.25rem)] leading-[clamp(2rem,6vw,4.063rem)]">
          <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
            {data.subtitle}
          </span>{" "}
          {data.title}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {data.cards.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            content={card.content}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

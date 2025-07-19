import React from "react";
import Card from "@/app/shared/Card";
import { servicesData } from "@/app/data/HomePage/ServicesCard";

const ServicesSection = () => {
  return (
    <div>
      <div className="max-w-5xl">
        /services/
        <p className="text-[clamp(2rem,5vw,3.25rem)] leading-[clamp(2.5rem,6vw,4.063rem)]">
          <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
            No Fluff. Just Real,
          </span>{" "}
          Working AI Solutions That Shipped Faster Than Your Competition.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {servicesData.map((card, index) => (
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

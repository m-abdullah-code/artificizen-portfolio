import React from "react";
import Image from "next/image";
import { awardsData } from "../../../data/HomePage/AwardsSection";
const AwardsSection = () => {
  return (
    <div className="p-10">
      <p className="text-base mb-2">{awardsData.headingPrefix}</p>

      <p className="text-5xl max-w-4xl leading-tight mb-10">
        <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
          {awardsData.headingGradient}
        </span>{" "}
        {awardsData.headingSuffix}
      </p>

      {/* Flex Row for Awards */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-28">
        {awardsData.awards.map((award) => (
          <Image
            key={award.id}
            src={award.image}
            alt={award.alt}
            className="object-contain"
            width={award.width}
            height={award.height}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
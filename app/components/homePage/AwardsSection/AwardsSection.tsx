import React from "react";
import Image from "next/image";
import { awardsData } from "../../../data/HomePage/AwardsSection";
const AwardsSection = () => {
  return (
    <section className="px-4 sm:px-5 py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto">

        {/* Top Small Text */}
        <p className="text-sm sm:text-base font-medium text-[var(--text-primary-color)]">
          {awardsData.headingPrefix}
        </p>

        {/* Main Heading */}
        <p className="
        text-[32px] sm:text-4xl md:text-5xl 
        font-normal leading-snug 
        max-w-4xl mb-8 sm:mb-10 text-[#111111]
      "
        >
          <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
            {awardsData.headingGradient}
          </span>{" "}
          {awardsData.headingSuffix}
        </p>

        {/* Awards Row */}
        <div
          className="
        flex flex-wrap 
        justify-center 
        items-center
        gap-6 sm:gap-10 md:gap-20 lg:gap-28
      "
        >
          {awardsData.awards.map((award) => (
            <Image
              key={award.id}
              src={award.image}
              alt={award.alt}
              loading="lazy"
              className="object-contain
            w-[80px] sm:w-[100px] md:w-[120px] lg:w-auto
          "
              width={award.width}
              height={award.height}
            />
          ))}
        </div>

      </div>
    </section>

  );
};

export default AwardsSection;

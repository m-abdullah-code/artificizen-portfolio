// components/Card.tsx
import Image from "next/image";
import React from "react";
import { CaseStudyCardProps } from "../interfaces/CaseStudyCard";

export const CaseStudyCard = ({
  day,
  date,
  heading,
  imageSrc,
  btn1,
  btn2,
}: CaseStudyCardProps) => {
  return (
    <div className="p-3 bg-[#1F1F1F] shadow-md rounded-3xl">
      {/* Top Section */}
      <div className="flex justify-between items-end mb-3 pl-5">
        <div className="flex gap-2">
          <button className="bg-transparent border border-2 text-white px-5 p-2 text-sm rounded-full">
            {btn1}
          </button>
          <button className="bg-transparent border border-2 text-white px-5 p-2 text-sm rounded-full">
            {btn2}
          </button>
        </div>
        <div className="bg-[#0B5CFF] text-white text-sm px-2 py-1 pr-5 rounded">
          {day}
          <p
            className="font-semibold"
            style={{ fontSize: "clamp(1rem, 4vw, 1.875rem)" }}
          >
            {date}
          </p>
        </div>
      </div>

      {/* Heading */}
      <h3
        className="font-semibold mb-5 text-white max-w-[550px] pl-5"
        style={{ fontSize: "clamp(1.5rem, 4vw, 1.7rem)" }}
      >
        {heading}
      </h3>

      {/* Image */}
      <Image
        src={imageSrc}
        alt="card"
        className="w-full h-80 object-cover rounded-xl mt-5"
      />
    </div>
  );
};
export default CaseStudyCard;

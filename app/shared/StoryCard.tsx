import React from "react";
import { StoryCardProps } from "../interfaces/StoryCard";
import { FaStar } from "react-icons/fa";

const Card: React.FC<StoryCardProps> = ({ heading, stars, content }) => {
  const starCount = Array.isArray(stars)
    ? Math.min(stars.length, 5)
    : Math.min(stars, 5);
  const starsArray = Array.from({ length: starCount }, (_, index) => index);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-5 h-full flex flex-col">
      <h2 className="text-lg sm:text-xl font-normal text-[#111111] leading-snug text-wrap">{heading}</h2>

      <div className="flex mb-2 mt-2">
        {starsArray.map((_, index) => (
          <span key={index} className="text-yellow-500">
            <FaStar className="w-3 sm:w-4 h-3 sm:h-4" />
          </span>
        ))}
      </div>

      <div className="text-sm sm:text-base text-[#333333] leading-normal font-normal mt-2 text-wrap">
        {content}
      </div>
    </div>

  );
};

export default Card;

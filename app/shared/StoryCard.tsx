import React from "react";
import { StoryCardProps } from "../interfaces/StoryCard";

const Card: React.FC<StoryCardProps> = ({ heading, stars, content }) => {
  const starCount = Array.isArray(stars)
    ? Math.min(stars.length, 5)
    : Math.min(stars, 5);
  const starsArray = Array.from({ length: starCount }, (_, index) => index);

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-5"
      style={{ minHeight: "0", maxHeight: "none" }}
    >
      <h2 className="text-xl font-semibold mb-0">{heading}</h2>
      <div className="flex mb-4">
        {starsArray.map((_, index) => (
          <span key={index} className="text-yellow-500 text-xs">
            ★
          </span>
        ))}
      </div>
      <div className="text-base text-gray-700">{content}</div>
    </div>
  );
};

export default Card;

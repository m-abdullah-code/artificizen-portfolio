import { FaStar } from "react-icons/fa";
import StoryCard from "./StoryCard";
import React from "react";
import { StorySectionData } from "@/app/interfaces/StoryCard";

const StorySection = ({ data }: { data: StorySectionData }) => {
  return (
    <>
      <div className="mt-10 p-5 bg-[#F0F2F4] rounded-xl mb-10">
        <div className="flex flex-col items-center justify-center text-center md:px-4 mt-10">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color={data.starColor} />
            ))}
          </div>

          <p
            className="max-w-[650px] leading-[clamp(2rem,6vw,3.5rem)]"
            style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}
          >
            {data.title}
            {data.subtitle && (
              <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
                {data.subtitle}
              </span>
            )}
            !
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:px-6">
          {data.cards.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StorySection;

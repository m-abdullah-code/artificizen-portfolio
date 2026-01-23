import React from "react";
import StoryCard from "./StoryCard";
import { StorySectionData } from "@/app/interfaces/StoryCard";
import { FaStar } from "react-icons/fa";

const StorySection = ({ data }: { data: StorySectionData }) => {
  const cards = data?.cards || [];
  const row1 = cards.slice(0, 12);
  const row2 = cards.slice(0, 12);
  const row3 = cards.slice(0, 12);

  // Only render if there's data
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 py-10 sm:py-14 bg-[#F0F2F4] rounded-3xl">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color={data.starColor} className="w-5 sm:w-6 h-5 sm:h-6" />
            ))}
          </div>

          <p className="max-w-[650px] text-[clamp(1.8rem,5vw,3rem)] sm:text-5xl leading-snug font-normal">
            {data.title}
            {data.subtitle && (
              <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
                {data.subtitle}
              </span>
            )}
            !
          </p>
        </div>

        {/* ROW 1: Left to Right */}
        {row1.length > 0 && (
          <div className="mt-8 overflow-hidden">
            <div className="flex review-marquee-ltr whitespace-nowrap">
              {row1.map((card, i) => (
                <div key={`row1-${i}`} className="px-2 sm:px-3 flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[325px]">
                  <StoryCard {...card} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROW 2: Right to Left */}
        {row2.length > 0 && (
          <div className="mt-6 overflow-hidden">
            <div className="flex review-marquee-rtl whitespace-nowrap">
              {row2.map((card, i) => (
                <div key={`row2-${i}`} className="px-2 sm:px-3 flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[325px]">
                  <StoryCard {...card} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROW 3: Left to Right */}
        {row3.length > 0 && (
          <div className="mt-6 overflow-hidden">
            <div className="flex review-marquee-ltr whitespace-nowrap">
              {row3.map((card, i) => (
                <div key={`row3-${i}`} className="px-2 sm:px-3 flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[325px]">
                  <StoryCard {...card} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>

  );
};

export default StorySection;
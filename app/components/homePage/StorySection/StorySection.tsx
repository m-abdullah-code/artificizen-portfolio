import React from "react";
import { FaStar } from "react-icons/fa";
import StoryCard from "../../../shared/StoryCard";
import { storyData } from "@/app/data/HomePage/UserStory";

const StorySection = () => {
  return (
    <>
      <div className="mt-10 p-5 bg-[#F0F2F4] rounded-xl">
        <div className="flex flex-col items-center justify-center text-center md:px-4 mt-10">
          <div className="flex gap-1 mb-4">
            <FaStar color="#FAC12E" />
            <FaStar color="#FAC12E" />
            <FaStar color="#FAC12E" />
            <FaStar color="#FAC12E" />
            <FaStar color="#FAC12E" />
          </div>

          <p
            className="max-w-[650px] leading-[clamp(2rem,6vw,3.5rem)]"
            style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}
          >
            User stories: hear what others love about{" "}
            <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
              Artificizen
            </span>
            !
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:px-6">
          {storyData.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StorySection;

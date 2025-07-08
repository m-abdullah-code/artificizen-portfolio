import { blogData } from "@/app/data/HomePage/BlogSection";
import BlogCard from "@/app/shared/BlogCard";
import React from "react";

const BlogSection = () => {
  return (
    <div className="p-10">
      <p className="text-base">/ blog /</p>
      <p className="max-w-4xl text-5xl leading-[3.5rem]">
        <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
          Exploring the
        </span>{" "}
        frontiers of artificial Intelligence: insights, innovations and impact
      </p>
      <div className="flex flex-col md:flex-row gap-6 pt-6">
        {/* Left Side Card */}
        <div className="flex-1">
          <BlogCard {...blogData[0]}/>
        </div>

        {/* Right Side - 2 stacked cards */}
        <div className="flex-1 flex flex-col gap-6">
          <BlogCard {...blogData[1]} />
          <BlogCard {...blogData[2]} />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
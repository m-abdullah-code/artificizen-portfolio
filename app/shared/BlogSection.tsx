import BlogCard from "@/app/shared/BlogCard";
import React from "react";
import { BlogSectionData } from "@/app/interfaces/BlogCard";

const BlogSection = ({ data }: { data: BlogSectionData }) => {
  return (
    <div>
      <p className="text-base">{data.path}</p>
      <p className="max-w-4xl text-[clamp(2rem,5vw,3.25rem)] leading-[clamp(2.5rem,6vw,3.5rem)]">
        <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
          {data.subtitle}
        </span>{" "}
        {data.title}
      </p>
      <div className="flex flex-col md:flex-row gap-6 pt-6">
        {/* Left Side Card */}
        <div className="flex-1">
          <BlogCard {...data.cards[0]} />
        </div>

        {/* Right Side - 2 stacked cards */}
        <div className="flex-1 flex flex-col gap-6">
          <BlogCard {...data.cards[1]} />
          <BlogCard {...data.cards[2]} />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

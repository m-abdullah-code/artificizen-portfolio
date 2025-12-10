import BlogCard from "@/app/shared/BlogCard";
import React from "react";
import { BlogSectionData } from "@/app/interfaces/BlogCard";

const BlogSection = ({ data }: { data: BlogSectionData }) => {
  return (
    <section className="px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <p className="text-sm sm:text-base font-medium text-[#111111]">{data.path}</p>
          <p className="max-w-4xl text-[clamp(1.8rem,5vw,3rem)] sm:text-[clamp(2rem,5vw,3rem)] leading-snug mt-2 sm:mt-3">
            <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
              {data.subtitle}
            </span>{" "}
            {data.title}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">

          {/* Left Side Card */}
          <div className="flex-1 blog_height">
            <BlogCard
              {...data.cards[0]}
              height="382px"
            />
          </div>

          {/* Right Side - 2 stacked cards */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6">
            <BlogCard {...data.cards[1]} height="140px" />
            <BlogCard {...data.cards[2]} height="140px" />
          </div>

        </div>
      </div>
    </section>

  );
};

export default BlogSection;

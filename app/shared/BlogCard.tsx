import React from "react";
import { BlogCardProps } from "../interfaces/BlogCard";
import Image from "next/image";
import Link from "next/link";

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  heading,
  content,
  links,
  height = "152px",
  href,
}) => {
  return (
    <Link href={href} className="block hover:no-underline h-full">
      <div className="bg-white rounded-[25px] shadow-sm h-full overflow-hidden border border-[#F2F2F2]">

        {/* IMAGE */}
        <div className="relative w-full" style={{ height }}>
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover rounded-[25px]"
          />

          {/* DATE TAG */}
          <div className="absolute -bottom-3 left-0 bg-white rounded-2xl px-3 sm:px-4 py-1.5 flex items-center">
            <p className="text-xs sm:text-sm font-medium text-[#9B9B9B] leading-normal">{date}</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-4 sm:px-6 pt-8 sm:pt-10 pb-5 sm:pb-6">
          <h3 className="text-lg sm:text-2xl font-normal text-[#111111] leading-snug">
            {heading}
          </h3>

          {content && (
            <p className="text-sm sm:text-base text-[#333333] font-normal leading-snug mt-1.5 sm:mt-2.5">
              {content}
            </p>
          )}

          <p className="text-xs sm:text-sm text-[#9B9B9B] leading-normal font-medium mt-3 sm:mt-5">
            {links.join(" / ")}
          </p>
        </div>

      </div>
    </Link>

  );
};

export default BlogCard;

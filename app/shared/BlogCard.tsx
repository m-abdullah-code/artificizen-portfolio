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
    <>
    <Link href={href} className="block hover:no-underline">
    <div className="bg-white shadow-lg rounded-lg pb-5">
      <div className="relative w-full" style={{ height }}>
        <Image
          src={image}
          alt={`${heading} Image`}
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute -bottom-3 left-0 bg-white p-2 rounded-tl-xl rounded-tr-xl rounded-br-xl">
          <p className="text-xs text-gray-800">{date}</p>
        </div>
      </div>
      <div className="md:px-10">
        <p className="text-[clamp(1.25rem, 2vw, 1.5rem)] font-semibold mt-4">
          {heading}
        </p>
        <p className="text-black mt-2 text-base">{content}</p>
        <p className="text-sm mt-5 text-gray-600">{links.join(" / ")}</p>
      </div>
    </div>
    </Link>
    </>
  );
};

export default BlogCard;

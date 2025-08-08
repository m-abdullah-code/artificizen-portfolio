import Image, { StaticImageData } from "next/image";
import React from "react";

interface TagSectionProps {
  title: string;
  tags: string[];
  icon?: StaticImageData | string;
}

const TagSection: React.FC<TagSectionProps> = ({ title, tags, icon }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl text-black font-semibold">{title}</p>
        {icon &&
          (typeof icon === "string" ? (
            <Image src={icon} alt="icon" className="w-4 h-4" />
          ) : (
            <Image src={icon} alt="icon" className="w-4 h-4" />
          ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#C4C4C4] mb-4" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-sm text-black px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagSection;

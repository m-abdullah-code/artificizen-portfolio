import Image, { StaticImageData } from "next/image";
import React from "react";

interface SideCardProps {
  image: StaticImageData;
  heading: string;
  content: string;
}

const SideCard: React.FC<SideCardProps> = ({ image, heading, content }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden text-white min-h-[300px]">
      <Image
        src={image}
        alt={heading}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 mt-36 md:mt-0 p-5 px-10 md:px-3 lg:px-10 h-full flex flex-col justify-end">
        <h2
          className="font-semibold mb-2 drop-shadow-md"
          style={{ fontSize: "clamp(1.5rem, 2vw, 1.75rem)" }}
        >
          {heading}
        </h2>
        <p className="text-base drop-shadow-sm">{content}</p>
      </div>
    </div>
  );
};

export default SideCard;

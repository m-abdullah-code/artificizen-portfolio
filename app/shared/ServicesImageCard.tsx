import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServicesImageCardProps {
  image: StaticImageData;
  heading: string;
  content: string;
}

const ServicesImageCard: React.FC<ServicesImageCardProps> = ({
  image,
  heading,
  content,
}) => {
  return (
    <div className="relative max-w-full h-[300px] mt-20">
      <Image
        src={image}
        alt={heading}
        fill
        className="object-cover rounded-xl"
        priority
      />

      <div className="absolute inset-0 flex items-center px-10">
        <div className=" text-white">
          <p className="text-[60px] leading-tight">{heading}</p>
          <p className="text-[22px] mt-4 max-w-5xl">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesImageCard;

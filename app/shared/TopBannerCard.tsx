// components/TopBannerCard.tsx
import React from "react";
import { TopBannerCardProps } from "../interfaces/TopBanner";
import Image from "next/image";

const TopBannerCard = ({
  imageSrc,
  title,
  description,
}: TopBannerCardProps) => {
  return (
    <div className="relative w-full bg-[#F0F2F4]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Banner"
        className="w-full h-full object-cover rounded-xl"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center text-white text-center px-10">
        <h1
          className="font-bold md:mb-2 text-start"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3.75rem)",
          }}
        >
          {title}
        </h1>

        <p
          className="text-start"
          style={{
            fontSize: "clamp(0.7rem, 2.5vw, 1.25rem)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopBannerCard;

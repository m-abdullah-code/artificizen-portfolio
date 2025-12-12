// components/TopBannerCard.tsx
import React from "react";
import { TopBannerCardProps } from "../interfaces/TopBanner";
import Image from "next/image";

const TopBannerCard = ({ imageSrc, title, description, breadcrumb }: TopBannerCardProps) => {
  return (
    <div className="w-full bg-[#F0F2F4] rounded-b-3xl p-4 sm:p-8 lg:p-10 !pt-35 lg:mb-10 mb-12">
      <div className="max-w-[1360px] mx-auto relative rounded-3xl overflow-hidden">

        {/* Breadcrumb / Tag */}
        {breadcrumb && (
          <div className="absolute -bottom-2 sm:-bottom-3 left-10 sm:left-13 z-30 bg-[#F0F2F4] py-2.5 sm:py-5 px-5 sm:px-10 flex items-center gap-2 text-[#333333] rounded-t-2xl sm:rounded-t-3xl banner_tag">
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <p className="text-sm relative">{item}
                  {idx === 0 && (
                    <div className="absolute h-[1px] w-full bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]"></div>
                  )}
                </p>
                {idx < breadcrumb.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover z-0 object-right md:object-right rounded-3xl"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-[300px] sm:h-[400px] lg:h-[500px] px-4 sm:px-8 lg:px-12 text-white lg:max-w-[65%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBannerCard;

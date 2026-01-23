import { aiFutureData } from "@/app/data/HomePage/AiFuture";
import React from "react";

const AiFuture = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12">

      {/* Top Marquee — Right to Left (rtl animation moves from -50% to 0, but usually ltr/rtl names are swapped in use or context) */}
      {/* Looking at globals.css: 
          marquee-ltr: 0 to -50% (moves left)
          marquee-rtl: -50% to 0 (moves right)
      */}
      <div className="bg-[#0B5CFF] rotate-[2deg] origin-left whitespace-nowrap overflow-hidden"
      style={{width: "103%", marginLeft: "-1.5%"}}
      >
        <div className="flex animate-marquee-rtl py-2 sm:py-3 items-center w-max">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <p key={i} className="text-white text-[18px] sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[70px] font-semibold leading-snug flex-shrink-0">
                {aiFutureData.topText} &nbsp; • &nbsp;
              </p>
            ))}
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <p key={`copy-${i}`} className="text-white text-[18px] sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[70px] font-semibold leading-snug flex-shrink-0">
                {aiFutureData.topText} &nbsp; • &nbsp;
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee — Left to Right */}
      <div className="bg-black rotate-[-2deg] origin-left whitespace-nowrap overflow-hidden mt-2 sm:mt-4"
      style={{width: "103%", marginLeft: "-1.5%"}}
      >
        <div className="flex animate-marquee-ltr py-2 sm:py-3 items-center w-max">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <p key={i} className="text-[18px] sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[69px] font-bold 
              bg-gradient-to-r from-[#0B5CFF] to-[#FF710C] bg-clip-text text-transparent 
              leading-tight flex-shrink-0">
                {aiFutureData.bottomText} &nbsp; • &nbsp;
              </p>
            ))}
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <p key={`copy-${i}`} className="text-[18px] sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[69px] font-bold 
              bg-gradient-to-r from-[#0B5CFF] to-[#FF710C] bg-clip-text text-transparent 
              leading-tight flex-shrink-0">
                {aiFutureData.bottomText} &nbsp; • &nbsp;
              </p>
            ))}
          </div>
        </div>
      </div>

    </section>

  );
};

export default AiFuture;

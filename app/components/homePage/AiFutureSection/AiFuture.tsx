import { aiFutureData } from "@/app/data/HomePage/AiFuture";
import React from "react";

const AiFuture = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12">

      {/* Top Marquee — Left to Right */}
      <div className="bg-[#0B5CFF] rotate-[1deg] origin-left px-2 sm:px-4 whitespace-nowrap overflow-hidden">
        <p className="marquee-left text-white text-[18px] sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[70px] font-semibold leading-snug inline-block">
          {aiFutureData.topText} &nbsp; • &nbsp;
          {aiFutureData.topText} &nbsp; • &nbsp;
        </p>
      </div>

      {/* Bottom Marquee — Right to Left */}
      <div className="bg-black rotate-[-1deg] origin-left px-2 sm:px-4 whitespace-nowrap overflow-hidden mt-4 sm:mt-6">
        <p className="marquee-right text-[18px] sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[69px] font-bold 
        bg-gradient-to-r from-[#0B5CFF] to-[#FF710C] bg-clip-text text-transparent 
        leading-tight inline-block">
          {aiFutureData.bottomText} &nbsp; • &nbsp;
          {aiFutureData.bottomText} &nbsp; • &nbsp;
        </p>
      </div>

    </section>

  );
};

export default AiFuture;

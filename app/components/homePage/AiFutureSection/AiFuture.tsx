// import React from "react";

// const AiFuture = () => {
//   return (
//     <div className="relative w-full">
//       {/* Top Part — blue background with white text */}
//       <div className="bg-[#0B5CFF] rotate-[1deg] origin-left px-4">
//         <p className="text-white text-[70px] font-semibold leading-snug">
//           in shaping the future of technology
//         </p>
//       </div>

//       {/* Bottom Part — black background with rotated gradient text */}
//       <div className="bg-black rotate-[-2deg] origin-left px-4">
//         <p className="text-[69px] font-bold bg-gradient-to-r from-[#0B5CFF] to-[#FF710C] bg-clip-text text-transparent leading-tight">
//           / Artificial Intelligence in shaping the
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AiFuture;

import { aiFutureData } from "@/app/data/HomePage/AiFuture";
import React from "react";

const AiFuture = () => {
  return (
    <div className="relative w-full">
      {/* Top Part — blue background with white text */}
      <div className="bg-[#0B5CFF] rotate-[1deg] origin-left px-4">
        <p className="text-white sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[70px] font-semibold leading-snug">
          {aiFutureData.topText}
        </p>
      </div>

      {/* Bottom Part — black background with rotated gradient text */}
      <div className="bg-black rotate-[-2deg] origin-left px-4">
        <p className="sm:text-[23px] md:text-[43px] lg:text-[58px] xl:text-[69px] font-bold bg-gradient-to-r from-[#0B5CFF] to-[#FF710C] bg-clip-text text-transparent leading-tight">
          {aiFutureData.bottomText}
        </p>
      </div>
    </div>
  );
};

export default AiFuture;

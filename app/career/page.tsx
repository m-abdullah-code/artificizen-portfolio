// import Image from "next/image";
// import React from "react";
// import Icon from "../../public/assets/career/blackIcon.png";
// import TopBannerCard from "../shared/TopBannerCard";
// import Career from "../../public/assets/career/careerM.png";
// import Footer from "../components/layout/Footer/Footer";

// const rowData = [
//   {
//     col1Heading: "First Column Heading 1",
//     col2Heading: "Second Column Heading 1",
//     col2Text: "This is the content for row 1.",
//   },
//   {
//     col1Heading: "First Column Heading 2",
//     col2Heading: "Second Column Heading 2",
//     col2Text: "This is the content for row 2.",
//   },
//   {
//     col1Heading: "First Column Heading 3",
//     col2Heading: "Second Column Heading 3",
//     col2Text: "This is the content for row 3.",
//   },
//   {
//     col1Heading: "First Column Heading 4",
//     col2Heading: "Second Column Heading 4",
//     col2Text: "This is the content for row 4.",
//   },
//   {
//     col1Heading: "First Column Heading 5",
//     col2Heading: "Second Column Heading 5",
//     col2Text: "This is the content for row 5.",
//   },
// ];

// const page = () => {
//   return (
//     <div className="p-5 md:p-10 mt-20">
//       <TopBannerCard
//         imageSrc={Career}
//         title="AgentForge"
//         description="AgentForge: AI Agent Marketplace & Development Platform"
//       />
//       {rowData.map((row, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-[1fr_2fr_1fr] gap-6 py-6 border-b"
//         >
//           {/* Column 1 */}
//           <div className="flex flex-col gap-3">
//             <div className="flex gap-2">
//               <button className="px-4 py-2 text-[#C1C1C1] text-base">
//                 Button 1
//               </button>
//               <button className="px-4 py-2 text-[#C1C1C1] text-base">
//                 Button 2
//               </button>
//             </div>
//             <h3 className="text-xl font-semibold">{row.col1Heading}</h3>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h3 className="text-[clamp(1.5rem,2vw,2rem)] leading-tight  mb-2">
//               {row.col2Heading}
//             </h3>
//             <p className="text-base text-black">{row.col2Text}</p>
//           </div>

//           {/* Column 3 */}
//           <div className="flex items-end justify-end">
//             <div className="inline-block mt-10 rounded-full p-[2px] bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]">
//               <button className="flex items-center gap-2 rounded-full bg-white text-black px-10 py-2 text-base font-medium">
//                 <Image src={Icon} alt="icon" width={8} height={7} />
//                 Explore us
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div>
//         <Footer
//           headings={aboutUsData.footer.headings}
//           description={aboutUsData.footer.description}
//           gradientIndex={aboutUsData.footer.gradientIndex}
//           gradientWordCount={aboutUsData.footer.gradientWordCount}
//         />
//       </div>
//     </div>
//   );
// };

// export default page;

// import React from "react";
// import TopBannerCard from "../shared/TopBannerCard";
// import Footer from "../components/layout/Footer/Footer";
// import { PageData } from "../interfaces/careerPage";
// import { careerData } from "../data/Career/Career";
// import TableComponent from "../shared/CareerTable";

// const page = ({ data = careerData }: { data?: PageData }) => {
//   return (
//     <div className="p-5 md:p-10 mt-20">
//       <TopBannerCard
//         imageSrc={data.banner.image}
//         title={data.banner.title}
//         description={data.banner.description}
//       />
//       <TableComponent rows={data.rows} />
//       <div>
//         <Footer
//           headings={data.footer.headings}
//           description={data.footer.description}
//           gradientIndex={data.footer.gradientIndex}
//           gradientWordCount={data.footer.gradientWordCount}
//         />
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";
import CareerPage from "../pages/Careers/Careers";

export default function Page() {
  return (
    <div className="p-5 md:p-10 mt-20">
      <CareerPage />
    </div>
  );
}

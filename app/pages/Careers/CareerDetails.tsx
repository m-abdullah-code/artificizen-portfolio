// import TopBannerCard from "@/app/shared/TopBannerCard";
// import React from "react";
// import Main from "../../../public/assets/career/careerM.png";
// import SideCard from "@/app/shared/SideCard";
// import SideImage from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
// import Image from "next/image";
// import BlackIcon from "../../../public/assets/career/blackIcon.png";
// import TableComponent from "@/app/shared/CareerTable";
// import Footer from "@/app/components/layout/Footer/Footer";

// const responsibilities = [
//   "Char aruana archerfish bichir sand dab; chimaera glowlight danio humuhumunukunukuapua'a platyfish zebra bullhead shark Reef triggerfish?",
//   "Largemouth bass alewife cichlid ladyfish lizardfish, Bombay duck Reef triggerfish, threadsail goldfish guitarfish",
//   "Devil ray lake whitefish Pacific trout waryfish Celebes rainbowfish, temperate bass. Triggerfish milkfish sandroller frigate mackerel; topminnow razorfish clingfish pikehead sand goby rivuline climbing gourami golden loach alooh collared carpetshark.",
//   "Striped bass yellowtail kingfish angler catfish angelfish longjaw mudsucker, codlet Ragfish Cherubfish. Ruffe weever tilefish wallago Cornish Spaktailed Bream Old World rivuline chubsucker Oriental loach. Indian mul char spotted dogfish.",
// ];

// const qualifications = [
//   "Stock",
//   "Competitive Salaries",
//   "Quarterly employee travel coupon",
//   "Paid time off",
//   "Medical, dental, & vision insurance",
//   "Life insurance and disability benefits",
//   "Fitness Discounts",
//   "401K with matching",
//   "Flexible Spending Accounts",
//   "Apple Equipment",
//   "Commuter Subsidies",
//   "Community Involvement (4 hours per month to give back to the community)",
//   "Company sponsored tech talks and happy hours",
// ];

// const Data = [
//   {
//     button1: "Remote",
//     button2: "Full Time",
//     col1Heading: "Design Lead",
//     col2Heading: "Lead UI/UX Designer",
//     col2Text: "We are looking for an experienced design lead to join our team.",
//   },
//   {
//     button1: "Hybrid",
//     button2: "Part Time",
//     col1Heading: "Developer",
//     col2Heading: "Frontend Developer",
//     col2Text: "Build modern web applications with React and Next.js.",
//   },
// ];

// const CareerDetails = () => {
//   return (
//     <div>
//       <TopBannerCard
//         imageSrc={Main}
//         title="Careers"
//         description="Powerful ai solutions tailored to transform your business"
//       />

//       <div className="py-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Left Column (Cards) */}
//           <div className="w-full md:w-[25%] flex flex-col gap-4">
//             {" "}
//             <div className="bg-gray-200 p-5 pt-10 rounded-xl">
//               <div className="flex gap-10 text-base text-[#9B9B9B] font-semibold">
//                 <p>Full time</p>
//                 <p>Senior</p>
//               </div>
//               <p className="text-xl text-black font-semibold mt-5">
//                 250K month
//               </p>
//             </div>
//             <SideCard
//               image={SideImage}
//               heading="AI Strategy & Consulting"
//               content="Provide expert guidance on developing an AI strategy"
//             />
//           </div>
//           {/* Right Column */}
//           <div className="w-full md:w-[75%] rounded md:p-6">
//             <div>
//               <p
//                 className="mb-2"
//                 style={{
//                   fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
//                   lineHeight: "clamp(2.25rem, 5vw, 3rem)",
//                 }}
//               >
//                 Job Description:
//               </p>
//               <p className="text-base">
//                 Conducting cutting-edge research in AI, developing new
//                 algorithms, and pushing the boundaries of AI capabilities. Eagle
//                 ray burma danio trumpeter, wrymouth, tiger barb cornetfish
//                 tenuis, platyfish Cornish Spaktailed Bream stream catfish
//                 bluefish, pearl perch. Sand goby sand eel tailor temperate perch
//                 shark capelin muskellunge panga dragon goby.
//               </p>
//               <p className="mt-2 text-base">
//                 Sand stargazer flagtail swallower swallower long-finned char
//                 dory bamboo shark yellowmargin triggerfish beaked salmon Black
//                 angelfish ropefish paperbone. Rivuline, sabertooth toadfish
//                 brook lamprey horsefish southern Dolly Varden barbeled
//                 dragonfish morwong, glassfish northern squawfish sardine.
//                 Wormfish temperate bass basslet–Shingle Fish thornyhead,
//                 elephantnose fish bream, “common tunny.”
//               </p>
//             </div>
//             <div>
//               <p
//                 className="mb-4 mt-10"
//                 style={{
//                   fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
//                   lineHeight: "clamp(2.25rem, 5vw, 3rem)",
//                 }}
//               >
//                 Responsibilities:
//               </p>
//               <ul className="space-y-3">
//                 {responsibilities.map((point, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <Image
//                       src={BlackIcon}
//                       alt="check"
//                       className="w-2 h-2 mt-2"
//                     />
//                     <span className="text-base leading-5">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <p
//                 className="mb-2 mt-10"
//                 style={{
//                   fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
//                   lineHeight: "clamp(2.25rem, 5vw, 3rem)",
//                 }}
//               >
//                 Preffered Qualifications:
//               </p>
//               <ul className="space-y-3">
//                 {qualifications.map((point, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <Image
//                       src={BlackIcon}
//                       alt="check"
//                       className="w-2 h-2 mt-2"
//                     />
//                     <span className="text-base leading-5">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <p className="text-base">/ Career /</p>
//         <p
//           className="lg:max-w-[45%] "
//           style={{
//             fontSize: "clamp(1.5rem, 5vw, 3rem)",
//             lineHeight: "clamp(2rem, 6vw, 3.5rem)",
//           }}
//         >
//           Inspire And Get Inspired By Professional Experts
//         </p>
//         <TableComponent rows={Data} />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CareerDetails;

import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import SideCard from "@/app/shared/SideCard";
import Image from "next/image";
import BlackIcon from "../../../public/assets/career/blackIcon.png";
import TableComponent from "@/app/shared/CareerTable";
import Footer from "@/app/components/layout/Footer/Footer";
import { careerDetails } from "@/app/data/Career/CareerDetails";

const CareerDetails = () => {
  return (
    <div>
      <TopBannerCard
        imageSrc={careerDetails.banner.image}
        title={careerDetails.banner.title}
        description={careerDetails.banner.description}
      />

      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column (Cards) */}
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            <div className="bg-gray-200 p-5 pt-10 rounded-xl">
              <div className="flex gap-10 text-base text-[#9B9B9B] font-semibold">
                <p>{careerDetails.jobInfo.type}</p>
                <p>{careerDetails.jobInfo.level}</p>
              </div>
              <p className="text-xl text-black font-semibold mt-5">
                {careerDetails.jobInfo.salary}
              </p>
            </div>
            <SideCard
              image={careerDetails.sideCard.image}
              heading={careerDetails.sideCard.heading}
              content={careerDetails.sideCard.content}
            />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-[75%] rounded md:p-6">
            <div>
              <p
                className="mb-2"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: "clamp(2.25rem, 5vw, 3rem)",
                }}
              >
                Job Description:
              </p>
              {careerDetails.jobDescription.map((paragraph, index) => (
                <p key={index} className="text-base mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <p
                className="mb-4 mt-10"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: "clamp(2.25rem, 5vw, 3rem)",
                }}
              >
                Responsibilities:
              </p>
              <ul className="space-y-3">
                {careerDetails.responsibilities.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src={BlackIcon}
                      alt="check"
                      className="w-2 h-2 mt-2"
                    />
                    <span className="text-base leading-5">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="mb-2 mt-10"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: "clamp(2.25rem, 5vw, 3rem)",
                }}
              >
                Preferred Qualifications:
              </p>
              <ul className="space-y-3">
                {careerDetails.qualifications.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src={BlackIcon}
                      alt="check"
                      className="w-2 h-2 mt-2"
                    />
                    <span className="text-base leading-5">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base">/ Career /</p>
        <p
          className="lg:max-w-[45%]"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            lineHeight: "clamp(2rem, 6vw, 3.5rem)",
          }}
        >
          Inspire And Get Inspired By Professional Experts
        </p>
        <TableComponent rows={careerDetails.rows} />
      </div>
      <Footer
        headings={careerDetails.footer.headings}
        description={careerDetails.footer.description}
        gradientIndex={careerDetails.footer.gradientIndex}
        gradientWordCount={careerDetails.footer.gradientWordCount}
      />
    </div>
  );
};

export default CareerDetails;

// // app/case-studies/[case-studies]/page.tsx

// import TopBannerCard from "@/app/shared/TopBannerCard";
// import React from "react";
// import Background from "../../../public/assets/CaseStudy/CaseStudiesBg1.png";
// import CardImage from "../../../public/assets/CaseStudy/caseStudiesLaw.png";
// import SecondCard from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
// import Overview from "../../../public/assets/CaseStudy/overview.png";
// import Nelson1 from "../../../public/assets/CaseStudy/Nelson1.png";
// import Nelson2 from "../../../public/assets/CaseStudy/Nelson2.png";
// import Vector from "../../../public/assets/CaseStudy/Vector.png";
// import BulletIcon from "../../../public/assets/CaseStudy/Icon.png";
// import Image from "next/image";
// import Footer from "../layout/Footer/Footer";
// import { aboutUsData } from "@/app/data/AboutUsPage/ABoutsUsPage";

// const CaseStudiesDynamicPage = () => {
//   return (
//     <>
//       <TopBannerCard
//         imageSrc={Background}
//         title="AgentForge"
//         description="AgentForge: AI Agent Marketplace & Development Platform"
//       />

//       <div className="py-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Left Column (Cards) */}
//           <div className="w-full md:w-[25%] flex flex-col gap-4">
//             {/* Card 1 */}
//             <div className="bg-[#0b1629] rounded-xl shadow-md p-4 flex flex-col items-center gap-4">
//               {/* Top Blue Bar with Image */}
//               <div className="w-full bg-[#001060] h-16 flex items-center justify-center rounded-xl">
//                 <Image
//                   src={CardImage}
//                   alt="icon"
//                   width={120}
//                   height={120}
//                   className="object-contain"
//                 />
//               </div>
//               <div>
//                 <p className="text-[#9B9B9B] text-sm">Client</p>
//                 <p
//                   className=" text-white"
//                   style={{
//                     fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
//                   }}
//                 >
//                   QUO Legal Firm
//                 </p>
//                 <p className="text-[#9B9B9B] text-sm mt-5">Sector</p>
//                 <p className="text-base text-white">
//                   Infrastructure, Defence and Transport, Public Sector, Health
//                   and Not For Profit
//                 </p>
//                 <p className="text-[#9B9B9B] text-sm mt-5">Offering</p>
//                 <p className="text-base text-white">Organization Design</p>
//               </div>

//               {/* Buttons */}
//               <div className="flex md:block lg:flex gap-2 mt-5 space-y-0 md:space-y-3 lg:space-y-0">
//                 <button className="px-4 p-2 bg-white text-sm text-black rounded-full">
//                   / Solutions /
//                 </button>
//                 <button className="px-4 p-2 bg-white text-black rounded-full text-sm">
//                   / Urban /
//                 </button>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div
//               className="relative h-64 rounded-xl overflow-hidden bg-cover bg-center text-white flex items-center justify-center"
//               style={{
//                 backgroundImage: `url(${SecondCard.src})`, // any background image
//               }}
//             >
//               <div className="max-w-[80%] lg:mt-30">
//                 <div>
//                   <h2 className="text-xl font-semibold">
//                     AI strategy and Consulting
//                   </h2>
//                   <p className="text-sm">
//                     Provide expert guidance on developing an AI strategy
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="w-full md:w-[75%] rounded p-6">
//             <h2
//               className=" mb-4"
//               style={{
//                 fontSize: "clamp(2rem, 5vw, 3rem)",
//               }}
//             >
//               Overview
//             </h2>
//             <p className="text-base">
//               AgentForge is a revolutionary marketplace platform that
//               democratizes the creation, distribution, and monetization of
//               autonomous AI agents. This ecosystem enables developers,
//               businesses, and everyday users to build, customize, and trade
//               specialized AI workflows and solutions.
//             </p>
//             <div className="mt-10 md:mt-20 flex justify-center">
//               <Image
//                 src={Overview}
//                 alt="Overview iMAGE"
//                 className="rounded-xl object-cover"
//               />
//             </div>

//             <h2
//               className=" mb-5 mt-14"
//               style={{
//                 fontSize: "clamp(2rem, 5vw, 3rem)",
//               }}
//             >
//               Client Need / Challenge
//             </h2>
//             <p className="text-base font-bold">
//               As AI capabilities advanced rapidly, there emerged a significant
//               gap between technical experts who could build custom AI solutions
//               and the broader market that needed these tools. Organizations
//               required specialized AI agents for unique workflows, but lacked
//               the expertise to develop them in-house. Meanwhile, AI developers
//               needed a streamlined platform to distribute their innovations and
//               establish sustainable revenue streams.
//             </p>
//             <div className="mt-10 space-y-5 md:space-y-0 md:flex gap-5 justify-center items-center text-center">
//               <Image
//                 src={Nelson1}
//                 alt="Nelson"
//                 className="rounded-xl object-cover"
//               />
//               <Image
//                 src={Nelson2}
//                 alt="Nelson"
//                 className="rounded-xl object-cover"
//               />
//             </div>
//             <h2
//               className=" mb-5 mt-10"
//               style={{
//                 fontSize: "clamp(2rem, 5vw, 3rem)",
//               }}
//             >
//               Our Solution
//             </h2>
//             <p className="text-base">
//               We developed AgentForge, a comprehensive platform that bridges
//               this gap by providing both a marketplace for AI agents and the
//               development tools to create them. The solution leverages a
//               microservices architecture built on Kubernetes with a React-based
//               frontend and Python/Node.js backend. We implemented a proprietary
//               agent orchestration framework that allows for seamless integration
//               with major LLM providers (OpenAI, Anthropic, etc.) while
//               maintaining consistent performance standards and security
//               protocols.
//             </p>
//             <p className="text-base mt-5">
//               The platform also features a no-code agent builder with visual
//               programming components for non-technical users, alongside advanced
//               SDK access for developers who need deeper customization. A robust
//               verification and testing framework ensures all marketplace agents
//               meet quality and security standards before publication.
//             </p>
//             <div className="bg-gray-100 p-8 rounded-xl flex items-start gap-4 mt-10">
//               {/* Logo/Image */}
//               <Image
//                 src={Vector}
//                 alt="Logo"
//                 className="w-8 h-8 object-contain"
//               />

//               {/* Bullet Content */}
//               <ul
//                 className="list-disc pl-5 font-bold"
//                 style={{
//                   fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
//                 }}
//               >
//                 Artificial Intelligence refers to the development of computer
//                 systems that can perform tasks that would typically require
//                 human intelligence. It involves the creation of algorithms and
//                 models that enable machines to learn, reason, perceive.
//                 <p className="text-lg text-[#9B9B9B] mt-5 !font-medium">
//                   Adam Peterson
//                 </p>
//               </ul>
//             </div>
//             <div className="flex flex-col md:flex-row gap-8 mt-10 lg:mt-20">
//               {/* Left Column - 60% */}
//               <div className="md:w-[60%] w-full">
//                 {/* Heading */}
//                 <p
//                   className="mb-7 leading-12"
//                   style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
//                 >
//                   Key Features & Capabilities
//                 </p>

//                 {/* Bullet Points */}
//                 <ul className="space-y-0">
//                   {[
//                     {
//                       title: "Agent Builder Studio: ",
//                       content:
//                         "Visual No code-based development and Code Based environments with testing tools and templates",
//                     },
//                     {
//                       title: "Enterprise Deployment Framework: ",
//                       content:
//                         "Secure deployment options for sensitive corporate environments",
//                     },
//                     {
//                       title: "Discovery Engine: ",
//                       content:
//                         "Advanced search and recommendation system to match users with relevant agents",
//                     },
//                     {
//                       title: "Monetization Infrastructure: ",
//                       content:
//                         "Flexible pricing models including subscriptions, one-time purchases, and usage-based billing",
//                     },
//                     {
//                       title: "Integration Ecosystem: ",
//                       content:
//                         "Pre-built connectors for popular business tools and data sources",
//                     },
//                     {
//                       title: "Governance Console: ",
//                       content:
//                         "Compliance monitoring and usage analytics for enterprise customers.",
//                     },
//                   ].map((point, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       {/* Bullet image (replace BulletIcon later) */}
//                       <Image
//                         src={BulletIcon}
//                         alt="Bullet"
//                         className="w-3 h-4 mt-1"
//                       />
//                       <span className="text-lg">
//                         <b>{point.title}:</b> {point.content}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Right Column - 40% */}
//               <div className="md:w-[40%] w-full flex items-end justify-center px-20">
//                 <div className="space-y-6">
//                   {/* 90% Block */}
//                   <div className="relative inline-block">
//                     {/* Gradient Outline */}
//                     <h1
//                       className="text-8xl font-bold absolute inset-0"
//                       style={{
//                         color: "transparent",
//                         WebkitTextStroke: "3px transparent",
//                         backgroundImage:
//                           "linear-gradient(to right, #0B5CFF, #FF710C)",
//                         WebkitBackgroundClip: "text",
//                         zIndex: 0,
//                       }}
//                     >
//                       90
//                       <span
//                         style={{
//                           backgroundImage:
//                             "linear-gradient(to right, #0B5CFF, #FF710C)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextStroke: "2px transparent",
//                           color: "transparent",
//                         }}
//                       >
//                         %
//                       </span>
//                     </h1>

//                     {/* White Foreground */}
//                     <h1 className="text-8xl font-bold relative z-10 text-white">
//                       90%
//                     </h1>

//                     {/* Label */}
//                     <p className="text-xl font-semibold mt-2">
//                       Savings in cost on video production
//                     </p>
//                   </div>

//                   {/* 250+ Block */}
//                   <div className="relative inline-block">
//                     {/* Gradient Outline */}
//                     <h1
//                       className="text-8xl font-bold absolute inset-0"
//                       style={{
//                         color: "transparent",
//                         WebkitTextStroke: "3px transparent",
//                         backgroundImage:
//                           "linear-gradient(to right, #0B5CFF , #FF710C)",
//                         WebkitBackgroundClip: "text",
//                         zIndex: 0,
//                       }}
//                     >
//                       250
//                       <span
//                         style={{
//                           backgroundImage:
//                             "linear-gradient(to right, #0B5CFF, #FF710C)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextStroke: "2px transparent",
//                           color: "transparent",
//                         }}
//                       >
//                         +
//                       </span>
//                     </h1>

//                     {/* White Foreground */}
//                     <h1 className="text-8xl font-bold relative z-10 text-white">
//                       250+
//                     </h1>

//                     {/* Label */}
//                     <p className="text-xl font-semibold mt-2">
//                       Increase in learning
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <p
//               className="text-black mt-10"
//               style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
//             >
//               Impact&Results
//             </p>
//             <p className="text-base mt-5">
//               In the first month, AgentForge has attracted over 600 developers
//               who have published more than 200 unique agents. Enterprise clients
//               report average productivity gains of 32% in workflows where custom
//               agents have been deployed. The agent development time has
//               decreased by 78% compared to traditional custom AI solution
//               implementations.
//             </p>
//             <p
//               className="text-black mt-10"
//               style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
//             >
//               Why It Matters
//             </p>
//             <p className="text-base mt-5">
//               AgentForge represents a fundamental shift in how AI solutions are
//               developed and distributed, creating a thriving ecosystem that
//               benefits both creators and users. By lowering the barriers to
//               entry for AI agent development and deployment, we are accelerating
//               the adoption of transformative AI capabilities across industries
//               and democratizing access to this powerful technology.
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer
//         headings={aboutUsData.footer.headings}
//         description={aboutUsData.footer.description}
//         gradientIndex={aboutUsData.footer.gradientIndex}
//         gradientWordCount={aboutUsData.footer.gradientWordCount}
//       />
//     </>
//   );
// };

// export default CaseStudiesDynamicPage;

import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import Image from "next/image";
import BulletIcon from "../../../public/assets/CaseStudy/Icon.png";
import { CaseStudiesData } from "@/app/interfaces/CaseStudyPage";
import Footer from "../layout/Footer/Footer";
import { caseStudiesData } from "@/app/data/CaseStudyPage/AgentForge";

const CaseStudiesDynamicPage = ({ data }: { data: CaseStudiesData }) => {
  return (
    <>
      <TopBannerCard
        imageSrc={data.background}
        title={data.topBanner.title}
        description={data.topBanner.description}
      />

      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column (Cards) */}
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-[#0b1629] rounded-xl shadow-md p-4 flex flex-col items-center gap-4">
              {/* Top Blue Bar with Image */}
              <div className="w-full bg-[#001060] h-16 flex items-center justify-center rounded-xl">
                <Image
                  src={data.cards.client.image}
                  alt="icon"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div>
                {data.cards.client.labels.map((label, index) => (
                  <div key={index}>
                    <p className="text-[#9B9B9B] text-sm">{label.key}</p>
                    <p
                      className="text-white"
                      style={{
                        fontSize:
                          index === 0
                            ? "clamp(1.25rem, 2.5vw, 1.5rem)"
                            : "text-base",
                      }}
                    >
                      {label.value}
                    </p>
                    {index < data.cards.client.labels.length - 1 && (
                      <p className="text-[#9B9B9B] text-sm mt-5"></p>
                    )}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex md:block lg:flex gap-2 mt-5 space-y-0 md:space-y-3 lg:space-y-0">
                {data.cards.buttons.map((button, index) => (
                  <button key={index} className={button.className}>
                    {button.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative h-64 rounded-xl overflow-hidden bg-cover bg-center text-white flex items-center justify-center"
              style={{
                backgroundImage: `url(${data.cards.strategy.image.src})`,
              }}
            >
              <div className="max-w-[80%] lg:mt-30">
                <div>
                  <h2 className="text-xl font-semibold">
                    {data.cards.strategy.title}
                  </h2>
                  <p className="text-sm">{data.cards.strategy.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[75%] rounded p-0 md:p-6">
            <h2
              className="mb-4 leading-[clamp(2rem,6vw,3rem)]"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              Overview
            </h2>
            <p className="text-base">{data.overview.text}</p>
            <div className="mt-10 md:mt-20 flex justify-center">
              <Image
                src={data.overview.image}
                alt="Overview Image"
                className="rounded-xl object-cover"
              />
            </div>

            <h2
              className="mb-5 mt-14 leading-[clamp(2rem,6vw,3rem)]"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              Client Need / Challenge
            </h2>
            <p className="text-base sm:font-bold">{data.clientNeed.text}</p>
            <div className="mt-10 space-y-5 md:space-y-0 md:flex gap-5 justify-center items-center text-center">
              {data.clientNeed.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Client Need Image"
                  className="rounded-xl object-cover"
                />
              ))}
            </div>

            <h2
              className="mb-5 mt-10 leading-[clamp(2rem,6vw,3rem)]"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              Our Solution
            </h2>
            {data.solution.text.map((text, index) => (
              <p key={index} className="text-base">
                {text}
              </p>
            ))}
            <div className="bg-gray-100 p-3 md:p-8 rounded-xl flex items-start gap-4 mt-10">
              {/* Logo/Image */}
              <Image
                src={data.solution.vectorImage}
                alt="Logo"
                className="w-8 h-8 object-contain hidden md:block"
              />

              {/* Bullet Content */}
              <ul
                className="pl-1 md:pl-2 lg:pl-5 font-bold"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                }}
              >
                <li>{data.solution.bulletText}</li>
                <p className="text-lg text-[#9B9B9B] mt-5 !font-medium">
                  {data.solution.author}
                </p>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-10 lg:mt-20">
              {/* Left Column - 60% */}
              <div className="md:w-[60%] w-full">
                {/* Heading */}
                <p
                  className="mb-7 leading-[clamp(2rem,6vw,3rem)]"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
                >
                  {data.keyFeatures.title}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-0">
                  {data.keyFeatures.items.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Image
                        src={BulletIcon}
                        alt="Bullet"
                        className="w-3 h-4 mt-1"
                      />
                      <span className=" text-base md:text-lg">
                        <b>{point.title}</b> {point.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - 40% */}
              <div className="md:w-[40%] w-full flex items-end justify-center px-20">
                <div className="space-y-6">
                  {/* Metric 1 Block */}
                  <div className="relative inline-block">
                    <h1
                      className="text-8xl font-bold absolute inset-0"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "3px transparent",
                        backgroundImage: data.metrics.metric1.gradientColor,
                        WebkitBackgroundClip: "text",
                        zIndex: 0,
                      }}
                    >
                      {data.metrics.metric1.value.split("%")[0]}
                      {data.metrics.metric1.value.includes("%") && (
                        <span
                          style={{
                            backgroundImage: data.metrics.metric1.gradientColor,
                            WebkitBackgroundClip: "text",
                            WebkitTextStroke: "2px transparent",
                            color: "transparent",
                          }}
                        >
                          %
                        </span>
                      )}
                    </h1>
                    <h1 className="text-8xl font-bold relative z-10 text-white">
                      {data.metrics.metric1.value}
                    </h1>
                    <p className="text-xl font-semibold mt-2">
                      {data.metrics.metric1.label}
                    </p>
                  </div>

                  {/* Metric 2 Block */}
                  <div className="relative inline-block">
                    <h1
                      className="text-8xl font-bold absolute inset-0"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "3px transparent",
                        backgroundImage: data.metrics.metric2.gradientColor,
                        WebkitBackgroundClip: "text",
                        zIndex: 0,
                      }}
                    >
                      {data.metrics.metric2.value.split("+")[0]}
                      {data.metrics.metric2.value.includes("+") && (
                        <span
                          style={{
                            backgroundImage: data.metrics.metric2.gradientColor,
                            WebkitBackgroundClip: "text",
                            WebkitTextStroke: "2px transparent",
                            color: "transparent",
                          }}
                        >
                          +
                        </span>
                      )}
                    </h1>
                    <h1 className="text-8xl font-bold relative z-10 text-white">
                      {data.metrics.metric2.value}
                    </h1>
                    <p className="text-xl font-semibold mt-2">
                      {data.metrics.metric2.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p
              className="text-black mt-10 leading-[clamp(2rem,6vw,3rem)]"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
            >
              {data.impactResults.title}
            </p>
            <p className="text-base mt-5">{data.impactResults.text}</p>

            <p
              className="text-black mt-10 leading-[clamp(2rem,6vw,3rem)]"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
            >
              {data.whyItMatters.title}
            </p>
            <p className="text-base mt-5">{data.whyItMatters.text}</p>
          </div>
        </div>
      </div>

      <Footer
        headings={data.footer.headings}
        description={data.footer.description}
        gradientIndex={data.footer.gradientIndex}
        gradientWordCount={data.footer.gradientWordCount}
      />
    </>
  );
};

export default CaseStudiesDynamicPage;

// Update getStaticProps to be dynamic if needed
export async function getStaticProps() {
  return {
    props: {
      data: caseStudiesData,
    },
  };
}

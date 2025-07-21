// app/case-studies/[case-studies]/page.tsx

import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import Background from "../../../public/assets/CaseStudy/CaseStudiesBg1.png";
import CardImage from "../../../public/assets/CaseStudy/caseStudiesLaw.png";
import SecondCard from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
import Overview from "../../../public/assets/CaseStudy/overview.png";
import Nelson1 from "../../../public/assets/CaseStudy/Nelson1.png";
import Nelson2 from "../../../public/assets/CaseStudy/Nelson2.png";
import Vector from "../../../public/assets/CaseStudy/Vector.png";
import Image from "next/image";

const CaseStudiesDynamicPage = () => {
  return (
    <>
      <TopBannerCard
        imageSrc={Background}
        title="HI Testing"
        description="HI Tesying This Component"
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
                  src={CardImage}
                  alt="icon"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[#9B9B9B] text-sm">Client</p>
                <p
                  className=" text-white"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                  }}
                >
                  QUO Legal Firm
                </p>
                <p className="text-[#9B9B9B] text-sm mt-5">Sector</p>
                <p className="text-base text-white">
                  Infrastructure, Defence and Transport, Public Sector, Health
                  and Not For Profit
                </p>
                <p className="text-[#9B9B9B] text-sm mt-5">Offering</p>
                <p className="text-base text-white">Organization Design</p>
              </div>

              {/* Buttons */}
              <div className="flex md:block lg:flex gap-2 mt-5 space-y-0 md:space-y-3 lg:space-y-0">
                <button className="px-4 p-2 bg-white text-sm text-black rounded-full">
                  / Solutions /
                </button>
                <button className="px-4 p-2 bg-white text-black rounded-full text-sm">
                  / Urban /
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative h-64 rounded-xl overflow-hidden bg-cover bg-center text-white flex items-center justify-center"
              style={{
                backgroundImage: `url(${SecondCard.src})`, // any background image
              }}
            >
              <div className="max-w-[80%] lg:mt-30">
                <div>
                  <h2 className="text-xl font-semibold">
                    AI strategy and Consulting
                  </h2>
                  <p className="text-sm">
                    Provide expert guidance on developing an AI strategy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[75%] rounded p-6">
            <h2
              className=" mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
            >
              Overview
            </h2>
            <p className="text-base">
              AgentForge is a revolutionary marketplace platform that
              democratizes the creation, distribution, and monetization of
              autonomous AI agents. This ecosystem enables developers,
              businesses, and everyday users to build, customize, and trade
              specialized AI workflows and solutions.
            </p>
            <div className="mt-10 md:mt-20 flex justify-center">
              <Image
                src={Overview}
                alt="Overview iMAGE"
                className="rounded-xl object-cover"
              />
            </div>

            <h2
              className=" mb-5 mt-14"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
            >
              Client Need / Challenge
            </h2>
            <p className="text-base font-bold">
              As AI capabilities advanced rapidly, there emerged a significant
              gap between technical experts who could build custom AI solutions
              and the broader market that needed these tools. Organizations
              required specialized AI agents for unique workflows, but lacked
              the expertise to develop them in-house. Meanwhile, AI developers
              needed a streamlined platform to distribute their innovations and
              establish sustainable revenue streams.
            </p>
            <div className="mt-10 space-y-5 md:space-y-0 md:flex gap-5 justify-center items-center text-center">
              <Image
                src={Nelson1}
                alt="Nelson"
                className="rounded-xl object-cover"
              />
              <Image
                src={Nelson2}
                alt="Nelson"
                className="rounded-xl object-cover"
              />
            </div>
            <h2
              className=" mb-5 mt-10"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
            >
              Our Solution
            </h2>
            <p className="text-base">
              We developed AgentForge, a comprehensive platform that bridges
              this gap by providing both a marketplace for AI agents and the
              development tools to create them. The solution leverages a
              microservices architecture built on Kubernetes with a React-based
              frontend and Python/Node.js backend. We implemented a proprietary
              agent orchestration framework that allows for seamless integration
              with major LLM providers (OpenAI, Anthropic, etc.) while
              maintaining consistent performance standards and security
              protocols.
            </p>
            <p className="text-base mt-5">
              The platform also features a no-code agent builder with visual
              programming components for non-technical users, alongside advanced
              SDK access for developers who need deeper customization. A robust
              verification and testing framework ensures all marketplace agents
              meet quality and security standards before publication.
            </p>
            <div className="bg-gray-100 p-8 rounded-xl flex items-start gap-4 mt-10">
              {/* Logo/Image */}
              <Image
                src={Vector}
                alt="Logo"
                className="w-8 h-8 object-contain"
              />

              {/* Bullet Content */}
              <ul
                className="list-disc pl-5 font-bold"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                }}
              >
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that would typically require
                human intelligence. It involves the creation of algorithms and
                models that enable machines to learn, reason, perceive.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDynamicPage;

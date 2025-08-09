import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import SideCard from "@/app/shared/SideCard";
import Image from "next/image";
import BlackIcon from "../../../public/assets/Icons/BLeftIcon.png";
import TableComponent from "@/app/shared/CareerTable";
import Footer from "@/app/components/layout/Footer/Footer";
import { careerDetails } from "@/app/data/Career/CareerDetails";

const CareerDetails = () => {
  return (
    <div className="container max-w-full">
      <TopBannerCard
        imageSrc={careerDetails.banner.image}
        title={careerDetails.banner.title}
        description={careerDetails.banner.description}
      />

      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column (Cards) */}
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            {/* <div className="bg-gray-200 p-5 pt-10 rounded-xl">
              <div className="flex gap-10 text-base text-[#9B9B9B] font-semibold">
                <p>{careerDetails.jobInfo.type}</p>
                <p>{careerDetails.jobInfo.level}</p>
              </div>
              <p className="text-xl text-black font-semibold mt-5">
                {careerDetails.jobInfo.salary}
              </p>
            </div> */}
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
                      className="w-3 h-3 mt-1"
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

import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import Image from "next/image";
import BulletIcon from "../../../public/assets/Icons/BLeftIcon.png";
import { CaseStudiesData } from "@/app/interfaces/CaseStudyPage";
import Footer from "../layout/Footer/Footer";
import { caseStudiesData } from "@/app/data/CaseStudyPage/AgentForge";

const CaseStudiesDynamicPage = ({ data }: { data: CaseStudiesData }) => {
  return (
    <>
      <div className="container max-w-full">
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
                {/* <div className="flex md:block lg:flex gap-2 mt-5 space-y-0 md:space-y-3 lg:space-y-0">
                {data.cards.buttons.map((button, index) => (
                  <button key={index} className={button.className}>
                    {button.text}
                  </button>
                ))}
              </div> */}
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
              <p className="text-base">{data.clientNeed.text}</p>
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
                          className="w-3 h-3 mt-2"
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
                              backgroundImage:
                                data.metrics.metric1.gradientColor,
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
                              backgroundImage:
                                data.metrics.metric2.gradientColor,
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
      </div>
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

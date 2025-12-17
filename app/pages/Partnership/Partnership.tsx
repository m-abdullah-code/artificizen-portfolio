"use client";

import React from "react";
import TopBannerCard from "@/app/shared/TopBannerCard";
import CardWithContent from "@/app/shared/CardWithContent";
import Image from "next/image";
import StorySection from "@/app/shared/StorySection";
import Footer from "@/app/components/layout/Footer/Footer";
import { bycData } from "@/app/data/PartnershipPage/PartnershipPage";
import Link from "next/link";

const BringYourClient = () => {
  return (
    <div className="">
      <TopBannerCard
        imageSrc={bycData.banner.image}
        title={bycData.banner.title}
        description={bycData.banner.description}
        breadcrumb={["Home", "BYC"]}
      />

      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <CardWithContent
          topText={bycData.cardWithContent.topText}
          heading={bycData.cardWithContent.heading}
          content={bycData.cardWithContent.content}
          image={bycData.cardWithContent.image}
          imagePosition={bycData.cardWithContent.imagePosition}
          lineIndex={bycData.cardWithContent.lineIndex}
          wordCount={bycData.cardWithContent.wordCount}
          href=""
        />
      </div>

      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto">
          <p className="text-base">{bycData.howItWorks.topText}</p>
          <p
            className="lg:max-w-[70%] font-semibold"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              lineHeight: "clamp(2rem, 6vw, 3.5rem)",
            }}
          >
            <span className="text-[#6f9af8]">{bycData.howItWorks.heading}</span>{" "}
            {bycData.howItWorks.subheading}
          </p>

          {/* Cards */}
          <div className="mt-16 text-center flex flex-1/3 flex-wrap justify-center gap-8 place-items-center">
            {bycData.howItWorks.cards.map((item, index) => (
              <div key={index} className="text-center w-full sm:max-w-[30%]">
                <p
                  className="font-bold text-white"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 5rem)",
                    WebkitTextStroke: "1px lightgray",
                  }}
                >
                  {item.number}
                </p>
                <p
                  className="font-semibold"
                  style={{
                    fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)",
                  }}
                >
                  {item.title}
                </p>
                <p className="text-base text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto ">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={bycData.uniqueSection.image || bycData.banner.image} // Fallback to banner image if needed
                alt="BYC"
                className="w-full h-auto md:h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2">
              <h2
                className="text-black"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                  lineHeight: "clamp(2rem, 6vw, 4rem)",
                }}
              >
                <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                  {bycData.uniqueSection.heading}
                </span>{" "}
                {bycData.uniqueSection.subheading}
              </h2>
              <p className="text-base text-gray-700 mt-4">
                {bycData.uniqueSection.content}
              </p>

              {/* Points */}
              <div className="mt-6 space-y-2">
                {bycData.uniqueSection.points.map((item) => (
                  <div key={item.number} className="flex items-start gap-2">
                    <span className="text-primary font-semibold">
                      {item.number}.
                    </span>
                    <div>
                      <p className="text-base font-medium text-black">
                        {item.title}:{" "}
                        <span className="font-normal">{item.content}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20 lg:mt-40">
                <h2
                  className="text-black"
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                    lineHeight: "clamp(2rem, 6vw, 4rem)",
                  }}
                >
                  <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                    {bycData.dashboardSection.heading}
                  </span>{" "}
                  {bycData.dashboardSection.subheading}
                </h2>

                {/* Points */}
                <div className="mt-6 space-y-4">
                  {bycData.dashboardSection.points.map((item) => (
                    <div key={item.content} className="flex items-start gap-2">
                      <span className="text-xl font-semibold">•</span>
                      <div>
                        <p className="text-black">
                          <span className="font-semibold text-base">
                            {item.content}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-20 lg:mt-40">
                <h2
                  className="text-black"
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                    lineHeight: "clamp(2rem, 6vw, 4rem)",
                  }}
                >
                  <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                    {bycData.loyaltyBonusSection.heading}
                  </span>{" "}
                  {bycData.loyaltyBonusSection.subheading}
                </h2>
                <p className="text-base text-gray-700 mt-4">
                  {bycData.loyaltyBonusSection.content}
                </p>

                {/* Points */}
                <div className="mt-6 space-y-4">
                  {bycData.loyaltyBonusSection.points.map((item) => (
                    <div key={item.content} className="flex items-start gap-2">
                      <span className="text-xl font-semibold">•</span>
                      <div>
                        <p className="text-base font-medium text-black">
                          <span className="font-normal">{item.content}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-20 lg:mt-40">
                <h2
                  className="text-black"
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                    lineHeight: "clamp(2rem, 6vw, 4rem)",
                  }}
                >
                  <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                    {bycData.whoShouldJoinSection.heading}
                  </span>{" "}
                  {bycData.whoShouldJoinSection.subheading}
                </h2>
                {/* Points */}
                <div className="mt-6 space-y-4">
                  {bycData.whoShouldJoinSection.points.map((item) => (
                    <div key={item.content} className="flex items-start gap-2">
                      <span className="text-xl font-semibold">•</span>
                      <div>
                        <p className="text-base font-medium text-black">
                          {item.title}:{" "}
                          <span className="font-normal">{item.content}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-30">
        <StorySection
          data={{
            title: bycData.storySection.title,
            subtitle: bycData.storySection.subtitle,
            starColor: bycData.storySection.starColor,
            cards: bycData.storySection.cards,
          }}
        />
      </div>

      <div className="relative bg-gray-100 py-7 px-10 md:py-10 md:px-14 rounded-xl overflow-hidden mt-10 max-w-[1360px] mx-auto">
        <h2
          className="leading-13"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
        >
          <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
            {bycData.actionSection.heading}
          </span>{" "}
          {bycData.actionSection.subheading}
        </h2>
        <p className="text-base font-semibold text-black mt-4">
          {bycData.actionSection.content}
        </p>
        <div className="flex flex-wrap justify-start gap-4 mt-6">
          {bycData.actionSection.buttons.map((button, index) => {
            const ButtonContent = (
              <button
                key={index}
                className="flex items-center gap-2 py-3 px-5 bg-[#0b5cff] text-white rounded-full cursor-pointer"
              >
                <Image src={button.icon} alt={button.alt} className="w-3 h-3" />
                <span>{button.text}</span>
              </button>
            );

            return button.link ? (
              <Link href={button.link} key={index}>
                {ButtonContent}
              </Link>
            ) : (
              ButtonContent
            );
          })}
        </div>

        <Image
          src={bycData.actionSection.decorImage}
          alt="Decor"
          className="absolute bottom-4 left-4 w-24 h-auto pointer-events-none"
        />
      </div>


      <div className="mt-10 md:mt-20">
        <Footer
          headings={bycData.footer.headings}
          description={bycData.footer.description}
          gradientIndex={bycData.footer.gradientIndex}
          gradientWordCount={bycData.footer.gradientWordCount}
        />
      </div>
    </div>
  );
};

export default BringYourClient;

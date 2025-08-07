import React from "react";
import Image from "next/image";
import GenericCard from "../../shared/CardWithContent";
import { aboutUsData } from "@/app/data/AboutUsPage/ABoutsUsPage";
import Footer from "@/app/components/layout/Footer/Footer";

const AboutUsPage = () => {
  return (
    <div>
      {/* Top Image with Centered Text */}
      <div className="relative w-full bg-[#F0F2F4]">
        {/* Background Image */}
        <Image
          src={aboutUsData.background}
          alt="About Us"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center text-white text-center px-10">
          <h1
            className="font-bold md:mb-4 text-start"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3.75rem)",
            }}
          >
            {aboutUsData.overlay.heading}
          </h1>

          <p
            className="text-start"
            style={{
              fontSize: "clamp(0.7rem, 2.5vw, 1.25rem)",
            }}
          >
            {aboutUsData.overlay.subheading}
          </p>
          <p
            className="text-start lg:mt-5"
            style={{
              fontSize: "clamp(0.7rem, 2.5vw, 1.25rem)",
            }}
          >
            {aboutUsData.overlay.quote}
          </p>
          <p
            className="text-center"
            style={{
              fontSize: "clamp(0.7rem, 2.5vw, 1.25rem)",
            }}
          >
            {aboutUsData.overlay.author}
          </p>
        </div>
      </div>
      <div className="mt-10">
        {/* First Card */}
        <GenericCard
          heading={aboutUsData.cards[0].heading}
          content={aboutUsData.cards[0].content}
          image={aboutUsData.cards[0].image}
          imagePosition={aboutUsData.cards[0].imagePosition}
          lineIndex={aboutUsData.cards[0].lineIndex}
          wordCount={aboutUsData.cards[0].wordCount}
          href=""
        />
      </div>

      <div className="flex justify-center md:justify-between flex-wrap gap-10 lg:-mt-10">
        {aboutUsData.imageRow.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-[130px] h-[50px]"
          />
        ))}
      </div>

      {/* Second Card */}
      <div className="mt-10">
        <GenericCard
          heading={aboutUsData.cards[1].heading}
          content={aboutUsData.cards[1].content}
          image={aboutUsData.cards[1].image}
          imagePosition={aboutUsData.cards[1].imagePosition}
          lineIndex={aboutUsData.cards[1].lineIndex}
          wordCount={aboutUsData.cards[1].wordCount}
          href=""
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column */}
        <div className="w-full lg:w-[45%]">
          <p className="text-base">/ team /</p>
          <p
            className="mt-2 leading-13"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            {aboutUsData.team.heading}
          </p>
          <p className="text-xl text-black mt-10 md:mt-30">
            Awesome team members
          </p>
          <div className="inline-block mt-10 rounded-full p-[2px] bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]">
            <button className="rounded-full bg-white text-black px-10 py-2 text-base font-medium">
              {aboutUsData.team.buttonText}
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative border border-[#E3E3E3] w-[250px] rounded-xl mt-10">
              <div className="absolute -right-18 top-28 transform -rotate-90 text-[35px] font-bold text-white tracking-widest">
                CREATIVE
              </div>
              <Image
                src={aboutUsData.team.creativeLead.image}
                alt="Sohaib"
                className="w-[250px] h-[73%] object-cover rounded-xl"
              />
              <div className="!p-5">
                <p className="font-semibold text-lg">
                  {aboutUsData.team.creativeLead.name}
                </p>
                <p className="text-sm">{aboutUsData.team.creativeLead.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-start">
          {aboutUsData.team.members.map((member, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col border border-[#E3E3E3] w-[250px] rounded-xl overflow-hidden ${
                idx === 1 || idx === 3 ? "mt-5" : ""
              }`}
            >
              <div className="absolute right-5 transform -rotate-90 origin-right text-[35px] font-bold text-white">
                {member.designation}
              </div>
              <Image
                src={member.src}
                alt={member.name}
                className="w-[250px] h-full object-cover rounded-xl"
              />
              <div className="p-5">
                <p className="font-semibold text-lg text-start">
                  {member.name}
                </p>
                <p className="text-sm text-gray-500 text-start">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div>
            <p className="text-base text-black">/ how it works /</p>
            <h2
              className="mb-4 leading-13"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
            >
              {aboutUsData.howItWorks.heading}
            </h2>
            <p className="text-base text-black mb-7">
              {aboutUsData.howItWorks.subheading}
            </p>

            <div className="space-y-6">
              {aboutUsData.howItWorks.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-10">
                  <div
                    className="text-white font-semibold text-6xl"
                    style={{
                      WebkitTextStroke: "1.5px transparent",
                      backgroundImage:
                        "linear-gradient(to right, #0B5CFF, #FF710C)",
                      WebkitBackgroundClip: "text",
                      color: "white",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">{point.title}</h4>
                    <p className="text-base text-gray-600">{point.content}</p>
                  </div>
                </div>
              ))}
              {aboutUsData.howItWorks.additionalText.map((text, idx) => (
                <p key={idx} className="text-base">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <Image
              src={aboutUsData.howItWorks.image}
              alt="Why choose us"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-base">/ Why Choose Us /</p>
        <p
          className="leading-12"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
          }}
        >
          <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
            {aboutUsData.whyChooseUs.heading.split(" ").slice(0, 2)}
          </span>{" "}
          {aboutUsData.whyChooseUs.heading.split(" ").slice(2).join(" ")}
        </p>

        <div className="px-4 py-8 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutUsData.whyChooseUs.items.map((item, index, arr) => (
              <div
                key={index}
                className={`pr-6 relative ${
                  index !== arr.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base text-black">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer
        headings={aboutUsData.footer.headings}
        description={aboutUsData.footer.description}
        gradientIndex={aboutUsData.footer.gradientIndex}
        gradientWordCount={aboutUsData.footer.gradientWordCount}
      />
    </div>
  );
};

export default AboutUsPage;

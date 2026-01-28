import React, { lazy } from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutUsData } from "@/app/data/AboutUsPage/ABoutsUsPage";
import Footer from "@/app/components/layout/Footer/Footer";

const GenericCard = lazy(() => import("@/app/shared/CardWithContent"))
const LogoSlider = lazy(() => import("@/app/components/LogoSlider/page"))

import ShareIcon from "@/public/assets/AboutUs/about_share.svg"
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutUsPage = () => {



  return (
    <div className="">
      {/* Top Image with Centered Text */}
      {/* About Page:  Banner */}
      <div className="w-full bg-[#F0F2F4] rounded-b-3xl p-4 sm:p-8 lg:p-10 !pt-35 lg:mb-10 mb-12">
        <div className="max-w-[1360px] mx-auto relative rounded-3xl overflow-hidden">

          <div className="absolute -bottom-2 sm:-bottom-3 left-10 sm:left-13 z-30 bg-[#F0F2F4] py-2.5 sm:py-5 px-5 sm:px-10 flex items-center gap-2 text-[#333333] rounded-t-2xl sm:rounded-t-3xl banner_tag">
            <p className="text-sm relative">Home
              <div className="absolute h-[1px] w-full bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]"></div>
            </p>
            <span>/</span>
            <p className="text-sm">About Us</p>
          </div>
          {/* Background Image */}
          <Image
            src={aboutUsData.background}
            alt="About Us"
            fill
            className="object-cover z-0 object-right md:object-right"
          />

          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center h-[300px] sm:h-[400px] lg:h-[500px] px-4 sm:px-8 lg:px-12 text-white lg:max-w-[65%]">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-tight">
              {aboutUsData.overlay.heading}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mt-2">
              {aboutUsData.overlay.subheading}
            </p>

            <p className="text-lg sm:text-xl md:text-2xl mt-3 lg:mt-5 max-w-[90%]">
              {aboutUsData.overlay.quote}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-center mt-4">
              {aboutUsData.overlay.author}
            </p>

          </div>
        </div>
      </div>

      {/* Pioneering Ai for human */}
      <div className="px-4 sm:px-6 py-10 sm:py-12">
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

      {/* Company Logos Slider */}
      <LogoSlider />

      {/* Our Philosophy */}
      <div className="px-4 sm:px-6 py-10 sm:py-12">
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

      {/* Our Team */}
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <p className="text-sm sm:text-base">/ team /</p>
              <p className="text-3xl sm:text-5xl md:text-6xl leading-snug font-medium text-[#111]">
                {aboutUsData.team.heading}
              </p>
              <p className="text-lg sm:text-xl text-black mt-6 md:mt-10">
                Awesome team members
              </p>
              <div className="inline-block w-fit mt-6 sm:mt-10 rounded-full p-[2px] bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]">
                <button className="rounded-full bg-white text-black px-6 sm:px-10 py-2 sm:py-2.5 text-sm sm:text-base font-medium">
                  {aboutUsData.team.buttonText}
                </button>
              </div>

              <div className="flex justify-center lg:justify-end mt-6 lg:mt-10">
                <div className="relative border border-[#E3E3E3] w-full max-w-[250px] rounded-xl overflow-hidden">
                  <div className="absolute -right-10 top-20 sm:-right-18 sm:top-28 transform -rotate-90 text-[25px] sm:text-[35px] font-bold text-white tracking-widest">
                    CREATIVE
                  </div>
                  <Image
                    src={aboutUsData.team.creativeLead.image}
                    alt="Sohaib"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="p-4 sm:p-5 bg-white">
                    <p className="font-semibold text-base sm:text-lg">
                      {aboutUsData.team.creativeLead.name}
                    </p>
                    <p className="text-sm">{aboutUsData.team.creativeLead.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
              {aboutUsData.team.members.map((member, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col border border-[#E3E3E3] w-full max-w-[250px] rounded-xl ${idx === 1 || idx === 3 ? "mt-6 sm:mt-10" : ""
                    }`}
                >
                  {/* Designation Vertical Text */}
                  <div className="absolute right-2 sm:right-5 transform -rotate-90 origin-right text-[20px] sm:text-[35px] font-bold text-white z-10">
                    {member.designation}
                  </div>

                  <div className="relative w-full">
                    <Image
                      src={member.src}
                      alt={member.name}
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>

                  <div className="p-4 sm:p-5 relative bg-white">
                    {(member.designation === "CEO" || member.designation === "CO FOUNDER") && (
                      <div className="group">
                        {/* Share Icon */}
                        <div className="absolute -top-6 left-6 w-10 h-10 sm:w-14 sm:h-14 bg-[#333] rounded-full border-[4px] sm:border-[6px] border-white flex items-center justify-center z-30 cursor-pointer">
                          <Image src={ShareIcon} alt="about share" />
                        </div>

                        {/* Social Panel */}
                        <div className="absolute -top-6 left-6 w-10 sm:w-14 bg-[#333] rounded-[30px] sm:rounded-[40px] flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-6 shadow-xl opacity-0 translate-y-3 sm:translate-y-6 group-hover:opacity-100 group-hover:-translate-y-1/2 sm:group-hover:-translate-y-[70%] transition-all duration-500 ease-out z-40">
                          <Link href="#"><FaInstagramSquare className="text-white text-lg sm:text-xl" /></Link>
                          <Link href="#"><FaFacebook className="text-white text-lg sm:text-xl" /></Link>
                          <Link href="#"><FaXTwitter className="text-white text-lg sm:text-xl" /></Link>
                          <Link href="#"><FaLinkedin className="text-white text-lg sm:text-xl" /></Link>
                        </div>
                      </div>
                    )}

                    <p className="font-semibold text-sm sm:text-lg text-start mt-2">
                      {member.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 text-start">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="mt-20 sm:mt-28">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              {/* Left Section */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <p className="text-sm sm:text-base text-[#111111]">/ how it works /</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal leading-snug mb-3 sm:mb-5">
                  {aboutUsData.howItWorks.heading}
                </h2>
                <p className="text-sm sm:text-base text-black mb-4 sm:mb-7">
                  {aboutUsData.howItWorks.subheading}
                </p>

                <div className="space-y-6 sm:space-y-8">
                  {aboutUsData.howItWorks.points.map((point, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:gap-6">
                      <div
                        className="text-4xl sm:text-5xl md:text-6xl font-semibold"
                        style={{
                          WebkitTextStroke: "2px transparent",
                          backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                          WebkitBackgroundClip: "text",
                          color: "white",
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111111] text-lg sm:text-xl mb-2 sm:mb-5">
                          {point.title}
                        </h4>
                        <p className="text-sm sm:text-base text-[#333333]">{point.content}</p>
                      </div>
                    </div>
                  ))}

                  {aboutUsData.howItWorks.additionalText.map((text, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-[#333333]">
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                <Image
                  src={aboutUsData.howItWorks.image}
                  alt="Why choose us"
                  className="w-full max-w-full h-auto lg:h-[630px] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Why choose Artificizen */}
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="mt-10 flex flex-col gap-6">
            {/* Section Header */}
            <p className="text-sm sm:text-base text-[#111111]">/ Why Choose Us /</p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-snug font-normal">
              <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#0B5CFF99] bg-clip-text text-transparent">
                {aboutUsData.whyChooseUs.heading.split(" ").slice(0, 2).join(" ")}
              </span>{" "}
              {aboutUsData.whyChooseUs.heading.split(" ").slice(2).join(" ")}
            </p>

            {/* Items Grid */}
            <div className="px-2 sm:px-4 py-6 md:mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
                {aboutUsData.whyChooseUs.items.map((item, index) => (
                  <div
                    key={index}
                    className={`relative pb-5 md:pb-0 pr-0 sm:pr-0 md:pr-4 lg:pr-6 ${index % 4 !== 3 ? "border-b-2 md:border-b-0 md:border-r-2 lg:border-r-2 border-[#C2C2C2]" : ""
                      }`}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#333333]">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
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

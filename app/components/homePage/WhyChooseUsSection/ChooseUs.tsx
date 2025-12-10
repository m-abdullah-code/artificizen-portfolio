import React from "react";
import Image from "next/image";
import { chooseUsData } from "@/app/data/HomePage/ChooseUs";
import Link from "next/link";
import shareIcon from "@/public/assets/Icons/shareIcon.svg"

const ChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 px-4 sm:px-6">
      <div
        className="max-w-[1360px] mx-auto bg-[#1F1F1F] text-white rounded-3xl px-4 sm:px-7 py-10 sm:py-16 pl-0"
      // style={{
      //   clipPath: "polygon(0 30px, 30px 0, 100% 0, 100% 100%, 0% 100%)",
      // }}
      >
        {/* Grid: Left + Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left mt-6 lg:mt-10">

          {/* LEFT COLUMN */}
          <div>
            <p className="text-sm sm:text-base font-medium text-white pl-5 sm:pl-7">
              {chooseUsData.main.label}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug text-white pl-5 sm:pl-7 mt-2 sm:mt-4">
              <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#0F52BA] bg-clip-text text-transparent">
                {chooseUsData.main.heading.split(" ")[0]}
              </span>{" "}
              {chooseUsData.main.heading.split(" ").slice(1).join(" ")}
            </h2>

            <Image
              src={chooseUsData.main.image}
              alt="Why Choose Us Illustration"
              loading="lazy"
              className="rounded-lg object-cover w-full h-auto mt-4 sm:mt-6"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="-mt-3 lg:pl-0 pl-5 sm:pl-7 flex flex-col justify-start">
            <div className="relative inline-block mb-6 sm:mb-10">
              <h1
                className="xl:text-[120px] lg:text-[90px] text-[50px] font-semibold leading-snug relative inline-block"
                style={{
                  color: "#1F1F1F",
                  WebkitTextStroke: "2px transparent",
                  backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                  WebkitBackgroundClip: "text",
                }}
              >
                Artificizen
              </h1>
            </div>

            {chooseUsData.rightColumn.sections.map((section, index) => (
              <div key={index} className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold leading-snug mb-1 sm:mb-2">
                  {section.heading}
                </h3>
                <p className="text-base sm:text-lg font-medium leading-snug">
                  {section.content}
                </p>
              </div>
            ))}

            <Link href={chooseUsData.rightColumn.href}>
              <button className="text-sm sm:text-base border border-white p-2 sm:px-5 rounded-full cursor-pointer mt-4 sm:mt-6 inline-flex items-center">
                <Image
                  src={shareIcon}
                  alt="Share Icon"
                  className="inline-block mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                {chooseUsData.rightColumn.buttonText}
              </button>
            </Link>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="flex flex-col md:flex-row px-0 pl-5 sm:px-7 mt-10 lg:mt-16 gap-8 sm:gap-12">

          {/* Left Stat */}
          <div className="w-full md:w-1/2 p-2 sm:p-4">
            <div className="relative block leading-none text-start lg:-mb-10 overLay">
              <h1
                className="xl:text-[150px] lg:text-[90px] md:text-[80px] text-[60px] font-semibold leading-tight relative inline-block"
                style={{
                  color: "#1F1F1F",
                  WebkitTextStroke: "2px transparent",
                  backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                  WebkitBackgroundClip: "text",
                }}
              >
                {chooseUsData.stats.stat1.value}
              </h1>
            </div>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-normal text-white relative z-30 mt-2">
              {chooseUsData.stats.stat1.label}
            </h2>
            <p className="text-sm sm:text-base font-medium text-white leading-snug max-w-full md:max-w-[320px] relative z-30">
              {chooseUsData.stats.stat1.description}
            </p>
          </div>

          {/* Right Stat */}
          <div className="w-full md:w-1/2 p-2 sm:p-4">
            <div className="relative block leading-none text-start lg:-mb-10 overLay">
              <h1
                className="xl:text-[150px] lg:text-[90px] md:text-[80px] text-[60px] font-semibold leading-tight relative inline-block"
                style={{
                  color: "#1F1F1F",
                  WebkitTextStroke: "2px transparent",
                  backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                  WebkitBackgroundClip: "text",
                }}
              >
                {chooseUsData.stats.stat2.value}
              </h1>
            </div>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-normal text-white relative z-30 mt-2">
              {chooseUsData.stats.stat2.label}
            </h2>
            <p className="text-sm sm:text-base font-medium text-white leading-snug max-w-full md:max-w-[320px] relative z-30">
              {chooseUsData.stats.stat2.description}
            </p>
          </div>

        </div>
      </div>
    </section>

  );
};

export default ChooseUs;

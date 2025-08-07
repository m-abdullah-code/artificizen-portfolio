import React from "react";
import Image from "next/image";
import { chooseUsData } from "@/app/data/HomePage/ChooseUs";
import Link from "next/link";

const ChooseUs = () => {
  return (
    <div
      className="relative bg-black text-white px-6 py-12 text-center rounded-xl mb-10"
      style={{
        clipPath: "polygon(0% 43px, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-20">
        {/* Left Column */}
        <div>
          <p className="text-base mb-1">{chooseUsData.main.label}</p>
          <h2 className="text-[clamp(1.5rem,4vw,2.8rem)] leading-[clamp(2rem,5vw,3rem)]">
            <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#0F52BA] bg-clip-text text-transparent">
              {chooseUsData.main.heading.split(" ")[0]}
            </span>{" "}
            {chooseUsData.main.heading.split(" ").slice(1).join(" ")}
          </h2>
          <Image
            src={chooseUsData.main.image}
            alt="Why Choose Us Illustration"
            className="rounded-lg object-cover"
            width={500}
            height={300}
          />
        </div>

        {/* Right Column */}
        <div className="-mt-3">
          <div className="relative inline-block">
            {/* Outline layer (gradient text behind) */}
            <h1
              className="text-[clamp(3.5rem,10vw,7rem)] font-semibold absolute inset-0 text-black"
              style={{
                color: "black",
                WebkitTextStroke: "2px transparent",
                backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                WebkitBackgroundClip: "text",
                zIndex: 0,
              }}
            >
              Artificizen
            </h1>

            {/* Top text (white fill) */}
            <h1
              className="text-[clamp(3.5rem,10vw,7rem)]  font-semibold relative"
              style={{
                color: "black",
                zIndex: 1,
              }}
            >
              Artificizen
            </h1>
          </div>

          {chooseUsData.rightColumn.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-0">{section.heading}</h3>
              <p className="text-base text-white mb-6">{section.content}</p>
            </div>
          ))}
          <Link href={chooseUsData.rightColumn.href}>
            <button className="text-base border border-white p-2 rounded-full px-5 cursor-pointer">
              {chooseUsData.rightColumn.buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Left Column - 45% */}
        <div className="w-full md:w-[45%] p-4">
          {/* 95% Gradient Outline */}
          <div className="relative block leading-none text-start">
            {/* Outline layer */}
            <h1
              className="text-[clamp(3.5rem,10vw,8rem)]
font-bold absolute inset-0"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px transparent",
                backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                WebkitBackgroundClip: "text",
                zIndex: 0,
              }}
            >
              {chooseUsData.stats.stat1.value.split("%")[0]}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0B5CFF, #FF710C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextStroke: "2px transparent",
                  color: "transparent",
                }}
              >
                %
              </span>
            </h1>

            {/* Foreground fill */}
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold relative z-10 text-black text-start">
              {chooseUsData.stats.stat1.value}
            </h1>
          </div>
          {/* <div className="w-full h-20 bg-gradient-to-t from-black via-black/70 to-transparent absolute bottom-30 z-20"></div> */}

          <h2 className="text-[clamp(1.75rem,5vw,2.25rem)!important] mb-4 text-start relative z-30">
            {chooseUsData.stats.stat1.label}
          </h2>
          <p className="text-base text-white text-start max-w-320px]">
            {chooseUsData.stats.stat1.description}
          </p>
        </div>

        {/* Right Column - 55% */}
        <div className="w-full md:w-[55%] p-4">
          {/* $10 mil Gradient Outline */}
          <div className="relative block leading-none text-start">
            {/* Outline layer */}
            <h1
              className="text-[clamp(3.5rem,10vw,10rem)] font-bold absolute inset-0"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px transparent",
                backgroundImage: "linear-gradient(to right, #0B5CFF, #FF710C)",
                WebkitBackgroundClip: "text",
                zIndex: 0,
              }}
            >
              {chooseUsData.stats.stat2.value.split("mil")[0]}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0B5CFF, #FF710C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextStroke: "2px transparent",
                  color: "transparent",
                }}
              >
                mil
              </span>
            </h1>

            {/* Foreground fill */}
            <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-bold relative z-10 text-black text-start">
              {chooseUsData.stats.stat2.value}
            </h1>
          </div>

          <h2 className="text-[clamp(1.75rem,5vw,2.25rem)!important] mb-4 text-start relative z-20">
            {chooseUsData.stats.stat2.label}
          </h2>
          <p className="text-base text-white text-start max-w-[320px] z-100">
            {chooseUsData.stats.stat2.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

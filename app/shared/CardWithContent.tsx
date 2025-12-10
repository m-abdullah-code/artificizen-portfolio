import React from "react";
import Image from "next/image";
import { CardData } from "../interfaces/CardWithContent";
import Link from "next/link";
import shareIcon from "@/public/assets/Icons/shareIcon.svg"

const CardWithContent = ({
  topText,
  heading,
  href,
  content,
  image,
  buttonText,
  imagePosition = "left",
  lineIndex = 0,
  wordCount = 0,
}: CardData) => {
  return (
    <div className="max-w-[1360px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-13">

        {/* LEFT IMAGE */}
        <div
          className={`
        w-full 
        h-[260px]           /* mobile height */
        sm:h-[400px]
        md:h-[500px]
        lg:h-[630px] 
        lg:w-[55%] 
        rounded-[20px] 
        sm:rounded-[25px]
        overflow-hidden 
        ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}
      `}
        >
          {image && (
            <Image
              src={image}
              alt="Image"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`
        w-full 
        lg:w-[45%] 
        ${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}
      `}
        >
          {/* top small label */}
          <p className="text-sm sm:text-base font-medium leading-normal text-[var(--text-primary-color)]">
            {topText}
          </p>

          {/* heading */}
          <h2
            className="
          font-normal 
          leading-tight 
          mb-4 
          text-[28px]      /* mobile size */
          sm:text-4xl 
          md:text-5xl 
          text-[var(--text-primary-color)]
        "
          >
            {heading.map((line, currentLineIndex) => {
              const words = line.split(" ");
              if (currentLineIndex === lineIndex && wordCount > 0) {
                const gradientText = words.slice(0, wordCount).join(" ");
                const remainingText = words.slice(wordCount).join(" ");

                return (
                  <div key={currentLineIndex}>
                    <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
                      {gradientText}
                    </span>
                    {remainingText && (
                      <span className="text-black"> {remainingText}</span>
                    )}
                  </div>
                );
              }

              return (
                <div key={currentLineIndex} className="text-black">
                  {line}
                </div>
              );
            })}
          </h2>

          {/* content paragraphs */}
          <div className="mb-6 sm:mb-7">
            {content.map((line, index) => (
              <p
                key={index}
                className="
              text-sm 
              sm:text-base 
              font-normal 
              text-[var(--text-secondary-color)] 
              leading-relaxed 
              mb-4
            "
              >
                {line}
              </p>
            ))}
          </div>

          {/* button */}
          {buttonText && (
            <Link href={href}>
              <button
                className="
              px-6 
              py-3 
              bg-blue-600 
              text-white 
              rounded-full 
              hover:bg-blue-700 
              transition 
              text-sm 
              cursor-pointer 
              flex 
              items-center 
              gap-2.5
            "
              >
                <Image
                  src={shareIcon}
                  alt="Share Icon"
                  loading="lazy"
                  className="w-4 h-4 object-contain"
                />
                {buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>

  );
};

export default CardWithContent;

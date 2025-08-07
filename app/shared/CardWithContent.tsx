import React from "react";
import Image from "next/image";
import { CardData } from "../interfaces/CardWithContent";
import Link from "next/link";

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
    <div className="flex flex-col md:flex-row">
      <div
        className={`w-full md:w-1/2 ${
          imagePosition === "right" ? "md:order-2" : "md:order-1"
        }`}
      >
        {image && (
          <Image
            src={image}
            alt="Image"
            width={400}
            height={400}
            className="w-full lg:max-h-[85%] 2xl:max-h-[55%] object-cover rounded-[25px]"
          />
        )}
      </div>
      <div
        className={`w-full md:w-1/2 p-1 md:p-6 flex flex-col justify-between ${
          imagePosition === "right" ? "md:order-1" : "md:order-2"
        }`}
      >
        <div>
          <p className="text-base text-gray-600 mb-2 mt-5 lg:mt-0">{topText}</p>
          <h2
            className=" font-semibold leading-12 mb-4 leading-[clamp(2rem,6vw,3rem)]"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.7rem)",
            }}
          >
            {heading.map((line, currentLineIndex) => {
              const words = line.split(" ");
              if (currentLineIndex === lineIndex && wordCount > 0) {
                const gradientText = words.slice(0, wordCount).join(" ");
                const remainingText = words.slice(wordCount).join(" ");
                return (
                  <span key={currentLineIndex} className="block">
                    <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
                      {gradientText}
                    </span>
                    {remainingText && (
                      <span className="text-black"> {remainingText}</span>
                    )}
                  </span>
                );
              }
              return (
                <span key={currentLineIndex} className="block text-black">
                  {line}
                </span>
              );
            })}
          </h2>
          <div className="text-base text-gray-600 mb-6">
            {content.map((line, lineIndex) => (
              <p key={lineIndex} className="mb-2 last:mb-0">
                {line}
              </p>
            ))}
          </div>
          {buttonText && (
            <div>
              <Link href={href}>
                <button className="text-sm w-[190px] px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                  {buttonText}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWithContent;

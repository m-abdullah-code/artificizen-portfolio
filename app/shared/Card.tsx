import React from "react";
import { CardData } from "../interfaces/Card";
import Image from "next/image";

const Card = ({ heading, content, image }: CardData) => {
  return (
    <div className=" bg-white rounded-xl shadow-md md:max-w-4xl relative overflow-hidden">
      <div className="md:flex">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#111111] mb-2">
            {heading}
          </h2>
          <p className="text-[#333333] mb-14 text-base">{content}</p>
          <div className="#E9EBED">
            {/* {icons.length > 0 && (
              <div className="flex space-x-2">
                {icons.map((icon, index) => (
                  <span key={index} className="text-gray-500">
                    {icon}
                  </span>
                ))}
              </div>
            )} */}
            {image && (
              // <div className="bg-[#E9EBED] p-2 rounded-lg max-w-[45px] mt-10">
              <div className="absolute bottom-4 left-6 bg-[#E9EBED] p-2 rounded-lg max-w-[45px]">
                <Image
                  src={image}
                  alt={heading}
                  width={27}
                  height={27}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

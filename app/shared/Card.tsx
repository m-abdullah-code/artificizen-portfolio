import React from "react";
import { CardData } from "../interfaces/Card";
import Image from "next/image";

const Card = ({
  heading,
  content,
  image,
  headingClassName,
  contentClassName,
}: CardData) => {
  return (
    <div className=" bg-white rounded-xl max-w-4xl hover:shadow-[0px_0px_30px_0px_#386BB73D] transition-all duration-300">
      <div className="py-6 px-10 icon_hover">
        <div className="">
          <h2 className={`mb-3 ${headingClassName}`}>
            {heading}
          </h2>
          <p className={`min-h-24 ${contentClassName}`}>
            {content}
          </p>
        </div>
        <div className="bg-[#E9EBED] w-[56px] h-[56px] relative rounded-xl flex item-center justify-center mt-7  transition-all duration-300 icon_dev">
          {image && (
            <Image
              src={image}
              alt={heading}
              loading="lazy"
              className="object-contain transition-all duration-300"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

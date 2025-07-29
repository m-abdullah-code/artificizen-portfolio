import React from "react";

type SideBlogCardProps = {
  items: string[];
};

const SideBlogCard = ({ items }: SideBlogCardProps) => {
  return (
    <div>
      <div className="bg-[#F0F2F4] p-6 rounded-lg">
        <ul className="list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-base text-[#9B9B9B]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBlogCard;

import Image from "next/image";
import React from "react";
import Icon from "../../public/assets/career/blackIcon.png";
import { TableComponentProps } from "../interfaces/careerPage";

const TableComponent: React.FC<TableComponentProps> = ({ rows }) => {
  return (
    <>
      {rows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 py-6 border-b mt-10 mb-10"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-5">
              <button className="py-2 text-[#C1C1C1] text-base">
                {row.button1}
              </button>
              <button className="py-2 text-[#C1C1C1] text-base">
                {row.button2}
              </button>
            </div>
            <h3 className="text-xl font-semibold">{row.col1Heading}</h3>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[clamp(1.5rem,2vw,2rem)] leading-tight mb-2">
              {row.col2Heading}
            </h3>
            <p className="text-base text-black">{row.col2Text}</p>
          </div>

          {/* Column 3 */}
          <div className="flex items-end justify-end">
            <div className="inline-block mt-10 rounded-full p-[2px] bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]">
              <button className="flex items-center gap-2 rounded-full bg-white text-black px-10 py-2 text-base font-medium">
                <Image src={Icon} alt="icon" width={8} height={7} />
                Explore more
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TableComponent;

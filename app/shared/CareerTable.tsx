import Image from "next/image";
import React from "react";
import Icon from "../../public/assets/Icons/BLeftIcon.png";
import { TableComponentProps } from "../interfaces/careerPage";

const TableComponent: React.FC<TableComponentProps> = ({ rows }) => {
  return (
    <div className="relative px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto">
        <div className="relative z-0">
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 py-6 border-b mt-10 mb-10 items-start"
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  <button className="py-2 px-4 text-[#C1C1C1] text-sm sm:text-base rounded-md">
                    {row.button1}
                  </button>
                  <button className="py-2 px-4 text-[#C1C1C1] text-sm sm:text-base rounded-md">
                    {row.button2}
                  </button>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{row.col1Heading}</h3>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-[clamp(1.25rem,2vw,2rem)] leading-tight mb-3 sm:mb-5">
                  {row.col2Heading}
                </h3>
                <p className="text-sm sm:text-base text-black">{row.col2Text}</p>
              </div>

              {/* Column 3 */}
              <div className="flex lg:items-end lg:justify-end mt-5 lg:mt-0">
                <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C]">
                  <button className="flex items-center gap-2 rounded-full bg-white text-black px-6 sm:px-10 py-2 text-sm sm:text-base font-medium cursor-pointer">
                    <Image
                      src={Icon}
                      alt="icon"
                      width={8}
                      height={7}
                      className="w-3 h-3"
                    />
                    Closed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableComponent;

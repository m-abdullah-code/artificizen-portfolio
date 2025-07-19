import React from "react";
import Image from "next/image";
import { ProjectCardProps } from "../interfaces/ProjectCard";

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgImage,
  overlayImage,
  logoImage,
  children,
  backgroundColor = "bg-gray-200",
}) => {
  return (
    <div className="relative w-full overflow-hidden mb-10 lg:h-[550px]">
      <div
        className={`rounded-3xl flex flex-col md:flex-row justify-between items-center relative z-10 ${backgroundColor}`}
      >
        <div className="md:w-[50%] p-5 lg:p-20">
          <div className=" mb-[50px] lg:mb-[100px]">
            <Image
              src={logoImage}
              alt="Logo"
              width={50}
              height={48}
              className="object-cover"
            />
          </div>

          <div className="max-w-[100%]">{children}</div>
        </div>

        {/* <div className="w-full relative h-[450px] lg:h-[550px]"> */}
        <div className="w-full h-[550px] relative">
          <Image
            src={bgImage}
            alt="Background Visual"
            fill
            className="object-cover absolute"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 md:top-40 lg:bottom-0 right-0 xl:-right-21 z-20 w-[80%] md:w-[50%] xl:w-[800px] h-[450px]">
        {/* <div className="absolute bottom-10 -right-90 z-20 w-full h-[80%]"> */}
        <Image
          src={overlayImage}
          alt="Overlay Decoration"
          fill
          className=" object-cover xl:object-contain rounded-tl-3xl"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

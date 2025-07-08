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
    <div className="relative w-full overflow-hidden px-10 pb-10">
      <div
        className={`rounded-3xl flex flex-col md:flex-row justify-between items-center relative z-10 ${backgroundColor}`}
      >
        <div className="w-[50%] p-5 lg:p-20">
          <div className="mb-[150px]">
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

        <div className="w-full relative h-[500px] lg:h-[550px]">
          <Image
            src={bgImage}
            alt="Background Visual"
            fill
            className="object-cover absolute"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 w-[80%] md:w-[50%] xl:w-[800px] h-[450px]">
        <Image
          src={overlayImage}
          alt="Overlay Decoration"
          fill
          className="object-cover rounded-tl-3xl"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

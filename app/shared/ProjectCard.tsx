import React from "react";
import Image from "next/image";
import { ProjectCardProps } from "../interfaces/ProjectCard";
import Link from "next/link";

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgImage,
  overlayImage,
  logoImage,
  children,
  backgroundColor = "bg-gray-200",
  href,
}) => {
  const cardContent = (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-10 lg:h-[550px]">

      {/* MAIN WRAPPER */}
      <div
        className={`flex flex-col md:flex-row justify-between items-center relative z-10 ${backgroundColor}`}
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[50%] p-6 sm:p-8 lg:p-20">
          <div className="mb-10 sm:mb-16 lg:mb-[100px]">
            <Image
              src={logoImage}
              alt="Logo"
              width={50}
              height={48}
              className="object-contain"
            />
          </div>

          <div className="max-w-full">{children}</div>
        </div>

        {/* RIGHT BG IMAGE */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] relative">
          <Image
            src={bgImage}
            alt="Background Visual"
            fill
            className="object-cover absolute"
            priority
          />
        </div>
      </div>

      {/* OVERLAY IMAGE */}
      <div className="
    absolute bottom-0 
    md:top-40 
    lg:bottom-0 
    right-0 
    xl:-right-20 
    z-20 
    w-[70%] sm:w-[60%] md:w-[50%] xl:w-[800px] 
    h-[350px] sm:h-[400px] md:h-[450px]
  ">
        <Image
          src={overlayImage}
          alt="Overlay Decoration"
          fill
          className="object-contain rounded-tl-3xl"
        />
      </div>
    </div>

  );
  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
};

export default ProjectCard;

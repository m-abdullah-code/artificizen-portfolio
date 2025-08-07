import React from "react";
import ProjectCard from "../../../shared/ProjectCard";
import { projectsData } from "../../../data/HomePage/ProjectSection";

const Home = () => {
  return (
    <>
      <div>
        <p className="text-base text-black mt-10 md:mt-0">/ Our Projects /</p>
        <p className="text-[clamp(1.5rem,5vw,3rem)] leading-[clamp(2rem,5.5vw,3.5rem)] lg:max-w-[50%] mb-5">
          <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
            Awesome Projects
          </span>{" "}
          We have Shipped
        </p>
      </div>
      <div className="cursor-pointer">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            bgImage={project.bgImage}
            overlayImage={project.overlayImage}
            logoImage={project.logoImage}
            backgroundColor={project.backgroundColor}
             href={project.href}
          >
            <h1
              className={`text-[clamp(1.125rem, 2.5vw, 1.5rem)] font-bold ${
                project.backgroundColor === "bg-black"
                  ? "text-white"
                  : "text-gray-800"
              }`}
            >
              {project.title}
            </h1>
            <p
              className={`text-base ${
                project.backgroundColor === "bg-black"
                  ? "text-white"
                  : "text-gray-600"
              } mt-4`}
            >
              {project.description}
            </p>
          </ProjectCard>
        ))}
      </div>
    </>
  );
};

export default Home;

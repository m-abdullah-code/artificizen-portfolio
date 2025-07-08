import React from "react";
import ProjectCard from "../../../shared/ProjectCard";
import { projectsData } from "../../../data/HomePage/ProjectSection";

const Home = () => {
  return (
    <>
      <div className="pl-10 pt-10">
        <p className="text-base text-black">/ Our Projects /</p>
        <p className="text-5xl lg:max-w-[40%] leading-[3.5rem] mb-5">
          <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
            Awesome Projects
          </span>{" "}
          We've Shipped
        </p>
      </div>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          bgImage={project.bgImage}
          overlayImage={project.overlayImage}
          logoImage={project.logoImage}
          backgroundColor={project.backgroundColor}
        >
          <h1 className={`text-2xl font-bold ${project.backgroundColor === "bg-black" ? "text-white" : "text-gray-800"}`}>
            {project.title}
          </h1>
          <p className={`text-base ${project.backgroundColor === "bg-black" ? "text-white" : "text-gray-600"} mt-4`}>
            {project.description}
          </p>
        </ProjectCard>
      ))}
    </>
  );
};

export default Home;
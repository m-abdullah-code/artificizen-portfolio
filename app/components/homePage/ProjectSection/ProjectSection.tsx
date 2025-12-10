import React from "react";
import ProjectCard from "../../../shared/ProjectCard";
import { projectsData } from "../../../data/HomePage/ProjectSection";

const Home = () => {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm sm:text-base text-[var(--text-primary-color)] font-medium">
            / Our Projects /
          </p>

          <p className="text-[32px] sm:text-4xl md:text-5xl font-normal leading-snug lg:max-w-[50%]">
            <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
              Awesome Projects
            </span>{" "}
            We have Shipped.
          </p>
        </div>

        {/* Cards */}
        <div className="cursor-pointer space-y-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              bgImage={project.bgImage}
              overlayImage={project.overlayImage}
              logoImage={project.logoImage}
              backgroundColor={project.backgroundColor}
              href={project.href}
            >
              <h2
                className={`text-[22px] sm:text-[25px] font-normal ${project.backgroundColor === "bg-black"
                    ? "text-white"
                    : "text-[var(--text-primary-color)]"
                  }`}
              >
                {project.title}
              </h2>

              <p
                className={`text-sm sm:text-base font-medium mt-3 sm:mt-4 ${project.backgroundColor === "bg-black"
                    ? "text-white"
                    : "text-[var(--text-primary-color)]"
                  }`}
              >
                {project.description}
              </p>
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Home;

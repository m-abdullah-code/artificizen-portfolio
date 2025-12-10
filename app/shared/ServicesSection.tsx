import React from "react";
import Card from "@/app/shared/Card";
import { SectionData } from "@/app/interfaces/Card";
import Link from "next/link";

const ServicesSection = ({ data }: { data: SectionData }) => {

  return (
    <section id="next-section" className="px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-5xl">

          {/* Path Text */}
          <p className="text-sm sm:text-base font-medium text-[var(--text-primary-color)]">
            {data.path}
          </p>

          {/* Heading */}
          <p
            className="
          text-[28px] 
          sm:text-4xl 
          md:text-5xl 
          leading-snug 
          font-normal 
          text-[var(--text-primary-color)]
          mt-2
        "
          >
            <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
              {data.subtitle}
            </span>{" "}
            {data.title}
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-5 
        sm:gap-6 
        mt-8 
        sm:mt-10
      "
        >
          {data.cards.map((card, index) =>
            card.href ? (
              <Link key={index} href={card.href}>
                <Card
                  heading={card.heading}
                  content={card.content}
                  image={card.image}
                  headingClassName="
                text-lg 
                leading-normal 
                font-semibold 
                mt-2 
                text-[var(--text-primary-color)]
              "
                  contentClassName="
                text-sm 
                sm:text-base 
                font-medium 
                text-[var(--text-secondary-color)]
              "
                />
              </Link>
            ) : (
              <Card
                key={index}
                heading={card.heading}
                content={card.content}
                image={card.image}
                headingClassName="
              text-lg 
              leading-normal 
              font-semibold 
              mt-2 
              text-[var(--text-primary-color)]
            "
                contentClassName="
              text-sm 
              sm:text-base 
              font-medium 
              text-[var(--text-secondary-color)]
            "
              />
            )
          )}
        </div>
      </div>
    </section>

  );
};

export default ServicesSection;

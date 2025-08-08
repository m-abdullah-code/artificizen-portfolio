"use client";

import TopBannerCard from "@/app/shared/TopBannerCard";
import Image from "next/image";
import React from "react";
import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import BulletIcon from "../../../public/assets/Icons/WLeftIcon.png";
import Icon from "../../../public/assets/Icons/BLeftIcon.png";
import Footer from "@/app/components/layout/Footer/Footer";
import Link from "next/link";

const ServicesPages = ({ data }: { data: ServicesPageData }) => {
  return (
    <>
      <div>
        <TopBannerCard
          imageSrc={data.banner.image}
          title={data.banner.heading}
          description={data.banner.content}
        />
      </div>

      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column (Cards) */}
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            {data.sidebarCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md p-4 flex flex-col gap-4 ${
                  index === 0 ? "bg-[#F0F2F4] text-[#9B9B9B]" : "text-white"
                } ${index === 2 ? "pt-28" : "pt-5"}`}
                style={{
                  backgroundImage:
                    index > 0 ? `url(${card.image?.src})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...(index > 0 && {
                    background: `linear-gradient(135deg, rgba(0, 56, 80, 0.8), rgba(0, 24, 49, 0.8)), url(${card.image?.src})`,
                  }),
                }}
              >
                {card.servicesList &&
                  card.servicesUrls &&
                  card.servicesList.length === card.servicesUrls.length && (
                    <ul className="list-inside text-base mt-5 mb-5 flex flex-col gap-2">
                      {card.servicesList.map((item, i) => (
                        <li
                          key={i}
                          className="group flex justify-between items-center hover:bg-[#0b5cff] hover:text-white p-2 rounded cursor-pointer transition-all"
                        >
                          <a
                            href={card.servicesUrls?.[i]}
                            className="text-inherit no-underline hover:text-inherit"
                          >
                            {item}
                          </a>
                          <Image
                            src={BulletIcon}
                            alt="arrow"
                            width={2}
                            height={3}
                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                {card.title && (
                  <h2 className="text-3xl font-semibold">{card.title}</h2>
                )}
                {card.description && card.description !== card.title && (
                  <p className="text-sm">{card.description}</p>
                )}
                {card.buttonText && (
                  <button className={card.buttonClassName}>
                    {card.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[75%] rounded md:p-6">
            <h2
              className="mb-4 leading-8 md:leading-13"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
            >
              {data.mainSection.subheading && (
                <span className="bg-gradient-to-r from-[#6d9dfe] to-[#828fcd] text-transparent bg-clip-text">
                  {data.mainSection.subheading}
                </span>
              )}{" "}
              {data.mainSection.heading}
            </h2>
            <p className="text-base">{data.mainSection.content}</p>
            <div className="mt-10 md:mt-20 flex justify-center">
              <Image
                src={data.mainSection.image}
                alt="Overview Image"
                className="rounded-xl object-cover"
              />
            </div>

            <h2
              className="mb-5 mt-10"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
            >
              {data.mainSection.trends.subheading && (
                <span className="bg-gradient-to-r from-[#6d9dfe] to-[#828fcd] text-transparent bg-clip-text">
                  {data.mainSection.trends.subheading}
                </span>
              )}{" "}
              {data.mainSection.trends.title}
            </h2>
            <p className="text-base">{data.mainSection.trends.section}</p>
            <div className="flex flex-row gap-8 mt-5">
              <div className="w-full">
                <ul className="space-y-0">
                  {data.mainSection.trends.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Image src={Icon} alt="Bullet" className="w-3 h-3 mt-2" />
                      <span className="text-lg">
                        <b>{point.title}</b> {point.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2
              className="mb-5 mt-10"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
            >
              {data.mainSection.applications.subheading && (
                <span className="bg-gradient-to-r from-[#6d9dfe] to-[#828fcd] text-transparent bg-clip-text">
                  {data.mainSection.applications.subheading}
                </span>
              )}{" "}
              {data.mainSection.applications.title}
            </h2>
            <div className="flex flex-row gap-8 mt-5">
              <div className="w-full">
                <ul className="space-y-0">
                  {data.mainSection.applications.bulletPoints.map(
                    (point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Image
                          src={Icon}
                          alt="Bullet"
                          className="w-2 h-2 mt-3"
                        />
                        <span className="text-lg">
                          <b>{point.title}</b> {point.content}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <h2
              className="mb-5 mt-10"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
            >
              {data.mainSection.advantage.subheading && (
                <span className="bg-gradient-to-r from-[#6d9dfe] to-[#828fcd] text-transparent bg-clip-text">
                  {data.mainSection.advantage.subheading}
                </span>
              )}{" "}
              {data.mainSection.advantage.title}
            </h2>
            <p className="text-base mb-4">
              {data.mainSection.advantage.artificizenSection}
            </p>
            <div className="flex flex-row gap-8 mt-5">
              <div className="w-full">
                <ul className="space-y-0">
                  {data.mainSection.advantage.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Image src={Icon} alt="Bullet" className="w-2 h-2 mt-2" />
                      <span className="text-base font-bold">
                        <b>{point.title}</b> {point.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-black rounded-xl text-white p-5 pt-10 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
                <div>
                  <p className="text-base mb-3">
                    {data.mainSection.projects.subheading}
                  </p>
                  <p
                    className="leading-8 md:leading-13"
                    style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
                  >
                    {data.mainSection.projects.title}
                  </p>
                  {/* <div className="flex gap-4">
                    {data.mainSection.projects.buttons.map((button, index) => (
                      <button key={index} className={button.className}>
                        {button.icon && (
                          <Image
                            src={button.icon}
                            alt="icon"
                            className="w-3 h-3"
                          />
                        )}
                        {button.text}
                      </button>
                    ))}
                  </div> */}
                  <div className="flex gap-4">
                    {data.mainSection.projects.buttons.map((button, index) => {
                      const handleCopyLink = () => {
                        const url = window.location.href;
                        navigator.clipboard.writeText(url).then(() => {
                          alert("Link copied!");
                        });
                      };

                      const ButtonContent = (
                        <button
                          key={index}
                          className={button.className}
                          onClick={!button.link ? handleCopyLink : undefined}
                        >
                          {button.icon && (
                            <Image
                              src={button.icon}
                              alt="icon"
                              className="w-3 h-3 cursor-pointer"
                            />
                          )}
                          {button.text}
                        </button>
                      );

                      return button.link ? (
                        <Link href={button.link} key={index}>
                          {ButtonContent}
                        </Link>
                      ) : (
                        ButtonContent
                      );
                    })}
                  </div>
                  {/* <div className="flex gap-4">
                    {data.mainSection.projects.buttons.map((button, index) => {
                      const ButtonContent = (
                        <button key={index} className={button.className}>
                          {button.icon && (
                            <Image
                              src={button.icon}
                              alt="icon"
                              className="w-3 h-3"
                            />
                          )}
                          {button.text}
                        </button>
                      );

                      return button.link ? (
                        <Link href={button.link} key={index}>
                          {ButtonContent}
                        </Link>
                      ) : (
                        ButtonContent
                      );
                    })}
                  </div> */}
                </div>
                <div className="relative inline-block">
                  <h1
                    className="font-bold absolute inset-0"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "3px transparent",
                      backgroundImage:
                        "linear-gradient(to right, #0B5CFF, #FF710C)",
                      WebkitBackgroundClip: "text",
                      zIndex: 0,
                      fontSize: "clamp(3rem, 10vw, 7rem)",
                    }}
                  >
                    {data.mainSection.projects.metric.value}
                  </h1>
                  <h1
                    className="relative z-10 text-black font-bold"
                    style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
                  >
                    {data.mainSection.projects.metric.value}
                  </h1>
                  <p className="text-lg">
                    {data.mainSection.projects.metric.label}
                  </p>
                </div>
              </div>
              {/* <div className="flex flex-col lg:flex-row justify-between mt-10">
                {data.mainSection.projects.projectBoxes.map((box, index) => (
                  <div
                    key={index}
                    className="h-[250px] w-full lg:w-[48%] border border-gray-500 bg-black text-white relative flex items-end p-4 rounded-xl"
                  >
                    <span className="absolute bottom-4 left-4 text-2xl max-w-[200px]">
                      {box.title}
                    </span>
                  </div>
                ))}
              </div> */}
              <div className="flex flex-col lg:flex-row justify-between mt-10">
                {data.mainSection.projects.projectBoxes.map((box, index) => (
                  <div
                    key={index}
                    className="h-[250px] w-full lg:w-[48%] border border-gray-500 bg-black text-white relative flex items-end p-4 rounded-xl"
                  >
                    <ul className="absolute bottom-4 left-4 text-2xl max-w-[250px] space-y-1">
                      {box.title.map((item, i) => (
                        <li key={i}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-base mb-4">/ process /</p>
              <p
                className="leading-8 lg:leading-13"
                style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
              >
                {data.mainSection.process.subheading && (
                  <span className="bg-gradient-to-r from-[#6d9dfe] to-[#828fcd] bg-clip-text text-transparent">
                    {data.mainSection.process.subheading}
                  </span>
                )}{" "}
                {data.mainSection.process.title}
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.mainSection.process.steps.map((step, index) => (
                  <div key={index} className="p-0 lg:p-5 rounded-xl bg-white">
                    <p className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#6d9dfe] to-[#828fcd] bg-clip-text text-transparent">
                      {step.number}
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.heading}
                    </h3>
                    <p className="text-base text-[#333333]">{step.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-gray-100 p-4 lg:p-10 rounded-xl overflow-hidden mt-10">
              <h2
                className="leading-13"
                style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
              >
                {data.mainSection.partnership.title}
              </h2>
              <p className="text-base font-semibold text-black mt-4">
                {data.mainSection.partnership.content.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
              <div className="mt-5">
                <Link href="/contact-us">
                  <button className="border border-2 px-5 p-2 rounded-full font-bold cursor-pointer">
                    Contact Us
                  </button>
                </Link>
              </div>
              <Image
                src={data.mainSection.partnership.decorImage}
                alt="Decor"
                className="absolute bottom-4 left-4 w-24 h-auto pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        headings={data.footer.headings}
        description={data.footer.description}
        gradientIndex={data.footer.gradientIndex}
        gradientWordCount={data.footer.gradientWordCount}
      />
    </>
  );
};

export default ServicesPages;

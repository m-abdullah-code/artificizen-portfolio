import React from "react";
import Image from "next/image";
import Elipse from "../../../../public/assets/Footer/Ellipse 1.png";
import Alogo from "../../../../public/assets/logo/Artificizen-Logo.png";
import { MdWhatsapp } from "react-icons/md";
import { IoCallOutline, IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerData } from "../../../data/Footer";
import { IconKey, FooterData } from "../../../interfaces/Footer";
import { IconType } from "react-icons";

const iconMap: Record<IconKey, IconType> = {
  MdWhatsapp: MdWhatsapp,
  IoCallOutline: IoCallOutline,
  FaFacebookF: FaFacebookF,
  FaXTwitter: FaXTwitter,
  FaLinkedinIn: FaLinkedinIn,
  IoLogoYoutube: IoLogoYoutube,
} as const;

interface FooterProps {
  headings?: string[];
  description?: string;
  gradientIndex?: number;
  gradientWordCount?: number;
}

const Footer: React.FC<FooterProps> = ({
  headings,
  description,
  gradientIndex = 0,
  gradientWordCount = 1,
}) => {
  const typedFooterData: FooterData = footerData;

  return (
    <div className="bg-[#1F1F1F] text-white rounded-lg">
      <div className="p-10">
        <div className="flex flex-col lg:flex-row justify-between max-w-full mx-auto">
          <div className="w-full lg:w-1/2 mb-6 md:mb-0 flex items-center min-h-[200px]">
            <div>
              <h3 className="text-base mb-4">
                {typedFooterData.getInTouch.subtitle}
              </h3>
              {headings
                ? headings.map((heading, index) => (
                    <h1
                      key={index}
                      className="text-[clamp(2rem,5vw,3.5rem)] leading-[50px] lg:leading-[65px]"
                    >
                      {heading.split(" ").map((word, wordIndex, words) => {
                        const startIndex = gradientIndex;
                        const endIndex = startIndex + gradientWordCount;
                        if (
                          wordIndex >= startIndex &&
                          wordIndex < endIndex &&
                          wordIndex < words.length
                        ) {
                          return (
                            <span
                              key={wordIndex}
                              className="bg-gradient-to-r from-[#0B5CFF99] to-[#495089] bg-clip-text text-transparent"
                            >
                              {word}{" "}
                            </span>
                          );
                        }
                        return <span key={wordIndex}>{word} </span>;
                      })}
                    </h1>
                  ))
                : typedFooterData.getInTouch.headings.map((heading, index) => (
                    <h1
                      key={index}
                      className="text-[clamp(2.5rem,6vw,3.75rem)]"
                    >
                      {heading.split(" ").map((word, wordIndex, words) => {
                        const startIndex = gradientIndex;
                        const endIndex = startIndex + gradientWordCount;
                        if (
                          wordIndex >= startIndex &&
                          wordIndex < endIndex &&
                          wordIndex < words.length
                        ) {
                          return (
                            <span
                              key={wordIndex}
                              className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent"
                            >
                              {word}{" "}
                            </span>
                          );
                        }
                        return <span key={wordIndex}>{word} </span>;
                      })}
                    </h1>
                  ))}
              <p className="text-white text-base mt-10">
                {description || typedFooterData.getInTouch.description}
              </p>
            </div>
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-1/3 bg-white p-12 rounded-lg shadow-md">
            <h3 className="text-3xl text-black font-bold mb-4">
              {typedFooterData.contactForm.title}
            </h3>
            <p className="text-base text-black">
              {typedFooterData.contactForm.description}
            </p>
            <form className="space-y-3">
              {typedFooterData.contactForm.formFields.map((field, index) =>
                field.type === "textarea" ? (
                  <textarea
                    key={index}
                    placeholder={field.placeholder}
                    className="w-full p-2 rounded-md text-black border-b border-gray-300 resize-none"
                    rows={field.rows}
                  />
                ) : (
                  <input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-2 rounded-md text-black border-b border-gray-300"
                  />
                )
              )}
              <button
                type="submit"
                className="max-w-[176px] p-2 bg-black rounded-full hover:bg-gray-800 transition-colors !px-4 text-sm mt-3"
              >
                {typedFooterData.contactForm.submitButton}
              </button>
            </form>
          </div>
        </div>
        <hr className="mt-16" />

        {/* Footer Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-10">
          {/* Column 1: Logo + Text */}
          <div>
            <Image src={Alogo} alt="Logo" className="w-32 mb-4" />
            <p className="text-base text-white">
              {typedFooterData.logoSection.description}
            </p>
          </div>

          {/* Column 2: Call Center */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {typedFooterData.callCenter.title}
            </h4>
            <ul className="space-y-2 text-base text-white">
              {typedFooterData.callCenter.contacts.map((contact, index) => {
                const Icon = iconMap[contact.icon];
                return (
                  <li key={index} className="flex items-center gap-2">
                    <Icon />
                    <span>{contact.value}</span>
                  </li>
                );
              })}
              <li className="mt-10">
                {typedFooterData.callCenter.email.label}
              </li>
              <li>{typedFooterData.callCenter.email.value}</li>
            </ul>
          </div>

          {/* Column 3: Location */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {typedFooterData.location.title}
            </h4>
            <ul className="space-y-2 text-base text-white">
              {typedFooterData.location.addresses.map((address, index) => (
                <li key={index}>{address}</li>
              ))}
              <li className="mt-10">
                {typedFooterData.location.socialMedia.label}
              </li>
              <li>
                <div className="flex items-center gap-6 text-white text-base mt-3">
                  {typedFooterData.location.socialMedia.icons.map(
                    (icon, index) => {
                      const Icon = iconMap[icon];
                      return <Icon key={index} />;
                    }
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {typedFooterData.company.title}
            </h4>
            <ul className="space-y-2 text-base text-gray-300">
              {typedFooterData.company.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Column 5: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {typedFooterData.services.title}
            </h4>
            <ul className="space-y-2 text-base text-gray-300">
              {typedFooterData.services.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src={Elipse}
          alt="Ellipse Decoration"
          className="object-contain w-full h-full absolute bottom-0 left-0 right-0"
        />
      </div>
    </div>
  );
};

export default Footer;

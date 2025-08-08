"use client";

import React, { useState } from "react";
import Image from "next/image";
import Elipse from "../../../../public/assets/Footer/Ellipse 1.png";
import Alogo from "../../../../public/assets/logo/Artificizen-Logo.png";
import { MdWhatsapp } from "react-icons/md";
import { IoCallOutline, IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerData } from "../../../data/Footer";
import { IconKey, FooterData } from "../../../interfaces/Footer";
import { IconType } from "react-icons";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { contactUsData } from "@/app/data/ContactUs/ContactUs";

const iconMap: Record<IconKey, IconType> = {
  MdWhatsapp: MdWhatsapp,
  IoCallOutline: IoCallOutline,
  FaFacebookF: FaFacebookF,
  FaXTwitter: FaXTwitter,
  FaLinkedinIn: FaLinkedinIn,
  IoLogoInstagram: IoLogoInstagram,
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Initialize EmailJS with your User ID
      emailjs.init("wmFIS1dKUZ53lp9ik"); // Replace with your EmailJS User ID

      // Send email using EmailJS
      await emailjs.send(
        "service_2erv06i", // Replace with your EmailJS Service ID
        "template_uf15mb9", // Replace with your EmailJS Template ID
        {
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1F1F1F] text-white rounded-lg">
      <div className=" p-5 md:p-10">
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
                      className="text-[clamp(1.5rem,5vw,3.5rem)] leading-[clamp(2rem,6vw,4.063rem)]"
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
          <div className="w-full mt-10 lg:mt-0 lg:w-1/3 bg-white p-5 md:p-12 rounded-lg shadow-md">
            <h3
              className="text-black font-bold mb-4"
              style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 1.875rem)" }}
            >
              {typedFooterData.contactForm.title}
            </h3>
            <p className="text-base text-black">
              {typedFooterData.contactForm.description}
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 resize-none focus:outline-none"
                required
              />

              <button
                type="submit"
                className="flex items-center gap-2 p-2 px-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm mt-3 cursor-pointer"
                disabled={isSubmitting}
              >
                <Image
                  src={contactUsData.formSection.buttonIcon}
                  alt="Send Icon"
                  className="h-3 w-3 mt-[2px]"
                />
                {isSubmitting
                  ? "Sending..."
                  : contactUsData.formSection.buttonText}
              </button>
            </form>
            {status && (
              <p
                className={`mt-4 text-sm ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
            {/* <form className="space-y-3">
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
            </form> */}
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
              {/* <li>
                <div className="flex items-center gap-6 text-white text-base mt-3">
                  {typedFooterData.location.socialMedia.icons.map(
                    (icon, index) => {
                      const Icon = iconMap[icon];
                      return <Icon key={index} />;
                    }
                  )}
                </div>
              </li> */}

              <li>
                <div className="flex items-center gap-6 text-white text-base mt-3">
                  {typedFooterData.location.socialMedia.icons.map(
                    (item, index) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform duration-300"
                        >
                          <Icon />
                        </a>
                      );
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
            <ul className="space-y-2 text-base text-white">
              {typedFooterData.company.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-3">
              {typedFooterData.services.title}
            </h4>
            <ul className="space-y-2 text-base text-gray-300">
              {typedFooterData.services.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div> */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">
              {typedFooterData.services.title}
            </h4>
            <ul className="space-y-2 text-base text-white">
              {typedFooterData.services.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
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

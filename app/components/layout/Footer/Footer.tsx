"use client";

import React, { useState } from "react";
import Image from "next/image";
// import Elipse from "../../../../public/assets/Footer/Ellipse 1.png";
import Alogo from "../../../../public/assets/logo/Artificizen-logo.svg";
import { MdWhatsapp } from "react-icons/md";
import { IoCallOutline, IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerData } from "../../../data/Footer";
import { IconKey, FooterData } from "../../../interfaces/Footer";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
    <footer className="mt-15 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="bg-[#1F1F1F] max-w-[1360px] mx-auto text-white rounded-3xl relative overflow-hidden bg_overlay">
        <div className="p-5 sm:p-8 md:p-10 relative z-10">
          {!pathname?.includes("/contact-us") && (
            <>
              <div className="flex flex-col lg:flex-row justify-between max-w-full mx-auto gap-10 lg:gap-5">

            {/* Left side footer */}
            <div className="w-full lg:max-w-[50%]">
              <h3 className="text-base sm:text-lg text-[#F5F5F5] font-medium leading-normal">
                {typedFooterData.getInTouch.subtitle}
              </h3>
              {(headings || typedFooterData.getInTouch.headings).map((heading, index) => (
                <h1
                  key={index}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-2"
                >
                  {heading.split(" ").map((word, wordIndex, words) => {
                    const startIndex = gradientIndex;
                    const endIndex = startIndex + gradientWordCount;
                    if (wordIndex >= startIndex && wordIndex < endIndex && wordIndex < words.length) {
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
              <p className="text-base sm:text-lg mt-4 text-[#F5F5F5]">
                {description || typedFooterData.getInTouch.description}
              </p>
            </div>

            {/* Right side Form */}
            <div className="bg-white p-5 sm:p-8 md:p-12 lg:py-20 lg:px-15 w-full md:max-w-[50%] mx-auto rounded-3xl mt-10 lg:mt-0">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-normal mb-4 text-black">
                {typedFooterData.contactForm.title}
              </h3>
              <p className="text-base text-[#333333] leading-normal">
                {typedFooterData.contactForm.description}
              </p>
              <form className="space-y-3 mt-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 border-b border-[#ADADAD] bg-transparent text-black placeholder-[#9B9B9B] focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 border-b border-[#ADADAD] bg-transparent text-black placeholder-[#9B9B9B] focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full py-2 border-b border-[#ADADAD] bg-transparent text-black placeholder-[#9B9B9B] focus:outline-none"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#ADADAD] bg-transparent text-black placeholder-[#9B9B9B] resize-none focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-3 py-3 px-4 bg-[#333333] text-white rounded-full hover:bg-gray-800 transition-colors text-sm mt-3 cursor-pointer"
                  disabled={isSubmitting}
                >
                  <Image
                    src={contactUsData.formSection.buttonIcon}
                    loading="lazy"
                    alt="Send Icon"
                    className="h-3 w-3 mt-[2px]"
                  />
                  {isSubmitting ? "Sending..." : contactUsData.formSection.buttonText}
                </button>
              </form>
              {status && (
                <p className={`mt-4 text-sm ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                  {status}
                </p>
              )}
            </div>
          </div>
         

              <hr className="mt-12" />
            </>
           )}

          {/* Footer Columns Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-10 mt-10">
            {/* Column 1: Logo + Text */}
            <div>
              <Image src={Alogo} alt="Logo" loading="lazy" className="w-36 sm:w-40 mb-4" />
              <p className="text-base text-white leading-normal">
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
                <li className="mt-4 sm:mt-10">{typedFooterData.callCenter.email.label}</li>
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
                <li className="mt-4 sm:mt-10">{typedFooterData.location.socialMedia.label}</li>
                <li>
                  <div className="flex items-center gap-4 sm:gap-6 mt-3">
                    {typedFooterData.location.socialMedia.icons.map((item, index) => {
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
                    })}
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 className="text-lg font-semibold mb-3">{typedFooterData.company.title}</h4>
              <ul className="space-y-2 text-base text-white">
                {typedFooterData.company.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Services */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">{typedFooterData.services.title}</h4>
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

        {/* Bottom Footer Section */}
        <div className="relative bg-white py-5 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between w-full sm:w-[80%] mx-auto text-[rgba(51,51,51,0.75)] rounded-t-3xl gap-3 sm:gap-0 mt-8 relative z-3">
          <p className="text-xs sm:text-sm md:text-base text-center sm:text-left">
            ©Artificizen {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="flex gap-3 sm:gap-5 text-xs sm:text-sm md:text-base flex-wrap justify-center sm:justify-end">
            <p>Terms of use</p>
            <p>Privacy</p>
            <p>Environmental Policy</p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

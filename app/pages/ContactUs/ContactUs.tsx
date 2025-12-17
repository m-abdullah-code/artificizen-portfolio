
"use client";

import TopBannerCard from "@/app/shared/TopBannerCard";
import React, { useState } from "react";
import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { IoCallOutline, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { contactUsData } from "@/app/data/ContactUs/ContactUs";
import emailjs from "@emailjs/browser";
import Link from "next/link";
// import { blogData } from "@/app/data/BlogPage/BlogPage";
import Footer from "@/app/components/layout/Footer/Footer";

// Map icon names to React components
const iconMap: { [key: string]: React.ComponentType } = {
  MdWhatsapp,
  IoCallOutline,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  IoLogoYoutube,
  IoLogoInstagram: IoLogoInstagram,
};

const ContactUs = () => {
  // Form state
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
    <div className="">
      <TopBannerCard
        imageSrc={contactUsData.banner.image}
        title={contactUsData.banner.title}
        description={contactUsData.banner.description}
        breadcrumb={["Home", "Contact Us"]}
      />

      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="container max-w-full">
        <div className="flex flex-col lg:flex-row justify-between max-w-full gap-10 lg:gap-16 mx-auto">

  {/* Left Section */}
  <div className="w-full lg:w-[50%] flex items-start lg:items-center min-h-[200px]">
    <div className="w-full">

      <h3 className="text-sm sm:text-base mb-4">
        {contactUsData.mainSection.topText}
      </h3>

      {contactUsData.mainSection.headings.map((heading, index) => (
        <h1
          key={index}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            leading-tight sm:leading-snug lg:leading-normal 
            text-[#111111]
          "
        >
          {heading}
        </h1>
      ))}

      <p className="text-sm sm:text-base text-[#333333] mt-6 sm:mt-10">
        {contactUsData.mainSection.description}
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 sm:mt-10 w-full">

        {/* Call Center */}
        <div className="w-full md:w-[45%]">
          <p className="text-lg sm:text-xl font-semibold text-black mb-2">
            {contactUsData.mainSection.contactInfo.callCenter.title}
          </p>

          {contactUsData.mainSection.contactInfo.callCenter.phone.map(
            (phone, index) => {
              const IconComponent = iconMap[phone.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-700"
                >
                  {IconComponent && <IconComponent />}
                  <span>{phone.number}</span>
                </div>
              );
            }
          )}
        </div>

        {/* Location */}
        <div className="w-full md:w-[55%]">
          <p className="text-lg sm:text-xl font-semibold text-black mb-2">
            {contactUsData.mainSection.contactInfo.location.title}
          </p>

          <div className="text-sm sm:text-base text-gray-700 space-y-1">
            {contactUsData.footer.location.addresses.map((address, index) => (
              <p key={index}>{address}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Email & Socials */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 mt-8 sm:mt-10">

        <div className="w-full md:w-[45%]">
          <p className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
            {contactUsData.mainSection.emailAndSocials.email.title}
          </p>
          <span className="text-sm sm:text-base text-gray-700">
            {contactUsData.mainSection.emailAndSocials.email.address}
          </span>
        </div>

        <div className="w-full md:w-[55%]">
          <p className="text-lg sm:text-xl font-semibold text-black mb-2">
            {contactUsData.mainSection.emailAndSocials.socials.title}
          </p>
          <div className="flex items-center gap-5 sm:gap-8 mt-4">
            {contactUsData.mainSection.emailAndSocials.socials.networks.map(
              (network, index) => {
                const IconComponent = iconMap[network.name];
                return IconComponent ? (
                  <Link key={index} href={network.href} target="_blank">
                    <IconComponent />
                  </Link>
                ) : null;
              }
            )}
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Right Form Section */}
  <div className="
    w-full lg:w-[45%] 
    bg-[#F0F2F4] 
    py-8 sm:py-12 
    px-5 sm:px-8 md:px-10 
    rounded-2xl sm:rounded-3xl
  ">
    <div className="max-w-full sm:max-w-[430px] mx-auto">

      <h3 className="text-xl sm:text-2xl md:text-3xl text-[#111111] mb-3 sm:mb-4">
        {contactUsData.formSection.title}
      </h3>

      <p className="text-sm sm:text-base text-[#333333] mb-5">
        {contactUsData.formSection.description}
      </p>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full py-3 text-sm border-b border-[#898989] bg-transparent placeholder-[#898989] focus:outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full py-3 text-sm border-b border-[#898989] bg-transparent placeholder-[#898989] focus:outline-none"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full py-3 text-sm border-b border-[#898989] bg-transparent placeholder-[#898989] focus:outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full py-3 text-sm border-b border-[#898989] bg-transparent placeholder-[#898989] focus:outline-none resize-none"
          required
        />

        <button
          type="submit"
          className="flex items-center gap-2 py-3 px-6 bg-[#333333] text-white rounded-full text-sm mt-6 sm:mt-7"
          disabled={isSubmitting}
        >
          <Image
            src={contactUsData.formSection.buttonIcon}
            alt="Send Icon"
            className="h-3 w-3"
          />
          {isSubmitting ? "Sending..." : contactUsData.formSection.buttonText}
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
    </div>
  </div>
</div>

        </div>

        {/* Footer Section */}
        <Footer />
      
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import Elipse from "../../../../public/assets/Footer/Ellipse 1.png";
import Image from "next/image";
import Alogo from "../../../../public/assets/logo/Artificizen-Logo.png";
import { MdWhatsapp } from "react-icons/md";
import { IoCallOutline, IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] text-white rounded-lg m-10">
      <div className="p-10">
      <div className="flex flex-col md:flex-row justify-between max-w-full mx-auto">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex items-center min-h-[200px]">
          <div>
            <h3 className="text-base mb-4">/get in touch/</h3>
            <h1 className="text-6xl">Have An Idea?</h1>
            <h1 className="text-6xl">A Challenge?</h1>
            <h1 className="text-6xl">Or Just Curious</h1>
            <h1 className="text-6xl">About What AI Can</h1>
            <h1 className="text-6xl">Do For Your Business?</h1>
            <p className="text-white text-base mt-10">
              Let’s talk. We’ll help you shape the right solution — fast,
              focused, and built to scale.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white p-12 rounded-lg shadow-md">
          <h3 className="text-3xl text-black font-bold mb-4">Get in Touch</h3>
          <p className="text-base text-black">
            Fill out the form or drop us a message — we usually reply within 30
            minutes.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-2 rounded-md text-black border-b border-gray-300 mt-5"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md text-black border-b border-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 rounded-md text-black border-b border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded-md text-black border-b border-gray-300 resize-none"
              rows={3}
            />
            <button
              type="submit"
              className="max-w-[176px] p-2 bg-black rounded-full hover:bg-gray-800 transition-colors !px-4 text-sm mt-3"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
      <hr className="mt-16" />

      {/* Footer Columns Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-20 mt-10">
        {/* Column 1: Logo + Text */}
        <div>
          <Image src={Alogo} alt="Logo" className="w-32 mb-4" />
          <p className="text-base text-white">
            Artificizen builds smart, scalable AI solutions that turn bold ideas
            into real-world impact.
          </p>
        </div>

        {/* Column 2: Call Center */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Call Center</h4>
          <ul className="space-y-2 text-base text-white">
            <li className="flex items-center gap-2">
              <MdWhatsapp />
              <span>+92 300 1234567</span>
            </li>

            <li className="flex items-center gap-2">
              <IoCallOutline />
              <span>+92 300 1234567</span>
            </li>
            <li className="mt-10">Email</li>
            <li>support@yourcompany.com</li>
          </ul>
        </div>

        {/* Column 3: Location */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Our Location</h4>
          <ul className="space-y-2 text-base text-white">
            <li>USA, New York - 1060</li>
            <li>Str. First Avenue 1</li>
            <li className="mt-10">Social network</li>
            <li>
              <div className="flex items-center gap-6 text-white text-base mt-3">
                <FaFacebookF />
                <FaXTwitter />
                <FaLinkedinIn />
                <IoLogoYoutube />
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>About</li>
            <li>Expertise</li>
            <li>Sustainability</li>
            <li>News&Media</li>
            <li>Term</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 5: Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>AI Chatbots</li>
            <li>AI SaaS Development</li>
            <li>POC /MVP Development</li>
            <li>Enterprise AI Automation</li>
            <li>Cloud Infrastructure</li>
            <li>Other Services</li>
          </ul>
        </div>
      </div>
      </div>

      <div className="relative ">
  <div className="absolute !bottom-0 !left-0 end-0 w-auto h-auto">
    <Image
      src={Elipse}
      alt="Ellipse Decoration"
      className="object-contain w-full h-full"
    />
  </div>
</div>
    </div>
  );
};

export default Footer;

// import TopBannerCard from "@/app/shared/TopBannerCard";
// import React from "react";
// import Image from "next/image";
// import { MdWhatsapp } from "react-icons/md";
// import { IoCallOutline, IoLogoYoutube } from "react-icons/io5";
// import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { contactUsData } from "@/app/data/ContactUs/ContactUs";

// // Map icon names to React components
// const iconMap: { [key: string]: React.ComponentType } = {
//   MdWhatsapp,
//   IoCallOutline,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaXTwitter,
//   FaYoutube,
//   IoLogoYoutube,
// };

// const ContactUs = () => {
//   return (
//     <div>
//       <TopBannerCard
//         imageSrc={contactUsData.banner.image}
//         title={contactUsData.banner.title}
//         description={contactUsData.banner.description}
//       />

//       <div className="mt-5 md:mt-20">
//         <div className="flex flex-col lg:flex-row justify-between max-w-full mx-auto">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 mb-6 md:mb-0 flex items-center min-h-[200px]">
//             <div>
//               <h3 className="text-base mb-4">
//                 {contactUsData.mainSection.topText}
//               </h3>
//               {contactUsData.mainSection.headings.map((heading, index) => (
//                 <h1
//                   key={index}
//                   className="text-[clamp(1.5rem,5vw,3.5rem)] leading-[clamp(1.5rem,6vw,4.063rem)] text-black"
//                 >
//                   {heading}
//                 </h1>
//               ))}
//               <p className="text-black text-base mt-10">
//                 {contactUsData.mainSection.description}
//               </p>

//               {/* Contact Info Section */}
//               <div className="flex flex-col md:flex-row mt-10 gap-10 md:gap-23">
//                 {/* Call Center */}
//                 <div>
//                   <p className="text-xl font-semibold text-black mb-2">
//                     {contactUsData.mainSection.contactInfo.callCenter.title}
//                   </p>
//                   {contactUsData.mainSection.contactInfo.callCenter.phone.map(
//                     (phone, index) => {
//                       const IconComponent = iconMap[phone.icon];
//                       return (
//                         <div
//                           key={index}
//                           className="flex items-center gap-2 text-gray-700"
//                         >
//                           {IconComponent && <IconComponent />}
//                           <span>{phone.number}</span>
//                         </div>
//                       );
//                     }
//                   )}
//                 </div>

//                 {/* Our Location */}
//                 <div>
//                   <p className="text-xl font-semibold text-black mb-2">
//                     {contactUsData.mainSection.contactInfo.location.title}
//                   </p>
//                   <div className="text-gray-700">
//                     <span>
//                       {contactUsData.mainSection.contactInfo.location.address}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Email and Socials */}
//               <div className="flex flex-col md:flex-row mt-10 gap-10 md:gap-25">
//                 <div>
//                   <p className="text-xl font-semibold text-black mb-4">
//                     {contactUsData.mainSection.emailAndSocials.email.title}
//                   </p>
//                   <div className="text-gray-700">
//                     <span>
//                       {contactUsData.mainSection.emailAndSocials.email.address}
//                     </span>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="text-xl font-semibold text-black mb-2">
//                     {contactUsData.mainSection.emailAndSocials.socials.title}
//                   </p>
//                   <div className="flex items-center gap-5 md:gap-10 text-black mt-5">
//                     {contactUsData.mainSection.emailAndSocials.socials.networks.map(
//                       (network, index) => {
//                         const IconComponent = iconMap[network.name];
//                         return IconComponent ? (
//                           <IconComponent key={index} />
//                         ) : null;
//                       }
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Form Section */}
//           <div className="w-full mt-10 lg:mt-0 lg:w-1/3 bg-gray-200 p-5 md:p-10 rounded-lg">
//             <h3
//               className="text-black font-bold mb-4"
//               style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 1.875rem)" }}
//             >
//               {contactUsData.formSection.title}
//             </h3>
//             <p className="text-base text-black mb-5">
//               {contactUsData.formSection.description}
//             </p>

//             <form className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
//               />
//               <textarea
//                 placeholder="Message"
//                 rows={4}
//                 className="w-full p-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 resize-none focus:outline-none"
//               />

//               <button
//                 type="submit"
//                 className="flex items-center gap-2 p-2 px-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm mt-3 cursor-pointer"
//               >
//                 <Image
//                   src={contactUsData.formSection.buttonIcon}
//                   alt="Send Icon"
//                   className="h-3 w-3 mt-[2px]"
//                 />
//                 {contactUsData.formSection.buttonText}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Section */}
//         <div className="bg-[#1F1F1F] text-white rounded-lg mt-10">
//           <div className="p-5 md:p-10">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-10">
//               {/* Logo */}
//               <div>
//                 <Image
//                   src={contactUsData.footer.logo}
//                   alt="Artificizen Logo"
//                   className="w-32 mb-4"
//                 />
//                 <p className="text-base">{contactUsData.footer.description}</p>
//               </div>

//               {/* Call Center */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">
//                   {contactUsData.footer.callCenter.title}
//                 </h4>
//                 <ul className="space-y-2 text-base">
//                   {contactUsData.footer.callCenter.contacts.map(
//                     (contact, index) => (
//                       <li key={index} className="flex items-center gap-2">
//                         {contact.type !== "Email" ? (
//                           <>
//                             {(() => {
//                               const IconComponent = iconMap[contact.type];
//                               return IconComponent ? <IconComponent /> : null;
//                             })()}
//                             {contact.value}
//                           </>
//                         ) : (
//                           <>
//                             <span className="mt-10">{contact.type}</span>
//                             <li>{contact.value}</li>
//                           </>
//                         )}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>

//               {/* Location */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">
//                   {contactUsData.footer.location.title}
//                 </h4>
//                 <ul className="space-y-2 text-base">
//                   <li>{contactUsData.footer.location.address}</li>
//                   <li className="mt-10">Follow Us</li>
//                   <li>
//                     <div className="flex items-center gap-6 mt-3">
//                       {contactUsData.footer.location.socials.map(
//                         (social, index) => {
//                           const IconComponent = iconMap[social.name];
//                           return IconComponent ? (
//                             <IconComponent key={index} />
//                           ) : null;
//                         }
//                       )}
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               {/* Company */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">
//                   {contactUsData.footer.company.title}
//                 </h4>
//                 <ul className="space-y-2 text-base text-gray-300">
//                   {contactUsData.footer.company.items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Services */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">
//                   {contactUsData.footer.services.title}
//                 </h4>
//                 <ul className="space-y-2 text-base text-gray-300">
//                   {contactUsData.footer.services.items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Ellipse Image */}
//           <div className="relative">
//             <Image
//               src={contactUsData.footer.backgroundImage}
//               alt="Footer Background"
//               className="object-contain w-full h-full absolute bottom-0 left-0"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

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
    <div>
      <TopBannerCard
        imageSrc={contactUsData.banner.image}
        title={contactUsData.banner.title}
        description={contactUsData.banner.description}
      />

      <div className="mt-5 md:mt-20">
        <div className="flex flex-col lg:flex-row justify-between max-w-full mx-auto">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 mb-6 md:mb-0 flex items-center min-h-[200px]">
            <div>
              <h3 className="text-base mb-4">
                {contactUsData.mainSection.topText}
              </h3>
              {contactUsData.mainSection.headings.map((heading, index) => (
                <h1
                  key={index}
                  className="text-[clamp(1.5rem,5vw,3.5rem)] leading-[clamp(1.5rem,6vw,4.063rem)] text-black"
                >
                  {heading}
                </h1>
              ))}
              <p className="text-black text-base mt-10">
                {contactUsData.mainSection.description}
              </p>

              {/* Contact Info Section */}
              <div className="flex flex-col md:flex-row mt-10 w-full">
                {/* Call Center */}
                <div className="w-[80%]">
                  <p className="text-xl font-semibold text-black mb-2">
                    {contactUsData.mainSection.contactInfo.callCenter.title}
                  </p>
                  {contactUsData.mainSection.contactInfo.callCenter.phone.map(
                    (phone, index) => {
                      const IconComponent = iconMap[phone.icon];
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          {IconComponent && <IconComponent />}
                          <span>{phone.number}</span>
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Our Location */}
                <div className="w-full">
                  <p className="text-xl font-semibold text-black mb-2">
                    {contactUsData.mainSection.contactInfo.location.title}
                  </p>
                  <div className="text-gray-700">
                    {contactUsData.footer.location.addresses.map(
                      (address, index) => (
                        <p key={index}>{address}</p>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Email and Socials */}
              <div className="flex flex-col md:flex-row mt-10 gap-10 md:gap-30">
                <div>
                  <p className="text-xl font-semibold text-black mb-4">
                    {contactUsData.mainSection.emailAndSocials.email.title}
                  </p>
                  <div className="text-gray-700">
                    <span>
                      {contactUsData.mainSection.emailAndSocials.email.address}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xl font-semibold text-black mb-2">
                    {contactUsData.mainSection.emailAndSocials.socials.title}
                  </p>
                  {/* <div className="flex items-center gap-5 md:gap-10 text-black mt-5">
                    {contactUsData.mainSection.emailAndSocials.socials.networks.map(
                      (network, index) => {
                        const IconComponent = iconMap[network.name];
                        return IconComponent ? (
                          <IconComponent key={index} />
                        ) : null;
                      }
                    )}
                  </div> */}
                  <div className="flex items-center gap-5 md:gap-10 text-black mt-5">
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
          <div className="w-full mt-10 lg:mt-0 lg:w-1/3 bg-gray-200 p-5 md:p-10 rounded-lg">
            <h3
              className="text-black font-bold mb-4"
              style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 1.875rem)" }}
            >
              {contactUsData.formSection.title}
            </h3>
            <p className="text-base text-black mb-5">
              {contactUsData.formSection.description}
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
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-[#1F1F1F] text-white rounded-lg mt-10">
          <div className="p-5 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-10">
              {/* Logo */}
              <div>
                <Image
                  src={contactUsData.footer.logo}
                  alt="Artificizen Logo"
                  className="w-32 mb-4"
                />
                <p className="text-base">{contactUsData.footer.description}</p>
              </div>

              {/* Call Center */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  {contactUsData.footer.callCenter.title}
                </h4>
                <ul className="space-y-2 text-base">
                  {contactUsData.footer.callCenter.contacts.map(
                    (contact, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {contact.type !== "Email" ? (
                          <>
                            {(() => {
                              const IconComponent = iconMap[contact.type];
                              return IconComponent ? <IconComponent /> : null;
                            })()}
                            {contact.value}
                          </>
                        ) : (
                          <div className="flex flex-col mt-6">
                            <span>{contact.type}</span>
                            <span>{contact.value}</span>
                          </div>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  {contactUsData.footer.location.title}
                </h4>
                <ul className="space-y-2 text-base">
                  {/* <li>{contactUsData.footer.location.address}</li> */}
                  {contactUsData.footer.location.addresses.map(
                    (address, index) => (
                      <li key={index}>{address}</li>
                    )
                  )}
                  <li className="mt-10">Follow Us</li>
                  <li>
                    {/* <div className="flex items-center gap-6 mt-3">
                      {contactUsData.footer.location.socials.map(
                        (social, index) => {
                          const IconComponent = iconMap[social.name];
                          return IconComponent ? (
                            <IconComponent key={index} />
                          ) : null;
                        }
                      )}
                    </div> */}
                    <div className="flex items-center gap-6 mt-3">
                      {contactUsData.footer.location.socials.map(
                        (social, index) => {
                          const IconComponent = iconMap[social.name];
                          return IconComponent ? (
                            <Link
                              key={index}
                              href={social.href}
                              target="_blank"
                            >
                              <IconComponent />
                            </Link>
                          ) : null;
                        }
                      )}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  {contactUsData.footer.company.title}
                </h4>
                <ul className="space-y-2 text-base">
                  {contactUsData.footer.company.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  {contactUsData.footer.services.title}
                </h4>
                <ul className="space-y-2 text-base">
                  {contactUsData.footer.services.items.map((item, index) => (
                    // <li key={index}>{item}</li>
                    <li key={index}>
                      <Link href={item.url}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Ellipse Image */}
          <div className="relative">
            <Image
              src={contactUsData.footer.backgroundImage}
              alt="Footer Background"
              className="object-contain w-full h-full absolute bottom-0 left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

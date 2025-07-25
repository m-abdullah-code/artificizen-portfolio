//   <div className="md:w-[40%] w-full flex items-end justify-center px-20">
//                 <div className="space-y-6">
//                   {/* 90% Block */}
//                   <div className="relative inline-block">
//                     {/* Gradient Outline */}
//                     <h1
//                       className="text-8xl font-bold absolute inset-0"
//                       style={{
//                         color: "transparent",
//                         WebkitTextStroke: "3px transparent",
//                         backgroundImage:
//                           "linear-gradient(to right, #0B5CFF, #FF710C)",
//                         WebkitBackgroundClip: "text",
//                         zIndex: 0,
//                       }}
//                     >
//                       90
//                       <span
//                         style={{
//                           backgroundImage:
//                             "linear-gradient(to right, #0B5CFF, #FF710C)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextStroke: "2px transparent",
//                           color: "transparent",
//                         }}
//                       >
//                         %
//                       </span>
//                     </h1>

//                     {/* White Foreground */}
//                     <h1 className="text-8xl font-bold relative z-10 text-white">
//                       90%
//                     </h1>

//                     {/* Label */}
//                     <p className="text-xl font-semibold mt-2">
//                       Savings in cost on video production
//                     </p>
//                   </div>

//                   {/* 250+ Block */}
//                   <div className="relative inline-block">
//                     {/* Gradient Outline */}
//                     <h1
//                       className="text-8xl font-bold absolute inset-0"
//                       style={{
//                         color: "transparent",
//                         WebkitTextStroke: "3px transparent",
//                         backgroundImage:
//                           "linear-gradient(to right, #0B5CFF , #FF710C)",
//                         WebkitBackgroundClip: "text",
//                         zIndex: 0,
//                       }}
//                     >
//                       250
//                       <span
//                         style={{
//                           backgroundImage:
//                             "linear-gradient(to right, #0B5CFF, #FF710C)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextStroke: "2px transparent",
//                           color: "transparent",
//                         }}
//                       >
//                         +
//                       </span>
//                     </h1>

//                     {/* White Foreground */}
//                     <h1 className="text-8xl font-bold relative z-10 text-white">
//                       250+
//                     </h1>

//                     {/* Label */}
//                     <p className="text-xl font-semibold mt-2">
//                       Increase in learning
//                     </p>
//                   </div>
//                 </div>
//               </div>

// import { serviceData } from "@/app/data/ServicesPage/AISolutions/AiSolutions";
// import TopBannerCard from "@/app/shared/TopBannerCard";
// import Image from "next/image";
// import React from "react";
// import Vector from "../../../public/assets/Services/arrowvectorw.png";
// import Main from "../../../public/assets/Services/mainBG.jpg";
// import BulletIcon from "../../../public/assets/CaseStudy/Icon.png";
// import BgCard from "../../../public/assets/Services/bgCard2.jpg";
// import Left from "../../../public/assets/Services/whiteIconc.png";
// import Right from "../../../public/assets/Services/whiteIcon.png";
// import Group from "../../../public/assets/Services/Group.png";

// const ServicesPages = () => {
//   return (
//     <>
//       <div>
//         <TopBannerCard
//           imageSrc={serviceData.image}
//           title={serviceData.heading}
//           description={serviceData.content}
//         />
//       </div>

//       <div className="py-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Left Column (Cards) */}
//           <div className="w-full md:w-[25%] flex flex-col gap-4">
//             {/* Card 1 */}
//             <div className="rounded-xl shadow-md p-4 flex flex-col gap-4 bg-[#F0F2F4]">
//               <ul className="list-inside text-[#9B9B9B] text-base mt-5 mb-5 flex flex-col gap-2">
//                 {[
//                   "AI Chatbots",
//                   "AI SAAS Development",
//                   "Enterprise AI Automation",
//                   "Cloud Infrastructure",
//                   "Full Stack Web Development",
//                   "Mobile Application Development",
//                   "UI/UX Design",
//                   "Remote Staffing",
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className="group flex justify-between items-center hover:bg-[#0b5cff] hover:text-white p-2 rounded cursor-pointer transition-all"
//                   >
//                     <span>{item}</span>
//                     <Image
//                       src={Vector}
//                       alt="arrow"
//                       width={2}
//                       height={3}
//                       className="w-2 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Card 2 */}
//             <div
//               className="relative h-64 rounded-xl overflow-hidden bg-cover bg-center text-white flex items-center justify-center"
//               style={{
//                 backgroundImage: `linear-gradient(135deg, rgba(0, 56, 80, 0.8), rgba(0, 24, 49, 0.8)), url(${BgCard.src})`,
//               }}
//             >
//               <div className="max-w-[80%]">
//                 <div>
//                   <p className="text-sm mb-5">/ download /</p>
//                   <h2 className="text-4xl font-semibold">Services Details</h2>
//                   <button className="text-base border border-white p-2 px-5 rounded-full mt-5">
//                     Download
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="relative h-64 rounded-xl overflow-hidden bg-cover bg-center text-white flex items-center justify-center"
//               style={{
//                 backgroundImage: `linear-gradient(135deg, rgba(0, 56, 80, 0.8), rgba(0, 24, 49, 0.8)), url(${BgCard.src})`,
//               }}
//             >
//               <div className="max-w-[80%] lg:mt-20">
//                 <div>
//                   <h2 className="text-xl font-semibold">
//                     AI strategy and Consulting
//                   </h2>
//                   <p className="text-sm">
//                     Provide expert guidance on developing an AI strategy
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="w-full md:w-[75%] rounded md:p-6">
//             <h2
//               className=" mb-4"
//               style={{
//                 fontSize: "clamp(1.5rem, 5vw, 3rem)",
//               }}
//             >
//               <span className="bg-gradient-to-r from-[#0b5cff] to-[#5ca0ff] text-transparent bg-clip-text">
//                 Transforming
//               </span>{" "}
//               Digital Engagment
//             </h2>
//             <p className="text-base">
//               In today digital landscape, chatbots deliver 24/7 availability,
//               instant responses, and personalized interactions at scale.
//               Artificizen transforms ordinary business interactions into
//               extraordinary customer experiences through cutting-edge chatbot
//               solutions.
//             </p>
//             <div className="mt-10 md:mt-20 flex justify-center">
//               <Image
//                 src={Main}
//                 alt="Overview iMAGE"
//                 className="rounded-xl object-cover"
//               />
//             </div>
//             <h2
//               className=" mb-5 mt-10"
//               style={{
//                 fontSize: "clamp(1.5rem, 5vw, 3rem)",
//               }}
//             >
//               <span className="bg-gradient-to-r from-[#0b5cff] to-[#5ca0ff] text-transparent bg-clip-text">
//                 Industry
//               </span>{" "}
//               Trends
//             </h2>
//             <p className="text-base">
//               The chatbot industry is undergoing a profound transformation,
//               driven by rapid advancements in artificial intelligence and
//               changing consumer expectations:
//             </p>
//             <div className="flexflex-row gap-8 mt-5">
//               {/* Left Column - 60% */}
//               <div className="w-full">
//                 {/* Bullet Points */}
//                 <ul className="space-y-0">
//                   {[
//                     {
//                       title: "Generative AI Revolution: ",
//                       content:
//                         "Large language models have fundamentally changed what's possible with conversational AI, enabling chatbots to understand context, generate natural responses, and handle complex queries with unprecedented accuracy.",
//                     },
//                     {
//                       title: "Enhanced Natural Language Processing: ",
//                       content:
//                         "Today's chatbots understand nuance, detect sentiment, and respond to conversational cues in ways that were impossible just a few years ago, creating truly natural interactions.",
//                     },
//                     {
//                       title: "Voice Integration: ",
//                       content:
//                         "The convergence of text and voice capabilities has expanded chatbot accessibility, allowing seamless transitions between typing and speaking based on user preferences.",
//                     },
//                     {
//                       title: "Multi-Platform Deployment:",
//                       content:
//                         "Modern chatbots operate across websites, mobile apps, messaging platforms, and voice assistants, providing consistent experiences regardless of where customers engage.",
//                     },
//                     {
//                       title: "Hyper-Personalization: ",
//                       content:
//                         "Advanced analytics and machine learning enable chatbots to deliver increasingly personalized experiences based on user history, preferences, and behavioral patterns.",
//                     },
//                   ].map((point, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       {/* Bullet image (replace BulletIcon later) */}
//                       <Image
//                         src={BulletIcon}
//                         alt="Bullet"
//                         className="w-2 h-3 mt-2"
//                       />
//                       <span className="text-lg">
//                         <b>{point.title}</b> {point.content}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="flexflex-row gap-8 mt-10 lg:mt-20">
//               {/* Left Column - 60% */}
//               <div className="w-full">
//                 {/* Heading */}
//                 <p
//                   className="mb-7 leading-12"
//                   style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
//                 >
//                   <span className="bg-gradient-to-r from-[#0b5cff] to-[#5ca0ff] text-transparent bg-clip-text">
//                     Industry
//                   </span>{" "}
//                   Applications
//                 </p>

//                 {/* Bullet Points */}
//                 <ul className="space-y-0">
//                   {[
//                     {
//                       title: "E-Commerce: ",
//                       content:
//                         "Product discovery, recommendations, and streamlined checkouts.",
//                     },
//                     {
//                       title: "Healthcare: ",
//                       content:
//                         "Appointment scheduling, medication reminders, and symptom assessment.",
//                     },
//                     {
//                       title: "Financial Services: ",
//                       content:
//                         "Account inquiries, transaction processing, and financial guidance.",
//                     },
//                     {
//                       title: "Education: ",
//                       content:
//                         "Personalized tutoring, student support, and administrative assistance.",
//                     },
//                     {
//                       title: "Hospitality: ",
//                       content:
//                         "Booking management, recommendations, and guest services.",
//                     },
//                     {
//                       title: "Real Estate: ",
//                       content:
//                         "Lead qualification, viewing scheduling, and buyer engagement",
//                     },
//                   ].map((point, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       {/* Bullet image (replace BulletIcon later) */}
//                       <Image
//                         src={BulletIcon}
//                         alt="Bullet"
//                         className="w-2 h-3 mt-2"
//                       />
//                       <span className="text-lg">
//                         <b>{point.title}</b> {point.content}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <h2
//               className=" mb-5 mt-10"
//               style={{
//                 fontSize: "clamp(1.5rem, 5vw, 3rem)",
//               }}
//             >
//               <span className="bg-gradient-to-r from-[#0b5cff] to-[#5ca0ff] text-transparent bg-clip-text">
//                 The Artificizen
//               </span>{" "}
//               Advantage
//             </h2>
//             <p className="text-base">
//               We specialize in intelligent, customized chatbot solutions that:
//             </p>
//             <div className="flexflex-row gap-8 mt-5">
//               {/* Left Column - 60% */}
//               <div className="w-full">
//                 {/* Bullet Points */}
//                 <ul className="space-y-0">
//                   {[
//                     {
//                       title: "",
//                       content:
//                         "Understand complex customer inquiries with remarkable accuracy",
//                     },
//                     {
//                       title: "",
//                       content: "Learn continuously from interactions",
//                     },
//                     {
//                       title: "",
//                       content: "Integrate seamlessly with existing systems",
//                     },
//                     {
//                       title: "",
//                       content: "Scale effortlessly as demand grows",
//                     },
//                     {
//                       title: "",
//                       content:
//                         "Provide valuable business insights through conversation analytics",
//                     },
//                   ].map((point, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       {/* Bullet image (replace BulletIcon later) */}
//                       <Image
//                         src={BulletIcon}
//                         alt="Bullet"
//                         className="w-2 h-3 mt-2"
//                       />
//                       <span className="text-lg">
//                         <b>{point.title}</b> {point.content}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className=" bg-black rounded-xl text-white p-5 pt-10 mt-10">
//                 <div className=" grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
//                   <div>
//                     <p className="text-base mb-3">/ projects /</p>
//                     <p
//                       className="leading-8 md:leading-13"
//                       style={{
//                         fontSize: "clamp(1.5rem, 5vw, 3rem)",
//                       }}
//                     >
//                       Pioneering Projects For Intelligent Solutions
//                     </p>

//                     <div className="flex gap-4">
//                       {/* First Button with 2 images */}
//                       <button className="border border-white rounded-full p-2 px-5 mt-10 flex items-center gap-2">
//                         <Image src={Left} alt="icon1" className="w-3 h-3" />
//                         <Image src={Right} alt="icon2" className="w-3 h-3" />
//                       </button>

//                       {/* Second Button with image before text */}
//                       <button className="mt-10 rounded-full p-2 px-5 border border-white flex items-center gap-2">
//                         <Image src={Left} alt="icon" className="w-3 h-3" />
//                         <span>Explore more</span>
//                       </button>
//                     </div>
//                   </div>
//                   <div className="relative inline-block">
//                     {/* Gradient Outline */}
//                     <h1
//                       className="font-bold absolute inset-0"
//                       style={{
//                         color: "transparent",
//                         WebkitTextStroke: "3px transparent", // Ensures gradient shows only on stroke
//                         backgroundImage:
//                           "linear-gradient(to right, #0B5CFF, #FF710C)",
//                         WebkitBackgroundClip: "text",
//                         zIndex: 0,
//                         fontSize: "clamp(3rem, 10vw, 7rem)",
//                       }}
//                     >
//                       350
//                     </h1>

//                     {/* Filled Foreground Text */}
//                     <h1
//                       className="relative z-10 text-black font-bold"
//                       style={{
//                         fontSize: "clamp(3rem, 10vw, 7rem)",
//                       }}
//                     >
//                       350
//                     </h1>
//                     <p className="text-lg">Completed projects</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col lg:flex-row justify-between mt-10">
//                   {/* First Box - Left on lg */}
//                   <div className="h-[250px] w-full lg:w-[48%] border border-gray-500 bg-black text-white relative flex items-end p-4 rounded-xl">
//                     <span className="absolute bottom-4 left-4 text-2xl max-w-[200px]">
//                       DeepVision: Enhancing image recognition with Neural
//                       Networks
//                     </span>
//                   </div>

//                   {/* Second Box - Right on lg */}
//                   <div className="h-[250px] w-full lg:w-[48%] border border-gray-500 bg-black text-white relative flex items-end p-4 rounded-xl">
//                     <span className="absolute bottom-4 left-4 text-2xl max-w-[200px]">
//                       DeepVision: Enhancing image recognition with Neural
//                       Networks
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <p className="text-base mb-4">/ projects /</p>
//                 <p
//                   className="leading-8 lg:leading-13"
//                   style={{
//                     fontSize: "clamp(1.5rem, 5vw, 3rem)", // tailwind text-5xl is 3rem (48px)
//                   }}
//                 >
//                   <span className="bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-text text-transparent">
//                     Our Development{" "}
//                   </span>
//                   Process which makes us stand out
//                 </p>

//                 {/* Grid of Cards */}
//                 <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Card 1 */}
//                   <div className=" p-0 lg:p-5 rounded-xl bg-white">
//                     <p className="text-xl font-semibold mb-2">01</p>
//                     <h3 className="text-2xl font-semibold mb-2">
//                       Discovery & Strategy
//                     </h3>
//                     <p className="text-base text-[#333333]">
//                       Every great product starts with a strong foundation. We
//                       collaborate closely with you to understand your business
//                       goals, target audience, and pain points. Through
//                       workshops, research, and deep AI/tech consultation, we
//                       define a clear strategy that aligns with your vision and
//                       sets the direction for success.
//                     </p>
//                   </div>

//                   {/* Card 2 */}
//                   <div className=" p-0 lg:p-5 rounded-xl bg-white">
//                     <p className="text-xl font-semibold mb-2">02</p>
//                     <h3 className="text-2xl font-semibold mb-2">
//                       Design & Prototype
//                     </h3>
//                     <p className="text-base text-[#333333]">
//                       User experience is at the heart of everything we do. Our
//                       UI/UX experts craft intuitive, visually compelling
//                       interfaces that are not only functional but also
//                       user-friendly. We create wireframes and interactive
//                       prototypes to validate ideas early and ensure your
//                       solution is engaging, accessible, and effective.
//                     </p>
//                   </div>

//                   {/* Card 3 */}
//                   <div className=" p-0 lg:p-5 rounded-xl bg-white">
//                     <p className="text-xl font-semibold mb-2">03</p>
//                     <h3 className="text-2xl font-semibold mb-2">
//                       Development & Integration
//                     </h3>
//                     <p className="text-base text-[#333333]">
//                       With a focus on clean code, performance, and scalability,
//                       our developers bring the product to life using the latest
//                       in AI/ML, cloud, and backend technologies. Whether it’s
//                       Generative AI, NLP, or predictive analytics, we seamlessly
//                       integrate solutions with your existing systems to ensure
//                       smooth operations.
//                     </p>
//                   </div>

//                   {/* Card 4 */}
//                   <div className=" p-0 lg:p-5 rounded-xl bg-white">
//                     <p className="text-xl font-semibold mb-2">04</p>
//                     <h3 className="text-2xl font-semibold mb-2">
//                       Testing, Launch & Scale
//                     </h3>
//                     <p className="text-base text-[#333333]">
//                       Before launch, your product goes through rigorous
//                       testing—manual, automated, and AI-driven—to ensure it
//                       meets the highest quality standards. We then deploy
//                       confidently and support you post-launch with updates,
//                       performance monitoring, and strategies to scale as your
//                       business grows.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative bg-gray-100 p-4 lg:p-10 rounded-xl overflow-hidden mt-10">
//                 {/* Heading */}
//                 <h2
//                   className="leading-13"
//                   style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }} // equivalent to text-5xl (48px max)
//                 >
//                   Partner With Us
//                 </h2>

//                 {/* Content */}
//                 <p className="text-base font-semibold text-black mt-4">
//                   Ready to transform your customer engagement? Contact
//                   Artificizen today to enhance satisfaction, streamline
//                   operations, and drive growth with AI-powered conversational
//                   solutions that donot just respond to customer needs—they
//                   anticipate them.
//                 </p>

//                 {/* Bottom-left fixed image inside the container */}
//                 <Image
//                   src={Group}
//                   alt="Decor"
//                   className="absolute bottom-4 left-4 w-24 h-auto pointer-events-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesPages;

import TopBannerCard from "@/app/shared/TopBannerCard";
import Image from "next/image";
import React from "react";
import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import BulletIcon from "../../../public/assets/Services/whiteIcon.png";
import Icon from "../../../public/assets/Services/Container.png";
import Footer from "@/app/components/layout/Footer/Footer";

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
                            className="w-2 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
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
                      <Image src={Icon} alt="Bullet" className="w-2 h-3 mt-2" />
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
                          className="w-2 h-3 mt-2"
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
                      <Image src={Icon} alt="Bullet" className="w-2 h-3 mt-2" />
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
                  <div className="flex gap-4">
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
                  </div>
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
              <div className="flex flex-col lg:flex-row justify-between mt-10">
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
                    <p className="text-xl font-semibold mb-2">{step.number}</p>
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

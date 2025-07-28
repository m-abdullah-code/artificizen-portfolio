// "use client";

// import React from "react";
// import TopBannerCard from "@/app/shared/TopBannerCard";
// import CardWithContent from "@/app/shared/CardWithContent";
// import Group from "../../../public/assets/Services/Group.png";
// import BycImage from "../../../public/assets/Byc/byc main.png";
// import Left1 from "../../../public/assets/Byc/byc1.png";
// import Image from "next/image";
// import Byc2 from "../../../public/assets/Byc/byc2.jpg";
// import StorySection from "@/app/shared/StorySection";
// import WhiteIcon from "../../../public/assets/Services/whiteIcon.png";
// import Footer from "@/app/components/layout/Footer/Footer";

// const BringYourClient = () => {
//   return (
//     <div>
//       <TopBannerCard
//         imageSrc={BycImage}
//         title="Bring Your Client (BYC)"
//         description="Your network is your net worth"
//       />

//       <div className="mt-10">
//         <CardWithContent
//           topText="/ About BYC /"
//           heading={["Refer Once. Earn Forever"]}
//           content={[
//             "Your network is your net worth. At Artificizen, we believe that when one of us wins, all of us should win. That's why we created BYC – Bring Your Client, a program designed for dreamers, doers, and connectors. Whether you are a freelancer, founder, tech enthusiast, or someone who simply believes in our work—this is your chance to earn, grow, and thrive by referring clients to us.",
//             "This isn't just another referral program. It's a lifetime partnership model that transforms your connections into continuous value, creating passive income streams that can last for decades. We're building something different: a community of forward-thinkers who believe in the power of AI to transform businesses—and in the power of people to transform each other’s futures.",
//             "Enjoy a collaborative environment, flexible hours, and great benefits.",
//           ]}
//           image={Left1}
//           imagePosition="left"
//           lineIndex={0}
//           wordCount={2}
//         />
//       </div>

//       <div className="mt-10">
//         <p className="text-base">/ How it Works /</p>
//         <p
//           className="lg:max-w-[70%] font-semibold"
//           style={{
//             fontSize: "clamp(1.5rem, 5vw, 3rem)",
//             lineHeight: "clamp(2rem, 6vw, 3.5rem)",
//           }}
//         >
//           <span className="text-[#6f9af8]">Refer & Earn</span> Turn Connections
//           into Lifetime Income
//         </p>

//         {/* Cards */}
//         <div className="mt-16 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//           {[
//             {
//               number: "01",
//               title: "Refer Your Client",
//               desc: "Fill out our simple referral form or reach out directly to our partnership team with basic information about the potential client and project. We respect your relationships and handle every introduction with care.",
//             },
//             {
//               number: "02",
//               title: "We Qualify and Connect",
//               desc: "Our team engages with the lead, verifies project feasibility, and schedules a comprehensive discovery call. We keep you updated every step of the way, maintaining complete transparency throughout the process.",
//             },
//             {
//               number: "03",
//               title: "We Deliver the Project",
//               desc: "Once the client signs, we begin the journey—turning their idea into reality through our expert development, design, and AI implementation processes. You can track progress through your partner dashboard.",
//             },
//             {
//               number: "04",
//               title: "You Earn 8%",
//               desc: "When the project is delivered and payment is received, you earn an 8% commission on the total project value. For a typical $50,000 project, that's $4,000 directly into your account—for a single introduction. No question is asked",
//             },
//             {
//               number: "05",
//               title: "Income -3% Forever",
//               desc: "Once the client signs, we begin the journey—turning their idea into reality through our expert development, design, and AI implementation processes. You can track progress through your partner dashboard.",
//             },
//           ].map((item, index) => (
//             <div key={index} className="text-center">
//               <p
//                 className="font-bold text-white"
//                 style={{
//                   fontSize: "clamp(3rem, 8vw, 5rem)",
//                   WebkitTextStroke: "1px lightgray",
//                 }}
//               >
//                 {item.number}
//               </p>
//               <p
//                 className=" font-semibold"
//                 style={{
//                   fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", // ~20px
//                 }}
//               >
//                 {item.title}
//               </p>
//               <p className="text-base text-black">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className=" mt-20 lg:mt-30">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Side - Image */}
//           <div className="w-full md:w-1/2">
//             <Image
//               src={Byc2}
//               alt="BYC"
//               className="w-full h-auto md:h-[500px] object-cover rounded-lg"
//             />
//           </div>

//           {/* Right Side - Content */}
//           <div className="w-full md:w-1/2">
//             <h2
//               className="text-black"
//               style={{
//                 fontSize: "clamp(1.5rem, 5vw, 3.2rem)", // ~5xl
//                 lineHeight: "clamp(2rem, 6vw, 4rem)",
//               }}
//             >
//               <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
//                 Why Makes
//               </span>{" "}
//               BYC Unique?
//             </h2>
//             <p className="text-base text-gray-700 mt-4">
//               Partnering with us opens the door to a long-term revenue stream
//               and expert project handling. Here’s why you should join:
//             </p>

//             {/* Points */}
//             <div className="mt-6 space-y-2">
//               {[
//                 {
//                   number: 1,
//                   title: "Zero hassle,",
//                   content:
//                     " You refer, we build, you earn. Our streamlined process handles everything from qualification to payment.",
//                 },
//                 {
//                   number: 2,
//                   title: "Transparent tracking ",
//                   content:
//                     " through your own partner dashboard with real-time updates and projections.",
//                 },
//                 {
//                   number: 3,
//                   title: "Lifetime earnings ",
//                   content:
//                     "without any further work from your side—true passive income from a single connection.",
//                 },
//                 {
//                   number: 4,
//                   title: "Diverse project options — ",
//                   content:
//                     "AI solutions, SaaS development, chatbots, automation, voice technology, and more.",
//                 },
//                 {
//                   number: 5,
//                   title: "You don't need to be a techie — ",
//                   content:
//                     "just someone with valuable connections and an eye for opportunity.",
//                 },
//               ].map((item) => (
//                 <div key={item.number} className="flex items-start gap-2">
//                   <span className="text-primary font-semibold">
//                     {item.number}.
//                   </span>
//                   <div>
//                     <p className="text-base font-medium text-black">
//                       {item.title}:{" "}
//                       <span className="font-normal">{item.content}</span>
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-20 lg:mt-40">
//               <h2
//                 className="text-black"
//                 style={{
//                   fontSize: "clamp(1.5rem, 5vw, 3.2rem)", // ~5xl
//                   lineHeight: "clamp(2rem, 6vw, 4rem)",
//                 }}
//               >
//                 <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
//                   Your BYC
//                 </span>{" "}
//                 Dashboard Includes:
//               </h2>

//               {/* Points */}
//               <div className="mt-6 space-y-4">
//                 {[
//                   {
//                     content:
//                       "Client referral status with stage-by-stage tracking",
//                   },
//                   {
//                     content: "Project progress timeline and milestone updates",
//                   },
//                   {
//                     content: "Total commissions earned across all referrals",
//                   },
//                   {
//                     content:
//                       "Future reward projections based on client retention patterns",
//                   },
//                   {
//                     content:
//                       "Withdraw/payment history with multiple payout options",
//                   },
//                   {
//                     content:
//                       "Analytics & performance breakdown to optimize your referral strategy",
//                   },
//                 ].map((item) => (
//                   <div key={item.content} className="flex items-start gap-2">
//                     <span className="text-xl font-semibold">•</span>
//                     <div>
//                       <p className="text-black">
//                         <span className="font-semibold text-bse">
//                           {item.content}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-20 lg:mt-40">
//               <h2
//                 className="text-black"
//                 style={{
//                   fontSize: "clamp(1.5rem, 5vw, 3.2rem)", // ~5xl
//                   lineHeight: "clamp(2rem, 6vw, 4rem)",
//                 }}
//               >
//                 <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
//                   Year Loyalty Bonus
//                 </span>{" "}
//                 The Legacy Reward
//               </h2>
//               <p className="text-base text-gray-700 mt-4">
//                 We believe in long-term relationships. If the client you refer
//                 works with us continuously for 10 years, you unlock our Legacy
//                 Partner Package, which includes:
//               </p>

//               {/* Points */}
//               <div className="mt-6 space-y-4">
//                 {[
//                   {
//                     content:
//                       "A one-time lump sum bonus equivalent to 10% of the client's average annual spend",
//                   },
//                   {
//                     content:
//                       "Extra 5% reward on the 10-year anniversary invoice",
//                   },
//                   {
//                     content: "A paid travel voucher for vacations ",
//                   },
//                   {
//                     content:
//                       "Special contribution toward your retirement/future savings plan",
//                   },
//                   {
//                     content: "Invitation to join our Partner Board",
//                   },
//                   {
//                     content:
//                       "Premium access to beta programs, launches & private investment opportunities",
//                   },
//                 ].map((item) => (
//                   <div key={item.content} className="flex items-start gap-2">
//                     <span className="text-xl font-semibold">•</span>
//                     <div>
//                       <p className="text-base font-medium text-black">
//                         <span className="font-normal">{item.content}</span>
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-20 lg:mt-40">
//               <h2
//                 className="text-black"
//                 style={{
//                   fontSize: "clamp(1.5rem, 5vw, 3.2rem)", // ~5xl
//                   lineHeight: "clamp(2rem, 6vw, 4rem)",
//                 }}
//               >
//                 <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
//                   Who Should
//                 </span>{" "}
//                 Join BYC?
//               </h2>
//               {/* Points */}
//               <div className="mt-6 space-y-4">
//                 {[
//                   {
//                     title: "Tech consultants ",
//                     content:
//                       " looking to expand their service offerings without adding overheads",
//                   },
//                   {
//                     title: "Startup mentors ",
//                     content:
//                       "who encounter founders needing technical implementation",
//                   },
//                   {
//                     title: "Freelancers ",
//                     content:
//                       "who want to offer enterprise-grade solutions to their clients",
//                   },
//                   {
//                     title: "Marketing agencies ",
//                     content:
//                       "seeking reliable technical partners for their clients' AI needs",
//                   },
//                   {
//                     title: "Community leaders ",
//                     content:
//                       "who regularly connect with innovation-focused businessess",
//                   },
//                   {
//                     title: "Passionate individuals ",
//                     content:
//                       "who believe in the power of AI to transform busine",
//                   },
//                 ].map((item) => (
//                   <div key={item.content} className="flex items-start gap-2">
//                     <span className="text-xl font-semibold">•</span>
//                     <div>
//                       <p className="text-base font-medium text-black">
//                         {item.title}:{" "}
//                         <span className="font-normal">{item.content}</span>
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-20 md:mt-30">
//         <StorySection
//           data={{
//             title: "Real Partner ",
//             subtitle: "Stories",
//             starColor: "#FFD700",
//             cards: [
//               {
//                 heading: "Sarah K., Marketing Consultant",
//                 stars: 5,
//                 content:
//                   "What started as a single client referral has generated over $12,000 in passive income for me over the past three years. The Artificizen team handled everything perfectly, and I have now referred five more clients into the program.",
//               },
//               {
//                 heading: "Michael T., Startup Mentor",
//                 stars: 5,
//                 content:
//                   "As a non-technical founder advisor, I often encounter startups needing AI implementation. The BYC program allows me to provide genuine value through warm introductions while creating a meaningful income stream. Their dashboard makes tracking everything effortless.",
//               },
//               {
//                 heading: "David L., Healthcare Consultant",
//                 stars: 5,
//                 content:
//                   "I referred a healthcare client who needed an AI solution for patient scheduling. Three years later, they've expanded to five additional projects with Artificizen. My initial introduction has turned into over $67,000 in commissions, with monthly payments still coming in. The best part? I haven't had to do anything beyond that first email.",
//               },
//               {
//                 heading: "Fatima A. – Operations Manager",
//                 stars: 5,
//                 content:
//                   "As a freelance UX designer, I often couldn't handle the AI development needs of my enterprise clients. Instead of turning them away, I now refer them to Artificizen. Not only do I earn substantial commissions, but my clients see me as more valuable for making the connection. It's truly a win-win-win arrangement.",
//               },
//             ],
//           }}
//         />
//       </div>
//       <div className="relative bg-gray-100 p-4 lg:p-10 rounded-xl overflow-hidden mt-10">
//         <h2
//           className="leading-13"
//           style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
//         >
//           <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
//             Refer Once.{" "}
//           </span>{" "}
//           Earn Forever. Leave a Legacy
//         </h2>
//         <p className="text-base font-semibold text-black mt-4">
//           oin the BYC Partner Program today and start building a future where
//           your connections reward you for life. Lets grow together—because we
//           rise by lifting others.
//         </p>
//         <div className="flex flex-wrap justify-start gap-4 mt-6">
//           {/* Button 1 */}
//           <button className="flex items-center gap-2 p-2 px-5 bg-[#0b5cff] text-white rounded-full ">
//             <Image src={WhiteIcon} alt="User" className="w-3 h-3" />
//             <span>Apply Now</span>
//           </button>

//           {/* Button 2 */}
//           <button className="flex items-center gap-2 p-2 px-5 bg-[#0b5cff] text-white rounded-full ">
//             <Image src={WhiteIcon} alt="Like" className="w-3 h-3" />
//             <span>Schedule a Partnership Call</span>
//           </button>

//           {/* Button 3 */}
//           <button className="flex items-center gap-2 p-2 px-5 bg-[#0b5cff] text-white rounded-full ">
//             <Image src={WhiteIcon} alt="Share" className="w-3 h-3" />
//             <span>Download Partner Guide</span>
//           </button>
//         </div>
//         <Image
//           src={Group}
//           alt="Decor"
//           className="absolute bottom-4 left-4 w-24 h-auto pointer-events-none"
//         />
//       </div>
//       <div className="mt-10 md:mt-20">
//         <Footer
//           headings={[
//             "Have an Idea?",
//             "A Challenge?",
//             "Or Just Curious",
//             "About What AI Can",
//             "Do For Your Buisness?",
//           ]}
//           description="Let’s collaborate to bring your AI vision to life with speed and precision."
//           gradientIndex={0}
//           gradientWordCount={0}
//         />
//       </div>
//     </div>
//   );
// };

// export default BringYourClient;


"use client";

import React from "react";
import TopBannerCard from "@/app/shared/TopBannerCard";
import CardWithContent from "@/app/shared/CardWithContent";
import Image from "next/image";
import StorySection from "@/app/shared/StorySection";
import Footer from "@/app/components/layout/Footer/Footer";
import { bycData } from "@/app/data/PartnershipPage/PartnershipPage";

const BringYourClient = () => {
  return (
    <div>
      <TopBannerCard
        imageSrc={bycData.banner.image}
        title={bycData.banner.title}
        description={bycData.banner.description}
      />

      <div className="mt-10">
        <CardWithContent
          topText={bycData.cardWithContent.topText}
          heading={bycData.cardWithContent.heading}
          content={bycData.cardWithContent.content}
          image={bycData.cardWithContent.image}
          imagePosition={bycData.cardWithContent.imagePosition}
          lineIndex={bycData.cardWithContent.lineIndex}
          wordCount={bycData.cardWithContent.wordCount}
        />
      </div>

      <div className="mt-10">
        <p className="text-base">{bycData.howItWorks.topText}</p>
        <p
          className="lg:max-w-[70%] font-semibold"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            lineHeight: "clamp(2rem, 6vw, 3.5rem)",
          }}
        >
          <span className="text-[#6f9af8]">{bycData.howItWorks.heading}</span>{" "}
          {bycData.howItWorks.subheading}
        </p>

        {/* Cards */}
        <div className="mt-16 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {bycData.howItWorks.cards.map((item, index) => (
            <div key={index} className="text-center">
              <p
                className="font-bold text-white"
                style={{
                  fontSize: "clamp(3rem, 8vw, 5rem)",
                  WebkitTextStroke: "1px lightgray",
                }}
              >
                {item.number}
              </p>
              <p
                className="font-semibold"
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)",
                }}
              >
                {item.title}
              </p>
              <p className="text-base text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 lg:mt-30">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={bycData.uniqueSection.image || bycData.banner.image} // Fallback to banner image if needed
              alt="BYC"
              className="w-full h-auto md:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2">
            <h2
              className="text-black"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                lineHeight: "clamp(2rem, 6vw, 4rem)",
              }}
            >
              <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                {bycData.uniqueSection.heading}
              </span>{" "}
              {bycData.uniqueSection.subheading}
            </h2>
            <p className="text-base text-gray-700 mt-4">
              {bycData.uniqueSection.content}
            </p>

            {/* Points */}
            <div className="mt-6 space-y-2">
              {bycData.uniqueSection.points.map((item) => (
                <div key={item.number} className="flex items-start gap-2">
                  <span className="text-primary font-semibold">
                    {item.number}.
                  </span>
                  <div>
                    <p className="text-base font-medium text-black">
                      {item.title}: <span className="font-normal">{item.content}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20 lg:mt-40">
              <h2
                className="text-black"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                  lineHeight: "clamp(2rem, 6vw, 4rem)",
                }}
              >
                <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                  {bycData.dashboardSection.heading}
                </span>{" "}
                {bycData.dashboardSection.subheading}
              </h2>

              {/* Points */}
              <div className="mt-6 space-y-4">
                {bycData.dashboardSection.points.map((item) => (
                  <div key={item.content} className="flex items-start gap-2">
                    <span className="text-xl font-semibold">•</span>
                    <div>
                      <p className="text-black">
                        <span className="font-semibold text-base">
                          {item.content}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 lg:mt-40">
              <h2
                className="text-black"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                  lineHeight: "clamp(2rem, 6vw, 4rem)",
                }}
              >
                <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                  {bycData.loyaltyBonusSection.heading}
                </span>{" "}
                {bycData.loyaltyBonusSection.subheading}
              </h2>
              <p className="text-base text-gray-700 mt-4">
                {bycData.loyaltyBonusSection.content}
              </p>

              {/* Points */}
              <div className="mt-6 space-y-4">
                {bycData.loyaltyBonusSection.points.map((item) => (
                  <div key={item.content} className="flex items-start gap-2">
                    <span className="text-xl font-semibold">•</span>
                    <div>
                      <p className="text-base font-medium text-black">
                        <span className="font-normal">{item.content}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 lg:mt-40">
              <h2
                className="text-black"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
                  lineHeight: "clamp(2rem, 6vw, 4rem)",
                }}
              >
                <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
                  {bycData.whoShouldJoinSection.heading}
                </span>{" "}
                {bycData.whoShouldJoinSection.subheading}
              </h2>
              {/* Points */}
              <div className="mt-6 space-y-4">
                {bycData.whoShouldJoinSection.points.map((item) => (
                  <div key={item.content} className="flex items-start gap-2">
                    <span className="text-xl font-semibold">•</span>
                    <div>
                      <p className="text-base font-medium text-black">
                        {item.title}: <span className="font-normal">{item.content}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-30">
        <StorySection
          data={{
            title: bycData.storySection.title,
            subtitle: bycData.storySection.subtitle,
            starColor: bycData.storySection.starColor,
            cards: bycData.storySection.cards,
          }}
        />
      </div>
      <div className="relative bg-gray-100 p-4 lg:p-10 rounded-xl overflow-hidden mt-10">
        <h2
          className="leading-13"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
        >
          <span className="bg-gradient-to-r from-[#6e9dfd] to-[#9189b3] bg-clip-text text-transparent">
            {bycData.actionSection.heading}
          </span>{" "}
          {bycData.actionSection.subheading}
        </h2>
        <p className="text-base font-semibold text-black mt-4">
          {bycData.actionSection.content}
        </p>
        <div className="flex flex-wrap justify-start gap-4 mt-6">
          {bycData.actionSection.buttons.map((button, index) => (
            <button
              key={index}
              className="flex items-center gap-2 p-2 px-5 bg-[#0b5cff] text-white rounded-full"
            >
              <Image src={button.icon} alt={button.alt} className="w-3 h-3" />
              <span>{button.text}</span>
            </button>
          ))}
        </div>
        <Image
          src={bycData.actionSection.decorImage}
          alt="Decor"
          className="absolute bottom-4 left-4 w-24 h-auto pointer-events-none"
        />
      </div>
      <div className="mt-10 md:mt-20">
        <Footer
          headings={bycData.footer.headings}
          description={bycData.footer.description}
          gradientIndex={bycData.footer.gradientIndex}
          gradientWordCount={bycData.footer.gradientWordCount}
        />
      </div>
    </div>
  );
};

export default BringYourClient;
// import TopBannerCard from "@/app/shared/TopBannerCard";
// import React from "react";
// import Background from "../../../public/assets/Blog/blogMain.png";
// import SideCard from "@/app/shared/SideCard";
// import Image from "next/image";
// import B1 from "../../../public/assets/Blog/b1.png";
// import B2 from "../../../public/assets/Blog/b2.png";
// import B3 from "../../../public/assets/Blog/b3.png";
// import B4 from "../../../public/assets/Blog/b4.png";
// import SideBlogCard from "@/app/shared/SideBlogCard";
// import SideImage from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
// import SideRecentPost from "@/app/shared/SideRecentPost";
// import S1 from "../../../public/assets/Blog/s1.png";
// import S2 from "../../../public/assets/Blog/s2.png";
// import S3 from "../../../public/assets/Blog/s3.jpg";
// import TagSection from "../../shared/SideBlogTags";
// import Icon from "../../../public/assets/career/blackIcon.png";
// import Footer from "@/app/components/layout/Footer/Footer";

// const blogTags = [
//   "/ AI /",
//   "/ Chat GPT /",
//   "/ Neural /",
//   "/ Neuro /",
//   "/ Programming /",
//   "/ Robot /",
// ];

// const blogPosts = [
//   {
//     date: "19 Feb, 2024",
//     title:
//       "How can I get started with Artificial Intelligence for my business?",
//     image: S1,
//   },
//   {
//     date: "19 April, 2024",
//     title: "The Future of AI: Emerging Trends and Technologies to Watch",
//     image: S2,
//   },
//   {
//     date: "9 July, 2025",
//     title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     image: S3,
//   },
// ];

// const blogItems = [
//   "Network Integration",
//   "Deep learning solutions",
//   "Transfer learning",
//   "Model evaluation",
//   "Real-time prediction",
// ];

// const cards = [
//   {
//     id: 1,
//     image: B1,
//     heading:
//       "How can I get started with Artificial Intelligence for my business?",
//     content:
//       "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
//     footer: " / AI / Buisness /",
//   },
//   {
//     id: 2,
//     image: B2,
//     heading: "The Future of AI: Emerging Trends and Technologies to Watch",
//     content:
//       "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
//     footer: " / AI / Neural Network /",
//   },
//   {
//     id: 3,
//     image: B3,
//     heading: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
//     content:
//       "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
//     footer: " / Buisness / Technology /",
//   },
//   {
//     id: 4,
//     image: B4,
//     heading: "How Natural Language Processing is revolutionizing Text Analysis",
//     content:
//       "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
//     footer: " / AI / Buisness /",
//   },
// ];

// const Blog = () => {
//   return (
//     <div>
//       <TopBannerCard
//         imageSrc={Background}
//         title="Blogs"
//         description="Powerful ai solutions tailored to transform your business"
//       />
//       <div className="py-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Left Column */}
//           <div className="w-full md:w-[75%] rounded space-y-5">
//             {cards.map((card) => (
//               <div
//                 key={card.id}
//                 className="bg-white rounded-3xl border border-gray-300 flex flex-col items-start"
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.heading}
//                   className="w-full object-contain rounded"
//                 />
//                 <div className="p-5">
//                   <h2
//                     className="mt-4 text-xl text-black"
//                     style={{
//                       fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
//                       lineHeight: "clamp(2rem, 5vw, 3rem)",
//                     }}
//                   >
//                     {card.heading}
//                   </h2>
//                   <p className="mt-2 text-base text-black">{card.content}</p>
//                   <p className="mt-2 text-sm text-[#9B9B9B">{card.footer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Right Column (Cards) */}
//           <div className="w-full md:w-[25%] flex flex-col gap-4">
//             <SideBlogCard items={blogItems} />
//             <div className="mt-5 mb-5">
//               <SideRecentPost posts={blogPosts} heading="Latest Blogs" />
//             </div>
//             <div className="mb-5">
//               <TagSection title="Tags" tags={blogTags} icon={Icon} />
//             </div>
//             <SideCard
//               image={SideImage}
//               heading="AI Strategy & Consulting"
//               content="Provide expert guidance on developing an AI strategy"
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Blog;

import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import SideCard from "@/app/shared/SideCard";
import Image from "next/image";
import SideBlogCard from "@/app/shared/SideBlogCard";
import SideRecentPost from "@/app/shared/SideRecentPost";
import TagSection from "../../shared/SideBlogTags";
import Footer from "@/app/components/layout/Footer/Footer";
import { blogData } from "@/app/data/BlogPage/BlogPage";

const Blog = () => {
  return (
    <div>
      <TopBannerCard
        imageSrc={blogData.banner.image}
        title={blogData.banner.title}
        description={blogData.banner.description}
      />
      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="w-full md:w-[75%] rounded space-y-5">
            {blogData.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-3xl border border-gray-300 flex flex-col items-start"
              >
                <Image
                  src={card.image}
                  alt={card.heading}
                  className="w-full object-contain rounded"
                />
                <div className="p-5">
                  <h2
                    className="mt-4 text-xl text-black"
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      lineHeight: "clamp(2rem, 5vw, 3rem)",
                    }}
                  >
                    {card.heading}
                  </h2>
                  <p className="mt-2 text-base text-black">{card.content}</p>
                  <p className="mt-2 text-sm text-[#9B9B9B">{card.footer}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column (Cards) */}
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            <SideBlogCard items={blogData.blogItems} />
            <div className="mt-5 mb-5">
              <SideRecentPost
                posts={blogData.blogPosts}
                heading="Latest Blogs"
              />
            </div>
            <div className="mb-5">
              <TagSection
                title="Tags"
                tags={blogData.blogTags}
                icon={blogData.blogTagsIcon}
              />
            </div>
            <SideCard
              image={blogData.sideCard.image}
              heading={blogData.sideCard.heading}
              content={blogData.sideCard.content}
            />
          </div>
        </div>
      </div>
      <Footer
        headings={blogData.footer.headings}
        description={blogData.footer.description}
        gradientIndex={blogData.footer.gradientIndex}
        gradientWordCount={blogData.footer.gradientWordCount}
      />
    </div>
  );
};

export default Blog;

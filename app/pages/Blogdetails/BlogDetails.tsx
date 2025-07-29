// import TopBannerCard from "@/app/shared/TopBannerCard";
// import React from "react";
// import Background from "../../../public/assets/Blog/blogMain.png";
// import SideCard from "@/app/shared/SideCard";
// import SideBlogCard from "@/app/shared/SideBlogCard";
// import SideImage from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
// import SideRecentPost from "@/app/shared/SideRecentPost";
// import S1 from "../../../public/assets/Blog/s1.png";
// import S2 from "../../../public/assets/Blog/s2.png";
// import S3 from "../../../public/assets/Blog/s3.jpg";
// import TagSection from "../../shared/SideBlogTags";
// import Icon from "../../../public/assets/career/blackIcon.png";
// import Footer from "@/app/components/layout/Footer/Footer";
// import Image from "next/image";
// import B1 from "../../../public/assets/Blog/b1.png";
// import Vector from "../../../public/assets/CaseStudy/Vector.png";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import Girl from "../../../public/assets/Blog/g1.jpg";
// import Boy from "../../../public/assets/Blog/b1.jpg";

// const comments = [
//   {
//     name: "Anna Collins",
//     date: "11 Jan 2024",
//     content:
//       "Striped bass yellowtail kingfish angler catfish angelfish longjaw mudsucker, codlet Ragfish Cherubfish. Ruffeweever tilefish wallago Cornish Spaktailed Bream Old World rivuline chubsucker Oriental loach. Indian mul char spotted dogfish Largemouth bass alewife cichlid ladyfish lizardfish",
//     image: Girl,
//   },
//   {
//     name: "Tom Ostin",
//     date: "11 Jan 2024",
//     content:
//       "Old World rivuline chubsucker Oriental loach. Indian mul char spotted dogfish Largemouth bassalewife cichlid ladyfish lizardfish",
//     image: Boy,
//   },
// ];

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

// const BlogDetails = () => {
//   return (
//     <div>
//       <TopBannerCard
//         imageSrc={Background}
//         title="Blogs Detail"
//         description="Powerful ai solutions tailored to transform your business"
//       />
//       <div className="py-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Left Column */}
//           <div className="w-full md:w-[75%] rounded space-y-5">
//             <Image src={B1} alt="Example" className="w-full rounded" />

//             <p className="text-base leading-relaxed text-black font-bold mt-10">
//               In today’s fast-paced and data-driven world, businesses are
//               constantly seeking innovative ways to gain a competitive edge,
//               make smarter decisions, and deliver exceptional customer
//               experiences. One technology that is transforming industries across
//               the globe is neural networks. Harnessing the power of artificial
//               intelligence, neural networks have the ability to analyze vast
//               amounts of data, identify complex patterns, and make accurate
//               predictions, enabling businesses to unlock new opportunities and
//               drive growth.
//             </p>

//             <p className="text-base leading-relaxed text-black">
//               At our company, we specialize in providing comprehensive neural
//               network services that can revolutionize your business. Whether
//               you’re looking to enhance your data analysis capabilities,
//               automate repetitive tasks, improve customer engagement, or
//               optimize operational processes, our team of experts is here to
//               help you leverage the full potential of neural networks. Data lies
//               at the heart of neural networks, and our services start with
//               understanding your unique data landscape. We work closely with you
//               to identify and collect relevant data sources, ensuring that your
//               neural network models are built on a solid foundation. Our data
//               scientists employ cutting-edge techniques to preprocess and clean
//               the data, making it ready for training the neural network models.
//             </p>
//             <div className="bg-gray-200 p-5 md:p-10 rounded-lg flex gap-5">
//               <Image src={Vector} alt="Example" className="w-5 h-5 mb-3" />
//               <div>
//                 <p className="text-black text-sm md:text-base lg:text-xl leading-relaxed font-semibold">
//                   Artificial Intelligence refers to the development of computer
//                   systems that can perform tasks that would typically require
//                   human intelligence. It involves the creation of algorithms and
//                   models that enable machines to learn, reason, perceive.
//                 </p>
//                 <p className="mb-2 text-gray-500 text-base">Adam Peterson</p>
//               </div>
//             </div>
//             <div className="text-base text-black mt-5">
//               The development of neural networks is a specialized task that
//               requires expertise and experience. Our team of skilled
//               professionals excels in designing and implementing neural network
//               architectures tailored to your specific business needs. From
//               traditional feedforward networks to advanced convolutional and
//               recurrent networks, we have the knowledge and skills to build
//               models that deliver superior performance and accuracy.
//             </div>
//             <div className="space-y-2 mt-16">
//               {/* Gradient Line */}
//               <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-orange-600 rounded" />

//               {/* Content under the line */}
//               <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-black">
//                 {/* Left: Name */}
//                 <div className="font-semibold">By Andrew</div>

//                 {/* Center: Tags */}
//                 <div className="flex gap-2 flex-wrap justify-center">
//                   {["/AI/", "/ChatGpt/", "/Neural/"].map((tag, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-200 text-black px-3 py-1 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Right: Social Icons */}
//                 <div className="flex gap-5">
//                   <FaFacebookF className="text-black cursor-pointer" />
//                   <FaLinkedinIn className="text-black cursor-pointer" />
//                   <FaTwitter className="text-black cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-10">
//               <p className="text-[clamp(1.5rem,2.5vw,3rem)] mb-6">Comments</p>

//               {comments.map((comment, index) => (
//                 <div key={index} className="flex items-start gap-4 mb-6">
//                   {/* Avatar */}
//                   <Image
//                     src={comment.image}
//                     alt="Avatar"
//                     className="w-20 h-20 rounded-lg object-cover"
//                   />

//                   {/* Name, date, content */}
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <p className="text-lg text-black">{comment.name}</p>
//                       <button className="text-base text-white bg-black rounded-full p-1 px-3">
//                         Reply
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-500 mb-1">{comment.date}</p>
//                     <p className="text-base text-gray-800">{comment.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gray-200 p-2 md:p-10">
//               {/* Title & Description */}
//               <p className="text-[clamp(1.25rem,2vw,1.75rem)]">
//                 Leave a Comment
//               </p>
//               <p className="mt-2 text-base text-gray-600">
//                 Your email address will not be published. Required fields are
//                 marked *
//               </p>

//               {/* Form Inputs */}
//               <div className="mt-6 space-y-6">
//                 {/* Full Name & Email Row */}
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="flex-1 bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="flex-1 bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500"
//                   />
//                 </div>

//                 {/* Message Field */}
//                 <textarea
//                   placeholder="Message"
//                   rows={4}
//                   className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500"
//                 />

//                 {/* Bottom Row: Text Box + Text + Button */}
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//                   <div className="flex items-center lg:gap-3">
//                     <input
//                       type="checkbox"
//                       placeholder="Your Website"
//                       className="bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 w-full md:w-auto"
//                     />
//                     <span className="text-gray-600 text-base">
//                       Save my name, email, and website in this browser for the
//                       next time I comment.
//                     </span>
//                   </div>
//                 </div>
//                 <button className="bg-black text-white text-sm px-6 py-2 rounded-full">
//                   Send a message
//                 </button>
//               </div>
//             </div>
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

// export default BlogDetails;

import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import SideCard from "@/app/shared/SideCard";
import SideBlogCard from "@/app/shared/SideBlogCard";
import SideRecentPost from "@/app/shared/SideRecentPost";
import TagSection from "../../shared/SideBlogTags";
import Footer from "@/app/components/layout/Footer/Footer";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { blogDetailsData } from "@/app/data/BlogPage/Blogdetails";

const BlogDetails = () => {
  return (
    <div>
      <TopBannerCard
        imageSrc={blogDetailsData.banner.image}
        title={blogDetailsData.banner.title}
        description={blogDetailsData.banner.description}
      />
      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="w-full md:w-[75%] rounded space-y-5">
            <Image
              src={
                blogDetailsData.content.image || blogDetailsData.banner.image
              } // Fallback to banner image
              alt="Example"
              className="w-full rounded"
            />
            {blogDetailsData.content.mainParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base leading-relaxed text-black ${
                  index === 0 ? "font-bold mt-10" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="bg-gray-200 p-5 md:p-10 rounded-lg flex gap-5">
              <Image
                src={blogDetailsData.content.quote.image}
                alt="Example"
                className="w-5 h-5 mb-3"
              />
              <div>
                <p className="text-black text-sm md:text-base lg:text-xl leading-relaxed font-semibold">
                  {blogDetailsData.content.quote.text}
                </p>
                <p className="mb-2 text-gray-500 text-base">
                  {blogDetailsData.content.quote.author}
                </p>
              </div>
            </div>
            <div className="text-base text-black mt-5">
              {blogDetailsData.content.additionalParagraph}
            </div>
            <div className="space-y-2 mt-16">
              {/* Gradient Line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-orange-600 rounded" />

              {/* Content under the line */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-black">
                {/* Left: Name */}
                <div className="font-semibold">By Andrew</div>

                {/* Center: Tags */}
                <div className="flex gap-2 flex-wrap justify-center">
                  {blogDetailsData.content.socialTags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-black px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-5">
                  <FaFacebookF className="text-black cursor-pointer" />
                  <FaLinkedinIn className="text-black cursor-pointer" />
                  <FaTwitter className="text-black cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-[clamp(1.5rem,2.5vw,3rem)] mb-6">Comments</p>

              {blogDetailsData.comments.map((comment, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  {/* Avatar */}
                  <Image
                    src={comment.image}
                    alt="Avatar"
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  {/* Name, date, content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-lg text-black">{comment.name}</p>
                      <button className="text-base text-white bg-black rounded-full p-1 px-3">
                        Reply
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{comment.date}</p>
                    <p className="text-base text-gray-800">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-200 p-2 md:p-10">
              {/* Title & Description */}
              <p className="text-[clamp(1.25rem,2vw,1.75rem)]">
                Leave a Comment
              </p>
              <p className="mt-2 text-base text-gray-600">
                Your email address will not be published. Required fields are
                marked *
              </p>

              {/* Form Inputs */}
              <div className="mt-6 space-y-6">
                {/* Full Name & Email Row */}
                <div className="flex flex-col md:flex-row gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500"
                  />
                </div>

                {/* Message Field */}
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500"
                />

                {/* Bottom Row: Text Box + Text + Button */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center lg:gap-3">
                    <input
                      type="checkbox"
                      placeholder="Your Website"
                      className="bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 w-full md:w-auto"
                    />
                    <span className="text-gray-600 text-base">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </div>
                </div>
                <button className="bg-black text-white text-sm px-6 py-2 rounded-full">
                  Send a message
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            <SideBlogCard items={blogDetailsData.blogItems} />
            <div className="mt-5 mb-5">
              <SideRecentPost
                posts={blogDetailsData.blogPosts}
                heading="Latest Blogs"
              />
            </div>
            <div className="mb-5">
              <TagSection
                title="Tags"
                tags={blogDetailsData.blogTags}
                icon={blogDetailsData.blogTagsIcon}
              />
            </div>
            <SideCard
              image={blogDetailsData.sideCard.image}
              heading={blogDetailsData.sideCard.heading}
              content={blogDetailsData.sideCard.content}
            />
          </div>
        </div>
      </div>
      <Footer
        headings={blogDetailsData.footer.headings}
        description={blogDetailsData.footer.description}
        gradientIndex={blogDetailsData.footer.gradientIndex}
        gradientWordCount={blogDetailsData.footer.gradientWordCount}
      />
    </div>
  );
};

export default BlogDetails;

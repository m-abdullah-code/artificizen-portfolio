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
// import { div } from "framer-motion/client";   
import shareIcon from "../../../public/assets/Icons/shareIcon.svg";

const BlogDetails = () => {
  return (
    <div className="">
      <TopBannerCard
        imageSrc={blogDetailsData.banner.image}
        title={blogDetailsData.banner.title}
        description={blogDetailsData.banner.description}
        breadcrumb={["Home", "Blogs Details"]}
      />

      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto">

          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full md:w-[75%] rounded space-y-5">

              <div className="relative">
                <Image
                  src={
                    blogDetailsData.content.image || blogDetailsData.banner.image
                  } // Fallback to banner image
                  alt="Example"
                  className="w-full rounded"
                />

                {/* Blog Tag */}
                <div className="flex items-center gap-2 absolute -bottom-2 sm:-bottom-3 left-0 z-30">
                  <div
                    className="
                relative
                bg-white 
                py-1.5 md:py-4 
                px-4 md:px-7 
                flex items-center gap-2 
                text-[#9B9B9B] 
                rounded-t-xl md:rounded-t-3xl blog_tag
              "
                  >
                    <p className="text-xs md:text-sm">{blogDetailsData.content.date}</p>
                    <span>/</span>
                    <p className="text-xs md:text-sm">{blogDetailsData.content.blog_name}</p>
                  </div>

                  <div className="flex gap-2 mb-2">
                    {blogDetailsData.content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#F0F2F4] text-[#111111] text-xs md:text-sm px-3 py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {blogDetailsData.content.mainParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-relaxed text-black ${index === 0 ? "font-bold mt-10" : ""
                    }`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="bg-[#F0F2F4] py-10 px-5 md:py-15 md:px-10 rounded-2xl flex gap-5">
                <Image
                  src={blogDetailsData.content.quote.image}
                  alt="Example"
                  className="w-5 h-5 mb-3"
                />
                <div>
                  <p className="text-[#333333] text-sm md:text-base lg:text-xl leading-relaxed font-semibold">
                    {blogDetailsData.content.quote.text}
                  </p>
                  <p className="mb-2 text-gray-500 text-base">
                    {blogDetailsData.content.quote.author}
                  </p>
                </div>
              </div>
              <div className="text-base text-[#333333] mt-10">
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

              <div className="bg-[#F0F2F4] py-10 px-5 md:py-15 md:px-10 mt-15 rounded-3xl">
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
                      className="flex-1 bg-transparent border-b border-[#9B9B9B] focus:outline-none placeholder-[#9B9B9B]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 bg-transparent border-b border-[#9B9B9B] focus:outline-none placeholder-[#9B9B9B]"
                    />
                  </div>

                  {/* Message Field */}
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-[#9B9B9B] focus:outline-none placeholder-[#9B9B9B]"
                  />

                  {/* Bottom Row: Text Box + Text + Button */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center lg:gap-3">
                      <input
                        type="checkbox"
                        placeholder="Your Website"
                        className="bg-transparent border-b border-[#9B9B9B] focus:outline-none placeholder-[#9B9B9B] w-full md:w-auto"
                      />
                      <span className="text-[#9B9B9B] text-base">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#333333] text-white text-sm px-6 py-3 rounded-full cursor-pointer flex items-center gap-2 justify-center">
                    <Image
                      src={shareIcon}
                      alt="Send"
                      className=""
                    />
                    Send a message
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (Cards) */}
            <div className="w-full md:w-[25%] flex flex-col gap-4 sticky-column">
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

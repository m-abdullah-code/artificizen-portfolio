import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";
import SideCard from "@/app/shared/SideCard";
import Image from "next/image";
import SideBlogCard from "@/app/shared/SideBlogCard";
import SideRecentPost from "@/app/shared/SideRecentPost";
import TagSection from "../../shared/SideBlogTags";
import Footer from "@/app/components/layout/Footer/Footer";
import { blogData } from "@/app/data/BlogPage/BlogPage";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="">
      <TopBannerCard
        imageSrc={blogData.banner.image}
        title={blogData.banner.title}
        description={blogData.banner.description}
        breadcrumb={["Home", "Blogs"]}
      />
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row gap-7">

            {/* Left Column */}
            <div className="w-full md:w-[75%] rounded space-y-6 sm:space-y-7">
              {blogData.cards.map((card) => (
                <Link
                  key={card.id}
                  // href={`/blog/${card.id}`}
                  href={`/blog-details`}
                  className="
                  bg-white rounded-2xl sm:rounded-3xl 
                  overflow-hidden border border-gray-300 
                  flex flex-col items-start"
                >
                  {/* Image Section */}
                  <div className="relative w-full">
                    <Image
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-auto object-cover rounded-t-2xl sm:rounded-t-3xl"
                    />

                    {/* Blog Tag */}
                    <div
                      className="
            absolute -bottom-2 sm:-bottom-3 left-0 z-30 
            bg-white 
            py-1.5 sm:py-4 
            px-4 sm:px-10 
            flex items-center gap-2 
            text-[#9B9B9B] 
            rounded-t-xl sm:rounded-t-3xl blog_tag
          "
                    >
                      <p className="text-xs sm:text-sm">{card.date}</p>
                      <span>/</span>
                      <p className="text-xs sm:text-sm">{card.blog_name}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5">
                    <h2
                      className="
            mt-4 
            text-xl sm:text-2xl md:text-[32px] lg:text-[40px] 
            leading-snug 
            text-[#111111]
          "
                    >
                      {card.heading}
                    </h2>

                    <p className="mt-2 text-sm sm:text-base text-[#333333]">
                      {card.content}
                    </p>

                    <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#9B9B9B]">
                      {card.footer}
                    </p>
                  </div>
                </Link>
              ))}
            </div>


            {/* Right Column (Cards) */}
            <div className="w-full md:w-[25%] flex flex-col gap-4 sticky-column">
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

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

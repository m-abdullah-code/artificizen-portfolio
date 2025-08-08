import Image, { StaticImageData } from "next/image";
import React from "react";
import Icon from "../../public/assets/Icons/BLeftIcon.png";

type Post = {
  date: string;
  title: string;
  image: StaticImageData;
};

type SideRecentPostProps = {
  posts: Post[];
  heading?: string;
};

const SideRecentPost: React.FC<SideRecentPostProps> = ({
  posts,
  heading = "Recent Posts",
}) => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl text-black font-semibold">{heading}</p>
        <Image src={Icon} alt="Icon" className="w-4 h-4" />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black mb-4" />

      {/* Post Items */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Image
              src={post.image}
              alt="Post"
              width={60}
              height={60}
              className="w-[60px] h-[60px] rounded-md object-cover"
            />
            <div>
              <p className="text-sm text-[#9B9B9B] mb-1">{post.date}</p>
              <p className="text-sm text-black font-medium leading-tight">
                {post.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideRecentPost;

import { StaticImageData } from "next/image";

// Interface for blog post data (used in SideRecentPost)
export interface BlogPost {
  id: number;
  date: string;
  blog_name: string;
  title: string;
  image: StaticImageData;
}

// Interface for comment data
export interface Comment {
  name: string;
  date: string;
  content: string;
  image: StaticImageData;
}

// Interface for SideCard data
export interface SideCardData {
  image: StaticImageData;
  heading: string;
  content: string;
}

// Interface for Footer data
export interface FooterData {
  headings: string[];
  description: string;
  gradientIndex: number;
  gradientWordCount: number;
}

// Interface for main blog content
export interface BlogContent {
  mainParagraphs: string[];
  quote: {
    text: string;
    author: string;
    image: StaticImageData;
  };
  additionalParagraph: string;
  socialTags: string[];
  image?: StaticImageData;
  date: string;
  blog_name: string;
  tags: string[];
}

// Main data structure
export interface BlogDetailsPageData {
  banner: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  blogTags: string[];
  blogTagsIcon: StaticImageData;
  blogPosts: BlogPost[];
  blogItems: string[];
  sideCard: SideCardData;
  comments: Comment[];
  content: BlogContent;
  footer: FooterData;
}

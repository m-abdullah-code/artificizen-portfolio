import { StaticImageData } from "next/image";

// Interface for blog post data (used in SideRecentPost)
export interface BlogPost {
  date: string;
  title: string;
  image: StaticImageData;
}

// Interface for blog card data (main blog cards)
export interface BlogCard {
  id: number;
  date: string
  blog_name: string,
  image: StaticImageData;
  heading: string;
  content: string;
  footer: string;
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

// Main data structure
export interface BlogPageData {
  banner: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  blogTagsIcon: StaticImageData;
  blogTags: string[];
  blogPosts: BlogPost[];
  blogItems: string[];
  cards: BlogCard[];
  sideCard: SideCardData;
  footer: FooterData;
}

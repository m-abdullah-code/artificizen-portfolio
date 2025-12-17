import Background from "../../../public/assets/Blog/blogBanner.webp";
import B1 from "../../../public/assets/Blog/b1.webp";
import B2 from "../../../public/assets/Blog/b2.webp";
import B3 from "../../../public/assets/Blog/b3.webp";
import B4 from "../../../public/assets/Blog/b4.webp";
import SideImage from "../../../public/assets/CaseStudy/sidebar_img.webp";
import S1 from "../../../public/assets/Blog/s1.webp";
import S2 from "../../../public/assets/Blog/s2.webp";
import S3 from "../../../public/assets/Blog/s3.webp";
import Icon from "../../../public/assets/Icons/BLeftIcon.png";
import { BlogPageData } from "@/app/interfaces/BlogPage";

export const blogData: BlogPageData = {
  banner: {
    image: Background,
    title: "Blogs",
    description: "Powerful AI solutions tailored to transform your business",
  },
  blogTags: [
    "/ AI /",
    "/ Chat GPT /",
    "/ Neural /",
    "/ Neuro /",
    "/ Programming /",
    "/ Robot /",
  ],
  blogTagsIcon: Icon,
  blogPosts: [
    {
      date: "19 Feb, 2024",
      title:
        "How can I get started with Artificial Intelligence for my business?",
      image: S1,
    },
    {
      date: "19 April, 2024",
      title: "The Future of AI: Emerging Trends and Technologies to Watch",
      image: S2,
    },
    {
      date: "9 July, 2025",
      title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
      image: S3,
    },
  ],
  blogItems: [
    "Network Integration",
    "Deep learning solutions",
    "Transfer learning",
    "Model evaluation",
    "Real-time prediction",
  ],
  cards: [
    {
      id: 1,
      image: B1,
      date: "12-Feb-2024",
      blog_name: "andrew",
      heading:
        "How can I get started with Artificial Intelligence for my business?",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / AI / Business /",
    },
    {
      id: 2,
      image: B2,
      date: "12-Feb-2024",
      blog_name: "andrew",
      heading: "The Future of AI: Emerging Trends and Technologies to Watch",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / AI / Neural Network /",
    },
    {
      id: 3,
      image: B3,
      date: "12-Feb-2024",
      blog_name: "andrew",
      heading:
        "Exploring Deep Learning: Unleashing the Power of Neural Networks",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / Business / Technology /",
    },
    {
      id: 4,
      image: B4,
      date: "12-Feb-2024",
      blog_name: "andrew",
      heading:
        "How Natural Language Processing is revolutionizing Text Analysis",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / AI / Business /",
    },
  ],
  sideCard: {
    image: SideImage,
    heading: "AI Strategy & Consulting",
    content: "Provide expert guidance on developing an AI strategy",
  },
  footer: {
    headings: ["We are always ready to help you and answer your questions"],
    description:
      "Let’s collaborate to bring your AI vision to life with speed and precision.",
    gradientIndex: 0,
    gradientWordCount: 2,
  },
};

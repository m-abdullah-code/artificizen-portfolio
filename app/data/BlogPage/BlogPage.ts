import Background from "../../../public/assets/Blog/blogMain.png";
import B1 from "../../../public/assets/Blog/b1.png";
import B2 from "../../../public/assets/Blog/b2.png";
import B3 from "../../../public/assets/Blog/b3.png";
import B4 from "../../../public/assets/Blog/b4.png";
import SideImage from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
import S1 from "../../../public/assets/Blog/s1.png";
import S2 from "../../../public/assets/Blog/s2.png";
import S3 from "../../../public/assets/Blog/s3.jpg";
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
      heading:
        "How can I get started with Artificial Intelligence for my business?",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / AI / Business /",
    },
    {
      id: 2,
      image: B2,
      heading: "The Future of AI: Emerging Trends and Technologies to Watch",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / AI / Neural Network /",
    },
    {
      id: 3,
      image: B3,
      heading:
        "Exploring Deep Learning: Unleashing the Power of Neural Networks",
      content:
        "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that",
      footer: " / Business / Technology /",
    },
    {
      id: 4,
      image: B4,
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

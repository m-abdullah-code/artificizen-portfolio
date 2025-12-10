import { BlogSectionData } from "@/app/interfaces/BlogCard";
import Picture from "../../../public/assets/Blog/blogSection_1.svg";
import Picture2 from "../../../public/assets/Blog/blogSection_2.svg";

export const blogSectionData: BlogSectionData = {
  cards: [
    {
      image: Picture,
      date: "5 Jan 2024 / andrew",
      heading:
        "Is Artificial Intelligence accessible to businesses of all sizes",
      content: "Yes, AI solutions are becoming increasingly accessible to businesses . Yes, AI solutions are becoming increasingly accessible to businesses . Yes, AI solutions are becoming increasingly accessible to businesses ...",
      links: ["AI", "Business"],
      height: "280px",
      href: "/blog",
    },
    {
      image: Picture2,
      date: "19 Feb 2024 / andrew",
      heading:
        "How can I get started with Artificial Intelligence for my business?",
      content: "",
      links: ["AI", "Business"],
      height: "152px",
      href: "/blog",
    },
    {
      image: Picture2,
      date: "19 Feb 2024 / andrew",
      heading:
        "How can I get started with Artificial Intelligence for my business?",
      content: "",
      links: ["AI", "Business"],
      height: "152px",
      href: "/blog",
    },
  ],
  path: "/ blog /",
  title:
    "frontiers of artificial Intelligence: insights, innovations and impact",
  subtitle: "Exploring the ",
};

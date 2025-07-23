import { BlogSectionData } from "@/app/interfaces/BlogCard";
import Robot from "../../../../public/assets/Services/Robot.png";
import Machine from "../../../../public/assets/Services/machine.png";
import Tower from "../../../../public/assets/Services/Tower.png";

export const blogSectionData: BlogSectionData = {
  cards: [
    {
      image: Robot,
      date: "12-05-2025",
      heading:
        "Is Artificial Intelligence accessible to businesses of all sizes",
      content:
        "Yes, AI solutions are becoming increasingly accessible to businesses . Yes, AI solutions are becoming increasingly accessible to businesses . Yes, AI solutions are becoming increasingly accessible to businesses",
      links: ["AI", "Business"],
      height: "280px",
    },
    {
      image: Machine,
      date: "01-06-2025",
      heading:
        "How can I get started with Artificial Intelligence for my business?",
      content: "",
      links: ["AI", "Business"],
      height: "152px",
    },
    {
      image: Tower,
      date: "02-06-2025",
      heading:
        "How can I get started with Artificial Intelligence for my business?",
      content: "",
      links: ["AI", "Business"],
      height: "152px",
    },
  ],
  path: "/ blog /",
  title:
    "frontiers of artificial Intelligence: insights, innovations and impact",
  subtitle: "Exploring the ",
};

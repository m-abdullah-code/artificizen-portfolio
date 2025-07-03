// src/app/data/cardData.ts


import { CardData } from "@/app/interfaces/CardWithContent";
import Buisness from "../../../public/assets/business-hand-robot-handshake-artificial-intelligence-digital-transformation.png";
export const cardData: CardData[] = [
  {
    topText: "/ About Us /",
     heading: [
    "We’re Not Just a Tech Team",
    "We’re Your Innovation",
    "Partner",
  ],
    content: ["At Artificizen, we specialize in building powerful AI-driven solutions that solve real business problems. From MVPs to enterprise-grade systems, we deliver fast, functional, and scalable products that help you outpace your competition. Our global team of top-tier engineers, product strategists, and AI experts have helped startups, SMEs, and enterprises bring their boldest ideas to life.",
    "We ship fast. We think smart. We care about results.",
     " Need to know more?"],
    image: Buisness,
    buttonText: "Explore our story",
    imagePosition: "left",
    lineIndex: 0,
    wordCount: 5,
  },
];
import { StaticImageData } from "next/image";
import { FooterContent } from "./Footer";

export interface CardData {
  topText: string;
  heading: string[];
  content: string[];
  image: StaticImageData;
  buttonText: string;
  imagePosition: "left" | "right";
  lineIndex: number;
  wordCount: number;
}

export interface TeamMember {
  src: StaticImageData;
  name: string;
  role: string;
  designation: string;
}

export interface HowItWorksPoint {
  title: string;
  content: string;
}

export interface WhyChooseUsItem {
  title: string;
  content: string;
}

export interface ImageRowItem {
  src: StaticImageData;
  alt: string;
}

export interface AboutUsPageData {
  background: StaticImageData;
  overlay: {
    heading: string;
    subheading: string;
    quote: string;
    author: string;
  };
  cards: CardData[];
  team: {
    heading: string;
    subheading: string;
    buttonText: string;
    members: TeamMember[];
    creativeLead: {
      image: StaticImageData;
      name: string;
      role: string;
    };
  };
  howItWorks: {
    heading: string;
    subheading: string;
    points: HowItWorksPoint[];
    additionalText: string[];
    image: StaticImageData;
  };
  whyChooseUs: {
    label: string;
    heading: string;
    items: WhyChooseUsItem[];
  };
  imageRow: ImageRowItem[];
  footer: FooterContent;
}

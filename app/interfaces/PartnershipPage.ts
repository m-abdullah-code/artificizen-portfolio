import { StaticImageData } from "next/image";

// Interface for CardWithContent data
export interface CardWithContentData {
  topText: string;
  heading: string[];
  content: string[];
  image: StaticImageData;
  imagePosition: "left" | "right";
  lineIndex: number;
  wordCount: number;
}

// Interface for How It Works cards
export interface HowItWorksCard {
  number: string;
  title: string;
  desc: string;
}

// Interface for Unique Points, Dashboard Points, Loyalty Bonus Points, and Who Should Join Points
export interface Point {
  number?: number; // Optional for numbered points
  title?: string; // Optional for titled points
  content: string;
}

// Interface for StorySection cards
export interface StoryCard {
  heading: string;
  stars: number;
  content: string;
}

// Interface for StorySection data
export interface StorySectionData {
  title: string;
  subtitle: string;
  starColor: string;
  cards: StoryCard[];
}

// Interface for Footer data
export interface FooterData {
  headings: string[];
  description: string;
  gradientIndex: number;
  gradientWordCount: number;
}

// Interface for Action Button
export interface ActionButton {
  text: string;
  icon: StaticImageData;
  alt: string;
}

// Main data structure
export interface BYCPageData {
  banner: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  cardWithContent: CardWithContentData;
  howItWorks: {
    topText: string;
    heading: string;
    subheading: string;
    cards: HowItWorksCard[];
  };
  uniqueSection: {
    heading: string;
    subheading: string;
    content: string;
    points: Point[];
    image: StaticImageData;
  };
  dashboardSection: {
    heading: string;
    subheading: string;
    points: Point[];
  };
  loyaltyBonusSection: {
    heading: string;
    subheading: string;
    content: string;
    points: Point[];
  };
  whoShouldJoinSection: {
    heading: string;
    subheading: string;
    points: Point[];
  };
  storySection: StorySectionData;
  actionSection: {
    heading: string;
    subheading: string;
    content: string;
    buttons: ActionButton[];
    decorImage: StaticImageData;
  };
  footer: FooterData;
}

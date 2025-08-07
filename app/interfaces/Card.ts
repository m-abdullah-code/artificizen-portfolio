import { StaticImageData } from "next/image";

export interface CardData {
  heading: string;
  content: string;
  image?: StaticImageData;
  href?: string;
}

export interface SectionData {
  cards: CardData[];
  title: string;
  subtitle: string;
  path: string;
  // href?: string;
}

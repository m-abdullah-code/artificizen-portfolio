import { StaticImageData } from "next/image";

export interface BlogCardProps {
  image: StaticImageData;
  date: string;
  heading: string;
  content: string;
  links: string[];
  height?: string;
}

export interface BlogSectionData {
  cards: BlogCardProps[];
  path: string;
  title: string;
  subtitle: string;
}

import { StaticImageData } from "next/image";

export interface BlogCardProps {
  image: StaticImageData;
  date: string;
  heading: string;
  content: string;
  links: string[];
  height?: string;
}

export interface BlogCardData {
  image: StaticImageData;
  date: string;
  heading: string;
  content: string;
  links: string[];
  height?: string;
}

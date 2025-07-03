import { StaticImageData } from "next/image";

export interface CardData {
  topText: string;
  heading: string[];
  content: string[];
  image: StaticImageData;
  buttonText: string;
  imagePosition?: "left" | "right";
  lineIndex?: number;
  wordCount?: number;  
}
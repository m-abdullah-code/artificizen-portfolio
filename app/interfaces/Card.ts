import { StaticImageData } from "next/image";

export interface CardData {
  heading: string;
  content: string;
  image?: StaticImageData;
}
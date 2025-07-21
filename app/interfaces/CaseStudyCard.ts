// types/CaseStudyCard.types.ts
import { StaticImageData } from "next/image";

export interface CaseStudyCardProps {
  day: string;
  date: string;
  heading: string;
  imageSrc: StaticImageData;
  btn1: string;
  btn2: string;
}

export interface CaseStudyCardData {
  day: string;
  date: string;
  heading: string;
  imageSrc: StaticImageData;
  width?: number;
  height?: number;
  btn1: string;
  btn2: string;
}

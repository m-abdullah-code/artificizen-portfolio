import { StaticImageData } from "next/image";
import { FooterContent } from "./Footer";
export interface ServicesCardData {
  image: StaticImageData;
  heading: string;
  content: string;
  service?: string;
  index?: string;
  footer: FooterContent;
}

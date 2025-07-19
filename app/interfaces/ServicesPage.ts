import { StaticImageData } from "next/image";
export interface ServicesCardData {
  image: StaticImageData;
  heading: string;
  content: string;
  service?: string;
  index?: string;
}

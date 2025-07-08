import { StaticImageData } from "next/image";

export interface Award {
  id: number;
  image: StaticImageData;
  width: number;
  height: number;
  alt: string;
}

export interface AwardsSectionData {
  headingPrefix: string;
  headingGradient: string;
  headingSuffix: string;
  awards: Award[];
}
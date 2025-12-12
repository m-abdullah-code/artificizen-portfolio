import { StaticImageData } from "next/image";

export interface TopBannerCardProps {
  imageSrc: StaticImageData | string;
  title: string;
  description: string;
  breadcrumb?: string[];
}

export interface TopBannerData {
  imageSrc: StaticImageData | string;
  title: string;
  description: string;
}

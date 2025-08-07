import { StaticImageData } from "next/image";

export interface ProjectCardProps {
  title?: string;
  description?: string;
  bgImage: StaticImageData;
  overlayImage: StaticImageData;
  logoImage: StaticImageData;
  children: React.ReactNode;
  backgroundColor?: string;
  href?: string;
}

export interface ProjectData {
  title: string;
  description: string;
  bgImage: StaticImageData;
  overlayImage: StaticImageData;
  logoImage: StaticImageData;
  backgroundColor?: string;
  href?: string;
}

import { StaticImageData } from "next/image";

export interface CarouselData {
  image: StaticImageData;
  carouselImages: StaticImageData[];
  testimonial: {
    label: string;
    heading: string;
    stat: {
      value: string;
      label: string;
    };
  };
}

import { CarouselData } from "@/app/interfaces/Testimonials";
import Testimonial from "../../../public/assets/Testimonials/background.jpg";
import Carousel1 from "../../../public/assets/Testimonials/top1.jpg";
import Carousel2 from "../../../public/assets/Testimonials/top2.jpg";

export const carouselData: CarouselData = {
  image: Testimonial,
  carouselImages: [Carousel1, Carousel2],
  testimonial: {
    label: "/ testimonials /",
    heading: "Hear What Winning Team Says About Us.",
    stat: {
      value: "60+",
      label: "Happy Clients",
    },
  },
};

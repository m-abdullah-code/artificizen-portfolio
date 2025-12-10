import { CarouselData } from "@/app/interfaces/Testimonials";
import TestimonialImg from "../../../public/assets/Testimonials/testi_bg.svg";
import Carousel1 from "../../../public/assets/Testimonials/top1.jpg";
import Carousel2 from "../../../public/assets/Testimonials/top2.jpg";
import Carousel3 from "../../../public/assets/Testimonials/top1.jpg";
// import playVideo from "../../../public/assets/Testimonials/play_video.svg";

export const carouselData: CarouselData = {
  image: TestimonialImg,
  carouselImages: [Carousel1, Carousel2, Carousel3],
  testimonial: {
    label: "/ testimonials /",
    heading: "Hear What Winning Team Says About Us.",
    names: ["Jake Rom", "Anthony", "Jake Rom"],
    stat: {
      value: "60",
      label: "Happy Clients",
    },
  },
};

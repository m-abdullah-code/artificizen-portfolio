import { ChooseUsData } from "@/app/interfaces/ChooseUs";
import ChooseUs from "../../../public/assets/WhyChooseUs/chooseImage.png";
export const chooseUsData: ChooseUsData = {
  main: {
    label: "/ Why Choose Us /",
    heading: "Driven By Innovation, Built For Your Success",
    image: ChooseUs,
  },
  rightColumn: {
    sections: [
      {
        heading: "Speed Meets Quality:",
        content:
          "We launch AI products in days, not months - without compromising on performance or polish.",
      },
      {
        heading: "Expert-Led, End-to-End:",
        content:
          "From strategy to deployment, our senior engineers and AI specialists handle everything - so you don’t have to.",
      },
      {
        heading: "Built for Business Impact:",
        content:
          "We don’t build for sake of it. Every feature is aligned with your goals, ROI-focused, and ready to scale.",
      },
      {
        heading: "True Collaboration:",
        content:
          "Clear communication, fast feedback loops, and no hand-holding required - just real progress.",
      },
    ],
    buttonText: "Lets Talk",
  },
  stats: {
    stat1: {
      value: "95%",
      label: "Customer Satisfaction",
      description:
        "Achieved a 95% customer satisfaction rate across all AI solutions.",
    },
    stat2: {
      value: "$10mil",
      label: "Cost Savings",
      description:
        "Delivered over $10 million in cost savings for clients through optimized AI solutions.",
    },
  },
};

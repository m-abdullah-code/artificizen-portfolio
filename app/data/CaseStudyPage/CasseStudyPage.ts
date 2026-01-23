import { TopBannerData } from "@/app/interfaces/TopBanner";
import C1 from "../../../public/assets/CaseStudy/c1.webp";
import C2 from "../../../public/assets/CaseStudy/c2.webp";
import C3 from "../../../public/assets/CaseStudy/c3.webp";
import C4 from "../../../public/assets/CaseStudy/c4.webp";
import C5 from "../../../public/assets/CaseStudy/c5.webp";
import C6 from "../../../public/assets/CaseStudy/c6.webp";
import { CaseStudyCardData } from "@/app/interfaces/CaseStudyCard";
import { FooterContent } from "@/app/interfaces/Footer";
import CaseStudy from "../../../public/assets/CaseStudy/CaseStudiesBg1.webp";

export interface CaseStudyData {
  topBanner: TopBannerData;
  cards: CaseStudyCardData[];
  footer: FooterContent;
}

export const caseStudyData: CaseStudyData = {
  topBanner: {
    imageSrc: CaseStudy,
    title: "Case Studies",
    description: "Powerful AI solutions tailored to transform your business",
  },
  cards: [
    {
      btn1: "Solutions",
      btn2: "Urban",
      day: "Jul/24",
      date: "30",
      heading: "Transforming healthcare with predictive analytics",
      imageSrc: C1,
    },
    {
      btn1: "Solutions",
      btn2: "Urban",
      day: "Jul/24",
      date: "30",
      heading: "Improving energy efficiency with AI Optimization",
      imageSrc: C2,
    },
    {
      btn1: "Solutions",
      btn2: "Urban",
      day: "Jul/24",
      date: "30",
      heading: "Boosting Retail Efficiency with Predictive Inventory",
      imageSrc: C3,
    },
    {
      btn1: "Solutions",
      btn2: "Urban",
      day: "Jul/24",
      date: "30",
      heading: "Maximizing Energy Savings through AI Optimization",
      imageSrc: C4,
    },
    {
      btn1: "Solutions",
      btn2: "Urban",
      day: "Jul/24",
      date: "30",
      heading: "Personalizing Education with Adaptive AI Learning Platforms",
      imageSrc: C5,
    },
    {
      btn1: "Solutions",
      btn2: "Urban",
      day: "Jul/24",
      date: "30",
      heading: "Enhancing Financial Security with Advanced Fraud",
      imageSrc: C6,
    },
  ],
  footer: {
    headings: ["We are always ready to help you and answere your questions"],
    description:
      "Let’s collaborate to bring your AI vision to life with speed and precision.",
    gradientIndex: 0,
    gradientWordCount: 2,
  },
};

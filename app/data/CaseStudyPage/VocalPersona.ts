import Background from "../../../public/assets/CaseStudy/CaseStudiesBg1.webp";
import CardImage from "../../../public/assets/CaseStudy/caseStudiesLaw.svg";
import SecondCard from "../../../public/assets/CaseStudy/sidebar_img.webp";
import Overview from "../../../public/assets/CaseStudy/overview.webp";
import Nelson1 from "../../../public/assets/CaseStudy/Nelson1.webp";
import Nelson2 from "../../../public/assets/CaseStudy/Nelson2.webp";
import Vector from "../../../public/assets/CaseStudy/Vector.svg";
import { CaseStudiesData } from "../../interfaces/CaseStudyPage"; // Adjust path
import { caseStudyData } from "./CasseStudyPage";

export const caseStudiesData: CaseStudiesData = {
  background: Background,
  topBanner: {
    title: "VocalPersona",
    description: "Real-Time Voice Transformation Platform",
  },
  cards: {
    client: {
      image: CardImage,
      name: "QUO Legal Firm",
      sector:
        "Infrastructure, Defence and Transport, Public Sector, Health and Not For Profit",
      offering: "Organization Design",
      labels: [
        { key: "Client", value: "QUO Legal Firm" },
        {
          key: "Sector",
          value:
            "Infrastructure, Defence and Transport, Public Sector, Health and Not For Profit",
        },
        { key: "Offering", value: "Organization Design" },
      ],
    },
    strategy: {
      image: SecondCard,
      title: "AI strategy and Consulting",
      description: "Provide expert guidance on developing an AI strategy",
    },
    buttons: [
      {
        text: "/ Solutions /",
        className: "px-4 p-2 bg-white text-sm text-black rounded-full",
      },
      {
        text: "/ Urban /",
        className: "px-4 p-2 bg-white text-black rounded-full text-sm",
      },
    ],
  },
  overview: {
    image: Overview,
    text: "VocalPersona is a cutting-edge voice technology platform that enables users to clone, transform, and personalize vocal characteristics in real-time across multiple contexts, from content creation to accessibility applications and personalized communications",
  },
  clientNeed: {
    text: "A leading media and entertainment company was seeking to revolutionize their content creation processes and expand accessibility options across their platforms. They faced significant challenges with traditional voice-over production, including high costs, scheduling complexities with voice talent, and limitations in creating personalized experiences for diverse audiences. Additionally, they wanted to improve accessibility for users with speech disabilities.",
    images: [Nelson1, Nelson2],
  },
  solution: {
    text: [
      "We developed VocalPersona, a sophisticated voice transformation platform built on a proprietary deep learning architecture that combines neural audio synthesis with emotional and stylistic modeling. The system can generate natural-sounding speech from minimal voice samples while preserving emotional nuance and personalized speaking patterns.",
      "The solution features a secure voice identity management system that protects voice data while enabling controlled sharing and usage rights. A comprehensive style transfer framework allows for voice adaptation across different emotional states, accents, and delivery styles without additional training.",
      "The platform includes robust ethical safeguards, including voice watermarking, usage transparency tools, and consent management systems to prevent misuse while enabling innovative applications.",
    ],
    vectorImage: Vector,
    author: "Adam Peterson",
    bulletText:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive.",
  },
  keyFeatures: {
    title: "Key Features & Capabilities",
    items: [
      {
        title: "Real-Time Voice Cloning: ",
        content:
          "Creates natural-sounding digital voice replicas from just minutes of sample audio.",
      },
      {
        title: "Emotion & Style Modeling: ",
        content:
          "Adjusts vocal delivery across different emotional states and presentation styles.",
      },
      {
        title: "Accent & Language Adaptation: ",
        content:
          " Enables speaking in different accents or languages while maintaining voice identity.",
      },
      {
        title: "Voice Transformation Studio: ",
        content:
          "Interface for fine-tuning voice characteristics and creating custom presets.",
      },
      {
        title: "Accessibility Voice Banking: ",
        content:
          "Preserves voices for individuals at risk of losing speech ability.",
      },
      {
        title: "Multi-Platform Integration: ",
        content:
          "APIs and SDKs for embedding voice capabilities in diverse applications.",
      },
    ],
  },
  impactResults: {
    title: "Impact & Results",
    text: "The media company has reduced voice production costs by 78% and decreased time-to-market for localized content by 64%. Content personalization initiatives using VocalPersona have increased user engagement by 37% and subscription retention by 18%. The accessibility applications have helped over 3,000 users with speech impairments communicate more effectively, with 91% reporting improved quality of life. The platform now processes over 500,000 minutes of voice transformation monthly with a 99.3% quality satisfaction rating.",
  },
  whyItMatters: {
    title: "Why It Matters",
    text: "VocalPersona represents the convergence of advanced AI capabilities and human expression, creating new possibilities for personalized communication and content. By making voice identity adaptable, accessible, and secure, we're enabling more natural human-technology interaction while opening new creative and accessibility frontiers that were previously impossible to achieve at scale.",
  },
  metrics: {
    metric1: {
      value: "90%",
      label: "Savings in cost on video production",
      gradientColor: "linear-gradient(to right, #0B5CFF, #FF710C)",
    },
    metric2: {
      value: "250+",
      label: "Increase in learning",
      gradientColor: "linear-gradient(to right, #0B5CFF, #FF710C)",
    },
  },
  footer: caseStudyData.footer,
};

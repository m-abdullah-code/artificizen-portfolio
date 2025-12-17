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
    title: "Empathica",
    description: "AI-Powered Therapeutic Companion",
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
    text: "Empathica is a groundbreaking mental health platform featuring a hyper-realistic digital therapist that delivers personalized therapeutic support through natural, empathetic conversations. This solution combines advanced AI with evidence-based psychological approaches to increase access to quality mental health support.",
  },
  clientNeed: {
    text: "A leading healthcare provider faced critical challenges in mental health service delivery: long wait times for therapy appointments, prohibitive costs for many patients, and geographic limitations in access to specialized care. They needed a solution that could provide immediate, accessible support while maintaining the human-centered approach essential to effective therapy.",
    images: [Nelson1, Nelson2],
  },
  solution: {
    text: [
      "We created Empathica, a sophisticated therapeutic AI companion built on a foundation of clinically-validated therapeutic frameworks. The system utilizes a proprietary multimodal architecture integrating large language models with emotion recognition systems that analyze facial expressions, voice tonality, and text sentiment.",
      "The solution incorporates a custom-trained language model fine-tuned on anonymized therapy transcripts (with proper ethical clearances) to ensure appropriate therapeutic responses. We developed dynamic therapy protocols that adapt to user needs, incorporating cognitive behavioral therapy, dialectical behavior therapy, and mindfulness techniques.",
      "Real-time supervision tools allow human therapists to review interactions and intervene when necessary, creating a hybrid human-AI care model that scales effectively while maintaining quality standards.",
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
        title: "Multimodal Emotional Intelligence: ",
        content:
          "Real-time analysis of facial expressions, and language to detect emotional states.",
      },
      {
        title: "Personalized Therapeutic Journeys: ",
        content:
          "Adapts approach based on user needs, preferences, and progress.",
      },
      {
        title: "Crisis Detection & Escalation: ",
        content:
          "Automated detection of high-risk situations with immediate human clinician alerts.",
      },
      {
        title: "Progress Tracking Dashboard: ",
        content:
          "Visualized metrics and insights for users and their care providers.",
      },
      {
        title: "Secure Journaling & Reflection Tools:  ",
        content:
          "Encrypted personal space for processing emotions and tracking patterns.",
      },
      {
        title: "Clinician Oversight Portal: ",
        content:
          "Allows human therapists to monitor, intervene, and adjust AI therapeutic approaches.",
      },
    ],
  },
  impactResults: {
    title: "Impact & Results",
    text: "Clinical trials demonstrated that Empathica users experienced a 42% reduction in anxiety symptoms and a 38% reduction in depressive symptoms after 12 weeks of regular engagement. The solution has supported over 10,000 users to date, with 87% reporting improved access to mental health support and 79% noting they felt comfortable discussing sensitive issues with the AI therapist. The healthcare provider has reduced wait times for specialized therapy by 64% and expanded their mental health service capacity by 215%.",
  },
  whyItMatters: {
    title: "Why It Matters",
    text: "Empathica represents a transformative approach to addressing the global mental health crisis by creating a scalable, accessible solution that preserves the human-centered nature of therapeutic support. By combining AI capabilities with clinical expertise, we've created a new care delivery model that extends the reach of mental health services to underserved populations while supporting, rather than replacing, human providers.",
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

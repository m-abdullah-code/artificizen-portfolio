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
    title: "ExecSuite",
    description: "An AI Based Executive Productivity System",
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
    text: "ExecSuite is a comprehensive productivity platform designed specifically for C-suite executives and high-level leaders that intelligently manages scheduling, prioritization, travel logistics, and communications to maximize executive effectiveness and cognitive bandwidth.",
  },
  clientNeed: {
    text: "A multinational corporation identified that their executive team was spending up to 40% of their time on administrative tasks and schedule management rather than strategic initiatives. Executive assistants were overwhelmed with increasingly complex scheduling demands, travel arrangements, and information management. The company needed a solution that could automate these functions while adapting to the unique preferences and priorities of individual executives.",
    images: [Nelson1, Nelson2],
  },
  solution: {
    text: [
      "We created ExecSuite, an AI-powered productivity system built specifically for executive workflows. At its core, the platform features a sophisticated priority management engine that continuously evaluates incoming requests and tasks against strategic objectives and executive preferences.",
      "The solution integrates with email, calendar, CRM, project management tools, and travel platforms to create a unified system of record for all executive commitments and information needs. A proprietary natural language interface allows executives to manage their schedule through voice or text commands, while predictive analytics anticipate needs before they arise.",
      "The system employs reinforcement learning from user feedback to continuously improve its understanding of the executive's preferences, communication style, and decision-making patterns, becoming increasingly personalized over time.",
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
        title: "Dynamic Calendar Optimization:  ",
        content:
          " Automatically structures the day based on energy levels, focus requirements.",
      },
      {
        title: "Intelligent Meeting Management: ",
        content:
          "Prepares briefing materials, suggests agenda items, and captures action items.",
      },
      {
        title: "Seamless Travel Orchestration: ",
        content:
          "End-to-end travel planning with real-time adjustments based on changing conditions.",
      },
      {
        title: "Decision Support System: ",
        content:
          "Contextualizes information and provides relevant data for pending decisions.",
      },
      {
        title: "Relationship Intelligence:  ",
        content:
          "Tracks relationships and previous interactions to provide context for meetings.",
      },
      {
        title: "Cognitive Offloading: ",
        content:
          "Proactively manages follow-ups and commitments to ensure nothing falls through the cracks.",
      },
    ],
  },
  impactResults: {
    title: "Impact & Results",
    text: "Executives using ExecSuite report reclaiming an average of 15 hours per week previously spent on administrative tasks. Meeting preparation time has decreased by 62%, while meeting effectiveness scores have increased by 43%. The system has reduced travel-related stress by 57% through proactive management of logistics and alternatives. Overall, executives report a 38% increase in time spent on strategic initiatives and a 27% improvement in work-life balance.",
  },
  whyItMatters: {
    title: "Why It Matters",
    text: "ExecSuite represents a new paradigm in executive productivity that goes beyond simple task automation to create an intelligent system that understands the complex demands of leadership roles. By creating this specialized AI solution for executive workflow optimization, we're enabling leaders to focus their cognitive resources on high-value strategic thinking while ensuring operational excellence in their day-to-day activities.",
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

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
    title: "AgentForge",
    description: "AgentForge: AI Agent Marketplace & Development Platform",
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
    text: "AgentForge is a revolutionary marketplace platform that democratizes the creation, distribution, and monetization of autonomous AI agents. This ecosystem enables developers, businesses, and everyday users to build, customize, and trade specialized AI workflows and solutions.",
  },
  clientNeed: {
    text: "As AI capabilities advanced rapidly, there emerged a significant gap between technical experts who could build custom AI solutions and the broader market that needed these tools. Organizations required specialized AI agents for unique workflows, but lacked the expertise to develop them in-house. Meanwhile, AI developers needed a streamlined platform to distribute their innovations and establish sustainable revenue streams.",
    images: [Nelson1, Nelson2],
  },
  solution: {
    text: [
      "We developed AgentForge, a comprehensive platform that bridges this gap by providing both a marketplace for AI agents and the development tools to create them. The solution leverages a microservices architecture built on Kubernetes with a React-based frontend and Python/Node.js backend. We implemented a proprietary agent orchestration framework that allows for seamless integration with major LLM providers (OpenAI, Anthropic, etc.) while maintaining consistent performance standards and security protocols.",
      "The platform also features a no-code agent builder with visual programming components for non-technical users, alongside advanced SDK access for developers who need deeper customization. A robust verification and testing framework ensures all marketplace agents meet quality and security standards before publication.",
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
        title: "Agent Builder Studio: ",
        content:
          "Visual No code-based development and Code Based environments with testing tools and templates",
      },
      {
        title: "Enterprise Deployment Framework: ",
        content:
          "Secure deployment options for sensitive corporate environments",
      },
      {
        title: "Discovery Engine: ",
        content:
          "Advanced search and recommendation system to match users with relevant agents",
      },
      {
        title: "Monetization Infrastructure: ",
        content:
          "Flexible pricing models including subscriptions, one-time purchases, and usage-based billing",
      },
      {
        title: "Integration Ecosystem: ",
        content:
          "Pre-built connectors for popular business tools and data sources",
      },
      {
        title: "Governance Console: ",
        content:
          "Compliance monitoring and usage analytics for enterprise customers.",
      },
    ],
  },
  impactResults: {
    title: "Impact & Results",
    text: "In the first month, AgentForge has attracted over 600 developers who have published more than 200 unique agents. Enterprise clients report average productivity gains of 32% in workflows where custom agents have been deployed. The agent development time has decreased by 78% compared to traditional custom AI solution implementations.",
  },
  whyItMatters: {
    title: "Why It Matters",
    text: "AgentForge represents a fundamental shift in how AI solutions are developed and distributed, creating a thriving ecosystem that benefits both creators and users. By lowering the barriers to entry for AI agent development and deployment, we are accelerating the adoption of transformative AI capabilities across industries and democratizing access to this powerful technology.",
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

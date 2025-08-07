import Background from "../../../public/assets/CaseStudy/CaseStudiesBg1.png";
import CardImage from "../../../public/assets/CaseStudy/caseStudiesLaw.png";
import SecondCard from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
import Overview from "../../../public/assets/CaseStudy/overview.png";
import Nelson1 from "../../../public/assets/CaseStudy/Nelson1.png";
import Nelson2 from "../../../public/assets/CaseStudy/Nelson2.png";
import Vector from "../../../public/assets/CaseStudy/Vector.png";
import { CaseStudiesData } from "../../interfaces/CaseStudyPage"; // Adjust path
import { caseStudyData } from "./CasseStudyPage";

export const caseStudiesData: CaseStudiesData = {
  background: Background,
  topBanner: {
    title: "MediMatch",
    description: "Intelligent Healthcare Appointment System",
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
    text: "MediMatch is an intelligent healthcare appointment system that automates the entire process of finding appropriate medical providers, comparing availability, and scheduling appointments based on patient needs, insurance coverage, and provider proximity.",
  },
  clientNeed: {
    text: "A large healthcare network was struggling with inefficient appointment scheduling, resulting in high no-show rates, underutilized provider capacity, and patient frustration. Manual scheduling processes were error-prone and time-consuming, while existing digital solutions lacked the intelligence to properly match patient needs with appropriate providers. Patients often waited weeks for appointments they could have received sooner with better matching capabilities.",
    images: [Nelson1, Nelson2],
  },
  solution: {
    text: [
      "We developed MediMatch, a comprehensive intelligent scheduling platform that leverages natural language processing, predictive analytics, and integration with healthcare systems to revolutionize the appointment booking experience.",
      "The solution incorporates a conversational AI interface that gathers relevant patient information and translates symptomatic descriptions into appropriate medical specialties. A sophisticated matching algorithm considers multiple factors including provider expertise, patient history, insurance coverage, location, and urgency to identify optimal appointment options..",
      "The system integrates with electronic health records, insurance databases, and provider calendaring systems through FHIR-compliant APIs, ensuring accurate real-time availability information and seamless appointment confirmation.",
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
        title: "Natural Language Symptom Analysis:  ",
        content:
          " Translates patient descriptions into appropriate medical specialties",
      },
      {
        title: "Smart Provider Matching: ",
        content:
          "Multi-factor algorithm to find the optimal provider based on specialization, and patient history.",
      },
      {
        title: "Insurance Verification: ",
        content: "Real-time coverage checks and cost estimates.",
      },
      {
        title: "Intelligent Scheduling: ",
        content: "Predictive analytics to suggest optimal appointment slots.",
      },
      {
        title: "Automated Reminders & Preparation:   ",
        content:
          "Customized pre-appointment communications with required documentation.",
      },
      {
        title: "Rescheduling Intelligence: ",
        content:
          "Proactive rescheduling suggestions when cancellations create availability.",
      },
    ],
  },
  impactResults: {
    title: "Impact & Results",
    text: "After implementing MediMatch, the healthcare network saw a 34% reduction in appointment no-shows, 28% decrease in scheduling staff workload, and 42% improvement in provider utilization rates. Patient satisfaction scores related to appointment scheduling increased by 67%, and the average time to secure an appointment decreased from 13 days to 4 days. The system now processes over 25,000 appointments monthly with 99.7% accuracy in matching patients to appropriate specialists.",
  },
  whyItMatters: {
    title: "Why It Matters",
    text: "MediMatch transforms a traditionally frustrating healthcare experience into a seamless, efficient process that benefits all stakeholders in the healthcare ecosystem. By applying AI to optimize the complex variables involved in healthcare scheduling, we've created a solution that improves operational efficiency while simultaneously enhancing patient care through better access and matching to appropriate providers.",
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

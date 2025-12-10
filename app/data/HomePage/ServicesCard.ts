import { SectionData } from "@/app/interfaces/Card";
import Vector from "../../../public/assets/CardVector/service-1.svg";
import Vector2 from "../../../public/assets/CardVector/service-2.svg";
import Vector3 from "../../../public/assets/CardVector/service-3.svg";
import Vector4 from "../../../public/assets/CardVector/service-4.svg";
import Vector5 from "../../../public/assets/CardVector/service-5.svg";
import Vector6 from "../../../public/assets/CardVector/service-6.svg";
import Vector7 from "../../../public/assets/CardVector/service-7.svg";
import Vector8 from "../../../public/assets/CardVector/service-8.svg";
import Vector9 from "../../../public/assets/CardVector/service-9.svg";

export const servicesData: SectionData = {
  cards: [
    {
      heading: "AI Chatbots",
      content:
        "Boost customer support, sales, and user interaction with custom-built AI chatbots.",
      image: Vector,
      href: "/services/chatbot-solutions",
    },
    {
      heading: "AI SaaS Development",
      content:
        "Achieve faster growth with AI SaaS solutions that streamline operations and boost efficiency.",
      image: Vector2,
      href: "/services/saas-development",
    },
    {
      heading: "POC / MVP Development",
      content:
        "Validate your business concept quickly and efficiently with our POC and MVP development services.",
      image: Vector3,
      href: "/services/poc-mvp-development",
    },
    {
      heading: "Enterprise AI Automation",
      content:
        "Replace repetitive tasks with AI, so your team can focus on real impact, not busy work.",
      image: Vector4,
      href: "/services/ai-automation",
    },
    {
      heading: "Cloud Infrastructure",
      content:
        "Build your business on a cloud infrastructure built for flexibility and reliability as your growth demands.",
      image: Vector5,
      href: "/services/cloud-infrastructure",
    },
    {
      heading: "Full Stack Development",
      content:
        "Develop dynamic, responsive web apps tailored to your AI needs with our expert full-stack development services.",
      image: Vector6,
      href: "/services/web-development",
    },
    {
      heading: "Mobile App Development",
      content:
        "Create smart, AI-enhanced mobile apps that deliver seamless user experiences and powerful functionality.",
      image: Vector7,
      href: "/services/mobile-apps",
    },
    {
      heading: "UI/UX Design",
      content:
        "Stand out with innovative UI/UX designs that bring your AI products to life.",
      image: Vector8,
      href: "/services/ui-ux",
    },
    {
      heading: "Remote Staffing",
      content:
        "Expand your team without the hassle of hiring. Access top-tier pre-vetted talent from around the world.",
      image: Vector9,
      href: "/services/remote-staffing",
    },
  ],
  title: ", Working AI Solutions That Shipped Faster Than Your Competition.",
  subtitle: "No Fluff. Just Real",
  path: "/services/",
};

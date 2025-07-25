import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Main from "../../../../public/assets/Services/mvpBg.jpg";
import Banner from "../../../../public/assets/Services/mvpMain.png";
import BgCard from "../../../../public/assets/Services/bgCard2.jpg";
import Left from "../../../../public/assets/Services/whiteIconc.png";
import Right from "../../../../public/assets/Services/whiteIcon.png";
import Group from "../../../../public/assets/Services/Group.png";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "POC/MVP Development",
    content: "Powerful ai solutions tailored to transform your business",
  },
  sidebarCards: [
    {
      title: "",
      description: "",
      image: undefined,
      buttonText: undefined,
      buttonClassName: undefined,
      icon1: undefined,
      icon2: undefined,
      servicesList: [
        "AI Chatbots",
        "AI SAAS Development",
        "Enterprise AI Automation",
        "Cloud Infrastructure",
        "Full Stack Web Development",
        "Mobile Application Development",
        "UI/UX Design",
        "Remote Staffing",
      ],
      servicesUrls: [
        "/services/chatbot-solutions",
        "/services/saas-development",
        "/services/ai-automation",
        "/services/cloud-infrastructure",
        "/services/web-development",
        "/services/mobile-apps",
        "/services/ui-ux",
        "/services/remote-staffing",
      ],
    },
    {
      description: "/ download /",
      title: "Services Details",
      image: BgCard,
      buttonText: "Download",
      buttonClassName:
        "text-base border border-white p-2 px-5 rounded-full mt-5 w-[50%]",
      icon1: undefined,
      icon2: undefined,
      servicesList: undefined,
    },
    {
      title: "AI strategy and Consulting",
      description: "Provide expert guidance on developing an AI strategy",
      image: BgCard,
      buttonText: undefined,
      buttonClassName: undefined,
      icon1: undefined,
      icon2: undefined,
      servicesList: undefined,
    },
  ],
  mainSection: {
    heading: " with Speed and Precision",
    subheading: "Validating Innovation",
    content:
      "In today's fast-moving business environment, bringing innovative ideas to market quickly can mean the difference between success and irrelevance. Artificizen specializes in rapid Proof of Concept (POC) and Minimum Viable Product (MVP) development, helping businesses validate concepts, test market fit, and secure stakeholder buy-in before committing to full-scale development.",
    image: Main,
    trends: {
      title: "Approach",
      subheading: "Strategic ",
      section:
        "The landscape of product development is evolving with several key methodologies driving success:",
      bulletPoints: [
        {
          title: "Lean Validation: ",
          content:
            "Focused testing of core hypotheses with minimal resource investment to quickly determine viability.",
        },
        {
          title: "User-Centric Design: ",
          content:
            "Early integration of target user feedback to shape product direction and features.",
        },
        {
          title: "Agile Iteration: ",
          content:
            "Rapid build-measure-learn cycles that continuously refine the product based on real-world data.",
        },
        {
          title: "Technical Feasibility Assessment: ",
          content:
            "Practical evaluation of implementation challenges before significant investment.",
        },
        {
          title: "Scalability Planning: ",
          content:
            "Forward-thinking architecture decisions that support future growth without requiring complete rebuilds.",
        },
      ],
    },
    applications: {
      title: "Areas",
      subheading: "Implementation ",
      bulletPoints: [
        {
          title: "Digital Products: ",
          content:
            "Web and mobile applications that solve specific user problems with elegant, intuitive interfaces.",
        },
        {
          title: "AI Solutions: ",
          content:
            "Smart algorithms and machine learning models that demonstrate the value of automation and predictive capabilities.",
        },
        {
          title: "IoT Prototypes: ",
          content:
            "Connected device concepts that showcase the potential of real-time data collection and analysis.",
        },
        {
          title: "Enterprise Software: ",
          content:
            "Streamlined versions of complex business systems that validate workflow improvements.",
        },
        {
          title: "Customer Experience Innovations: ",
          content:
            "Interactive demonstrations of novel user journeys and engagement models.",
        },
        {
          title: "Data Visualization Tools: ",
          content:
            "Proof points for transforming complex information into actionable insights.",
        },
      ],
    },
    advantage: {
      title: " Difference",
      subheading: "The Artificizen",
      artificizenSection: "Our POC and MVP development services deliver:",
      bulletPoints: [
        {
          title: "",
          content:
            "Results in weeks rather than months through focused, expert execution",
        },
        {
          title: "",
          content:
            "Clear validation metrics aligned with your business objectives",
        },
        {
          title: "",
          content:
            "Professional quality that impresses investors and early adopters",
        },
        {
          title: "",
          content:
            "Technical foundations that can evolve into production systems",
        },
        {
          title: "",
          content: "Strategic insights that inform go-to-market planning",
        },
      ],
    },
    projects: {
      title: "Pioneering Projects For Intelligent Solutions",
      subheading: "/ projects /",
      metric: {
        value: "350",
        label: "Completed projects",
      },
      projectBoxes: [
        {
          title: "DeepVision: Enhancing image recognition with Neural Networks",
          content: "",
        },
        {
          title: "DeepVision: Enhancing image recognition with Neural Networks",
          content: "",
        },
      ],
      buttons: [
        {
          text: "",
          className:
            "border border-white rounded-full p-2 px-5 mt-10 flex items-center gap-2",
          icon: Left,
        },
        {
          text: "Explore more",
          className:
            "mt-10 rounded-full p-2 px-5 border border-white flex items-center gap-2",
          icon: Right,
        },
      ],
    },
    process: {
      title: "Process which makes us stand out",
      subheading: " Our Development ",
      steps: [
        {
          number: "01",
          heading: "Discovery & Strategy",
          content:
            "Every great product starts with a strong foundation. We collaborate closely with you to understand your business goals, target audience, and pain points. Through workshops, research, and deep AI/tech consultation, we define a clear strategy that aligns with your vision and sets the direction for success.",
        },
        {
          number: "02",
          heading: "Design & Prototype",
          content:
            "User experience is at the heart of everything we do. Our UI/UX experts craft intuitive, visually compelling interfaces that are not only functional but also user-friendly. We create wireframes and interactive prototypes to validate ideas early and ensure your solution is engaging, accessible, and effective.",
        },
        {
          number: "03",
          heading: "Development & Integration",
          content:
            "With a focus on clean code, performance, and scalability, our developers bring the product to life using the latest in AI/ML, cloud, and backend technologies. Whether it’s Generative AI, NLP, or predictive analytics, we seamlessly integrate solutions with your existing systems to ensure smooth operations.",
        },
        {
          number: "04",
          heading: "Testing, Launch & Scale",
          content:
            "Before launch, your product goes through rigorous testing—manual, automated, and AI-driven—to ensure it meets the highest quality standards. We then deploy confidently and support you post-launch with updates, performance monitoring, and strategies to scale as your business grows.",
        },
      ],
    },
    partnership: {
      title: "From Concept To Confidence",
      content: [
        "Partner with Artificizen to transform your vision into tangible proof points that drive decision-making. Our experienced team helps you identify the critical elements to test, build compelling demonstrations, and gather meaningful validation data. ",
        "Contact us today to discuss how our POC/MVP development services can accelerate your path from idea to market-ready innovation with reduced risk and maximum learning.",
      ],
      decorImage: Group,
    },
  },
  footer: {
    headings: ["We are always ready to help you and answere your questions"],
    description:
      "Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.",
    gradientIndex: 0,
    gradientWordCount: 2,
  },
};

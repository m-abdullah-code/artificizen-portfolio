import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Main from "../../../../public/assets/Services/saasMain.jpg";
import Banner from "../../../../public/assets/Services/saasbg.png";
import BgCard from "../../../../public/assets/Services/bgCard2.jpg";
import Left from "../../../../public/assets/Services/whiteIconc.png";
import Right from "../../../../public/assets/Services/whiteIcon.png";
import Group from "../../../../public/assets/Services/Group.png";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "AI Saas Development",
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
    heading: "Innovation Through AI",
    subheading: "Powering Buisness",
    content:
      "In today's competitive business landscape, AI-powered Software-as-a-Service (SaaS) solutions are revolutionizing how companies operate, analyze data, and make decisions. Artificizen specializes in developing scalable, intelligent SaaS platforms that transform business capabilities through advanced artificial intelligence.",
    image: Main,
    trends: {
      title: "Evolution",
      subheading: "Market ",
      section:
        "The AI SaaS market is experiencing unprecedented growth, shaped by several key developments:",
      bulletPoints: [
        {
          title: "Democratization of AI: ",
          content:
            "Advanced capabilities once exclusive to tech giants are now accessible to businesses of all sizes through SaaS delivery models.",
        },
        {
          title: "Vertical-Specific Solutions: ",
          content:
            "AI SaaS platforms are increasingly tailored to industry-specific challenges, offering specialized functionality beyond generic AI applications.",
        },
        {
          title: "Low-Code/No-Code Integration: ",
          content:
            "Modern AI SaaS platforms feature intuitive interfaces that empower non-technical users to leverage sophisticated AI capabilities.",
        },
        {
          title: "Edge AI Deployment: ",
          content:
            "The shift toward processing data locally improves speed, reduces costs, and enhances privacy compliance.",
        },
        {
          title: "Ethical AI Framework Integration: ",
          content:
            "Leading, solutions now incorporate governance tools to ensure responsible, transparent, and unbiased AI implementation.",
        },
      ],
    },
    applications: {
      title: "Applications",
      subheading: "Buisness ",
      bulletPoints: [
        {
          title: "Predictive Analytics: ",
          content:
            " Forecast trends, optimize pricing, and anticipate market shifts through advanced pattern recognition.",
        },
        {
          title: "Automated Decision Systems: ",
          content:
            "Streamline operations with AI-powered workflow automation and intelligent decision support.",
        },
        {
          title: "Customer Intelligence: ",
          content:
            "Gain deeper insights into customer behavior, preferences, and lifetime value prediction.",
        },
        {
          title: "Content Generation: ",
          content:
            "Scale production of marketing materials, reports, and communications with AI-assisted creation tools.",
        },
        {
          title: "Process Optimization: ",
          content:
            "Identify inefficiencies and automatically implement improvements across complex business operations.",
        },
        {
          title: "Advanced Search & Discovery: ",
          content:
            "Transform how users find and interact with information through semantic search capabilities.",
        },
      ],
    },
    advantage: {
      title: " Approach",
      subheading: "The Artificizen",
      artificizenSection: "Our team delivers custom AI SaaS solutions that:",
      bulletPoints: [
        {
          title: "",
          content:
            "Solve specific business challenges with purpose-built AI functionality",
        },
        {
          title: "",
          content: "Integrate with existing technology infrastructure",
        },
        {
          title: "",
          content: "Provide clear metrics and ROI measurement",
        },
        {
          title: "",
          content:
            "Maintain the highest standards of data security and privacy",
        },
        {
          title: "",
          content: "Evolve continuously through machine learning capabilities",
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
      title: "Elevate Your Buisness Capabilities",
      content: [
        "Partner with Artificizen to develop AI SaaS solutions that provide lasting competitive advantage. Our expertise helps you move beyond generic AI applications to create proprietary systems that unlock new business value and transform your market position.",
        " Contact us today to discuss how our AI SaaS development services can accelerate your business transformation. ",
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

import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Banner from "../../../../public/assets/Services/uiMain.png";
import Main from "../../../../public/assets/Services/UiBg.jpg";
import BgCard from "../../../../public/assets/Services/bgCard2.jpg";
import Left from "../../../../public/assets/Services/whiteIconc.png";
import Right from "../../../../public/assets/Services/whiteIcon.png";
import Group from "../../../../public/assets/Services/Group.png";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "UI/UX Design",
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
    heading: "Digital Experiences That Users Love To See",
    subheading: "We Create ",
    content:
      "In today's competitive digital landscape, exceptional user experience is the key differentiator that turns visitors into loyal customers. Artificizen delivers comprehensive UI/UX design services that combine aesthetic excellence with user-centered functionality to create intuitive, engaging, and effective digital experiences.",
    image: Main,
    trends: {
      title: "Evolution",
      subheading: "Design  ",
      section:
        "The UI/UX landscape continues to advance with several transformative trends:",
      bulletPoints: [
        {
          title: "Design Systems: ",
          content:
            "Scalable, component-based frameworks that ensure consistency while accelerating development across products.",
        },
        {
          title: "Micro-Interactions: ",
          content:
            "Subtle animations and feedback mechanisms that delight users and enhance usability through responsive interface elements.",
        },
        {
          title: "Dark Mode & Adaptive Design: ",
          content:
            "Context-aware interfaces that respond to environmental conditions and user preferences for improved accessibility.",
        },
        {
          title: "Voice & Gesture Interfaces: ",
          content:
            "Natural interaction models that extend beyond traditional screen-based controls for more intuitive experiences.",
        },
        {
          title: "Data-Driven Design: ",
          content:
            "Evidence-based approaches that leverage user analytics and testing to continuously refine experiences.",
        },
      ],
    },
    applications: {
      title: "Services",
      subheading: "Core ",
      bulletPoints: [
        {
          title: "User Research: ",
          content:
            "Comprehensive discovery through interviews, surveys, and behavior analysis to identify needs and pain points.",
        },
        {
          title: "Information Architecture: ",
          content:
            "Strategic organization of content and functionality that creates intuitive navigation paths.",
        },
        {
          title: "Wireframing & Prototyping: ",
          content:
            "Iterative visualization of concepts to test and refine ideas before full development.",
        },
        {
          title: "Visual Design: ",
          content:
            "ompelling aesthetics that reinforce brand identity while enhancing usability and emotional connection.",
        },
        {
          title: "Interaction Design: ",
          content:
            "Thoughtful mapping of user journeys and touchpoints to create seamless, engaging experiences.",
        },
        {
          title: "Usability Testing: ",
          content:
            "Rigorous evaluation with real users to identify improvements and validate design decisions",
        },
      ],
    },
    advantage: {
      title: " Methodology",
      subheading: "The Artificizen",
      artificizenSection: "Our design approach delivers:",
      bulletPoints: [
        {
          title: "",
          content:
            "Human-centered solutions that prioritize user needs while achieving business objectives",
        },
        {
          title: "",
          content:
            "Collaborative processes that involve stakeholders throughout the design journey",
        },
        {
          title: "",
          content:
            "Accessibility-first thinking that ensures inclusivity for users of all abilities",
        },
        {
          title: "",
          content:
            "Data-informed decisions that balance creative vision with measurable outcomes",
        },
        {
          title: "",
          content:
            "Scalable design systems that maintain consistency across platforms and products",
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
      title: "Impactful Designs, Seamless Experiences",
      content: [
        "Partner with Artificizen to create digital interfaces that captivate users and drive meaningful engagement. Our expert team transforms complex challenges into intuitive, beautiful experiences that distinguish your brand and build lasting connections with your audience.",
        "Contact us today to discuss how our UI/UX design services can help your organization create digital experiences that don't just meet user expectations—they exceed them.",
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

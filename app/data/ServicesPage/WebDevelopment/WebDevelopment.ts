import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Banner from "../../../../public/assets/Services/developBanner.webp";
import Main from "../../../../public/assets/Services/deveMain.webp";
import BgCard from "../../../../public/assets/Services/bgCard2.webp";
import Left from "../../../../public/assets/Icons/wRightArrow.svg";
import Right from "../../../../public/assets/Icons/wLeftArrow.svg";
import Group from "../../../../public/assets/Services/waves.svg";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "Full Stack Web Development",
    content: "Powerful AI solutions tailored to transform your business",
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
        "PoC MVP Development",
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
        "/services/poc-mvp-development",
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
    heading: "That Drive Business Growth",
    subheading: "Building Digital Experiences ",
    content:
      "In today's digital-first business landscape, your web presence is often the primary touchpoint with customers and stakeholders. Artificizen delivers comprehensive full stack web development services that combine cutting-edge front-end experiences with robust back-end architecture to create web applications that perform flawlessly and drive business results.",
    image: Main,
    trends: {
      title: "Evolution",
      subheading: "Tecnology  ",
      section:
        "The web development landscape continues to advance with several transformative trends: ",
      bulletPoints: [
        {
          title: "Component-Based Architecture:  ",
          content:
            " Modular development approaches that enhance reusability, maintainability, and development speed.",
        },
        {
          title: "API-First Development: ",
          content:
            "Backend systems designed as services that support multiple frontends and integrate seamlessly with third-party platforms.",
        },
        {
          title: "Performance Optimization: ",
          content:
            "Advanced techniques for delivering lightning-fast experiences across devices through efficient code and intelligent caching strategies.",
        },
        {
          title: "Progressive Web Applications: ",
          content:
            "Web solutions that offer app-like experiences with offline capabilities, push notifications, and device hardware access.",
        },
        {
          title: "Accessibility-Driven Design: ",
          content:
            "Inclusive development practices that ensure digital experiences are available to users of all abilities.",
        },
      ],
    },
    applications: {
      title: "Capabilities",
      subheading: "Core ",
      bulletPoints: [
        {
          title: "Front-End Excellence: ",
          content:
            "Responsive, intuitive user interfaces built with modern frameworks like React, Angular, or Vue.js",
        },
        {
          title: "Back-End Engineering: ",
          content:
            "Scalable server architecture using Node.js, Python, Java, or .NET with optimized database design.",
        },
        {
          title: "E-Commerce Solutions: ",
          content:
            "Custom shopping experiences with secure payment processing and inventory management.",
        },
        {
          title: "Content Management: ",
          content:
            "Flexible systems that empower non-technical users to update and manage website content.",
        },
        {
          title: "Integration Services: ",
          content:
            " Seamless connections with CRM, ERP, marketing automation, and other business systems.",
        },
        {
          title: "Analytics Implementation: ",
          content:
            "Comprehensive data collection to track user behavior and business performance metrics .",
        },
      ],
    },
    advantage: {
      title: " Methodology",
      subheading: "The Artificizen",
      artificizenSection: "Our full stack development approach delivers:",
      bulletPoints: [
        {
          title: "",
          content: "Strategic planning aligned with your business objectives",
        },
        {
          title: "",
          content:
            "User-centered design that prioritizes engagement and conversion",
        },
        {
          title: "",
          content: "Scalable architecture that grows with your business",
        },
        {
          title: "",
          content: "Rigorous security practices to protect sensitive data",
        },
        {
          title: "",
          content:
            "Performance optimization for both user experience and search engines",
        },
        {
          title: "",
          content: "Ongoing support and enhancement opportunities",
        },
      ],
    },
    projects: {
      title: "Pioneering Projects For Intelligent Solutions",
      subheading: "/ projects /",
      metric: {
        value: "110",
        label: "Completed projects",
      },
      projectBoxes: [
        {
          title: [
            { label: "Case Studies", href: "/case-study" },
            {
              label: "Agent Forge",
              href: "/case-studies/agentforge",
            },
            { label: "Empathica", href: "/case-studies/empathica" },
          ],
          content: "",
        },
        {
          title: [
            { label: "Medi Match", href: "/case-studies/medimatch" },
            { label: "Exec Suite", href: "/case-studies/execsuite" },
            {
              label: "Vocal Persona",
              href: "/case-studies/vocalpersona",
            },
          ],
          content: "",
        },
      ],
      buttons: [
        {
          text: "Explore more",
          className:
            "mt-10 rounded-full p-2 px-5 border border-white flex items-center gap-2 cursor-pointer",
          icon: Right,
          link: "/blog",
        },
        {
          text: "",
          className:
            "border border-white rounded-full p-2 px-5 mt-10 flex items-center gap-2",
          icon: Left,
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
      title: "We Know Your Digital Presence Matters",
      content: [
        "Partner with Artificizen to create web experiences that set you apart from competitors. Our expertise spans from conceptual design through development and ongoing optimization, ensuring your web applications continue to deliver value long after launch.",
        "Contact us today to discuss how our full stack web development services can help your organization create digital experiences that engage users and drive meaningful business outcomes.",
      ],
      decorImage: Group,
    },
  },
  footer: {
    headings: ["We are always ready to help you and answere your questions"],
    description:
      "Let’s collaborate to bring your AI vision to life with speed and precision.",
    gradientIndex: 0,
    gradientWordCount: 2,
  },
};

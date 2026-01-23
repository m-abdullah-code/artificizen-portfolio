import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Banner from "../../../../public/assets/Services/remoteMain.webp";
import Main from "../../../../public/assets/Services/remoteBg.webp";
import BgCard from "../../../../public/assets/Services/bgCard2.webp";
import Left from "../../../../public/assets/Icons/wRightArrow.svg";
import Right from "../../../../public/assets/Icons/wLeftArrow.svg";
import Group from "../../../../public/assets/Services/waves.svg";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "Remote Staffing",
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
    heading: "Tech Talent in a Global Marketplace",
    subheading: "Access Top-Tier ",
    content:
      "In today's competitive tech landscape, finding and retaining skilled professionals is often the greatest challenge to innovation and growth. Artificizen's Remote Staffing solutions provide businesses with seamless access to exceptional technical talent, enabling you to scale your team quickly without compromising on quality or cultural fit.",
    image: Main,
    trends: {
      title: "Evolution",
      subheading: "Workforce  ",
      section:
        "The technical staffing landscape has transformed dramatically with several significant shifts: ",
      bulletPoints: [
        {
          title: "Distributed Team Normalization: ",
          content:
            "Remote-first work models that have become the standard rather than the exception for high-performing tech organizations.",
        },
        {
          title: "Specialized Expertise On-Demand: ",
          content:
            "Flexible access to niche skill sets that would be difficult to recruit or justify as full-time local hires.",
        },
        {
          title: "Global Talent Ecosystems: ",
          content:
            "Borderless recruitment strategies that connect businesses with the best professionals regardless of location.",
        },
        {
          title: "Hybrid Collaboration Models: ",
          content:
            "Sophisticated frameworks that blend remote and in-person work to optimize productivity and team cohesion.",
        },
        {
          title: "Outcome-Based Engagement: ",
          content:
            "Performance-focused partnerships that prioritize results over traditional time-based billing models.",
        },
      ],
    },
    applications: {
      title: "Offerings",
      subheading: "Services ",
      bulletPoints: [
        {
          title: "Dedicated Development Teams: ",
          content:
            "Fully-managed engineering squads that function as an extension of your organization.",
        },
        {
          title: "Information Architecture: ",
          content:
            "Strategic organization of content and functionality that creates intuitive navigation paths.",
        },
        {
          title: "Staff Augmentation: ",
          content:
            "Targeted reinforcement of your existing teams with specialized professionals.",
        },
        {
          title: "Flexible Engagement Models: ",
          content:
            "Options ranging from project-based collaboration to long-term team extension.",
        },
        {
          title: "Recruitment & Retention: ",
          content:
            "Comprehensive sourcing, vetting, and ongoing professional development.",
        },
        {
          title: "Team Integration: ",
          content:
            "Seamless onboarding and communication systems to ensure productive collaboration.",
        },
      ],
    },
    advantage: {
      title: " Advantage",
      subheading: "The Artificizen",
      artificizenSection: "Our remote staffing approach delivers:",
      bulletPoints: [
        {
          title: "",
          content:
            "Rigorous technical assessment to ensure exceptional capability",
        },
        {
          title: "",
          content:
            "Cultural alignment with your organization's values and working style",
        },
        {
          title: "",
          content:
            "Proactive talent management to ensure continuity and satisfaction",
        },
        {
          title: "",
          content: "Transparent communication and collaboration processes",
        },
        {
          title: "",
          content:
            "Ongoing skills development to keep your extended team at the cutting edge",
        },
        {
          title: "",
          content:
            "Flexible scaling to accommodate changing project requirements",
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
      title: "Build Your Ideal Team With Us ",
      content: [
        "Partner with Artificizen to transform how you access and leverage technical talent. Our remote staffing solutions help you overcome local hiring constraints to build the optimal team for your initiatives, regardless of geography. Contact us today to discuss how our remote staffing services can help your organization access the specialized skills needed to accelerate innovation and drive business growth.",
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

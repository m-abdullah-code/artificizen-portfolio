import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Banner from "../../../../public/assets/Services/enterpriseMain.webp";
import Main from "../../../../public/assets/Services/enterpriseBg.webp";
import BgCard from "../../../../public/assets/Services/bgCard2.webp";
import Left from "../../../../public/assets/Icons/wRightArrow.svg";
import Right from "../../../../public/assets/Icons/wLeftArrow.svg";
import Group from "../../../../public/assets/Services/waves.svg";

export const serviceData: ServicesPageData = { 
  banner: {
    image: Banner,
    heading: "Enterprise AI Automation",
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
    heading: "Operations Through Intelligent Automation",
    subheading: "Transforming Business ",
    content:
      "In today's competitive business environment, enterprises are seeking new ways to enhance productivity, improve decision-making, and reduce operational costs. Artificizen's Enterprise AI Automation solutions combine advanced artificial intelligence with robotic process automation to transform routine workflows into intelligent, self-optimizing systems.",
    image: Main,
    trends: {
      title: "Convergence",
      subheading: "Technology  ",
      section:
        "The enterprise automation landscape is being redefined by several powerful trends:",
      bulletPoints: [
        {
          title: "Hyperautomation: : ",
          content:
            " End-to-end automation of complex business processes through the integration of multiple AI technologies.",
        },
        {
          title: "Intelligent Document Processing:",
          content:
            "AI-powered extraction and analysis of information from diverse document formats with minimal human intervention.",
        },
        {
          title: "Cognitive Process Automation: ",
          content:
            "Systems that go beyond rule-based automation to handle exceptions, make judgments, and learn from outcomes.",
        },
        {
          title: "Decision Intelligence:",
          content:
            " Automated systems that combine analytics, machine learning, and decision theory to support or make high-quality business decisions.",
        },
        {
          title: "Human-AI Collaboration: ",
          content:
            "Frameworks that optimize the division of labor between human expertise and machine efficiency.",
        },
      ],
    },
    applications: {
      title: "Areas",
      subheading: "Business Imact ",
      bulletPoints: [
        {
          title: "Financial Operations: ",
          content:
            " Automated invoice processing, reconciliation, fraud detection, and financial forecasting.",
        },
        {
          title: "Human Resources: ",
          content:
            " Streamlined candidate screening, onboarding, benefits administration, and performance analytics.",
        },
        {
          title: "Supply Chain Management: ",
          content:
            "Intelligent inventory optimization, demand forecasting, and logistics planning.",
        },
        {
          title: "Customer Service: ",
          content:
            "Automated case routing, response generation, and escalation management.",
        },
        {
          title: "IT Operations: ",
          content:
            "Self-healing systems, predictive maintenance, and automated security response.",
        },
        {
          title: "Legal & Compliance: ",
          content:
            "Contract analysis, regulatory monitoring, and automated compliance reporting.",
        },
      ],
    },
    advantage: {
      title: " Methodology",
      subheading: "The Artificizen",
      artificizenSection: "Our enterprise AI automation solutions deliver:",
      bulletPoints: [
        {
          title: "",
          content:
            "Comprehensive process analysis to identify high-value automation opportunities",
        },
        {
          title: "",
          content:
            "Custom AI models trained on your organization's specific data and requirements",
        },
        {
          title: "",
          content:
            "Robust governance frameworks to ensure responsible AI deployment",
        },
        {
          title: "",
          content:
            "Seamless integration with existing enterprise systems and workflows",
        },
        {
          title: "",
          content:
            "Continuous improvement through performance monitoring and machine learning",
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
      title: "Achieve Operational Excellence",
      content: [
        "Partner with Artificizen to transform your enterprise operations through intelligent automation. Our expertise helps you move beyond isolated efficiency gains to create an integrated ecosystem of AI-powered processes that continuously optimize and adapt.",
        "Contact us today to explore how our Enterprise AI Automation services can help your organization reduce costs, improve quality, and free your team to focus on strategic initiatives.",
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

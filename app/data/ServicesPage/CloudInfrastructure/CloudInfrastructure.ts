import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Banner from "../../../../public/assets/Services/cloudMain.png";
import Main from "../../../../public/assets/Services/cloudBg.jpg";
import BgCard from "../../../../public/assets/Services/bgCard2.jpg";
import Left from "../../../../public/assets/Services/whiteIconc.png";
import Right from "../../../../public/assets/Services/whiteIcon.png";
import Group from "../../../../public/assets/Services/Group.png";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "Cloud Infrastructure",
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
    heading: " for Enterprise Scale",
    subheading: "Optimizing AI Operations",
    content:
      "Building AI solutions is just the 50%, deploying, scaling, and maintaining them in production environments requires specialized infrastructure and operational expertise. Artificizen's MLOps and AIOps services provide the foundation for reliable, scalable, and governable AI systems that deliver consistent business value.",
    image: Main,
    trends: {
      title: "Evolution",
      subheading: "Industry  ",
      section:
        "The landscape of AI infrastructure and operations is rapidly advancing with several key developments:",
      bulletPoints: [
        {
          title: "Continuous ML Pipeline Automation:  ",
          content:
            " End-to-end systems that streamline the journey from model development to deployment with minimal manual intervention.",
        },
        {
          title: "Model Observability & Governance: ",
          content:
            "Sophisticated monitoring frameworks that track performance, detect drift, and ensure regulatory compliance throughout the AI lifecycle.",
        },
        {
          title: "Infrastructure-as-Code for AI: ",
          content:
            "Templated, reproducible environments that standardize deployment across development, testing, and production.",
        },
        {
          title: "Hybrid & Multi-Cloud AI Orchestration: ",
          content:
            "Flexible architectures that optimize workload placement based on cost, performance, and data sovereignty requirements.",
        },
        {
          title: "AI-Powered IT Operations: ",
          content:
            "Self-healing infrastructure that predicts failures, optimizes resource allocation, and automates routine maintenance.",
        },
      ],
    },
    applications: {
      title: "Areas",
      subheading: "Implementation ",
      bulletPoints: [
        {
          title: "ML Platform Engineering: ",
          content:
            "Custom development environments that accelerate data science productivity while maintaining enterprise standards.",
        },
        {
          title: "Model Deployment Pipelines: ",
          content:
            "Automated systems for testing, versioning, and promoting models to production.",
        },
        {
          title: "AI Performance Optimization: ",
          content:
            "Resource-efficient infrastructure tailored to the unique demands of deep learning and data processing.",
        },
        {
          title: "Federated Learning Systems: ",
          content:
            "Distributed training architectures that preserve data privacy while enabling collaborative model development.",
        },
        {
          title: "Real-Time Inference Services: ",
          content:
            "High-availability solutions for low-latency AI predictions at enterprise scale.",
        },
        {
          title: "Legal & Compliance: ",
          content:
            "Comprehensive systems for model documentation, explainability, and compliance management.",
        },
      ],
    },
    advantage: {
      title: " Advantage",
      subheading: "The Artificizen",
      artificizenSection: "Our MLOps and AIOps services deliver: ",
      bulletPoints: [
        {
          title: "",
          content: "Production-grade infrastructure designed for AI workloads",
        },
        {
          title: "",
          content: "Streamlined paths from experimentation to deployment",
        },
        {
          title: "",
          content: "Robust monitoring and management of models in production",
        },
        {
          title: "",
          content: "Efficient resource utilization across cloud environments",
        },
        {
          title: "",
          content: "Comprehensive security and governance controls",
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
      title: "Build with Confidence, Scale with Control",
      content: [
        "Partner with Artificizen to establish the infrastructure foundation for AI success. Our expert team designs and implements cloud systems that balance flexibility for innovation with the reliability and governance required for enterprise operations.",
        "Contact us today to discuss how our MLOps and AIOps services can help your organization build, deploy, and manage AI solutions with greater efficiency and confidence.",
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

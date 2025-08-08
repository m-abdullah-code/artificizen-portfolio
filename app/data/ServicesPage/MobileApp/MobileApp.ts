import { ServicesPageData } from "@/app/interfaces/ServicesPages";
import Banner from "../../../../public/assets/Services/mobileMain.png";
import Main from "../../../../public/assets/Services/mobileBg.jpg";
import BgCard from "../../../../public/assets/Services/bgCard2.jpg";
import Left from "../../../../public/assets/Icons/WRightIcon.png";
import Right from "../../../../public/assets/Icons/WLeftIcon.png";
import Group from "../../../../public/assets/Services/Group.png";

export const serviceData: ServicesPageData = {
  banner: {
    image: Banner,
    heading: "Mobile App Development",
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
    heading: "Mobile Application That Drive Results",
    subheading: "Creating User Centric ",
    content:
      "In a mobile-first world, exceptional app experiences are crucial for customer engagement and business success. Artificizen delivers comprehensive mobile application development services that combine intuitive design, robust functionality, and seamless performance across platforms to help businesses connect with users wherever they are.",
    image: Main,
    trends: {
      title: "Landscape",
      subheading: "Technology  ",
      section:
        "The mobile development ecosystem continues to evolve with several key innovations: ",
      bulletPoints: [
        {
          title: "Cross-Platform Frameworks: ",
          content:
            "Advanced tools like React Native, Flutter, and SwiftUI that accelerate development while maintaining native performance.",
        },
        {
          title: "App Personalization: ",
          content:
            "AI-driven customization that tailors content, features, and interfaces to individual user preferences and behaviors.",
        },
        {
          title: "Offline-First Architecture: ",
          content:
            "Resilient designs that enable full functionality regardless of connectivity status, with intelligent synchronization when connections resume.",
        },
        {
          title: "Augmented Reality Integration: ",
          content:
            "Immersive experiences that blend digital content with the physical world to create new interaction models.",
        },
        {
          title: "Super Apps & Micro-Services: ",
          content:
            "Modular architectures that support diverse functionality within cohesive ecosystems.",
        },
      ],
    },
    applications: {
      title: "Offerings",
      subheading: "Core ",
      bulletPoints: [
        {
          title: "Native iOS Development: ",
          content:
            "High-performance applications optimized for Apple's ecosystem using Swift and SwiftUI.",
        },
        {
          title: "Back-End Engineering: ",
          content:
            "Scalable server architecture using Node.js, Python, Java, or .NET with optimized database design.",
        },
        {
          title: "Native Android Development: ",
          content:
            "Feature-rich apps tailored to the Android platform using Kotlin and Jetpack Compose.",
        },
        {
          title: "Cross-Platform Solutions: ",
          content:
            "Efficient development across multiple platforms while maintaining native look and feel.",
        },
        {
          title: "Progressive Web Apps: ",
          content:
            "Mobile-optimized web experiences that offer app-like functionality without installation.",
        },
        {
          title: "Wearable & IoT Applications: ",
          content:
            "Extended experiences for smartwatches, fitness devices, and connected products.",
        },
        {
          title: "Enterprise Mobility: ",
          content:
            "Secure, scalable business applications with robust backend integration.",
        },
      ],
    },
    advantage: {
      title: " Approach",
      subheading: "The Artificizen",
      artificizenSection: "Our mobile development methodology delivers:",
      bulletPoints: [
        {
          title: "",
          content:
            "Strategic planning focused on user needs and business goals",
        },
        {
          title: "",
          content:
            "Intuitive UX/UI design that maximizes engagement and retention",
        },
        {
          title: "",
          content: "Secure, scalable architecture that supports future growth",
        },
        {
          title: "",
          content: "Comprehensive testing across devices and conditions",
        },
        {
          title: "",
          content: "Seamless deployment and app store optimization",
        },
        {
          title: "",
          content: "Ongoing analytics, maintenance, and enhancement",
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
      title: "Transform Your Mobile Presence",
      content: [
        "Partner with Artificizen to create mobile applications that captivate users and drive measurable business results. Our experienced team guides you through the entire development journey, from concept refinement to post-launch optimization.",
        "Contact us today to discuss how our mobile app development services can help your organization connect with customers through exceptional mobile experiences that stand out in today's competitive landscape.",
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

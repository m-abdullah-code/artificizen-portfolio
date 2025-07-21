import Background from "../../../public/assets/AboutUs/About Us bg.png";
import CardImage1 from "../../../public/assets/AboutUs/pioneeringAI.jpg.png";
import CardImage2 from "../../../public/assets/AboutUs/philosphy.jpg.png";
import Umair from "../../../public/assets/AboutUs/umair.png";
import Talha from "../../../public/assets/AboutUs/talha.png";
import Asfar from "../../../public/assets/AboutUs/asfar.png";
import Zain from "../../../public/assets/AboutUs/zain.png";
import Shoaib from "../../../public/assets/AboutUs/sohaib.png";
import Neuro from "../../../public/assets/AboutUs/how it works.png.png";
// import Dart from "../../../public/assets/AboutUs/dart.png";
// import Credit from "../../../public/assets/AboutUs/creditfixerr.png";
// import Meomind from "../../../public/assets/AboutUs/meomind.png";
// import Google from "../../../public/assets/AboutUs/google.png";
// import Iqvia from "../../../public/assets/AboutUs/iqvia.png";
import Dart from "../../../public/assets/AboutUs/dart1.png";
import Credit from "../../../public/assets/AboutUs/creditfixr1.png";
import Meomind from "../../../public/assets/AboutUs/meomind1.png";
import Google from "../../../public/assets/AboutUs/google1.png";
import Iqvia from "../../../public/assets/AboutUs/iqvia1.png";
import { AboutUsPageData } from "@/app/interfaces/AboutUsPage";

export const aboutUsData: AboutUsPageData = {
  background: Background,
  overlay: {
    heading: "About Us",
    subheading: "We don’t just build for you—we build with you",
    quote:
      "In the end, a vision without the ability to execute it is probably a hallucination.",
    author: "— Steve Case (AOL)",
  },
  cards: [
    {
      topText: " ",
      heading: ["Pioneering AI for Human Progress"],
      content: [
        "Artificizen is a premier AI solutions company dedicated to transforming how businesses operate and innovate in the digital age. We design, develop, and deploy sophisticated AI systems that solve complex business challenges while remaining intuitive and accessible. Our mission is to democratize the power of artificial intelligence, making cutting-edge technology practical and impactful for organizations of all sizes. We envision a future where AI augments human capabilities, creating unprecedented opportunities for growth, efficiency, and innovation.",
      ],
      image: CardImage1,
      buttonText: "",
      imagePosition: "left",
      lineIndex: 0,
      wordCount: 2,
    },
    {
      topText: "",
      heading: ["Our Philosophy"],
      content: [
        "At Artificizen, we believe that the most powerful AI solutions emerge at the intersection of human insight and technological innovation. We approach every challenge through a dual lens: understanding the human experience behind the problem while leveraging the most advanced technical capabilities to address it.",
        "Our development process begins with deep contextual understanding—not just of the technical requirements, but of the people who will use our solutions and the business environments in which they'll operate. This human-centered approach ensures we build AI systems that feel intuitive and empowering rather than complex or intimidating.",
        "We're committed to creating AI tools that scale with your business, adapt to changing needs, and deliver tangible value from day one. We believe that truly transformative technology doesn't just solve today's problems—it anticipates tomorrow's opportunities.",
      ],
      image: CardImage2,
      buttonText: "",
      imagePosition: "right",
      lineIndex: 0,
      wordCount: 2,
    },
  ],
  team: {
    heading: "A Team Of Experts Driving The Future Of AI Innovation",
    subheading: "Awesome team members",
    buttonText: "Explore All Team Members",
    members: [
      {
        src: Umair,
        name: "Umair Ali",
        role: "/ CEO Artificizen /",
        designation: "CEO",
      },
      {
        src: Talha,
        name: "Talha Nisar",
        role: "/ CO-FOUNDER Artificizen /",
        designation: "CO FOUNDER",
      },
      {
        src: Asfar,
        name: "Asfar Waheed",
        role: "/ Team Lead /",
        designation: "FULL STACK",
      },
      {
        src: Zain,
        name: "Zain Bin Rizwan",
        role: "/ AI Lead /",
        designation: "AI LEAD",
      },
    ],
    creativeLead: {
      image: Shoaib,
      name: "Sohaib Zaheer",
      role: "/ Creative Lead /",
    },
  },
  howItWorks: {
    heading: "How to generate AI speech with Neuro",
    subheading:
      "Artificizen brings together multidisciplinary expertise in developing advanced AI solutions:",
    points: [
      {
        title: "Conversational AI & Large Language Models:",
        content:
          "Sophisticated chatbots and virtual assistants built on foundation models with custom RAG systems that understand context and deliver personalized experiences",
      },
      {
        title: "Enterprise Chatbots & Intelligent Assistants:",
        content:
          "Custom chatbot solutions for customer service, internal operations, and specialized industry applications with seamless integration into existing business systems",
      },
      {
        title: "Voice AI & Speech Technologies:",
        content:
          "Natural-sounding voice interfaces, real-time speech processing, and audio analytics that make human-machine interaction more intuitive",
      },
      {
        title: "AI-Powered SaaS Applications:",
        content:
          "End-to-end product development, from concept to market-ready applications that embed AI at their core",
      },
      {
        title: "MLOps & AIOps:",
        content:
          "Production-grade machine learning infrastructure, automated monitoring, and continuous improvement frameworks that ensure reliable, scalable AI deployments",
      },
      {
        title: "MVP & POC Development:",
        content:
          "Rapid prototyping and proof-of-concept development to validate AI solutions before full-scale implementation, reducing risk and accelerating time-to-value",
      },
      {
        title: "Full Stack Web Development:",
        content:
          "Comprehensive web application development with AI-integration capabilities, from responsive front-end interfaces to robust back-end systems",
      },
      {
        title: "Workflow Automation & Process Intelligence:",
        content:
          "Systems that learn from organizational patterns to streamline operations and eliminate repetitive tasks  ",
      },
      {
        title: "Data Engineering & Analytics:",
        content:
          "Infrastructure for collecting, processing, and deriving insights from diverse data sources",
      },
      {
        title: "UI/UX Design for AI Products:",
        content:
          "Creating interfaces that make complex AI capabilities accessible and engaging",
      },
    ],
    additionalText: [
      "Artificizen brings together Our team has delivered transformative solutions across healthcare, education, financial services, e-commerce, and professional services. We have helped startups scale their AI capabilities from concept to market leadership and guided established enterprises through digital transformation initiatives that redefined their industries.",
      "With leadership experience from top technology companies and successful startups, we combine technical excellence with practical business acumen. This dual perspective enables us to build solutions that are not just technically impressive but commercially viable and strategically sound. multidisciplinary expertise in developing advanced AI solutions:",
    ],
    image: Neuro,
  },
  whyChooseUs: {
    label: "/ Why Choose Us /",
    heading: "Why Clients Choose Artificizen",
    items: [
      {
        title: "Collaborative Partnership",
        content:
          "We don’t just build for you—we build with you. Our process integrates your team’s expertise with our technical capabilities, ensuring solutions that truly reflect your vision and meet your specific needs. We maintain transparent communication throughout the development process, making complex technical decisions accessible and keeping you fully engaged in the evolution of your solution.",
      },
      {
        title: "Accelerated Innovation",
        content:
          "Our streamlined development approach and pre-built components allow us to move quickly without compromising quality. We deliver working prototypes in weeks rather than months, enabling you to test, iterate, and validate ideas rapidly. This acceleration dramatically reduces time-to-market and creates competitive advantage.",
      },
      {
        title: "Culture of Excellence",
        content:
          "We maintain relentless focus on quality in every aspect of our work—from the elegance of our code to the intuitiveness of our user interfaces. Our team stays at the forefront of AI research and implementation, constantly integrating new advances into our development toolkit to ensure your solutions leverage the very best that technology has to offer.",
      },
      {
        title: "Elegence in Complexity",
        content:
          "We specialize in making the complex simple. Our solutions tackle intricate technical challenges while presenting users with experiences that feel natural and effortless. This balance of sophisticated capability and intuitive design creates AI systems that are readily adopted and deliver immediate value.",
      },
    ],
  },
  imageRow: [
    { src: Dart, alt: "Dartmounth" },
    { src: Credit, alt: "Creditfixrr" },
    { src: Meomind, alt: "Meomind" },
    { src: Google, alt: "Google" },
    { src: Iqvia, alt: "Iqvia" },
  ],
  footer: {
    headings: ["Building the Future Together"],
    description:
      "We're selective about the projects we take on, focusing on opportunities where we can deliver exceptional value and form lasting partnerships. If you're ready to explore how AI can transform your business, elevate your customer experience, or create entirely new possibilities, we're ready to bring that vision to life.\nLet's build intelligence that matters.",
    gradientIndex: 0,
    gradientWordCount: 1,
  },
};

import Background from "../../../public/assets/Blog/blogMain.png";
import SideImage from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";
import S1 from "../../../public/assets/Blog/s1.png";
import S2 from "../../../public/assets/Blog/s2.png";
import S3 from "../../../public/assets/Blog/s3.jpg";
import Icon from "../../../public/assets/career/blackIcon.png";
import B1 from "../../../public/assets/Blog/b1.png";
import Vector from "../../../public/assets/CaseStudy/Vector.png";
import Girl from "../../../public/assets/Blog/g1.jpg";
import Boy from "../../../public/assets/Blog/b1.jpg";
import { BlogDetailsPageData } from "@/app/interfaces/Blogdetails";

export const blogDetailsData: BlogDetailsPageData = {
  banner: {
    image: Background,
    title: "Blogs Detail",
    description: "Powerful ai solutions tailored to transform your business",
  },
  blogTags: [
    "/ AI /",
    "/ Chat GPT /",
    "/ Neural /",
    "/ Neuro /",
    "/ Programming /",
    "/ Robot /",
  ],
  blogTagsIcon: Icon,
  blogPosts: [
    {
      date: "19 Feb, 2024",
      title:
        "How can I get started with Artificial Intelligence for my business?",
      image: S1,
    },
    {
      date: "19 April, 2024",
      title: "The Future of AI: Emerging Trends and Technologies to Watch",
      image: S2,
    },
    {
      date: "9 July, 2025",
      title: "Exploring Deep Learning: Unleashing the Power of Neural Networks",
      image: S3,
    },
  ],
  blogItems: [
    "Network Integration",
    "Deep learning solutions",
    "Transfer learning",
    "Model evaluation",
    "Real-time prediction",
  ],
  sideCard: {
    image: SideImage,
    heading: "AI Strategy & Consulting",
    content: "Provide expert guidance on developing an AI strategy",
  },
  comments: [
    {
      name: "Anna Collins",
      date: "11 Jan 2024",
      content:
        "Striped bass yellowtail kingfish angler catfish angelfish longjaw mudsucker, codlet Ragfish Cherubfish. Ruffeweever tilefish wallago Cornish Spaktailed Bream Old World rivuline chubsucker Oriental loach. Indian mul char spotted dogfish Largemouth bass alewife cichlid ladyfish lizardfish",
      image: Girl,
    },
    {
      name: "Tom Ostin",
      date: "11 Jan 2024",
      content:
        "Old World rivuline chubsucker Oriental loach. Indian mul char spotted dogfish Largemouth bassalewife cichlid ladyfish lizardfish",
      image: Boy,
    },
  ],
  content: {
    mainParagraphs: [
      "In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that is transforming industries across the globe is neural networks. Harnessing the power of artificial intelligence, neural networks have the ability to analyze vast amounts of data, identify complex patterns, and make accurate predictions, enabling businesses to unlock new opportunities and drive growth.",
      "At our company, we specialize in providing comprehensive neural network services that can revolutionize your business. Whether you’re looking to enhance your data analysis capabilities, automate repetitive tasks, improve customer engagement, or optimize operational processes, our team of experts is here to help you leverage the full potential of neural networks. Data lies at the heart of neural networks, and our services start with understanding your unique data landscape. We work closely with you to identify and collect relevant data sources, ensuring that your neural network models are built on a solid foundation. Our data scientists employ cutting-edge techniques to preprocess and clean the data, making it ready for training the neural network models.",
    ],
    quote: {
      text: "Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive.",
      author: "Adam Peterson",
      image: Vector,
    },
    additionalParagraph:
      "The development of neural networks is a specialized task that requires expertise and experience. Our team of skilled professionals excels in designing and implementing neural network architectures tailored to your specific business needs. From traditional feedforward networks to advanced convolutional and recurrent networks, we have the knowledge and skills to build models that deliver superior performance and accuracy.",
    socialTags: ["/AI/", "/ChatGpt/", "/Neural/"],
    image: B1,
  },
  footer: {
    headings: ["We are always ready to help you and answer your questions"],
    description:
      "Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.",
    gradientIndex: 0,
    gradientWordCount: 2,
  },
};

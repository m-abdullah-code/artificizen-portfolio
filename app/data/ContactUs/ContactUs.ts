import { ContactUsPageData } from "@/app/interfaces/ContactUs";
import Contact from "../../../public/assets/ContactUs/contactMain.png";
import Elipse from "../../../public/assets/Footer/Ellipse 1.png";
import Alogo from "../../../public/assets/logo/Artificizen-Logo.png";
import WhiteIcon from "../../../public/assets/Services/whiteIcon.png";

export const contactUsData: ContactUsPageData = {
  banner: {
    image: Contact,
    title: "Contact Us",
    description: "Powerful AI solutions tailored to transform your business",
  },
  mainSection: {
    topText: "/get in touch /",
    headings: ["We are always ready to help you and answer your questions"],
    description:
      "Let’s collaborate to bring your AI vision to life with speed and precision.",
    contactInfo: {
      callCenter: {
        title: "Contact Us",
        phone: [
          { icon: "IoCallOutline", number: "+92 300 4985797" },
          { icon: "MdWhatsapp", number: "+92 328 7218978" },
        ],
      },
      location: {
        title: "Our Location",
        addresses: [
          "Office 1: 30 N Gould St, Ste R Sheridan, WY 82801 , USA",
          "Office 2: Plot 341 B2, Johar Town Lahore, Pakistan",
        ],
      },
    },
    emailAndSocials: {
      email: {
        title: "Email",
        address: "info@artificizen.com",
      },
      socials: {
        title: "Social Network",
        // networks: [
        //   { name: "FaFacebookF" },
        //   { name: "FaLinkedinIn" },
        //   { name: "FaXTwitter" },
        //   { name: "FaYoutube" },
        // ],
        networks: [
          {
            name: "FaLinkedinIn",
            href: "https://www.linkedin.com/company/102894444",
          },
          { name: "FaFacebookF", href: "https://web.facebook.com/artificizen" },
          {
            name: "IoLogoInstagram",
            href: "https://www.instagram.com/artificizen/",
          },
          { name: "FaXTwitter", href: "https://twitter.com/artificizen" },
        ] as const,
      },
    },
  },
  formSection: {
    title: "Get in Touch",
    description:
      "Define your goals and identify areas where AI can add value to your business",
    buttonText: "Send a message",
    buttonIcon: WhiteIcon,
  },
  footer: {
    logo: Alogo,
    description:
      "Artificizen builds smart, scalable AI solutions that turn bold ideas into real-world impact.",
    callCenter: {
      title: "Contact Us",
      contacts: [
        { type: "MdWhatsapp", value: "+92 300 4985797" },
        { type: "IoCallOutline", value: "+92 328 7218978" },
        { type: "Email", value: "info@artificizen.com" },
      ],
    },
    location: {
      title: "Location",
      addresses: [
        "Office 1: 30 N Gould St, Ste R Sheridan, WY 82801 , USA",
        "Office 2: Plot 341 B2, Johar Town Lahore, Pakistan",
      ],
      // socials: [
      //   { name: "FaFacebookF" },
      //   { name: "FaXTwitter" },
      //   { name: "FaLinkedinIn" },
      //   { name: "IoLogoYoutube" },
      // ],
      socials: [
        {
          name: "FaLinkedinIn",
          href: "https://www.linkedin.com/company/102894444",
        },
        { name: "FaFacebookF", href: "https://web.facebook.com/artificizen" },
        {
          name: "IoLogoInstagram",
          href: "https://www.instagram.com/artificizen/",
        },
        { name: "FaXTwitter", href: "https://twitter.com/artificizen" },
      ] as const,
    },
    company: {
      title: "Company",
      items: [
        { label: "About", url: "about-us" },
        { label: "Blog", url: "/blog" },
        { label: "Case Study", url: "/case-study" },
        { label: "Career", url: "/career" },
        { label: "Conatct", url: "contact-us" },
      ],
    },
    services: {
      title: "Services",
      items: [
        { label: "AI Chatbots", url: "/services/chatbot-solutions" },
        { label: "AI SaaS Development", url: "/services/saas-development" },
        { label: "POC/MVP Development", url: "/services/poc-mvp-development" },
        { label: "Enterprise AI Automation", url: "/services/ai-automation" },
        {
          label: "Cloud Infrastructure",
          url: "/services/cloud-infrastructure",
        },
        { label: "Other Services", url: "" },
      ],
    },
    backgroundImage: Elipse,
  },
};

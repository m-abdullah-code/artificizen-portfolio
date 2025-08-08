import { FooterData } from "../interfaces/Footer";

export const footerData: FooterData = {
  getInTouch: {
    subtitle: "/get in touch/",
    headings: [
      "Have An Idea?",
      "A Challenge?",
      "Or Just Curious",
      "About What AI Can",
      "Do For Your Business?",
    ],
    description:
      "Let’s talk. We’ll help you shape the right solution — fast, focused, and built to scale.",
  },
  contactForm: {
    title: "Get in Touch",
    description:
      "Fill out the form or drop us a message — we usually reply within 30 minutes.",
    formFields: [
      { type: "text", placeholder: "Full name", name: "name" },
      { type: "email", placeholder: "Email", name: "email" },
      { type: "text", placeholder: "Subject", name: "subject" },
      { type: "textarea", placeholder: "Message", name: "message", rows: 3 },
    ],
    submitButton: "Send a message",
  },
  logoSection: {
    description:
      "Artificizen builds smart, scalable AI solutions that turn bold ideas into real-world impact.",
  },
  callCenter: {
    title: "Contact Us",
    contacts: [
      { icon: "MdWhatsapp" as const, value: "+92 300 4985797" },
      { icon: "IoCallOutline" as const, value: "+92 328 7218978" },
    ],
    email: {
      label: "Email",
      value: "info@artificizen.com",
    },
  },
  location: {
    title: "Our Location",
    addresses: [
      "Office 1: 30 N Gould St, Ste R Sheridan, WY 82801 , USA",
      "Office 2: Plot 341 B2, Johar Town Lahore, Pakistan",
    ],
    // socialMedia: {
    //   label: "Social network",
    //   icons: [
    //     "FaLinkedinIn",
    //     "FaFacebookF",
    //     "IoLogoInstagram",
    //     "FaXTwitter",
    //   ] as const,
    // },
    socialMedia: {
      label: "Social network",
      icons: [
        {
          icon: "FaLinkedinIn",
          href: "https://www.linkedin.com/company/102894444",
        },
        { icon: "FaFacebookF", href: "https://web.facebook.com/artificizen" },
        {
          icon: "IoLogoInstagram",
          href: "https://www.instagram.com/artificizen/",
        },
        { icon: "FaXTwitter", href: "https://twitter.com/artificizen" },
      ] as const,
    },
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "about-us" },
      { label: "Blog", url: "/blog" },
      { label: "Case Study", url: "/case-study" },
      { label: "Career", url: "/career" },
      { label: "Conatct", url: "contact-us" },
    ],
  },
  // services: {
  //   title: "Services",
  //   links: [
  //     "AI Chatbots",
  //     "AI SaaS Development",
  //     "POC /MVP Development",
  //     "Enterprise AI Automation",
  //     "Cloud Infrastructure",
  //     "Other Services",
  //   ],
  // },
  services: {
    title: "Services",
    links: [
      { label: "AI Chatbots", url: "/services/chatbot-solutions" },
      { label: "AI SaaS Development", url: "/services/saas-development" },
      { label: "PoC/MVP Development", url: "/services/poc-mvp-development" },
      { label: "Enterprise AI Automation", url: "/services/ai-automation" },
      { label: "Cloud Infrastructure", url: "/services/cloud-infrastructure" },
      { label: "Other Services", url: "/services/other" },
    ],
  },
};

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
      { type: "text", placeholder: "Full name" },
      { type: "email", placeholder: "Email" },
      { type: "text", placeholder: "Subject" },
      { type: "textarea", placeholder: "Message", rows: 3 },
    ],
    submitButton: "Send a message",
  },
  logoSection: {
    description:
      "Artificizen builds smart, scalable AI solutions that turn bold ideas into real-world impact.",
  },
  callCenter: {
    title: "Call Center",
    contacts: [
      { icon: "MdWhatsapp" as const, value: "+92 300 1234567" },
      { icon: "IoCallOutline" as const, value: "+92 300 1234567" },
    ],
    email: {
      label: "Email",
      value: "support@yourcompany.com",
    },
  },
  location: {
    title: "Our Location",
    addresses: ["USA, New York - 1060", "Str. First Avenue 1"],
    socialMedia: {
      label: "Social network",
      icons: ["FaFacebookF", "FaXTwitter", "FaLinkedinIn", "IoLogoYoutube"] as const,
    },
  },
  company: {
    title: "Company",
    links: ["About", "Expertise", "Sustainability", "News&Media", "Term", "Contact"],
  },
  services: {
    title: "Services",
    links: [
      "AI Chatbots",
      "AI SaaS Development",
      "POC /MVP Development",
      "Enterprise AI Automation",
      "Cloud Infrastructure",
      "Other Services",
    ],
  },
};
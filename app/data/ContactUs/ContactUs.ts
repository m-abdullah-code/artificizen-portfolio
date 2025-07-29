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
      "Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.",
    contactInfo: {
      callCenter: {
        title: "Call Center",
        phone: [
          { icon: "IoCallOutline", number: "+92328-7218978" },
          { icon: "MdWhatsapp", number: "+1 (530) 220-7680" },
        ],
      },
      location: {
        title: "Our Location",
        address: "USA, New York – 1060 Str. First Avenue 1",
      },
    },
    emailAndSocials: {
      email: {
        title: "Email",
        address: "info@artificizen.com",
      },
      socials: {
        title: "Social Network",
        networks: [
          { name: "FaFacebookF" },
          { name: "FaLinkedinIn" },
          { name: "FaXTwitter" },
          { name: "FaYoutube" },
        ],
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
      title: "Call Center",
      contacts: [
        { type: "MdWhatsapp", value: "+1 (530) 220-7680" },
        { type: "IoCallOutline", value: "+92328-7218978" },
        { type: "Email", value: "info@artificizen.com" },
      ],
    },
    location: {
      title: "Location",
      address: "USA, New York - 1060 Str. First Avenue 1",
      socials: [
        { name: "FaFacebookF" },
        { name: "FaXTwitter" },
        { name: "FaLinkedinIn" },
        { name: "IoLogoYoutube" },
      ],
    },
    company: {
      title: "Company",
      items: [
        "About",
        "Expertise",
        "Sustainability",
        "News & Media",
        "Team",
        "Contacts",
      ],
    },
    services: {
      title: "Services",
      items: [
        "AI Chatbots",
        "AI SaaS Development",
        "POC/MVP Development",
        "Enterprise AI Automation",
        "Cloud Infrastructure",
        "Other Services",
      ],
    },
    backgroundImage: Elipse,
  },
};

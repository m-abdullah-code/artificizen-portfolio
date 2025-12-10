import { NavItem } from "../interfaces/Navbar";

export const navigationItems: NavItem[] = [
  {
    label: "SERVICES",
    href: "/services/chatbot-solutions",
    hasDropdown: true,
    dropdownItems: [
      // { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Chatbot Solutions", href: "/services/chatbot-solutions" },
      { label: "AI SaaS Development", href: "/services/saas-development" },
      { label: "PoC MVP Development", href: "/services/poc-mvp-development" },
      { label: "Enterprise AI Automation", href: "/services/ai-automation" },
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Remote Staffing", href: "/services/remote-staffing" },
    ],
  },
  {
    label: "CASE STUDIES",
    href: "/case-study",
    hasDropdown: true,
    dropdownItems: [
      { label: "Case Studies", href: "/case-study" },
      { label: "Agent Forge", href: "/case-studies/agentforge" },
      { label: "Empathica", href: "/case-studies/empathica" },
      { label: "Medi Match", href: "/case-studies/medimatch" },
      { label: "Exec Suite", href: "/case-studies/execsuite" },
      { label: "Vocal Persona", href: "/case-studies/vocalpersona" },
    ],
  },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CAREER", href: "/career" },
  { label: "BLOG", href: "/blog" },
  { label: "BRING YOUR CLIENT", href: "/partnership" },
];

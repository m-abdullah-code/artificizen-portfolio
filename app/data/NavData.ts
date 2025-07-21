import { NavItem } from "../interfaces/Navbar";

export const navigationItems: NavItem[] = [
  {
    label: "SERVICES",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    label: "CASE STUDIES",
    href: "/case-studies",
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

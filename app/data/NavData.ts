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
      { label: "E-commerce", href: "/case-studies/ecommerce" },
      { label: "Healthcare", href: "/case-studies/healthcare" },
      { label: "Fintech", href: "/case-studies/fintech" },
      { label: "SaaS", href: "/case-studies/saas" },
    ],
  },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CAREER", href: "/career" },
  { label: "BLOG", href: "/blog" },
  { label: "BRING YOUR CLIENT", href: "/partnership" },
];

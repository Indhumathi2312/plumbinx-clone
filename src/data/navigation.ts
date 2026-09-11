export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface DropdownItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "All Page", href: "#", hasDropdown: true },
];

export const allPagesDropdownItems: DropdownItem[] = [
  { label: "Home V1", href: "/" },
  { label: "Home V2", href: "/home-v2" },
  { label: "Service", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Project", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

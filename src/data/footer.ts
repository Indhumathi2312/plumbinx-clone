export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerQuickLinkColumn: FooterColumn = {
  title: "Quick link",
  links: [
    { label: "Home V1", href: "/" },
    { label: "Home V2", href: "/home-v2" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const footerCompanyColumn: FooterColumn = {
  title: "Company",
  links: [
    { label: "Project", href: "/projects" },
    { label: "Service", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],
};

export const footerOtherPagesColumn: FooterColumn = {
  title: "Other Pages",
  links: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export const footerInfo = {
  copyrightLeft: "Hydrocare All Rights Reserve",
  copyrightRight: "© 2026 Legal",
};

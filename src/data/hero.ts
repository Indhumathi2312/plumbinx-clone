export interface HeroData {
  badgeText: string;
  title: string;
  subheading: string;
  headingLines: string[];
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  videoSrc: string;
  primaryCta: {
    text: string;
    href: string;
  };
  reviews: {
    ratingStars: number;
    text: string;
  };
  customerSatisfaction: {
    title: string;
    subtitle: string;
    rating: number;
    avatars: string[];
  };
  statsCard: {
    number: string;
    textLine1: string;
    textLine2: string;
    avatars: string[];
    ctaText: string;
    ctaHref: string;
  };
}

export const heroContent: HeroData = {
  badgeText: "Emergency Plumbing 24/7",
  title: "Reliable Plumbing Solutions, Anytime you Need Them",
  subheading:
    "Expert plumbing services for homes and businesses. Fast, professional, and affordable because leaks don't wait ever.",
  headingLines: [
    "Reliable Plumbing",
    "Solutions, Anytime you",
    "Need Them",
  ],
  description:
    "Expert plumbing services for homes and businesses. Fast, professional, and affordable because leaks don't wait ever.",
  primaryCtaText: "Book a Free Call",
  primaryCtaHref: "/contact",
  secondaryCtaText: "Contact Now",
  secondaryCtaHref: "/contact",
  videoSrc: "/media/RxY59Dx1BlSk8tr8Lpnw15lCA.mp4",
  primaryCta: {
    text: "Book a Free Call",
    href: "/contact",
  },
  reviews: {
    ratingStars: 5,
    text: "500+ Verified Reviews",
  },
  customerSatisfaction: {
    title: "Customer Satisfaction",
    subtitle: "Cured satisfied customer around the globe",
    rating: 5,
    avatars: [
      "/images/lG7rTiKGiVNjskiXGw45MWDNET0.png",
      "/images/AgjxmutaeUE0x35NgYryoOLfo.webp",
      "/images/e1zzZSwDcXiq41EQgMVfL99wEtI.png",
      "/images/Te26rQp4D0RlgnQKdAe90TZYd0.png",
    ],
  },
  statsCard: {
    number: "50K+",
    textLine1: "Cured satisfied customer",
    textLine2: "around the globe",
    avatars: [
      "/images/lG7rTiKGiVNjskiXGw45MWDNET0.png",
      "/images/AgjxmutaeUE0x35NgYryoOLfo.webp",
      "/images/e1zzZSwDcXiq41EQgMVfL99wEtI.png",
      "/images/Te26rQp4D0RlgnQKdAe90TZYd0.png",
    ],
    ctaText: "Contact Now",
    ctaHref: "/contact",
  },
};

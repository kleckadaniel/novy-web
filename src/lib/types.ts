export interface ServiceItem {
  problem: string;
  solution: string;
  outputs: string[];
}

export interface WhyMePoint {
  title: string;
  text: string;
}

export interface Client {
  name: string;
  placeholder: boolean;
  logo?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  company: string;
}

export interface ContentData {
  hero: {
    tagline: string;
    headline: string;
    subtext: string;
    cta: string;
  };
  services: {
    headline: string;
    intro: string;
    items: ServiceItem[];
  };
  whyMe: {
    headline: string;
    intro: string;
    points: WhyMePoint[];
  };
  about: {
    headline: string;
    text: string;
    note: string;
  };
  references: {
    headline: string;
    clients: Client[];
    testimonials: Testimonial[];
  };
  contact: {
    headline: string;
    subtext: string;
    email: string;
    cta: string;
  };
}

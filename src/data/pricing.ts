export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for creators just getting started with professional editing.",
    features: [
      "1 short-form video (up to 90s)",
      "Basic color grading",
      "Captions & text overlays",
      "Licensed music",
      "2 revision rounds",
      "48h turnaround",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$450",
    description: "For creators and brands who need consistent, high-quality output.",
    features: [
      "4 short-form videos OR 1 long-form (up to 15min)",
      "Advanced color grading & effects",
      "Custom motion graphics",
      "Sound design & mixing",
      "Thumbnail design included",
      "Unlimited revisions",
      "24h turnaround",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Ongoing partnerships, bulk content, and full content strategy.",
    features: [
      "Custom video package",
      "Dedicated editor on retainer",
      "Content strategy sessions",
      "Multi-platform repurposing",
      "Priority turnaround",
      "Monthly reporting",
    ],
    cta: "Contact Me",
    highlighted: false,
  },
];

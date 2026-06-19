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
    price: "$15",
    description: "Perfect for creators just getting started with professional editing.",
    features: [
      "1 short-form video (up to 60s)",
      "Up to 15 min of footage provided",
      "Color grading",
      "Sound design & mixing",
      "Subtitles & captions",
      "Thumbnail & source file included",
      "Unlimited revisions",
      "24h turnaround",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    description: "For creators and brands who need consistent, high-quality output.",
    features: [
      "1 short-form video (up to 2min)",
      "Up to 15 min of footage provided",
      "Custom motion graphics",
      "Color grading, sound design & B-roll",
      "Subtitles & captions",
      "Thumbnail & source file included",
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

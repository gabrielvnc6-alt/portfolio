export interface WrittenTestimonial {
  type: "written";
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface ScreenshotTestimonial {
  type: "screenshot";
  id: string;
  imageSrc: string;
  platform: string;
  alt: string;
}

export type Testimonial = WrittenTestimonial | ScreenshotTestimonial;

export const testimonials: Testimonial[] = [
  {
    type: "written",
    id: "w1",
    name: "Alex Turner",
    role: "YouTuber — 1.2M subscribers",
    quote:
      "Gabriel transformed my channel. My retention rate went from 35% to 58% in two months. He doesn't just edit — he understands what keeps people watching.",
  },
  {
    type: "screenshot",
    id: "s1",
    imageSrc: "/testimonials/review-1.png",
    platform: "Fiverr",
    alt: "5-star Fiverr review praising fast turnaround and creative edits",
  },
  {
    type: "written",
    id: "w2",
    name: "Sophia Chen",
    role: "Brand Owner — Glow Skincare",
    quote:
      "We needed TikTok content that actually converted. Gabriel delivered 12 videos in a week and three of them went viral. Our ROAS tripled.",
  },
  {
    type: "written",
    id: "w3",
    name: "Marcus Williams",
    role: "Agency Creative Director",
    quote:
      "I've worked with dozens of editors. Gabriel is the only one I don't have to micromanage. He nails the brief on the first pass, every time.",
  },
  {
    type: "screenshot",
    id: "s2",
    imageSrc: "/testimonials/review-2.png",
    platform: "Upwork",
    alt: "Top-rated review on Upwork highlighting professional communication",
  },
  {
    type: "written",
    id: "w4",
    name: "Jake Morrison",
    role: "Podcast Host — The Daily Grind",
    quote:
      "Gabriel turned 2-hour podcast recordings into punchy 60-second clips that exploded on Instagram. 4M views in the first month.",
  },
  {
    type: "screenshot",
    id: "s3",
    imageSrc: "/testimonials/review-3.png",
    platform: "Instagram DM",
    alt: "Client message thanking Gabriel for exceeding expectations",
  },
  {
    type: "written",
    id: "w5",
    name: "Priya Patel",
    role: "Fitness Creator — 800K followers",
    quote:
      "He gets the fitness niche. The pacing, the music, the transitions — everything feels premium. My audience notices the difference.",
  },
  {
    type: "screenshot",
    id: "s4",
    imageSrc: "/testimonials/review-4.png",
    platform: "Fiverr",
    alt: "Repeat client review mentioning 5th order and continued satisfaction",
  },
];

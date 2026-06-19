export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "Scissors",
    title: "Short-Form Editing",
    description:
      "Scroll-stopping TikToks, Reels, and Shorts built for virality. Fast cuts, trending formats, captions that pop.",
  },
  {
    icon: "Film",
    title: "YouTube Long-Form",
    description:
      "Retention-optimized edits for vlogs, podcasts, tutorials, and reviews. Pacing that keeps viewers glued.",
  },
  {
    icon: "Image",
    title: "Thumbnail Design",
    description:
      "Click-worthy thumbnails engineered for CTR. Bold, clean, and tested to outperform.",
  },
  {
    icon: "TrendingUp",
    title: "Content Strategy",
    description:
      "Data-driven content planning and repurposing. One shoot becomes a month of multi-platform content.",
  },
];

export type Category = "all" | "tiktok" | "instagram";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  videoSrc: string;
  posterSrc: string;
  description?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "3",
    title: "Street Portrait Surprise",
    category: "tiktok",
    videoSrc: "/videos/video-3.mp4",
    posterSrc: "/posters/video-3-poster.jpg",
    description:
      "Feel-good street content for @portrasdoretrato1 — surprising people in São Paulo with framed portraits. Punchy vertical edit with captions and clean pacing.",
  },
  {
    id: "7",
    title: "Strangers React to Their Portrait",
    category: "tiktok",
    videoSrc: "/videos/video-7.mp4",
    posterSrc: "/posters/video-7-poster.jpg",
    description:
      "Human-interest TikTok for @portrasdoretrato1 capturing genuine reactions on the streets of São Paulo. Vertical edit with subtitles, sound design and scroll-stopping cuts.",
  },
  {
    id: "9",
    title: "Airbnb Property Tour",
    category: "instagram",
    videoSrc: "/videos/video-9.mp4",
    posterSrc: "/posters/video-9-poster.jpg",
    description:
      "Cinematic Airbnb listing tour for a property in Viana do Castelo, Portugal — smooth transitions, elegant titles, and warm grading that make the space feel like home.",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "TikTok", value: "tiktok" },
  { label: "Instagram", value: "instagram" },
];

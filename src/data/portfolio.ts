export type Category = "all" | "youtube" | "tiktok" | "reels" | "longform";

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
    id: "1",
    title: "Brand Launch Reel",
    category: "reels",
    videoSrc: "/videos/video-1.mp4",
    posterSrc: "/posters/video-1-poster.jpg",
    description:
      "High-energy product launch reel that generated 2.3M views in the first week.",
  },
  {
    id: "2",
    title: "Creator Podcast Highlights",
    category: "youtube",
    videoSrc: "/videos/video-2.mp4",
    posterSrc: "/posters/video-2-poster.jpg",
    description:
      "Dynamic podcast clips for a 500K+ subscriber channel. Retention rate up 40%.",
  },
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
    id: "4",
    title: "Documentary Mini-Film",
    category: "longform",
    videoSrc: "/videos/video-4.mp4",
    posterSrc: "/posters/video-4-poster.jpg",
    description:
      "15-minute mini documentary for a travel brand. Featured on YouTube Trending.",
  },
  {
    id: "5",
    title: "Fitness Transformation Edit",
    category: "reels",
    videoSrc: "/videos/video-5.mp4",
    posterSrc: "/posters/video-5-poster.jpg",
    description:
      "Before/after transformation reel with 1.8M views and 45K saves.",
  },
  {
    id: "6",
    title: "Tech Review — Long Form",
    category: "youtube",
    videoSrc: "/videos/video-6.mp4",
    posterSrc: "/posters/video-6-poster.jpg",
    description:
      "Full-length tech review for a 1M+ subscriber channel. 92% positive sentiment.",
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
    id: "8",
    title: "Gaming Montage",
    category: "youtube",
    videoSrc: "/videos/video-8.mp4",
    posterSrc: "/posters/video-8-poster.jpg",
    description:
      "High-paced gaming montage with custom motion graphics and sound design.",
  },
  {
    id: "9",
    title: "Airbnb Property Tour",
    category: "reels",
    videoSrc: "/videos/video-9.mp4",
    posterSrc: "/posters/video-9-poster.jpg",
    description:
      "Cinematic Airbnb listing tour for a property in Viana do Castelo, Portugal — smooth transitions, elegant titles, and warm grading that make the space feel like home.",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "YouTube", value: "youtube" },
  { label: "TikTok", value: "tiktok" },
  { label: "Reels", value: "reels" },
  { label: "Long-form", value: "longform" },
];

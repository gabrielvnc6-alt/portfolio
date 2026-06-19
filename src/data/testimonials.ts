export interface WrittenTestimonial {
  type: "written";
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  /** Optional override for the avatar color (Tailwind classes). Falls back to a name-based color. */
  avatarColor?: string;
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
    name: "eduardosmartins",
    role: "Fiverr client — Portugal",
    quote:
      "Really happy with this service. The videos came out clean, engaging, and actually feel like content that can perform well — not just basic edits. You can tell there's real attention to pacing, captions, and keeping the viewer hooked. Communication was smooth and delivery was on point.",
  },
  {
    type: "written",
    id: "w2",
    name: "fannydcnh",
    role: "Fiverr client — Portugal",
    quote:
      "Outstanding experience from start to finish! Gabriel understood my requirements perfectly, and delivered beyond my expectations. Great communication, fast delivery, and excellent quality. Highly recommended!",
  },
  {
    type: "written",
    id: "w3",
    name: "jirkalange",
    role: "Repeat client — Germany",
    quote:
      "honestly amazing every single time. I've hired Gabriel again and again because he always delivers. For this project he took my short-form content and made it look so much better for TikTok, Instagram Reels and YouTube Shorts. Better pacing, great color correction, clean audio, awesome captions.",
  },
  {
    type: "written",
    id: "w4",
    name: "jirkalange",
    role: "Repeat client — Germany",
    quote:
      "Communication was great and the videos came out really well edited. Definitely worth the money!",
  },
  {
    type: "written",
    id: "w5",
    name: "marcusdev",
    role: "Content creator — UK",
    avatarColor: "bg-emerald-500/20 text-emerald-300",
    quote:
      "Fast turnaround and the edits hit exactly the vibe I was going for. The captions and pacing made my Reels feel way more professional. Will be ordering again.",
  },
  {
    type: "written",
    id: "w6",
    name: "sofiacreates",
    role: "Brand owner — Spain",
    avatarColor: "bg-violet-500/20 text-violet-300",
    quote:
      "Super easy to work with and really understood my brand. My TikToks have never looked this clean. Highly recommend for anyone serious about short-form content.",
  },
];

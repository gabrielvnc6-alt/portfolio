import "./index.css";
import { Composition } from "remotion";
import { TikTokEndCard } from "./TikTokEndCard";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="TikTokEndCard"
      component={TikTokEndCard}
      durationInFrames={120}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

interface FollowerBumpProps {
  duration: number;
}

export const FollowerBump: React.FC<FollowerBumpProps> = ({ duration }) => {
  const frame = useCurrentFrame();

  const scrambleEnd = Math.min(duration, 12);
  const isScrambling = frame < scrambleEnd;

  const scrambleNumbers = [7365, 7359, 7370, 7361, 7368, 7364, 7366, 7360, 7363];
  const scrambleIndex = Math.floor(
    interpolate(frame, [0, scrambleEnd], [0, scrambleNumbers.length - 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  const displayNumber = isScrambling
    ? scrambleNumbers[scrambleIndex]
    : 7363;

  const landScale = interpolate(
    frame,
    [scrambleEnd - 1, scrambleEnd, scrambleEnd + 4],
    [1, 1.2, 1],
    {
      easing: Easing.bezier(0.34, 1.56, 0.64, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const opacity = interpolate(frame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const slideY = interpolate(frame, [0, 8], [30, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        right: 80,
        top: 1120,
        transform: `scale(${landScale}) translateY(${slideY}px)`,
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: "#aaa",
          fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        Seguidores
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: isScrambling ? "#FF6B8A" : "#fff",
          fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif',
          textShadow: "0 0 30px rgba(254,44,85,0.6)",
        }}
      >
        {displayNumber.toLocaleString()}
      </div>
    </div>
  );
};

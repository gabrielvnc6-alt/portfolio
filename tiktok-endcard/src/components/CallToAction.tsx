import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

interface CallToActionProps {
  duration: number;
}

export const CallToAction: React.FC<CallToActionProps> = ({ duration }) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 12], [0, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = interpolate(
    frame % 20,
    [0, 10, 20],
    [0, -8, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 500,
        display: "flex",
        justifyContent: "center",
        transform: `translateY(${floatY}px) scale(${scale})`,
        opacity,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontSize: 60,
          fontWeight: 800,
          color: "#fff",
          fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif',
          textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 0 20px rgba(254,44,85,0.5)",
          background: "linear-gradient(135deg, #FE2C55, #FF6B8A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          padding: "12px 40px",
        }}
      >
        Segue-nos! 👆
      </div>
    </div>
  );
};

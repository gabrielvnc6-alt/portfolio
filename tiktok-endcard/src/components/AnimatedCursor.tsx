import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

interface AnimatedCursorProps {
  cursorDuration: number;
  clickFrame: number;
}

export const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  cursorDuration,
  clickFrame,
}) => {
  const frame = useCurrentFrame();

  // Cursor enters from bottom-right with a natural arc
  // Target: center of the viewport (where the zoomed button is)
  const startX = 900;
  const startY = 1600;
  const endX = 470;
  const endY = 1030;

  const progress = interpolate(frame, [0, cursorDuration], [0, 1], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Arc movement using quadratic bezier-like path
  const controlX = 850;
  const controlY = 850;

  const x =
    (1 - progress) * (1 - progress) * startX +
    2 * (1 - progress) * progress * controlX +
    progress * progress * endX;
  const y =
    (1 - progress) * (1 - progress) * startY +
    2 * (1 - progress) * progress * controlY +
    progress * progress * endY;

  // Click squash effect
  const clickProgress = interpolate(
    frame,
    [clickFrame, clickFrame + 4, clickFrame + 8],
    [1, 0.85, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const cursorOpacity = interpolate(frame, [0, 3], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out after click
  const fadeOut = interpolate(frame, [clickFrame + 10, clickFrame + 18], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${clickProgress})`,
        opacity: cursorOpacity * fadeOut,
        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
        pointerEvents: "none",
      }}
    >
      <svg
        width="60"
        height="72"
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 2L5.5 21.5L10.5 16.5L15 24L19 22L14.5 14.5L21 14.5L5.5 2Z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

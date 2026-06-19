import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

interface ClickEffectsProps {
  duration: number;
}

const PARTICLES = [
  { angle: 30, distance: 120, size: 10, color: "#FE2C55" },
  { angle: 75, distance: 100, size: 8, color: "#FF6B8A" },
  { angle: 120, distance: 130, size: 12, color: "#FE2C55" },
  { angle: 165, distance: 90, size: 6, color: "#FF9BB5" },
  { angle: 210, distance: 110, size: 10, color: "#FE2C55" },
  { angle: 255, distance: 95, size: 8, color: "#FF6B8A" },
  { angle: 300, distance: 125, size: 7, color: "#FE2C55" },
  { angle: 345, distance: 105, size: 9, color: "#FF9BB5" },
  { angle: 50, distance: 80, size: 5, color: "#fff" },
  { angle: 140, distance: 85, size: 5, color: "#fff" },
  { angle: 230, distance: 75, size: 5, color: "#fff" },
  { angle: 320, distance: 90, size: 5, color: "#fff" },
];

export const ClickEffects: React.FC<ClickEffectsProps> = ({ duration }) => {
  const frame = useCurrentFrame();

  // Center of the button (zoomed view center)
  const cx = 470;
  const cy = 1030;

  // Ripple
  const rippleScale = interpolate(frame, [0, 15], [0, 3], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(frame, [0, 15], [0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Particles
  const particleProgress = interpolate(frame, [2, 14], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const particleOpacity = interpolate(frame, [8, 16], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // +1 floating up
  const plusOneY = interpolate(frame, [4, 20], [0, -100], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const plusOneOpacity = interpolate(frame, [4, 8, 18, 22], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const plusOneScale = interpolate(frame, [4, 10], [0.5, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      {/* Ripple ring */}
      <div
        style={{
          position: "absolute",
          left: cx - 40,
          top: cy - 40,
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "3px solid #FE2C55",
          transform: `scale(${rippleScale})`,
          opacity: rippleOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Second ripple (delayed) */}
      {frame >= 3 && (
        <div
          style={{
            position: "absolute",
            left: cx - 40,
            top: cy - 40,
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "2px solid rgba(254,44,85,0.5)",
            transform: `scale(${interpolate(frame - 3, [0, 15], [0, 4], { easing: Easing.bezier(0.16, 1, 0.3, 1), extrapolateLeft: "clamp", extrapolateRight: "clamp" })})`,
            opacity: interpolate(frame - 3, [0, 15], [0.4, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            pointerEvents: "none",
          }}
        />
      )}

      {/* Particles */}
      {PARTICLES.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const px = cx + Math.cos(rad) * p.distance * particleProgress;
        const py = cy + Math.sin(rad) * p.distance * particleProgress;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px - p.size / 2,
              top: py - p.size / 2,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              opacity: particleOpacity,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* +1 floating text */}
      <div
        style={{
          position: "absolute",
          left: cx - 30,
          top: cy - 60 + plusOneY,
          fontSize: 48,
          fontWeight: 800,
          color: "#FE2C55",
          opacity: plusOneOpacity,
          transform: `scale(${plusOneScale})`,
          fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif',
          textShadow: "0 2px 10px rgba(254,44,85,0.5)",
          pointerEvents: "none",
        }}
      >
        +1
      </div>
    </>
  );
};

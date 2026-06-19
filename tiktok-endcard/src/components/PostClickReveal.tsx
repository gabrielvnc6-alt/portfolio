import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  Img,
  staticFile,
} from "remotion";

const FONT_FAMILY = '-apple-system, "Helvetica Neue", Arial, sans-serif';

interface PostClickRevealProps {
  duration: number;
}

export const PostClickReveal: React.FC<PostClickRevealProps> = ({
  duration,
}) => {
  const frame = useCurrentFrame();

  // --- Dark backdrop fade in ---
  const backdropOpacity = interpolate(frame, [0, 10], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Profile picture pop in ---
  const pfpScale = interpolate(frame, [4, 16], [0, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pfpOpacity = interpolate(frame, [4, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Counter animation: simple 7362 → 7363 tick ---
  const tickFrame = 18;
  const displayNumber = frame < tickFrame ? 7362 : 7363;

  const counterScale = interpolate(
    frame,
    [tickFrame - 1, tickFrame, tickFrame + 5],
    [1, 1.15, 1],
    {
      easing: Easing.bezier(0.34, 1.56, 0.64, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const counterSlideUp = interpolate(frame, [6, 16], [40, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const counterOpacity = interpolate(frame, [6, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- "+1" badge pop ---
  const plusOneScale = interpolate(frame, [tickFrame, tickFrame + 8], [0, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const plusOneOpacity = interpolate(frame, [tickFrame, tickFrame + 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- CTA text slide up ---
  const ctaDelay = 14;
  const ctaSlideUp = interpolate(frame, [ctaDelay, ctaDelay + 12], [50, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaOpacity = interpolate(frame, [ctaDelay, ctaDelay + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Decorative line expand ---
  const lineWidth = interpolate(frame, [10, 22], [0, 400], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Gentle float on hold ---
  const floatY = interpolate(
    Math.max(0, frame - 24) % 30,
    [0, 15, 30],
    [0, -6, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <>
      {/* Dark backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,
          pointerEvents: "none",
        }}
      />

      {/* Centered content card */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateY(${floatY}px)`,
          pointerEvents: "none",
          gap: 20,
        }}
      >
        {/* Profile picture */}
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #FE2C55",
            transform: `scale(${pfpScale})`,
            opacity: pfpOpacity,
            boxShadow: "0 0 40px rgba(254, 44, 85, 0.3)",
          }}
        >
          <Img
            src={staticFile("profile.jpg")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#fff",
            fontFamily: FONT_FAMILY,
            opacity: counterOpacity,
            transform: `translateY(${counterSlideUp * 0.5}px)`,
            letterSpacing: -0.5,
          }}
        >
          @portrasdoretrato1
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: lineWidth,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(254,44,85,0.6), transparent)",
            borderRadius: 1,
          }}
        />

        {/* Follower counter */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            transform: `translateY(${counterSlideUp}px) scale(${counterScale})`,
            opacity: counterOpacity,
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              fontFamily: FONT_FAMILY,
              color: "#fff",
              letterSpacing: -2,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {displayNumber.toLocaleString()}
          </span>

          {/* +1 badge */}
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#FE2C55",
              fontFamily: FONT_FAMILY,
              transform: `scale(${plusOneScale})`,
              opacity: plusOneOpacity,
              textShadow: "0 0 20px rgba(254,44,85,0.5)",
            }}
          >
            +1
          </span>
        </div>

        {/* "Seguidores" label */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#888",
            fontFamily: FONT_FAMILY,
            opacity: counterOpacity,
            transform: `translateY(${counterSlideUp * 0.3}px)`,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginTop: -12,
          }}
        >
          Seguidores
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: lineWidth * 0.6,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(254,44,85,0.4), transparent)",
            borderRadius: 1,
            marginTop: 8,
          }}
        />

        {/* CTA */}
        <div
          style={{
            marginTop: 16,
            transform: `translateY(${ctaSlideUp}px)`,
            opacity: ctaOpacity,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              fontFamily: FONT_FAMILY,
              background: "linear-gradient(135deg, #FE2C55, #FF6B8A, #FE2C55)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: -0.5,
            }}
          >
            Segue-nos!
          </div>
          <span style={{ fontSize: 48 }}>👆</span>
        </div>
      </div>
    </>
  );
};

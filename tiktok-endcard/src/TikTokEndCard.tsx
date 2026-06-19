import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { ProfilePage } from "./components/ProfilePage";
import { AnimatedCursor } from "./components/AnimatedCursor";
import { ClickEffects } from "./components/ClickEffects";
import { PostClickReveal } from "./components/PostClickReveal";

export const TikTokEndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase timings (in frames at 30fps)
  const FADE_IN_END = Math.round(0.6 * fps); // 0–18
  const ZOOM_START = FADE_IN_END;
  const ZOOM_END = Math.round(1.6 * fps); // 18–48
  const CURSOR_START = ZOOM_END;
  const CURSOR_END = ZOOM_END + 10; // 48–58, fast cursor
  const CLICK_FRAME = CURSOR_END; // 58
  const CLICK_END = CLICK_FRAME + 8; // 58–66, snappy click

  // Phase 1: Fade/scale in
  const initialScale = interpolate(frame, [0, FADE_IN_END], [0.85, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const initialOpacity = interpolate(frame, [0, FADE_IN_END], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 2: High-velocity zoom toward the Seguir button
  const BUTTON_X = 360;
  const BUTTON_Y = 540;
  const CENTER_X = 540;
  const CENTER_Y = 960;
  const TARGET_SCALE = 2.8;

  // Aggressive ease-in curve: slow start, massive acceleration, hard stop
  const zoomScale = interpolate(frame, [ZOOM_START, ZOOM_END], [1, TARGET_SCALE], {
    easing: Easing.bezier(0.12, 0, 0.39, 0),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const zoomProgress = interpolate(frame, [ZOOM_START, ZOOM_END], [0, 1], {
    easing: Easing.bezier(0.12, 0, 0.39, 0),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateXTarget = CENTER_X - BUTTON_X;
  const translateYTarget = CENTER_Y - BUTTON_Y;
  const zoomTranslateX = zoomProgress * translateXTarget;
  const zoomTranslateY = zoomProgress * translateYTarget;

  const combinedScale = initialScale * zoomScale;

  // Motion blur: peaks during the fastest part of the zoom (last 40%)
  const zoomVelocity = interpolate(
    frame,
    [ZOOM_START, ZOOM_START + (ZOOM_END - ZOOM_START) * 0.5, ZOOM_END - 3, ZOOM_END],
    [0, 1, 12, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Vignette: more dramatic during zoom
  const vignetteOpacity = interpolate(
    frame,
    [ZOOM_START, ZOOM_END - 5, ZOOM_END],
    [0, 0.7, 0.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // No flash or shake — clean hard stop

  // Speed lines opacity (radial streaks during fast zoom)
  const speedLinesOpacity = interpolate(
    frame,
    [ZOOM_START + 10, ZOOM_END - 8, ZOOM_END - 2, ZOOM_END],
    [0, 0, 0.6, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const isButtonGlowing = frame >= ZOOM_START;
  const hasClicked = frame >= CLICK_FRAME;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Profile page layer */}
      <AbsoluteFill
        style={{
          transform: `translate(${zoomTranslateX}px, ${zoomTranslateY}px) scale(${combinedScale})`,
          opacity: initialOpacity,
          transformOrigin: `${BUTTON_X}px ${BUTTON_Y}px`,
          filter: zoomVelocity > 0.5 ? `blur(${zoomVelocity * 0.5}px)` : "none",
        }}
      >
        <ProfilePage
          isButtonGlowing={isButtonGlowing}
          hasClicked={hasClicked}
          frame={frame}
          fps={fps}
          zoomStart={ZOOM_START}
          fadeInEnd={FADE_IN_END}
        />
      </AbsoluteFill>

      {/* Radial speed lines during zoom rush */}
      {speedLinesOpacity > 0 && (
        <AbsoluteFill
          style={{
            opacity: speedLinesOpacity,
            pointerEvents: "none",
            background: `
              repeating-conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                rgba(255,255,255,0.08) 1.5deg,
                transparent 3deg,
                transparent 10deg
              )
            `,
            maskImage:
              "radial-gradient(ellipse at 50% 50%, transparent 20%, black 50%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 50%, transparent 20%, black 50%, black 70%, transparent 100%)",
          }}
        />
      )}

      {/* Vignette overlay — tighter tunnel during zoom */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 15%, rgba(0,0,0,${vignetteOpacity}) 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Cursor */}
      <Sequence from={CURSOR_START} layout="none">
        <AnimatedCursor
          cursorDuration={CURSOR_END - CURSOR_START}
          clickFrame={CLICK_FRAME - CURSOR_START}
        />
      </Sequence>

      {/* Click effects (particles, ripple) */}
      <Sequence from={CLICK_FRAME} layout="none">
        <ClickEffects duration={CLICK_END - CLICK_FRAME + 10} />
      </Sequence>

      {/* Post-click cinematic reveal */}
      <Sequence from={CLICK_END} layout="none">
        <PostClickReveal duration={120 - CLICK_END} />
      </Sequence>
    </AbsoluteFill>
  );
};

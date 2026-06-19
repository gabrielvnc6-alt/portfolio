import React from "react";
import { interpolate, Easing, Img, staticFile } from "remotion";

const FONT_FAMILY =
  '-apple-system, "Helvetica Neue", Arial, sans-serif';

const THUMBNAILS = [
  { views: "322", image: "thumb1.jpg" },
  { views: "1661", image: "thumb2.jpg" },
  { views: "2757", image: "thumb3.jpg" },
  { views: "1720", image: "thumb4.jpg" },
  { views: "2929", image: "thumb5.jpg" },
  { views: "3624", image: "thumb6.jpg" },
  { views: "1285", image: "thumb7.jpg" },
  { views: "1978", image: "thumb8.jpg" },
  { views: "1169", image: "thumb9.jpg" },
];

interface ProfilePageProps {
  isButtonGlowing: boolean;
  hasClicked: boolean;
  frame: number;
  fps: number;
  zoomStart: number;
  fadeInEnd: number;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  isButtonGlowing,
  hasClicked,
  frame,
  fps,
  zoomStart,
  fadeInEnd,
}) => {
  const glowPulse = isButtonGlowing
    ? interpolate(
        (frame - zoomStart) % 15,
        [0, 7, 15],
        [0.4, 0.8, 0.4],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
      )
    : 0;

  const thumbnails = THUMBNAILS;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        fontFamily: FONT_FAMILY,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 30px 20px",
          position: "relative",
        }}
      >
        <ChevronLeftIcon />
        <span
          style={{
            fontSize: 38,
            fontWeight: 700,
            flex: 1,
            textAlign: "center",
          }}
        >
          portrasdoretrato1
        </span>
        <MoreIcon />
      </div>

      {/* Profile section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 40px 0",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: 16,
            border: "3px solid #333",
          }}
        >
          <Img
            src={staticFile("profile.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name */}
        <div style={{ fontSize: 40, fontWeight: 700, marginBottom: 4 }}>
          Por trás do Retrato
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 60,
            marginTop: 20,
            marginBottom: 24,
          }}
        >
          <StatItem value="0" label="A seguir" />
          <StatItem value="7362" label="Seguidores" />
          <StatItem value="116.5K" label="Gostos" />
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          {/* Seguir button */}
          <div
            style={{
              backgroundColor: hasClicked ? "#545454" : "#FE2C55",
              color: "#fff",
              fontWeight: 700,
              fontSize: 34,
              padding: "16px 80px",
              borderRadius: 6,
              position: "relative",
              boxShadow:
                isButtonGlowing && !hasClicked
                  ? `0 0 ${20 + glowPulse * 30}px rgba(254, 44, 85, ${glowPulse})`
                  : "none",
            }}
          >
            {hasClicked ? "A seguir" : "Seguir"}
          </div>

          {/* Mensagem button */}
          <div
            style={{
              backgroundColor: "#2e2e2e",
              color: "#fff",
              fontWeight: 600,
              fontSize: 34,
              padding: "16px 40px",
              borderRadius: 6,
            }}
          >
            Mensagem
          </div>

          {/* Dropdown icon button */}
          <div
            style={{
              backgroundColor: "#2e2e2e",
              padding: "16px 20px",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
            }}
          >
            <DropdownIcon />
          </div>
        </div>

        {/* Bio */}
        <div
          style={{
            textAlign: "center",
            fontSize: 30,
            lineHeight: 1.5,
            padding: "0 40px",
            marginBottom: 12,
          }}
        >
          <div>📸 Cada rosto carrega uma história</div>
          <div>👉 Transformamos momentos em lembranças reais</div>
          <div>📍 Atualmente no Brasil 🇧🇷</div>
          <div>⬇️ Todas as nossas redes</div>
        </div>

        {/* Link */}
        <div
          style={{
            fontSize: 28,
            color: "#fff",
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <LinkIcon />
          linktr.ee/portrasdoretrato1
        </div>
      </div>

      {/* Tab row */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #333",
          marginBottom: 4,
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "18px 0",
            fontSize: 30,
            fontWeight: 600,
            borderBottom: "2px solid #fff",
          }}
        >
          <GridIcon /> Vídeos
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "18px 0",
            fontSize: 30,
            color: "#888",
          }}
        >
          <HeartIcon /> Gostou
        </div>
      </div>

      {/* Video grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          padding: "4px 2px",
        }}
      >
        {thumbnails.map((thumb, i) => {
          const stagger = interpolate(
            frame,
            [0 + i * 1.5, fadeInEnd + i * 1.5],
            [20, 0],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          return (
            <div
              key={i}
              style={{
                width: "calc(33.33% - 3px)",
                aspectRatio: "9/16",
                backgroundColor: "#1a1a1a",
                borderRadius: 4,
                transform: `translateY(${stagger}px)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Img
                src={staticFile(thumb.image)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  left: 8,
                  fontSize: 22,
                  color: "#ccc",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <PlayIcon />
                {thumb.views}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StatItem: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: 38, fontWeight: 700 }}>{value}</div>
    <div style={{ fontSize: 26, color: "#aaa" }}>{label}</div>
  </div>
);

const ChevronLeftIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ position: "absolute", left: 30 }}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const MoreIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="#fff"
    style={{ position: "absolute", right: 30 }}
  >
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

const DropdownIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const GridIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="#fff"
    style={{ verticalAlign: "middle", marginRight: 6 }}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "middle", marginRight: 6 }}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#ccc"
  >
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

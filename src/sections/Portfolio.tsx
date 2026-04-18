"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import { createPortal } from "react-dom";

const ALL_SCREENS = [
  [
    { src: "/images/app/job-list.png", label: "Job listings" },
    { src: "/images/app/job-details.png", label: "Job details" },
    { src: "/images/app/login1.png", label: "Sign in" },
    { src: "/images/app/login2.png", label: "Register" },
    { src: "/images/app/save.png", label: "Saved jobs" },
    { src: "/images/app/my-shift-list.png", label: "My shifts" },
    { src: "/images/app/my-shift-empty.png", label: "Empty shifts" },
  ],
  [
    { src: "/images/landing/hero1.png", label: "Hero" },
    { src: "/images/landing/how-it-works.png", label: "How it works" },
    { src: "/images/landing/for-business.png", label: "For businesses" },
    { src: "/images/landing/for-workers.png", label: "For workers" },
    { src: "/images/landing/workers-business.png", label: "Workflow" },
    { src: "/images/landing/founders.png", label: "Founders" },
  ],
  [
    { src: "/images/viviana-landing/hero.png", label: "Hero" },
    { src: "/images/viviana-landing/black-and-white.png", label: "Black & White" },
    { src: "/images/viviana-landing/nihon1.png", label: "Nihon I" },
    { src: "/images/viviana-landing/nihon2.png", label: "Nihon II" },
  ],
];

const IS_APP = [true, false, false];

type Screen = { src: string; label: string };

// ─── Modal ────────────────────────────────────────────────
function ImageModal({
  screen,
  screens,
  color,
  isApp,
  onClose,
}: {
  screen: Screen;
  screens: Screen[];
  color: string;
  isApp: boolean;
  onClose: () => void;
}) {
  const initialIndex = screens.findIndex((s) => s.src === screen.src);
  const [activeIndex, setActiveIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const dragStartX = useRef<number | null>(null);

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + screens.length) % screens.length),
    [screens.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % screens.length),
    [screens.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) { next(); } else { prev(); }
    }
    dragStartX.current = null;
  };

  const getOffset = (index: number) => {
    const total = screens.length;
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const visibleIndices = screens
    .map((_, i) => ({ i, offset: getOffset(i) }))
    .filter(({ offset }) => Math.abs(offset) <= 1);

  const frameClass = isApp ? styles.modalFrameApp : styles.modalFrameLanding;

  return createPortal(
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
      >
        {/* Arrow left */}
        <button
          className={styles.lightboxArrow}
          style={{ left: 0 }}
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Slides */}
        <div className={styles.lightboxTrack}>
          {visibleIndices.map(({ i, offset }) => {
            const isCenter = offset === 0;
            const s = screens[i];
            return (
              <div
                key={s.src}
                className={styles.lightboxSlide}
                style={{
                  transform: `translateX(${offset * 50}%) scale(${isCenter ? 1 : 0.82})`,
                  opacity: isCenter ? 1 : 0.35,
                  zIndex: isCenter ? 2 : 1,
                  cursor: isCenter ? "default" : "pointer",
                  transition: "transform 0.35s ease, opacity 0.35s ease",
                  pointerEvents: isCenter ? "none" : "auto",
                }}
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className={frameClass}
                  style={{ borderColor: isCenter ? `${color}80` : `${color}20` }}
                >
                  <Image
                    src={s.src}
                    alt={s.label}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes={isApp ? "340px" : "700px"}
                    priority={isCenter}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow right */}
        <button
          className={styles.lightboxArrow}
          style={{ right: 0 }}
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next"
        >
          ›
        </button>

        {/* Label + dots */}
        <div className={styles.lightboxMeta}>
          <span className={styles.modalLabel} style={{ color }}>
            {screens[activeIndex].label}
          </span>
          <div className={styles.lightboxDots}>
            {screens.map((_, i) => (
              <button
                key={i}
                className={styles.lightboxDot}
                style={{
                  background: i === activeIndex ? color : `${color}40`,
                  transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
                }}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to ${screens[i].label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Carousel ─────────────────────────────────────────────
function ScreenCarousel({
  screens,
  color,
  isApp,
}: {
  screens: Screen[];
  color: string;
  isApp: boolean;
}) {
  const offsetRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalScreen, setModalScreen] = useState<Screen | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const itemWidth = isApp ? 110 : 220;
  const gap = 16;
  const loopWidth = screens.length * (itemWidth + gap);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    offsetRef.current = 0;
    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current += 0.5;
        if (offsetRef.current >= loopWidth) {
          offsetRef.current = offsetRef.current - loopWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [loopWidth]);

  const tripled = [...screens, ...screens, ...screens];

  const handleMouseEnter = (i: number) => {
    if (isMobile) return;
    pausedRef.current = true;
    setHoveredIndex(i % screens.length);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    pausedRef.current = false;
    setHoveredIndex(null);
  };

  const handleClick = (s: Screen) => {
    if (isMobile) return;
    setModalScreen(s);
  };

  return (
    <>
      <div className={styles.carouselWrapper}>
        <div ref={trackRef} className={styles.carouselTrack}>
          {tripled.map((s, i) => {
            const originalIndex = i % screens.length;
            const isHovered = hoveredIndex === originalIndex;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <div
                key={i}
                className={styles.carouselItem}
                style={{
                  width: `${itemWidth}px`,
                  border: `1px solid ${color}25`,
                  background: `${color}08`,
                  opacity: isDimmed ? 0.3 : 1,
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                  cursor: isMobile ? "default" : "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(s)}
              >
                <div
                  className={isApp ? styles.carouselFrameApp : styles.carouselFrameLanding}
                  style={{
                    borderColor: isHovered ? `${color}80` : `${color}30`,
                    transition: "border-color 0.35s ease",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.label}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes={isApp ? "110px" : "220px"}
                    priority={i < screens.length}
                  />
                </div>
                <span
                  className={styles.carouselLabel}
                  style={{
                    color: isHovered ? color : `${color}99`,
                    transition: "color 0.35s ease",
                    fontWeight: isHovered ? 600 : 500,
                  }}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {modalScreen && (
        <ImageModal
          screen={modalScreen}
          screens={screens}   // ← agregar esto
          color={color}
          isApp={isApp}
          onClose={() => setModalScreen(null)}
        />
      )}
    </>
  );
}

// ─── Portfolio ─────────────────────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const item = PORTFOLIO_ITEMS[activeTab];
  const screens = ALL_SCREENS[activeTab];
  const isApp = IS_APP[activeTab];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <FadeIn>
        <div className={styles.portfolioHeader}>
          <p className={styles.sectionLabel}>Portfolio</p>
          <h2 className={styles.portfolioTitle}>Work that speaks for itself.</h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className={styles.portfolioTabs}>
          {PORTFOLIO_ITEMS.map((p, i) => (
            <button
              key={p.title}
              className={`${styles.portfolioTab} ${activeTab === i ? styles.portfolioTabActive : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.portfolioTabLabel}>{p.label}</span>
              <span className={styles.portfolioTabTitle}>{p.title}</span>
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className={styles.portfolioCardFull}>
          <ScreenCarousel screens={screens} color={item.color} isApp={isApp} />

          <div className={styles.portfolioCardContent}>
            <div className={styles.portfolioCardLeft}>
              <span className={styles.portfolioLabel}>{item.label}</span>
              <h3 className={styles.portfolioItemTitle}>{item.title}</h3>
              <p className={styles.portfolioDesc}>{item.desc}</p>
            </div>
            <div className={styles.portfolioCardRight}>
              <div className={styles.portfolioTags}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.portfolioTechTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
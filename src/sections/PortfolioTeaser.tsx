"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";
import { slugifyTitle } from "@/lib/portfolio";

const STRINGS = {
  myWork: { en: "My work", es: "Mi trabajo" },
  title: { en: "A few things I've shipped.", es: "Algunas cosas que lancé." },
  viewAll: { en: "View all projects →", es: "Ver todos los proyectos →" },
  goTo: { en: "Go to", es: "Ir a" },
};

const CARD_VIDEOS: Record<string, string> = {
  "Sweet Baby Name — Landing": "/images/sweet-baby-name/landing-loop.mp4",
  "Hidden Sense": "/images/hidden-sense/landing-loop.mp4",
  "Viviana Rodríguez": "/images/viviana-landing/landing-loop.mp4",
  "QuickCrew Landing": "/images/quickcrew-landing-loop.mp4",
};

const DEVICE_VIDEOS: Record<string, string> = {
  "Sweet Baby Name": "/images/celebration-match.mp4",
  "QuickCrew App": "/images/app/quickcrew-app-loop.mp4",
};

export default function PortfolioTeaser() {
  const t = useT();
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const index = cardRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        }
      },
      { root: track, threshold: [0.6] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <FadeIn>
        <div className={styles.portfolioHeader}>
          <p className={styles.sectionLabel}>{t(STRINGS.myWork)}</p>
          <h2 className={styles.portfolioTitle}>{t(STRINGS.title)}</h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className={styles.spotlightCarousel}>
          <div ref={trackRef} className={styles.spotlightTrack}>
            {PORTFOLIO_ITEMS.map((item, i) => {
              const cardVideo = CARD_VIDEOS[item.title.en];
              const deviceVideo = DEVICE_VIDEOS[item.title.en];

              return (
                <a
                  key={item.title.en}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  href={`/portfolio?project=${slugifyTitle(item.title.en)}`}
                  className={styles.spotlightCard}
                  style={
                    cardVideo
                      ? { background: item.color }
                      : { background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), ${item.color}` }
                  }
                >
                  {cardVideo && (
                    <>
                      <video
                        src={cardVideo}
                        className={styles.spotlightCardVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden="true"
                      />
                      <div className={styles.spotlightCardOverlay} />
                    </>
                  )}

                  {deviceVideo && (
                    <div className={styles.spotlightDeviceWrap}>
                      <div className={styles.spotlightDevice}>
                        <div className={styles.spotlightDeviceNotch} />
                        <div className={styles.spotlightDeviceScreen}>
                          <video
                            src={deviceVideo}
                            className={
                              item.title.en === "Sweet Baby Name"
                                ? `${styles.spotlightDeviceImg} ${styles.spotlightDeviceImgShiftDown}`
                                : styles.spotlightDeviceImg
                            }
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={styles.spotlightCardText}>
                    <p className={styles.spotlightEyebrow}>{t(item.title)}</p>
                    <h3 className={styles.spotlightHeadline}>{t(item.headline)}</h3>
                  </div>
                </a>
              );
            })}
          </div>

          <div className={styles.spotlightDots}>
            {PORTFOLIO_ITEMS.map((item, i) => (
              <button
                key={item.title.en}
                type="button"
                className={`${styles.spotlightDot} ${i === activeIndex ? styles.spotlightDotActive : ""}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`${t(STRINGS.goTo)} ${t(item.title)}`}
              />
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={styles.portfolioTeaserFooter}>
          <a href="/portfolio" className={styles.arrowLinkText}>
            {t(STRINGS.viewAll)}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

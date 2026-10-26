"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  myWork: { en: "My work", es: "Mi trabajo" },
  title: { en: "A few things I've shipped.", es: "Algunas cosas que lancé." },
  viewAll: { en: "View all projects →", es: "Ver todos los proyectos →" },
  goTo: { en: "Go to", es: "Ir a" },
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
            {PORTFOLIO_ITEMS.map((item, i) => (
              <a
                key={item.title.en}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                href="/portfolio"
                className={styles.spotlightCard}
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), ${item.color}`,
                }}
              >
                <span className={styles.spotlightBadgeRing} />
                <div>
                  <p className={styles.spotlightEyebrow}>{t(item.title)}</p>
                  <h3 className={styles.spotlightHeadline}>{t(item.headline)}</h3>
                </div>
              </a>
            ))}
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

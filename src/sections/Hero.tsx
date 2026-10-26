"use client";

import ArrowLink from "@/components/ArrowLink";
import FlowField from "@/components/FlowField";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  badge: { en: "Digital Products & Brand Identity", es: "Productos Digitales e Identidad de Marca" },
  titleLine1: { en: "I build products", es: "Construyo productos" },
  titleAccent: { en: "that mean something.", es: "que significan algo." },
  getInTouch: { en: "Get in touch", es: "Ponte en contacto" },
  seeHowIWork: { en: "See how I work", es: "Ver cómo trabajo" },
  deviceAlt: { en: "Sweet Baby Name, a name match screen", es: "Sweet Baby Name, una pantalla de match de nombre" },
};

export default function Hero() {
  const t = useT();

  return (
    <section className={styles.heroSection}>
      <FlowField threads={320} speed={2} noiseScale={10} opacity={40} />

      <div className={styles.heroContentWrap}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            <span className={styles.heroBadgeText}>{t(STRINGS.badge)}</span>
          </div>

          <h1 className={styles.heroTitle}>
            {t(STRINGS.titleLine1)}
            <br />
            <span className={styles.heroTitleAccent}>{t(STRINGS.titleAccent)}</span>
          </h1>

          <div className={styles.heroCtas}>
            <ArrowLink href="#contact" variant="primary">
              {t(STRINGS.getInTouch)}
            </ArrowLink>
            <ArrowLink href="#how" variant="ghost">
              {t(STRINGS.seeHowIWork)}
            </ArrowLink>
          </div>

          <div className={styles.heroDeviceWrap}>
            <div className={styles.heroDevice}>
              <div className={styles.heroDeviceNotch} />
              <div className={styles.heroDeviceScreen}>
                <video
                  src="/images/celebration-match.mp4"
                  aria-label={t(STRINGS.deviceAlt)}
                  className={styles.heroDeviceImg}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

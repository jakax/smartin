"use client";

import Image from "next/image";
import ArrowLink from "@/components/ArrowLink";
import FlowField from "@/components/FlowField";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  titleLine1: { en: "I build products", es: "Construyo productos" },
  titleAccent: { en: "that mean something.", es: "que significan algo." },
  getInTouch: { en: "Get in touch", es: "Ponte en contacto" },
  seeHowIWork: { en: "See how I work", es: "Ver cómo trabajo" },
};

type MarqueeItem = {
  key: string;
  name: string;
  render: () => React.ReactNode;
};

const MARQUEE_ITEMS: MarqueeItem[] = [
  {
    key: "quickcrew",
    name: "QuickCrew",
    render: () => (
      <Image
        src="/images/quickcrew-logo-completo.png"
        alt=""
        width={507}
        height={93}
        className={styles.heroMarqueeLogoWide}
      />
    ),
  },
  {
    key: "hidden-sense",
    name: "Hidden Sense",
    render: () => <span className={styles.heroMarqueeNameHiddenSense}>Hidden Sense</span>,
  },
  {
    key: "viviana",
    name: "Viviana Rodríguez",
    render: () => <span className={styles.heroMarqueeNameViviana}>Viviana Rodríguez</span>,
  },
  {
    key: "sbn",
    name: "Sweet Baby Name",
    render: () => (
      <>
        <Image
          src="/images/sweet-baby-name/sbn-6.png"
          alt=""
          width={40}
          height={40}
          className={styles.heroMarqueeLogoSbn}
        />
        <span className={styles.heroMarqueeNameSbn}>Sweet Baby Name</span>
      </>
    ),
  },
];

export default function Hero() {
  const t = useT();

  return (
    <section className={styles.heroSection}>
      <FlowField threads={320} speed={2} noiseScale={10} opacity={40} />

      <div className={styles.heroContentWrap}>
        <div className={styles.heroInner}>
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

          <div className={styles.heroMarqueeWrap}>
            <div className={styles.heroMarqueeTrack}>
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <div key={`${item.key}-${i}`} className={styles.heroMarqueeGroup}>
                  <a href="#portfolio" className={styles.heroMarqueeItem} aria-label={item.name}>
                    {item.render()}
                  </a>
                  <span className={styles.heroMarqueeDivider} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

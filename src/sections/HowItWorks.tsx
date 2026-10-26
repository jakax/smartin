"use client";

import { PHASES } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  label: { en: "How I work", es: "Cómo trabajo" },
};

export default function HowItWorks() {
  const t = useT();

  return (
    <section id="how" className={styles.howSection}>
      <FadeIn>
        <div className={styles.howLabelWrapper}>
          <p className={styles.sectionLabel}>{t(STRINGS.label)}</p>
        </div>
      </FadeIn>

      <div className={styles.phasesGrid}>
        {PHASES.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <div className={styles.phaseCard}>
              <div className={styles.phaseCardHeader}>
                <span className={styles.phaseNum}>{p.num}</span>
                <span className={styles.phaseTag}>{t(p.tag)}</span>
              </div>
              <h3 className={styles.phaseTitle}>{t(p.title)}</h3>
              <p className={styles.phaseDesc}>{t(p.desc)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

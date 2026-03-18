import { PHASES } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";

export default function HowItWorks() {
  return (
    <section id="how" className={styles.howSection}>
      <FadeIn>
        <div className={styles.howLabelWrapper}>
          <p className={styles.sectionLabel}>How SmartIn works</p>
        </div>
      </FadeIn>

      <div className={styles.phasesGrid}>
        {PHASES.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <div className={styles.phaseCard}>
              <div className={styles.phaseCardHeader}>
                <span className={styles.phaseNum}>{p.num}</span>
                <span className={styles.phaseTag}>{p.tag}</span>
              </div>
              <h3 className={styles.phaseTitle}>{p.title}</h3>
              <p className={styles.phaseDesc}>{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
import { VALUE_STATEMENTS } from "@/constants/content";
import ArrowLink from "@/components/ArrowLink";
import styles from "@/styles/landing.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          <span className={styles.heroBadgeText}>
            Digital Products & Brand Identity
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          We build products<br />
          <span className={styles.heroTitleAccent}>that mean something.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          We take the time to understand who you are and what you need to communicate — then we build the product that says it best.
        </p>

        <div className={styles.heroCtas}>
          <ArrowLink href="#contact" variant="primary">
            Let&apos;s talk about your project
          </ArrowLink>
          <ArrowLink href="#how" variant="ghost">
            See how it works
          </ArrowLink>
        </div>

        <div className={styles.valuesGrid}>
          {VALUE_STATEMENTS.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueDesc}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
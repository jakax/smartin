import { METRICS } from "@/constants/content";
import ArrowLink from "@/components/ArrowLink";
import styles from "@/styles/landing.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          <span className={styles.heroBadgeText}>
            SaaS Product & Technical Optimization
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          Clarity before<br />
          <span className={styles.heroTitleAccent}>growth.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          We bring technical clarity and structural control to non-technical SaaS founders — so you stop guessing and start executing the right priorities.
        </p>

        <div className={styles.heroCtas}>
          <ArrowLink href="#contact" variant="primary">
            Request a Structural Review
          </ArrowLink>
          <ArrowLink href="#how" variant="ghost">
            See how it works
          </ArrowLink>
        </div>

        <div className={styles.metricsGrid}>
          {METRICS.map((m) => (
            <div key={m.label} className={styles.metricCard}>
              <div className={styles.metricValue}>
                {m.value}
                <span className={styles.metricUnit}>{m.unit}</span>
              </div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
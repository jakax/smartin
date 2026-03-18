import { DELIVERABLES, WHO } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        <FadeIn>
          <div>
            <p className={styles.sectionLabel}>The 5-day Structural Review</p>
            <h2 className={styles.servicesTitle}>
              A fixed-scope audit designed for founders who want clarity, not noise.
            </h2>
            <p className={styles.servicesBody}>
              You leave with a clear picture of your biggest blockers, a priority order your team can act on, and a roadmap that does not require re-building everything.
            </p>
            <ArrowLink href="#contact" variant="primary">
              Request yours
            </ArrowLink>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <div style={{ marginBottom: "0" }}>
              <p className={styles.deliverablesLabel}>What you receive</p>
              <div>
                {DELIVERABLES.map((d, i) => (
                  <div key={i} className={styles.deliverableItem}>
                    <span className={styles.deliverableArrow}>→</span>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.whoBox}>
              <p className={styles.deliverablesLabel}>Who it is for</p>
              {WHO.map((w, i) => (
                <div key={i} className={styles.whoRow}>
                  <span className={styles.whoDot} />
                  <span className={styles.whoText}>{w}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
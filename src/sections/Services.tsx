import { PROCESS_STEPS, WORKS_WITH } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        <FadeIn>
          <div>
            <p className={styles.sectionLabel}>How we work</p>
            <h2 className={styles.servicesTitle}>
              A process built around understanding, not assumptions.
            </h2>
            <p className={styles.servicesBody}>
              Every project is different. We don&apos;t start with a template — we start with questions. What do you need to communicate, to whom, and why. The product comes after.
            </p>
            <ArrowLink href="#contact" variant="primary">
              Start a conversation
            </ArrowLink>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <div style={{ marginBottom: "0" }}>
              <p className={styles.deliverablesLabel}>What we do together</p>
              <div>
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className={styles.deliverableItem}>
                    <span className={styles.deliverableArrow}>→</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.whoBox}>
              <p className={styles.deliverablesLabel}>Who we work with</p>
              {WORKS_WITH.map((w, i) => (
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
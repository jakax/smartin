"use client";

import { PROCESS_STEPS, WORKS_WITH } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";
import { useT } from "@/lib/locale";

const STRINGS = {
  myProcess: { en: "My process", es: "Mi proceso" },
  title: {
    en: "A process built around understanding, not assumptions.",
    es: "Un proceso construido sobre la comprensión, no sobre suposiciones.",
  },
  body: {
    en: "Every project is different. I don't start with a template — I start with questions. What needs to be communicated, to whom, and why. The product comes after.",
    es: "Cada proyecto es distinto. No empiezo con una plantilla — empiezo con preguntas. Qué hay que comunicar, a quién, y por qué. El producto viene después.",
  },
  sayHello: { en: "Say hello", es: "Saludar" },
  whatIDo: { en: "What I do", es: "Qué hago" },
  whoIWorkWith: { en: "Who I work with", es: "Con quién trabajo" },
};

export default function Services() {
  const t = useT();

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        <FadeIn>
          <div>
            <p className={styles.sectionLabel}>{t(STRINGS.myProcess)}</p>
            <h2 className={styles.servicesTitle}>{t(STRINGS.title)}</h2>
            <p className={styles.servicesBody}>{t(STRINGS.body)}</p>
            <ArrowLink href="#contact" variant="primary">
              {t(STRINGS.sayHello)}
            </ArrowLink>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <div style={{ marginBottom: "0" }}>
              <p className={styles.deliverablesLabel}>{t(STRINGS.whatIDo)}</p>
              <div>
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className={styles.deliverableItem}>
                    <span className={styles.deliverableArrow}>→</span>
                    {t(step)}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.whoBox}>
              <p className={styles.deliverablesLabel}>{t(STRINGS.whoIWorkWith)}</p>
              {WORKS_WITH.map((w, i) => (
                <div key={i} className={styles.whoRow}>
                  <span className={styles.whoDot} />
                  <span className={styles.whoText}>{t(w)}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

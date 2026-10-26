"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";
import { useT } from "@/lib/locale";

const STRINGS = {
  title: { en: "Common questions, answered in depth.", es: "Preguntas frecuentes, respondidas a fondo." },
  subtitle: {
    en: "A few of the most common questions. See all answers on the FAQ page.",
    es: "Algunas de las preguntas más comunes. Mirá todas las respuestas en la página de preguntas.",
  },
  viewAll: { en: "View all", es: "Ver las" },
  questions: { en: "questions", es: "preguntas" },
};

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const previewItems = FAQ_ITEMS.slice(0, 3);
  const t = useT();

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqGrid}>
        <FadeIn>
          <div className={styles.faqStickyCol}>
            <p className={styles.sectionLabel}>FAQ</p>
            <h2 className={styles.faqMainTitle}>{t(STRINGS.title)}</h2>
            <p className={styles.faqSubtitle}>{t(STRINGS.subtitle)}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            {previewItems.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{t(item.q)}</span>
                  <span className={`${styles.faqIcon} ${openIndex === i ? styles.faqIconOpen : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={styles.faqAnswer}
                  style={{
                    maxHeight: openIndex === i ? "400px" : "0",
                    paddingBottom: openIndex === i ? "24px" : "0",
                  }}
                >
                  {t(item.a)}
                </div>
              </div>
            ))}

            <div className={styles.faqFooter}>
              <ArrowLink href="/faq" variant="ghost">
                {t(STRINGS.viewAll)} {FAQ_ITEMS.length} {t(STRINGS.questions)}
              </ArrowLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

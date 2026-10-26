"use client";

import { TESTIMONIALS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  label: { en: "Reviews", es: "Reseñas" },
  title: {
    en: "This is what people who trusted me have to say.",
    es: "Esta es la opinión de la gente que confió en mí.",
  },
};

export default function Testimonials() {
  const t = useT();

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t(STRINGS.label)}</p>
        <h2 className={styles.testimonialsTitle}>{t(STRINGS.title)}</h2>
      </FadeIn>

      <div className={styles.testimonialsGrid}>
        {TESTIMONIALS.map((item, i) => (
          <FadeIn key={item.author} delay={i * 0.08}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>{"★".repeat(item.rating)}</div>
              <p className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</p>
              <div className={styles.testimonialFooter}>
                <span className={styles.testimonialAvatar}>{item.author.charAt(0).toUpperCase()}</span>
                <div>
                  <div className={styles.testimonialAuthor}>{item.author}</div>
                  <div className={styles.testimonialSource}>{t(item.source)}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

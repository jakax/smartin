"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/constants/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";
import { useT } from "@/lib/locale";

const STRINGS = {
  backToHome: { en: "Back to home", es: "Volver al inicio" },
  titleLine1: { en: "Every question,", es: "Toda pregunta," },
  titleAccent: { en: "answered.", es: "respondida." },
  subtitle: {
    en: "Everything you need to know about how I work. Still have questions? Send me a message.",
    es: "Todo lo que necesitás saber sobre cómo trabajo. ¿Todavía tenés preguntas? Enviame un mensaje.",
  },
  stillHaveQuestions: { en: "Still have questions?", es: "¿Todavía tenés preguntas?" },
  ctaTitle: { en: "Send me a message and I will answer directly.", es: "Enviame un mensaje y te respondo directamente." },
  contactMe: { en: "Contact me", es: "Contactame" },
};

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useT();

  return (
    <div className={styles.root}>
      <div className={styles.ambientBg}>
        <div className={styles.ambientBlob1} />
        <div className={styles.ambientBlob2} />
      </div>

      <Nav />

      <div className={styles.pageWrapper}>
        <section className={styles.faqPageSection}>
          <FadeIn>
            <div className={styles.faqPageHeader}>
              <ArrowLink href="/" direction="left" className={styles.faqBackLink}>
                {t(STRINGS.backToHome)}
              </ArrowLink>
              <p className={styles.sectionLabel}>FAQ</p>
              <h1 className={styles.faqPageTitle}>
                {t(STRINGS.titleLine1)}
                <br />
                <span className={styles.heroTitleAccent}>{t(STRINGS.titleAccent)}</span>
              </h1>
              <p className={styles.faqPageSubtitle}>{t(STRINGS.subtitle)}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={styles.faqPageList}>
              {FAQ_ITEMS.map((item, i) => (
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
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.faqPageCta}>
              <p className={styles.sectionLabel}>{t(STRINGS.stillHaveQuestions)}</p>
              <h2 className={styles.faqCtaTitle}>{t(STRINGS.ctaTitle)}</h2>
              <Link href="/#contact" className={styles.btnPrimary}>
                {t(STRINGS.contactMe)}
              </Link>
            </div>
          </FadeIn>
        </section>

        <Footer />
      </div>
    </div>
  );
}

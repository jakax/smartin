"use client";

import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  myWork: { en: "My work", es: "Mi trabajo" },
  titleLine1: { en: "Built with purpose,", es: "Construido con propósito," },
  titleAccent: { en: "delivered with care.", es: "entregado con cuidado." },
  subtitle: {
    en: "Every project starts with a conversation and ends with something that feels right. Here's a look at what I've shipped.",
    es: "Cada proyecto empieza con una conversación y termina con algo que se siente bien. Esto es lo que lancé.",
  },
};

export default function PortfolioPageHeader() {
  const t = useT();

  return (
    <section className={styles.portfolioPageHeader}>
      <p className={styles.sectionLabel}>{t(STRINGS.myWork)}</p>
      <h1 className={styles.faqPageTitle}>
        {t(STRINGS.titleLine1)}
        <br />
        <span className={styles.heroTitleAccent}>{t(STRINGS.titleAccent)}</span>
      </h1>
      <p className={styles.faqPageSubtitle}>{t(STRINGS.subtitle)}</p>
    </section>
  );
}

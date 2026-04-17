"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const previewItems = FAQ_ITEMS.slice(0, 3);

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqGrid}>
        <FadeIn>
          <div className={styles.faqStickyCol}>
            <p className={styles.sectionLabel}>FAQ</p>
            <h2 className={styles.faqMainTitle}>
              Common questions, answered in depth.
            </h2>
            <p className={styles.faqSubtitle}>
              A few of the most common questions. See all answers on the FAQ page.
            </p>
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
                  <span>{item.q}</span>
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
                  {item.a}
                </div>
              </div>
            ))}

            <div className={styles.faqFooter}>
              <ArrowLink href="/faq" variant="ghost">
                View all {FAQ_ITEMS.length} questions
              </ArrowLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
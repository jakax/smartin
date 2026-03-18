"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              If something is not covered here, send us a message and we will answer directly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            {FAQ_ITEMS.map((item, i) => (
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
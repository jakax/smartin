"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/constants/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import ArrowLink from "@/components/ArrowLink";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                Back to home
              </ArrowLink>
              <p className={styles.sectionLabel}>FAQ</p>
              <h1 className={styles.faqPageTitle}>
                Every question,<br />
                <span className={styles.heroTitleAccent}>answered.</span>
              </h1>
              <p className={styles.faqPageSubtitle}>
                Everything you need to know about how SmartIn works.
                Still have questions? Send us a message.
              </p>
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

          <FadeIn delay={0.2}>
            <div className={styles.faqPageCta}>
              <p className={styles.sectionLabel}>Still have questions?</p>
              <h2 className={styles.faqCtaTitle}>
                Send us a message and we will answer directly.
              </h2>
              <Link href="/#contact" className={styles.btnPrimary}>
                Contact us
              </Link>
            </div>
          </FadeIn>
        </section>

        <Footer />
      </div>
    </div>
  );
}
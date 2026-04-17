import { PORTFOLIO_ITEMS } from "@/constants/content";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";

export default function PortfolioTeaser() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <FadeIn>
        <div className={styles.portfolioHeader}>
          <p className={styles.sectionLabel}>Our work</p>
          <h2 className={styles.portfolioTitle}>
            A few things we&apos;ve shipped.
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className={styles.portfolioGrid}>
          {PORTFOLIO_ITEMS.map((item) => (
            <a
              key={item.title}
              href="/portfolio"
              className={styles.portfolioTeaserCard}
            >
              <span className={styles.portfolioLabel}>{item.label}</span>
              <h3 className={styles.portfolioItemTitle}>{item.title}</h3>
              <p className={styles.portfolioDesc}>{item.desc}</p>
              <div className={styles.portfolioTags}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.portfolioTechTag}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={styles.portfolioTeaserFooter}>
          <a href="/portfolio" className={styles.arrowLinkText}>
            View all projects →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Portfolio from "@/sections/Portfolio";
import styles from "@/styles/landing.module.css";

export default function PortfolioPage() {
  return (
    <div className={styles.root}>
      <div className={styles.ambientBg}>
        <div className={styles.ambientBlob1} />
        <div className={styles.ambientBlob2} />
      </div>
      <Nav />
      <div className={styles.pageWrapper}>
        <section className={styles.portfolioPageHeader}>
          <p className={styles.sectionLabel}>Our work</p>
          <h1 className={styles.faqPageTitle}>
            Built with purpose,<br />
            <span className={styles.heroTitleAccent}>delivered with care.</span>
          </h1>
          <p className={styles.faqPageSubtitle}>
            Every project starts with a conversation and ends with something that feels right. Here&apos;s a look at what we&apos;ve shipped.
          </p>
        </section>
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Services from "@/sections/Services";
import PortfolioTeaser from "@/sections/PortfolioTeaser";
import FaqPreview from "@/sections/FaqPreview";
import Contact from "@/sections/Contact";
import styles from "@/styles/landing.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.ambientBg}>
        <div className={styles.ambientBlob1} />
        <div className={styles.ambientBlob2} />
      </div>

      <Nav />

      <div className={styles.pageWrapper}>
        <Hero />

        <div className={styles.glowLine} />

        <div className={styles.glowLine} />

        <HowItWorks />

        <div className={styles.glowLine} />

        <Services />

        <div className={styles.glowLine} />

        <PortfolioTeaser />

        <div className={styles.glowLine} />

        <FaqPreview />

        <div className={styles.glowLine} />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Portfolio from "@/sections/Portfolio";
import PortfolioPageHeader from "@/sections/PortfolioPageHeader";
import styles from "@/styles/landing.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The apps and websites I have designed and built.",
};

export default function PortfolioPage() {
  return (
    <div className={styles.root}>
      <div className={styles.ambientBg}>
        <div className={styles.ambientBlob1} />
        <div className={styles.ambientBlob2} />
      </div>
      <Nav />
      <div className={styles.pageWrapper}>
        <PortfolioPageHeader />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
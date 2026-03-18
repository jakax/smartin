import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import FaqPreview from "@/sections/FaqPreview";
import Contact from "@/sections/Contact";
import FadeIn from "@/components/FadeIn";
import DimText from "@/components/DimText";
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

        {/* Problem */}
        <section className={styles.problemSection}>
          <FadeIn>
            <div style={{ maxWidth: "660px" }}>
              <p className={styles.sectionLabel}>Why SmartIn</p>
              <h2 className={styles.problemTitle}>
                Early-stage SaaS rarely stalls from lack of effort.
              </h2>
              <p className={styles.problemBody}>
                <DimText
                  segments={[
                    { text: "It stalls when ", bright: false },
                    { text: "priorities become noisy,", bright: true },
                    { text: " onboarding becomes unclear, and ", bright: false },
                    { text: "technical decisions compound", bright: true },
                    { text: " without a structural plan. SmartIn restores control with ", bright: false },
                    { text: "a focused audit and a roadmap", bright: true },
                    { text: " you can actually execute.", bright: false },
                  ]}
                />
              </p>
            </div>
          </FadeIn>
        </section>

        <div className={styles.glowLine} />

        <HowItWorks />

        <div className={styles.glowLine} />

        <Services />

        <div className={styles.glowLine} />

        <Portfolio />

        <div className={styles.glowLine} />

        <FaqPreview />

        <div className={styles.glowLine} />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
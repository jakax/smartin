import { NAV_LINKS } from "@/constants/content";
import styles from "@/styles/landing.module.css";
import IsoTipo from "@/components/IsoTipo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Static glow centered */}
      <div className={styles.footerGlow} />

      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <IsoTipo width={50} />
        </div>
        <div className={styles.footerLinks}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className={styles.navLink} style={{ fontSize: "13px" }}>
              {l.label}
            </a>
          ))}
        </div>
        <p className={styles.footerCopy}>© 2026 SmartIn. All rights reserved.</p>
      </div>
    </footer>
  );
}
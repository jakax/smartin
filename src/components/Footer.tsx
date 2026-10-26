"use client";

import { NAV_LINKS } from "@/constants/content";
import styles from "@/styles/landing.module.css";
import IsoTipo from "@/components/IsoTipo";
import { useT } from "@/lib/locale";

const STRINGS = {
  copy: { en: "© 2026 SmartIn. All rights reserved.", es: "© 2026 SmartIn. Todos los derechos reservados." },
};

export default function Footer() {
  const t = useT();

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
            <a key={l.label.en} href={l.href} className={styles.navLink} style={{ fontSize: "13px" }}>
              {t(l.label)}
            </a>
          ))}
        </div>
        <p className={styles.footerCopy}>{t(STRINGS.copy)}</p>
      </div>
    </footer>
  );
}

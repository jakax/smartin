"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/content";
import styles from "@/styles/landing.module.css";
import Logo from "@/components/Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [glowVisible, setGlowVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    setMenuOpen(false);
  };

  const getHref = (href: string) => isHome ? href : `/${href}`;

  return (
    <>
      <div
        className={styles.navGlowLayer}
        style={{
          opacity: glowVisible ? 1 : 0,
          background: `radial-gradient(500px circle at ${mouseX}px 32px, rgba(24,183,167,0.35) 0%, rgba(61,147,161,0.2) 35%, transparent 65%)`,
        }}
      />

      <nav
        ref={navRef}
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setGlowVisible(true)}
        onMouseLeave={() => setGlowVisible(false)}
      >
        <button onClick={handleLogoClick} className={styles.navLogoBtn} aria-label="Ir al inicio">
          <Logo width={120} />
        </button>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={getHref(l.href)} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={getHref("#contact")}
          className={`${styles.btnPrimary} ${styles.navCta}`}
          style={{ padding: "10px 22px", fontSize: "13px" }}
        >
          Start a conversation
        </a>

        <button
          className={styles.navMobileBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={handleLogoClick} className={styles.mobileMenuLogo}>
            <Logo width={140} />
          </button>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={getHref(l.href)}
              className={styles.mobileMenuLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={getHref("#contact")}
            className={styles.btnPrimary}
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation
          </a>
        </div>
      )}
    </>
  );
}
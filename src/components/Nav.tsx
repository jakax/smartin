"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants/content";
import styles from "@/styles/landing.module.css";
import Logo from "@/components/Logo";
import { useTheme } from "@/lib/theme";
import { useLocale, useT } from "@/lib/locale";

const STRINGS = {
  startConversation: { en: "Start a conversation", es: "Iniciar una conversación" },
  goHome: { en: "Go to home", es: "Ir al inicio" },
  toggleMenu: { en: "Toggle menu", es: "Abrir/cerrar menú" },
  toggleTheme: { en: "Switch to dark mode", es: "Cambiar a modo oscuro" },
  toggleThemeToLight: { en: "Switch to light mode", es: "Cambiar a modo claro" },
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [glowVisible, setGlowVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const t = useT();

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
      router.push("/");
    }
    setMenuOpen(false);
  };

  const getHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <>
      <div
        className={styles.navGlowLayer}
        style={{
          opacity: glowVisible ? 1 : 0,
          background: `radial-gradient(500px circle at ${mouseX}px 32px, rgba(var(--accent-rgb), 0.35) 0%, rgba(var(--accent-rgb), 0.2) 35%, transparent 65%)`,
        }}
      />

      <nav
        ref={navRef}
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setGlowVisible(true)}
        onMouseLeave={() => setGlowVisible(false)}
      >
        <button onClick={handleLogoClick} className={styles.navLogoBtn} aria-label={t(STRINGS.goHome)}>
          <Logo width={120} />
        </button>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <a key={l.label.en} href={getHref(l.href)} className={styles.navLink}>
              {t(l.label)}
            </a>
          ))}
        </div>

        <div className={styles.navToggles}>
          <button
            type="button"
            className={styles.navIconToggle}
            onClick={toggleTheme}
            aria-label={t(theme === "light" ? STRINGS.toggleTheme : STRINGS.toggleThemeToLight)}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            type="button"
            className={styles.navLocaleToggle}
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label="Toggle language"
          >
            <span className={locale === "en" ? styles.navLocaleActive : ""}>EN</span>
            <span className={styles.navLocaleSep}>/</span>
            <span className={locale === "es" ? styles.navLocaleActive : ""}>ES</span>
          </button>
        </div>

        <a
          href={getHref("#contact")}
          className={`${styles.btnPrimary} ${styles.navCta}`}
          style={{ padding: "10px 22px", fontSize: "13px" }}
        >
          {t(STRINGS.startConversation)}
        </a>

        <button
          className={styles.navMobileBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t(STRINGS.toggleMenu)}
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
              key={l.label.en}
              href={getHref(l.href)}
              className={styles.mobileMenuLink}
              onClick={() => setMenuOpen(false)}
            >
              {t(l.label)}
            </a>
          ))}

          <div className={styles.navToggles} style={{ margin: "8px 0" }}>
            <button
              type="button"
              className={styles.navIconToggle}
              onClick={toggleTheme}
              aria-label={t(theme === "light" ? STRINGS.toggleTheme : STRINGS.toggleThemeToLight)}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              type="button"
              className={styles.navLocaleToggle}
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              aria-label="Toggle language"
            >
              <span className={locale === "en" ? styles.navLocaleActive : ""}>EN</span>
              <span className={styles.navLocaleSep}>/</span>
              <span className={locale === "es" ? styles.navLocaleActive : ""}>ES</span>
            </button>
          </div>

          <a
            href={getHref("#contact")}
            className={styles.btnPrimary}
            onClick={() => setMenuOpen(false)}
          >
            {t(STRINGS.startConversation)}
          </a>
        </div>
      )}
    </>
  );
}

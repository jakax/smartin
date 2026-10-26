"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArrowLink from "@/components/ArrowLink";
import { ABOUT_INTRO, EXPERIENCE, SKILL_GROUPS, EDUCATION } from "@/constants/content";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  aboutMe: { en: "About me", es: "Sobre mí" },
  experience: { en: "Experience", es: "Experiencia" },
  activeNow: { en: "Active now", es: "Activo ahora" },
  skills: { en: "Skills", es: "Habilidades" },
  education: { en: "Education", es: "Educación" },
  wantToSeeWork: { en: "Want to see the work?", es: "¿Querés ver el trabajo?" },
  ctaTitle: {
    en: "Check out what I've shipped, or send me a message.",
    es: "Mirá lo que lancé, o enviame un mensaje.",
  },
  viewPortfolio: { en: "View portfolio", es: "Ver portfolio" },
  contactMe: { en: "Contact me", es: "Contactame" },
};

export default function AboutPage() {
  const t = useT();

  return (
    <div className={styles.root}>
      <div className={styles.ambientBg}>
        <div className={styles.ambientBlob1} />
        <div className={styles.ambientBlob2} />
      </div>

      <Nav />

      <div className={styles.pageWrapper}>
        <section className={styles.aboutPageSection}>
          <div className={styles.aboutHeroGrid}>
            <div className={styles.aboutEditorialPhoto}>
              <Image
                src={ABOUT_INTRO.photo}
                alt={ABOUT_INTRO.name}
                fill
                sizes="(max-width: 640px) 100vw, 340px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className={styles.aboutIntroCol}>
              <p className={styles.sectionLabel}>{t(STRINGS.aboutMe)}</p>
              <h1 className={styles.aboutName}>{ABOUT_INTRO.name}</h1>
              <p className={styles.aboutRoleSubtitle}>{t(ABOUT_INTRO.title)}</p>
              {ABOUT_INTRO.bio.map((p, i) => (
                <p key={i} className={styles.aboutBioParagraph}>
                  {t(p)}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.aboutTimeline}>
            <p className={styles.sectionLabel}>{t(STRINGS.experience)}</p>
            {EXPERIENCE.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${item.active ? styles.timelineDotActive : ""}`} />
                <div className={styles.timelineBody}>
                  <h3 className={styles.timelineRole}>{t(item.role)}</h3>
                  <p className={styles.timelineCompany}>
                    {item.company}
                    {item.location && <span className={styles.timelineLocation}> · {t(item.location)}</span>}
                    {item.active && <span className={styles.timelineActiveLabel}>{t(STRINGS.activeNow)}</span>}
                  </p>
                  <p className={styles.timelineDesc}>{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.aboutSkills}>
            <p className={styles.sectionLabel}>{t(STRINGS.skills)}</p>
            <div className={styles.aboutSkillsGrid}>
              {SKILL_GROUPS.map((group) => (
                <div key={group.title.en} className={styles.skillGroupCard}>
                  <h4 className={styles.skillGroupTitle}>{t(group.title)}</h4>
                  <div className={styles.portfolioTags}>
                    {group.items.map((item) => (
                      <span key={item} className={styles.portfolioTechTag}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutEducation}>
            <p className={styles.sectionLabel}>{t(STRINGS.education)}</p>
            {EDUCATION.map((item) => (
              <div key={item.degree.en} className={styles.educationItem}>
                <span className={styles.educationDegree}>{t(item.degree)}</span>
                <span className={styles.educationSchool}>{item.school}</span>
              </div>
            ))}
          </div>

          <div className={styles.faqPageCta}>
            <p className={styles.sectionLabel}>{t(STRINGS.wantToSeeWork)}</p>
            <h2 className={styles.faqCtaTitle}>{t(STRINGS.ctaTitle)}</h2>
            <div className={styles.aboutCtaButtons}>
              <ArrowLink href="/portfolio" variant="primary">
                {t(STRINGS.viewPortfolio)}
              </ArrowLink>
              <ArrowLink href="/#contact" variant="ghost">
                {t(STRINGS.contactMe)}
              </ArrowLink>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";
import { useT } from "@/lib/locale";

const STRINGS = {
  getInTouch: { en: "Get in touch", es: "Ponte en contacto" },
  title: { en: "Tell me about your project", es: "Contame sobre tu proyecto" },
  subtitle: {
    en: "Whether it's a project, an opportunity, or just a hello — write me a few lines and I'll get back to you soon.",
    es: "Ya sea un proyecto, una oportunidad, o solo un saludo — escribime unas líneas y te respondo pronto.",
  },
  messageReceived: { en: "Message received", es: "Mensaje recibido" },
  thanksBody: { en: "Thanks for reaching out. I'll get back to you soon.", es: "Gracias por escribirme. Te voy a responder pronto." },
  name: { en: "Name", es: "Nombre" },
  yourName: { en: "Your name", es: "Tu nombre" },
  email: { en: "Email", es: "Email" },
  projectLabel: { en: "Tell me about your project", es: "Contame sobre tu proyecto" },
  projectPlaceholder: {
    en: "Who you are, what you're building, and what you're looking for...",
    es: "Quién eres, qué estás construyendo, y qué estás buscando...",
  },
  error: {
    en: "Something went wrong. Please try again or reach out directly.",
    es: "Algo salió mal. Intentá de nuevo o escribime directamente.",
  },
  sending: { en: "Sending...", es: "Enviando..." },
  sendMessage: { en: "Send message", es: "Enviar mensaje" },
  noCommitment: { en: "No commitment required.", es: "Sin compromiso." },
};

export default function Contact() {
  const t = useT();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    context: "",
    website: "", // honeypot: real users never see or fill this
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <FadeIn>
        <div className={styles.contactHeader}>
          <p className={styles.sectionLabel}>{t(STRINGS.getInTouch)}</p>
          <h2 className={styles.contactTitle}>{t(STRINGS.title)}</h2>
          <p className={styles.contactSubtitle}>{t(STRINGS.subtitle)}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>{t(STRINGS.messageReceived)}</h3>
            <p className={styles.successBody}>{t(STRINGS.thanksBody)}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>{t(STRINGS.name)}</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder={t(STRINGS.yourName)}
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>{t(STRINGS.email)}</label>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", opacity: 0 }}
              value={formData.website}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />

            <div className={styles.formField}>
              <label className={styles.formLabel}>{t(STRINGS.projectLabel)}</label>
              <textarea
                className={styles.formInput}
                rows={5}
                placeholder={t(STRINGS.projectPlaceholder)}
                value={formData.context}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, context: e.target.value })
                }
                required
              />
            </div>

            {error && <p className={styles.formError}>{t(STRINGS.error)}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`${styles.btnPrimary} ${styles.submitBtn}`}
            >
              {loading ? t(STRINGS.sending) : t(STRINGS.sendMessage)}
            </button>

            <p className={styles.formNote}>{t(STRINGS.noCommitment)}</p>
          </form>
        )}
      </FadeIn>
    </section>
  );
}

"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    context: "",
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
          <p className={styles.sectionLabel}>Let&apos;s talk</p>
          <h2 className={styles.contactTitle}>Tell us about your project</h2>
          <p className={styles.contactSubtitle}>
            Share a bit about who you are and what you&apos;re building. We&apos;ll be in touch soon.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Message received</h3>
            <p className={styles.successBody}>
              Thanks for reaching out. We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Name</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Email</label>
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

            <div className={styles.formField}>
              <label className={styles.formLabel}>Tell us about your project</label>
              <textarea
                className={styles.formInput}
                rows={5}
                placeholder="Who you are, what you're building, and what you're looking for..."
                value={formData.context}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, context: e.target.value })
                }
                required
              />
            </div>

            {error && (
              <p className={styles.formError}>
                Something went wrong. Please try again or reach out directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`${styles.btnPrimary} ${styles.submitBtn}`}
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            <p className={styles.formNote}>
              No commitment required.
            </p>
          </form>
        )}
      </FadeIn>
    </section>
  );
}
"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import styles from "@/styles/landing.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    context: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <FadeIn>
        <div className={styles.contactHeader}>
          <p className={styles.sectionLabel}>Get started</p>
          <h2 className={styles.contactTitle}>Request a Structural Review</h2>
          <p className={styles.contactSubtitle}>
            Send your product link and a short context. We will confirm fit within 24 hours.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Request received</h3>
            <p className={styles.successBody}>
              We will review your product and get back to you within 24 hours to confirm fit.
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
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Product link</label>
              <input
                className={styles.formInput}
                type="url"
                placeholder="https://yourproduct.com"
                value={formData.product}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Context</label>
              <textarea
                className={styles.formInput}
                rows={4}
                placeholder="Where are you, what is not working, what are you trying to achieve..."
                value={formData.context}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, context: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              className={`${styles.btnPrimary} ${styles.submitBtn}`}
            >
              Send request
            </button>

            <p className={styles.formNote}>
              We confirm fit within 24 hours. No commitment required.
            </p>
          </form>
        )}
      </FadeIn>
    </section>
  );
}
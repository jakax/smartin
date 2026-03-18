"use client";

import useInView from "@/hooks/useInView";
import styles from "@/styles/landing.module.css";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${inView ? styles.fadeInVisible : ""} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
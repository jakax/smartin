import styles from "@/styles/landing.module.css";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "text";
  direction?: "right" | "left";
}

function ArrowSvg({ direction = "right" }: { direction?: "right" | "left" }) {
  const isLeft = direction === "left";

  return (
    <svg
      className={styles.arrowSvg}
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ order: isLeft ? -1 : 1 }}
    >
      {/* Shaft */}
      <line
        className={styles.arrowSvgShaft}
        x1={isLeft ? "12" : "0"}
        y1="5"
        x2={isLeft ? "6" : "6"}
        y2="5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{
          transformOrigin: isLeft ? "right center" : "left center",
        }}
      />
      {/* Arrowhead */}
      <polyline
        className={styles.arrowSvgHead}
        points={isLeft ? "6,1 1,5 6,9" : "6,1 11,5 6,9"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ArrowLink({
  href,
  children,
  className = "",
  variant = "text",
  direction = "right",
}: ArrowLinkProps) {
  const baseClass =
    variant === "primary"
      ? styles.btnPrimary
      : variant === "ghost"
      ? styles.btnGhost
      : styles.arrowLinkText;

  return (
    <a href={href} className={`${baseClass} ${styles.arrowLink} ${className}`}>
      <span className={styles.arrowLinkContent}>
        <ArrowSvg direction={direction} />
        <span>{children}</span>
      </span>
    </a>
  );
}
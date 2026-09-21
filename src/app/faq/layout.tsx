import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with SmartIn.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

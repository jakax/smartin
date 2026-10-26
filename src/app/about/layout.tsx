import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about me — my background, experience and skills.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale, LocalizedText } from "@/types";

const STORAGE_KEY = "smartin-locale";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
} | null>(null);

function detectInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
    if (navigator.language?.toLowerCase().startsWith("es")) return "es";
  } catch {}
  return "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Deliberately deferred: state starts at "en" to match the SSR markup, then
    // syncs to the stored/browser locale once localStorage and navigator exist.
    const initial = detectInitialLocale();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

/** Shorthand to read the current-locale string out of a LocalizedText. */
export function useT() {
  const { locale } = useLocale();
  return (text: LocalizedText) => text[locale];
}

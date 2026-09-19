/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { translations } from "./translations";

const STORAGE_KEY = "floodwatch-language";

const LanguageContext = createContext(null);

// Reads the saved language, falls back to English.
const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "en" || saved === "ta") {
      return saved;
    }
  } catch {
    // localStorage can be blocked — English is the safe default.
  }

  return "en";
};

export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }

    document.documentElement.lang = language;
    document.body.dataset.lang = language;
  }, [language]);

  const value = useMemo(() => {

    // t("dashboard.title") -> translated string
    const t = (path) => {
      const keys = path.split(".");

      let current = translations[language];
      let fallback = translations.en;

      for (const key of keys) {
        current = current?.[key];
        fallback = fallback?.[key];
      }

      return current ?? fallback ?? path;
    };

    // Risk levels come from the calculation as LOW/MODERATE/HIGH/CRITICAL
    const tRisk = (level) => t(`risk.${String(level).toUpperCase()}`);

    const tPipe = (pipeSize) =>
      t(`pipes.${String(pipeSize).toLowerCase()}`);

    return { language, setLanguage, t, tRisk, tPipe };

  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error(
      "useLanguage must be used inside <LanguageProvider>"
    );
  }

  return ctx;
}

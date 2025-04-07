"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { ReactNode } from "react";

interface LanguageContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("mn");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
    setIsLoading(false);
  }, []);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  if (isLoading) return null;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'ITA' | 'ENG';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ITA');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang) {
      setLanguage(storedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  if (!mounted) {
    // Evitiamo il rendering fino a che non leggiamo la lingua
    return null; 
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage: () => setLanguage(prev => (prev === 'ITA' ? 'ENG' : 'ITA')) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve essere usato all\'interno di LanguageProvider');
  }
  return context;
}

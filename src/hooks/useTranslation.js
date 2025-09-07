import { useLanguage } from '../contexts/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as esTranslations } from '../translations/es';
import { useState, useEffect } from 'react';

const translations = {
  en: enTranslations,
  es: esTranslations
};

export const useTranslation = () => {
  const { language } = useLanguage();
  const [displayLanguage, setDisplayLanguage] = useState(language);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    if (language !== displayLanguage) {
      setIsTransitioning(true);
      
      // Start fade out
      setTimeout(() => {
        setDisplayLanguage(language);
        // Start fade in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 200);
    }
  }, [language, displayLanguage]);
  
  const t = (key) => {
    return translations[displayLanguage]?.[key] || key;
  };
  
  return { t, language: displayLanguage, isTransitioning };
};

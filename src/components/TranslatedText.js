import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const TranslatedText = ({ children, className = '', style = {} }) => {
  const { isTransitioning } = useTranslation();
  
  return (
    <span 
      className={`translated-text ${isTransitioning ? 'fade-out' : 'fade-in'} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

export default TranslatedText;

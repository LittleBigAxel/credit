import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import TranslatedText from './TranslatedText';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const { toggleLanguage, language } = useLanguage();

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Credit Repair Pro
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <TranslatedText>{t('home')}</TranslatedText>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <TranslatedText>{t('about')}</TranslatedText>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                <TranslatedText>{t('services')}</TranslatedText>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <TranslatedText>{t('contact')}</TranslatedText>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">
                <TranslatedText>{t('faq')}</TranslatedText>
              </Link>
            </li>
            <li className="nav-item">
              <button 
                className="language-toggle"
                onClick={toggleLanguage}
                title={t('language')}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;


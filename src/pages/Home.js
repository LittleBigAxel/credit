import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import TranslatedText from '../components/TranslatedText';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <TranslatedText>{t('heroTitle')}</TranslatedText>
            </h1>
            <p className="hero-subtitle">
              <TranslatedText>{t('heroSubtitle')}</TranslatedText>
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                <TranslatedText>{t('freeConsultation')}</TranslatedText>
              </a>
              <a 
                href="https://www.identityiq.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <TranslatedText>{t('goToIdentityIQ')}</TranslatedText>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/api/placeholder/500/400" alt="Credit Repair Success" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2><TranslatedText>{t('howWeCanHelp')}</TranslatedText></h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3><TranslatedText>{t('improveCreditScore')}</TranslatedText></h3>
              <p><TranslatedText>{t('improveCreditScoreDesc')}</TranslatedText></p>
            </div>
            <div className="benefit-item">
              <h3><TranslatedText>{t('removeNegativeAccounts')}</TranslatedText></h3>
              <p><TranslatedText>{t('removeNegativeAccountsDesc')}</TranslatedText></p>
            </div>
            <div className="benefit-item">
              <h3><TranslatedText>{t('financialEducation')}</TranslatedText></h3>
              <p><TranslatedText>{t('financialEducationDesc')}</TranslatedText></p>
            </div>
            <div className="benefit-item">
              <h3><TranslatedText>{t('personalizedService')}</TranslatedText></h3>
              <p><TranslatedText>{t('personalizedServiceDesc')}</TranslatedText></p>
            </div>
            <div className="benefit-item">
              <h3><TranslatedText>{t('fastResults')}</TranslatedText></h3>
              <p><TranslatedText>{t('fastResultsDesc')}</TranslatedText></p>
            </div>
            <div className="benefit-item">
              <h3><TranslatedText>{t('expertSupport')}</TranslatedText></h3>
              <p><TranslatedText>{t('expertSupportDesc')}</TranslatedText></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


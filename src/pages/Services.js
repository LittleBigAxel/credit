import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services">
      <div className="container">
        <section className="services-hero">
          <h1>{t('ourServices')}</h1>
          <p>{t('servicesSubtitle')}</p>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h3>{t('creditReportAnalysis')}</h3>
            <p>
              {t('creditReportAnalysisDesc')}
            </p>
            <ul>
              <li>{t('detailedReview')}</li>
              <li>{t('errorIdentification')}</li>
              <li>{t('improvementStrategy')}</li>
              <li>{t('writtenAssessment')}</li>
            </ul>
            <a href="/contact" className="btn btn-primary">{t('getStarted')}</a>
          </div>

          <div className="service-card">
            <h3>{t('disputeServices')}</h3>
            <p>
              {t('disputeServicesDesc')}
            </p>
            <ul>
              <li>{t('professionalLetters')}</li>
              <li>{t('bureauCorrespondence')}</li>
              <li>{t('progressTracking')}</li>
              <li>{t('followUpServices')}</li>
            </ul>
            <a href="/contact" className="btn btn-primary">{t('getStarted')}</a>
          </div>

          <div className="service-card">
            <h3>{t('creditConsultation')}</h3>
            <p>
              {t('creditConsultationDesc')}
            </p>
            <ul>
              <li>{t('personalConsultation')}</li>
              <li>{t('goalSetting')}</li>
              <li>{t('strategyDevelopment')}</li>
              <li>{t('ongoingSupport')}</li>
            </ul>
            <a href="https://wa.me/1234567890" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              {t('whatsappConsultation')}
            </a>
          </div>

          <div className="service-card">
            <h3>{t('financialAdvisory')}</h3>
            <p>
              {t('financialAdvisoryDesc')}
            </p>
            <ul>
              <li>{t('financialPlanning')}</li>
              <li>{t('creditBuildingStrategies')}</li>
              <li>{t('debtManagementAdvice')}</li>
              <li>{t('longTermMaintenance')}</li>
            </ul>
            <a href="/contact" className="btn btn-primary">{t('getStarted')}</a>
          </div>

          <div className="service-card">
            <h3>{t('identityProtection')}</h3>
            <p>
              {t('identityProtectionDesc')}
            </p>
            <ul>
              <li>{t('identityMonitoring')}</li>
              <li>{t('fraudAlerts')}</li>
              <li>{t('darkWebScanning')}</li>
              <li>{t('recoveryAssistance')}</li>
            </ul>
            <a href="/contact" className="btn btn-primary">{t('getStarted')}</a>
          </div>

          <div className="service-card">
            <h3>{t('businessCredit')}</h3>
            <p>
              {t('businessCreditDesc')}
            </p>
            <ul>
              <li>{t('businessCreditBuilding')}</li>
              <li>{t('tradeLineEstablishment')}</li>
              <li>{t('businessCreditMonitoring')}</li>
              <li>{t('financingGuidance')}</li>
            </ul>
            <a href="/contact" className="btn btn-primary">{t('getStarted')}</a>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>{t('readyToStart')}</h2>
            <p>{t('ctaText')}</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">{t('freeConsultation')}</a>
              <a href="https://wa.me/1234567890" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                {t('whatsappUs')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;


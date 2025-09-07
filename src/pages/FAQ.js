import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './FAQ.css';

const FAQ = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer')
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer')
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer')
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer')
    },
    {
      question: t('faq5Question'),
      answer: t('faq5Answer')
    },
    {
      question: t('faq6Question'),
      answer: t('faq6Answer')
    }
  ];

  return (
    <div className="faq">
      <div className="container">
        <section className="faq-hero">
          <h1>{t('frequentlyAskedQuestions')}</h1>
          <p>{t('faqSubtitle')}</p>
        </section>

        <section className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="identityiq-section">
          <div className="identityiq-content">
            <h2>{t('creditMonitoringWithIdentityIQ')}</h2>
            <p>
              {t('identityIQDescription')}
            </p>
            <ul>
              <li>{t('realTimeMonitoring')}</li>
              <li>{t('identityTheftProtection')}</li>
              <li>{t('creditScoreTracking')}</li>
              <li>{t('darkWebMonitoring')}</li>
              <li>{t('identityTheftInsurance')}</li>
            </ul>
            <p>
              {t('identityIQComplement')}
            </p>
            <a 
              href="https://www.identityiq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('learnMoreAboutIdentityIQ')}
            </a>
          </div>
        </section>

        <section className="additional-info">
          <h2>{t('stillHaveQuestions')}</h2>
          <p>
            {t('additionalInfoText')}
          </p>
          <div className="contact-buttons">
            <a href="/contact" className="btn btn-primary">{t('freeConsultation')}</a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {t('whatsappUs')}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;


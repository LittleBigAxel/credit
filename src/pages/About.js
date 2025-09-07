import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <div className="about-content">
            <div className="about-image">
              <img src="/api/placeholder/300/300" alt="Profile" className="profile-image" />
            </div>
            <div className="about-text">
              <h1>{t('aboutMe')}</h1>
              <h2>{t('trustedSpecialist')}</h2>
              <p>
                {t('aboutDescription1')}
              </p>
              <p>
                {t('aboutDescription2')}
              </p>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mission-vision-grid">
            <div className="mission">
              <h3>{t('ourMission')}</h3>
              <p>
                {t('missionText')}
              </p>
            </div>
            <div className="vision">
              <h3>{t('ourVision')}</h3>
              <p>
                {t('visionText')}
              </p>
            </div>
          </div>
        </section>

        <section className="credentials">
          <h3>{t('whyChooseMe')}</h3>
          <div className="credentials-grid">
            <div className="credential-item">
              <h4>{t('certifiedProfessional')}</h4>
              <p>{t('certifiedProfessionalDesc')}</p>
            </div>
            <div className="credential-item">
              <h4>{t('provenTrackRecord')}</h4>
              <p>{t('provenTrackRecordDesc')}</p>
            </div>
            <div className="credential-item">
              <h4>{t('transparentProcess')}</h4>
              <p>{t('transparentProcessDesc')}</p>
            </div>
            <div className="credential-item">
              <h4>{t('personalizedApproach')}</h4>
              <p>{t('personalizedApproachDesc')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


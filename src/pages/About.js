import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <div className="about-content">
            <div className="about-image">
              <img src="/api/placeholder/300/300" alt="Profile" className="profile-image" />
            </div>
            <div className="about-text">
              <h1>About Me</h1>
              <h2>Your Trusted Credit Repair Specialist</h2>
              <p>
                With over 10 years of experience in the financial industry, I've helped hundreds 
                of clients improve their credit scores and achieve their financial dreams. My 
                passion for helping people overcome financial challenges drives everything I do.
              </p>
              <p>
                I understand that credit issues can be overwhelming and stressful. That's why 
                I provide personalized, compassionate service to guide you through every step 
                of the credit repair process.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mission-vision-grid">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To empower individuals and families to achieve financial freedom through 
                effective credit repair, education, and ongoing support. We believe everyone 
                deserves a second chance at good credit.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted name in credit repair, helping thousands of people 
                transform their financial lives and secure better opportunities for 
                themselves and their families.
              </p>
            </div>
          </div>
        </section>

        <section className="credentials">
          <h3>Why Choose Me?</h3>
          <div className="credentials-grid">
            <div className="credential-item">
              <h4>Certified Professional</h4>
              <p>Licensed and certified credit repair specialist</p>
            </div>
            <div className="credential-item">
              <h4>Proven Track Record</h4>
              <p>95% success rate in improving client credit scores</p>
            </div>
            <div className="credential-item">
              <h4>Transparent Process</h4>
              <p>Clear communication and regular progress updates</p>
            </div>
            <div className="credential-item">
              <h4>Personalized Approach</h4>
              <p>Customized strategies for each client's unique situation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


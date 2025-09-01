import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Repair Your Credit, Rebuild Your Future
            </h1>
            <p className="hero-subtitle">
              Professional credit repair services to help you achieve your financial goals
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                Free Consultation
              </a>
              <a 
                href="https://www.identityiq.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Go to IdentityIQ
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
          <h2>How We Can Help You</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Improve Credit Score</h3>
              <p>Increase your credit score through proven strategies and dispute processes</p>
            </div>
            <div className="benefit-item">
              <h3>Remove Negative Accounts</h3>
              <p>Challenge and remove inaccurate, outdated, or unverifiable negative items</p>
            </div>
            <div className="benefit-item">
              <h3>Financial Education</h3>
              <p>Learn how to maintain good credit and make smart financial decisions</p>
            </div>
            <div className="benefit-item">
              <h3>Personalized Service</h3>
              <p>Get customized credit repair strategies tailored to your unique situation</p>
            </div>
            <div className="benefit-item">
              <h3>Fast Results</h3>
              <p>See improvements in your credit report within 30-45 days</p>
            </div>
            <div className="benefit-item">
              <h3>Expert Support</h3>
              <p>Professional guidance throughout your entire credit repair journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


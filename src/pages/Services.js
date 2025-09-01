import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <section className="services-hero">
          <h1>Our Services</h1>
          <p>Comprehensive credit repair solutions tailored to your needs</p>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h3>Credit Report Analysis</h3>
            <p>
              Comprehensive review of your credit reports from all three bureaus. 
              We identify errors, inaccuracies, and opportunities for improvement 
              to create a personalized action plan.
            </p>
            <ul>
              <li>Detailed credit report review</li>
              <li>Error identification</li>
              <li>Improvement strategy</li>
              <li>Written assessment report</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </div>

          <div className="service-card">
            <h3>Dispute Services</h3>
            <p>
              Professional dispute letters and follow-up with credit bureaus 
              to remove inaccurate, outdated, or unverifiable information from 
              your credit reports.
            </p>
            <ul>
              <li>Professional dispute letters</li>
              <li>Bureau correspondence</li>
              <li>Progress tracking</li>
              <li>Follow-up services</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </div>

          <div className="service-card">
            <h3>Credit Consultation</h3>
            <p>
              One-on-one consultation sessions to discuss your credit situation, 
              goals, and the best strategies for improving your credit score 
              and overall financial health.
            </p>
            <ul>
              <li>Personal consultation</li>
              <li>Goal setting</li>
              <li>Strategy development</li>
              <li>Ongoing support</li>
            </ul>
            <a href="https://wa.me/1234567890" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              WhatsApp Consultation
            </a>
          </div>

          <div className="service-card">
            <h3>Financial Advisory</h3>
            <p>
              Expert advice on managing your finances, building positive credit 
              history, and maintaining good credit practices for long-term 
              financial success.
            </p>
            <ul>
              <li>Financial planning</li>
              <li>Credit building strategies</li>
              <li>Debt management advice</li>
              <li>Long-term maintenance</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </div>

          <div className="service-card">
            <h3>Identity Protection</h3>
            <p>
              Comprehensive identity monitoring and protection services to 
              safeguard your personal information and prevent identity theft 
              that could damage your credit.
            </p>
            <ul>
              <li>Identity monitoring</li>
              <li>Fraud alerts</li>
              <li>Dark web scanning</li>
              <li>Recovery assistance</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </div>

          <div className="service-card">
            <h3>Business Credit</h3>
            <p>
              Specialized services for building and improving business credit 
              profiles, helping you secure better financing options for your 
              business growth and expansion.
            </p>
            <ul>
              <li>Business credit building</li>
              <li>Trade line establishment</li>
              <li>Business credit monitoring</li>
              <li>Financing guidance</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Start Your Credit Repair Journey?</h2>
            <p>Contact us today for a free consultation and take the first step towards better credit.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Free Consultation</a>
              <a href="https://wa.me/1234567890" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;


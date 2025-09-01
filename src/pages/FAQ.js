import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does credit repair take?",
      answer: "Credit repair timelines vary depending on your specific situation. Most clients see initial results within 30-45 days, with significant improvements typically occurring within 3-6 months. Complex cases may take longer, but we'll provide you with realistic expectations during your consultation."
    },
    {
      question: "Can you guarantee specific results?",
      answer: "While we cannot guarantee specific score increases (as this would be illegal), we have a 95% success rate in helping clients improve their credit. We use proven strategies and will work diligently to achieve the best possible results for your situation."
    },
    {
      question: "How much does credit repair cost?",
      answer: "Our pricing varies based on the services you need. We offer transparent pricing with no hidden fees. Contact us for a free consultation where we'll assess your situation and provide a customized quote. We also offer payment plans to make our services accessible."
    },
    {
      question: "Is credit repair legal?",
      answer: "Yes, credit repair is completely legal. The Fair Credit Reporting Act (FCRA) gives you the right to dispute inaccurate, outdated, or unverifiable information on your credit reports. We simply help you exercise these rights more effectively."
    },
    {
      question: "What's the difference between credit repair and credit counseling?",
      answer: "Credit repair focuses on removing negative items from your credit report, while credit counseling typically involves debt management and financial education. We offer both services - we can help clean up your credit report AND provide guidance on maintaining good credit going forward."
    },
    {
      question: "Can I repair my credit myself?",
      answer: "Yes, you can dispute items on your credit report yourself. However, professional credit repair services have experience with effective dispute strategies, know how to communicate with bureaus and creditors, and can save you significant time and effort while often achieving better results."
    }
  ];

  return (
    <div className="faq">
      <div className="container">
        <section className="faq-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Get answers to common questions about credit repair</p>
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
            <h2>Credit Monitoring with IdentityIQ</h2>
            <p>
              In addition to our credit repair services, we recommend IdentityIQ for ongoing 
              credit monitoring and identity protection. IdentityIQ provides:
            </p>
            <ul>
              <li>Real-time credit monitoring from all three bureaus</li>
              <li>Identity theft protection and alerts</li>
              <li>Credit score tracking and updates</li>
              <li>Dark web monitoring for your personal information</li>
              <li>$1 million identity theft insurance</li>
            </ul>
            <p>
              IdentityIQ is an excellent complement to our credit repair services, helping you 
              maintain and protect your improved credit once we've helped you achieve your goals.
            </p>
            <a 
              href="https://www.identityiq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Learn More About IdentityIQ
            </a>
          </div>
        </section>

        <section className="additional-info">
          <h2>Still Have Questions?</h2>
          <p>
            Don't see your question answered here? We're here to help! Contact us for a free 
            consultation where we can discuss your specific situation and answer any questions 
            you may have about the credit repair process.
          </p>
          <div className="contact-buttons">
            <a href="/contact" className="btn btn-primary">Free Consultation</a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;


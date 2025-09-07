import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from '../hooks/useTranslation';
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Replace these with your actual EmailJS service details
      await emailjs.send(
        "service_memffdn",
        "template_onuljlj",
        formData,
        "LBl115UUEadrH1HiL"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1>{t('contactMe')}</h1>
          <p>{t('contactSubtitle')}</p>
        </section>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>{t('sendMeMessage')}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('fullName')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('emailAddress')} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('phoneNumber')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  required></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}>
                {isSubmitting ? t('sending') : t('sendMessage')}
              </button>

              {submitStatus === "success" && (
                <p className="form-message success">
                  {t('messageSentSuccess')}
                </p>
              )}

              {submitStatus === "error" && (
                <p className="form-message error">
                  {t('messageError')}
                </p>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <h2>{t('getInTouch')}</h2>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>WhatsApp</h3>
                <p>{t('whatsappQuick')}</p>
                <a
                  href="https://wa.me/13479255033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary">
                  {t('messageOnWhatsapp')}
                </a>
              </div>

              <div className="contact-method">
                <h3>Email</h3>
                <p>{t('emailDetailed')}</p>
                <a
                  href="mailto:contact@creditrepair.com"
                  className="contact-link">
                  contact@creditrepair.com
                </a>
              </div>

              <div className="contact-method">
                <h3>{t('socialMedia')}</h3>
                <p>{t('socialMediaFollow')}</p>
                <div className="social-links">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    {t('facebook')}
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    {t('instagram')}
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    {t('linkedin')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="map-section">
          <h2>{t('serviceArea')}</h2>
          <p>{t('serviceAreaText')}</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;

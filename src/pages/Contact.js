import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
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
          <h1>Contact Me</h1>
          <p>Ready to start your credit repair journey? Get in touch today!</p>
        </section>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="email">Email Address *</label>
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
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your credit situation and how I can help..."
                  required></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="form-message success">
                  Message sent successfully! I'll get back to you within 24
                  hours.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="form-message error">
                  There was an error sending your message. Please try again or
                  contact me directly.
                </p>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Get In Touch</h2>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>WhatsApp</h3>
                <p>For quick questions and consultations</p>
                <a
                  href="https://wa.me/13479255033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary">
                  Message on WhatsApp
                </a>
              </div>

              <div className="contact-method">
                <h3>Email</h3>
                <p>For detailed inquiries</p>
                <a
                  href="mailto:contact@creditrepair.com"
                  className="contact-link">
                  contact@creditrepair.com
                </a>
              </div>

              <div className="contact-method">
                <h3>Social Media</h3>
                <p>Follow me for credit tips and updates</p>
                <div className="social-links">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="map-section">
          <h2>Service Area</h2>
          <p>Providing credit repair services nationwide</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;

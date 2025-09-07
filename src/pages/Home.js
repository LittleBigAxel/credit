import React, { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import TranslatedText from "../components/TranslatedText";
import "./Home.css";

const GOOGLE_PLACE_ID = "YOUR_GOOGLE_PLACE_ID_HERE"; // <-- cámbialo
const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY_HERE"; // <-- cámbialo

const Home = () => {
  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <TranslatedText>{t("heroTitle")}</TranslatedText>
            </h1>
            <p className="hero-subtitle">
              <TranslatedText>{t("heroSubtitle")}</TranslatedText>
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                <TranslatedText>{t("freeConsultation")}</TranslatedText>
              </a>
              <a
                href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=4321400U"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary">
                <TranslatedText>{t("goToIdentityIQ")}</TranslatedText>
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
          <h2>
            <TranslatedText>{t("howWeCanHelp")}</TranslatedText>
          </h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>
                <TranslatedText>{t("improveCreditScore")}</TranslatedText>
              </h3>
              <p>
                <TranslatedText>{t("improveCreditScoreDesc")}</TranslatedText>
              </p>
            </div>
            <div className="benefit-item">
              <h3>
                <TranslatedText>{t("removeNegativeAccounts")}</TranslatedText>
              </h3>
              <p>
                <TranslatedText>
                  {t("removeNegativeAccountsDesc")}
                </TranslatedText>
              </p>
            </div>
            <div className="benefit-item">
              <h3>Financial Education</h3>
              <p>
                Learn how to maintain good credit and make smart financial
                decisions
              </p>
            </div>
            <div className="benefit-item">
              <h3>Personalized Service</h3>
              <p>
                Get customized credit repair strategies tailored to your unique
                situation
              </p>
            </div>
            <div className="benefit-item">
              <h3>
                <TranslatedText>{t("fastResults")}</TranslatedText>
              </h3>
              <p>
                <TranslatedText>{t("fastResultsDesc")}</TranslatedText>
              </p>
            </div>
            <div className="benefit-item">
              <h3>Expert Support</h3>
              <p>
                Professional guidance throughout your entire credit repair
                journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Results Section */}
      <section className="results">
        <div className="container">
          <div className="section-head">
            <h2>Real Client Results</h2>
            <p>Before / After & screenshots de mejoras reales</p>
          </div>

          <div className="results-grid">
            {/* Cards de ejemplo: reemplaza las src por tus imágenes reales */}
            <article className="result-card">
              <div className="result-img-wrap">
                <img
                  src="/api/placeholder/420/260"
                  alt="Before & After - Collections removed"
                />
                <span className="badge">+92 pts</span>
              </div>
              <div className="result-body">
                <h3>Collections Removed</h3>
                <p>2 colecciones eliminadas en 45 días.</p>
              </div>
            </article>

            <article className="result-card">
              <div className="result-img-wrap">
                <img
                  src="/api/placeholder/420/260"
                  alt="Late payments updated"
                />
                <span className="badge">Updated to Positive</span>
              </div>
              <div className="result-body">
                <h3>Late Payments Fixed</h3>
                <p>Pagos tardes corregidos en cuentas abiertas.</p>
              </div>
            </article>

            <article className="result-card">
              <div className="result-img-wrap">
                <img
                  src="/api/placeholder/420/260"
                  alt="Score increase proof"
                />
                <span className="badge">+120 pts</span>
              </div>
              <div className="result-body">
                <h3>Score Increase</h3>
                <p>Subida de 120 puntos tras eliminar errores.</p>
              </div>
            </article>

            {/* Agrega más <article> según necesites */}
          </div>
        </div>
      </section>

      {/* NEW: Google Reviews Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-head">
            <h2>What Clients Say on Google</h2>
            <p>Testimonios verificados directamente desde Google</p>
          </div>

          <div className="reviews-grid">
            {dataReviews.map((r, idx) => (
              <article className="review-card" key={idx}>
                <div className="review-header">
                  <img
                    src={r.profile_photo_url || "/api/placeholder/48/48"}
                    alt={r.author_name}
                    className="avatar"
                    loading="lazy"
                  />
                  <div className="meta">
                    <strong className="author">{r.author_name}</strong>
                    <span className="time">
                      {r.relative_time_description || ""}
                    </span>
                  </div>
                </div>

                <div className="stars" aria-label={`${r.rating} out of 5`}>
                  {"★".repeat(Math.round(r.rating || 5))}
                  {"☆".repeat(5 - Math.round(r.rating || 5))}
                </div>

                <p className="review-text">{r.text}</p>
              </article>
            ))}
          </div>

          {/* CTA opcional */}
          <div className="reviews-cta">
            <a
              className="btn btn-primary"
              href="/contact"
              aria-label="Book a free consultation">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useTranslation } from "../hooks/useTranslation";
import TranslatedText from "../components/TranslatedText";
import res1 from "../results/resultado-1.jpeg";
import homeImage from "../results/credit-written-scrabble-letters-bank-notes.jpg";

import "./Home.css";

/* Inline helpers (no separate files) */
const ResultsSection = ({ items = [] }) => {
  const { t } = useTranslation();

  const sample = [
    {
      img: res1,
      title: "Yahindry T.",
      description: "+63 EQ • 22 negatives removed",
      badge: "+63 EQ",
    },
    {
      img: "/results/sample2.jpg",
      title: "Stephanie R.",
      description: "+112 pts • 18 negatives removed",
      badge: "+112 pts",
    },
    {
      img: "/results/sample3.jpg",
      title: "Luis M.",
      description: "+92 pts • 14 negatives removed",
      badge: "+92 pts",
    },
  ];

  const data = items.length ? items : sample;

  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-head">
          <h2>
            <TranslatedText>{t("resultsTitle")}</TranslatedText>
          </h2>
          <p>
            <TranslatedText>{t("resultsSubtitle")}</TranslatedText>
          </p>
        </div>

        <div className="results-grid">
          {data.map((it, idx) => (
            <article key={idx} className="result-card">
              <div className="result-img-wrap">
                <img
                  src={it.img}
                  alt={it.title || "Result"}
                  loading="lazy"
                  decoding="async"
                />
                {it.badge && <span className="badge">{it.badge}</span>}
              </div>
              <div className="result-body">
                {it.title && <h3>{it.title}</h3>}
                {it.description && <p>{it.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ reviews = [] }) => {
  const { t } = useTranslation();

  const sample = [
    {
      name: "Jordania J.",
      time: "3 weeks ago",
      avatar: "/avatars/a1.jpg",
      rating: 5,
      text: "Me eliminaron 12 cuentas y subí más de 90 puntos en 2 meses.",
    },
    {
      name: "Luis M.",
      time: "1 month ago",
      avatar: "/avatars/a2.jpg",
      rating: 5,
      text: "De negado a aprobado. Proceso claro y rápido, 100% recomendado.",
    },
    {
      name: "Stephanie R.",
      time: "2 months ago",
      avatar: "/avatars/a3.jpg",
      rating: 5,
      text: "Excelente comunicación y resultados reales.",
    },
  ];

  const data = reviews.length ? reviews : sample;

  const Stars = ({ value = 5 }) => (
    <div className="stars" aria-label={`${value} out of 5 stars`}>
      {"★★★★★".slice(0, Math.max(0, Math.min(5, value)))}
    </div>
  );

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>
            <TranslatedText>{t("testimonialsTitle")}</TranslatedText>
          </h2>
        </div>

        <div className="reviews-grid">
          {data.map((r, idx) => (
            <article key={idx} className="review-card">
              <div className="review-header">
                {r.avatar ? (
                  <img
                    className="avatar"
                    src={res1}
                    alt={`${r.name} avatar`}
                    loading="lazy"
                  />
                ) : (
                  <div className="avatar" style={{ background: "#eef2ff" }} />
                )}
                <div className="meta">
                  <strong className="author">{r.name}</strong>
                  {r.time && <span className="time">{r.time}</span>}
                  <Stars value={r.rating || 5} />
                </div>
              </div>
              {r.text && <p className="review-text">“{r.text}”</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useTranslation();

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
                href="https://www.identityiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary">
                <TranslatedText>{t("goToIdentityIQ")}</TranslatedText>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={homeImage} alt="Credit Repair Success" />
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
              <h3>
                <TranslatedText>{t("financialEducation")}</TranslatedText>
              </h3>
              <p>
                <TranslatedText>{t("financialEducationDesc")}</TranslatedText>
              </p>
            </div>
            <div className="benefit-item">
              <h3>
                <TranslatedText>{t("personalizedService")}</TranslatedText>
              </h3>
              <p>
                <TranslatedText>{t("personalizedServiceDesc")}</TranslatedText>
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
              <h3>
                <TranslatedText>{t("expertSupport")}</TranslatedText>
              </h3>
              <p>
                <TranslatedText>{t("expertSupportDesc")}</TranslatedText>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results + Testimonials inside Home */}
      <ResultsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;

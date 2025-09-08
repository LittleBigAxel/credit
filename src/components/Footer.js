import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import TranslatedText from "./TranslatedText";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>
            <TranslatedText>{t("contact")}</TranslatedText>
          </h3>
          <div className="footer-links">
            <a
              href="https://wa.me/13479255033"
              target="_blank"
              rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:jlnolimitinfo@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>
            <TranslatedText>{t("socialMedia")}</TranslatedText>
          </h3>
          <div className="footer-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <TranslatedText>{t("facebook")}</TranslatedText>
            </a>
            <a
              href="https://www.instagram.com/jl.nolimit/"
              target="_blank"
              rel="noopener noreferrer">
              <TranslatedText>{t("instagram")}</TranslatedText>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>
            <TranslatedText>{t("legal")}</TranslatedText>
          </h3>
          <div className="footer-links">
            <a href="/privatepolicy">
              <TranslatedText>{t("privacyPolicy")}</TranslatedText>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} JL No Limit — Jorge Lopez.{" "}
          <TranslatedText>{t("allRightsReserved")}</TranslatedText>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

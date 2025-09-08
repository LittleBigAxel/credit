import "./PrivatePolicy.css";

const COMPANY_NAME = "JL No Limit";
const OWNER_NAME = "Jorge Lopez";
const CONTACT_EMAIL = "jlnolimitinfo@gmail.com";
const LAST_UPDATED = "September 2025";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>Last Updated: {LAST_UPDATED}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            {COMPANY_NAME} (“{COMPANY_NAME}”, “we”, “our”, or “us”) is committed
            to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or use our credit repair and advisory services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> your name, email address,
              phone number, and mailing address.
            </li>
            <li>
              <strong>Credit Information:</strong> credit reports, account
              numbers, dispute documents, or other information you provide to
              assist with credit improvement.
            </li>
            <li>
              <strong>Payment Information:</strong> if you purchase services,
              limited payment details processed securely by our payment
              providers.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, device/browser type,
              pages visited, and referral sources to help us improve the site.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, personalize, and improve our services.</li>
            <li>Communicate with you about updates, results, and offers.</li>
            <li>Process payments and manage billing.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information. We may share it
            with:
          </p>
          <ul>
            <li>Credit bureaus and creditors for dispute processing.</li>
            <li>
              Service providers who assist our operations (e.g., payment
              processors, email/SMS providers, hosting/analytics).
            </li>
            <li>
              Government or legal authorities when required by law or to protect
              our rights or users.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We use industry-standard administrative, technical, and physical
            safeguards to protect your information. However, no method of
            transmission or storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You may have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal information.</li>
            <li>Request a copy of the data we hold about you.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
          <p>
            To make a request, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2>7. Cookies & Tracking</h2>
          <p>
            We may use cookies and similar technologies to operate the site,
            remember preferences, and analyze traffic. You can control cookies
            through your browser settings; some features may not function
            properly if cookies are disabled.
          </p>
        </section>

        <section>
          <h2>8. Third-Party Links</h2>
          <p>
            Our site may link to external websites (e.g., MyScoreIQ,
            IdentityIQ). We are not responsible for their privacy practices or
            content. Review their policies before providing personal
            information.
          </p>
        </section>

        <section>
          <h2>9. Children’s Privacy</h2>
          <p>
            Our services are not intended for individuals under 18. We do not
            knowingly collect information from minors.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with a revised “Last Updated” date.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            Questions about this Privacy Policy? Contact{" "}
            <strong>{COMPANY_NAME}</strong> ({OWNER_NAME}) at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </section>

        <section>
          <small style={{ color: "var(--text-secondary)" }}>
            This Privacy Policy is provided for general informational purposes
            and does not constitute legal advice. Consider consulting an
            attorney to ensure compliance with applicable laws (e.g., CCPA/GDPR)
            based on your business practices and location.
          </small>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

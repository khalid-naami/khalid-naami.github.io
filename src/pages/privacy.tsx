import React from 'react';
import Layout from '@theme/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for Khalid Naami's Personal Website and Dashboard Options. GDPR, LGPD, and COPPA compliant.">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Privacy Policy</h1>
            <p className="description" style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
              Last Updated: July 24, 2026
            </p>

            <section className="margin-bottom--lg">
              <h2>1. Introduction</h2>
              <p>
                Welcome to the personal website of <strong>Khalid Naami</strong> (Founder & CEO of Dashboard Options). 
                Your privacy is of paramount importance to us. This Privacy Policy outlines the types of personal information 
                that is received, collected, and processed, and how we protect your data in compliance with global standards, 
                including the General Data Protection Regulation (GDPR), the Brazilian General Data Protection Law (LGPD), and the Children's Online Privacy Protection Act (COPPA).
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>2. Local Data & Zoro AI Chat</h2>
              <p>
                Our <strong>AI Chat interface (Zoro)</strong> is built on a privacy-first local architecture. 
                All chat interactions, text indexing, and prompt engineering happen locally on your device or via secure, encrypted tunnels to your Ollama instance. 
                We **do not** collect, store, or transmit your conversations or private queries to our servers.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>3. Data Collection and Usage</h2>
              <p>
                We collect data in two ways to improve your user experience and monitor website performance:
              </p>
              <ul>
                <li>
                  <strong>Voluntary Information:</strong> If you subscribe to our Substack newsletter or communicate with us through official social media profiles, we receive your email address or username. This information is used strictly to deliver requested updates and reply to inquiries.
                </li>
                <li>
                  <strong>Automated Information:</strong> Like most websites, we collect standard log file data, including IP addresses, browser types, Internet Service Providers (ISPs), entry/exit pages, and date/time stamps. This data is aggregated and does not identify individual users.
                </li>
              </ul>
            </section>

            <section className="margin-bottom--lg">
              <h2>4. Cookies and Advertising (Google AdSense)</h2>
              <p>
                We use cookies to analyze visitor trends and serve relevant advertisements.
              </p>
              <h3>Google Analytics</h3>
              <p>
                We use Google Analytics to monitor site traffic. Google Analytics stores cookies on your browser to record how you interact with the Site. This helps us refine our navigation and content quality.
              </p>
              <h3>Google AdSense & DART Cookies</h3>
              <p>
                Google, as a third-party vendor, uses cookies to serve ads on this Site. Google's use of advertising cookies (such as the DART cookie) enables it and its partners to serve ads to users based on their visits to this Site and other websites on the internet.
              </p>
              <p>
                <strong>Opt-Out Choices:</strong>
              </p>
              <ul>
                <li>
                  You can opt out of personalized advertising by visiting Google's <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Ad Settings</a>.
                </li>
                <li>
                  Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
                </li>
              </ul>
            </section>

            <section className="margin-bottom--lg">
              <h2>5. GDPR Compliance (EU Users)</h2>
              <p>
                If you are a resident of the European Economic Area (EEA), you have specific data protection rights under the GDPR:
              </p>
              <ul>
                <li><strong>Right of Access:</strong> You can request copies of your personal data.</li>
                <li><strong>Right of Rectification:</strong> You can request that we correct any inaccurate or incomplete data.</li>
                <li><strong>Right of Erasure:</strong> You can request that we erase your personal data under certain conditions.</li>
                <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data.</li>
              </ul>
            </section>

            <section className="margin-bottom--lg">
              <h2>6. LGPD Compliance (Brazilian Users)</h2>
              <p>
                In compliance with the Brazilian General Data Protection Law (Lei Geral de Proteção de Dados - LGPD), users in Brazil have the right to:
              </p>
              <ul>
                <li>Confirm the existence of data processing.</li>
                <li>Access their personal processing data.</li>
                <li>Request anonymization, blocking, or deletion of unnecessary or non-compliant data.</li>
                <li>Port their personal data to another service provider upon request.</li>
              </ul>
            </section>

            <section className="margin-bottom--lg">
              <h2>7. COPPA Compliance (Children's Privacy)</h2>
              <p>
                Our Site is educational and analytical in nature, and is **not directed** at children under the age of 13. In compliance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect or solicit personal information from children under 13. If you believe a child under 13 has provided us with personal data, please contact us immediately so we can remove it.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>8. Security and Retention</h2>
              <p>
                We implement industry-standard security measures to safeguard any data we handle. We retain personal data (such as newsletter emails) only for as long as necessary to provide you with services or as required by law.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>9. Contact Information</h2>
              <p>
                If you have any questions or data removal requests regarding this Privacy Policy, please reach out to us via our official social media channels:
              </p>
              <ul>
                <li>Substack: <a href="https://substack.com/@khnaami" target="_blank" rel="noopener noreferrer">substack.com/@khnaami</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/khalid-naami-a953263bb/" target="_blank" rel="noopener noreferrer">khalid-naami-linkedin</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

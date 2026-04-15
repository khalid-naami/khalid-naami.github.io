import React from 'react';
import Layout from '@theme/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for Khalid Naami's Personal Website and Dashboard Options.">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Privacy Policy</h1>
            <p className="description" style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
              Last Updated: April 15, 2026
            </p>

            <section className="margin-bottom--lg">
              <h2>Introduction</h2>
              <p>
                Welcome to the personal website of <strong>Khalid Naami</strong> (Founder & CEO at Dashboard Options). 
                Your privacy is of extreme importance to us. This Privacy Policy outlines the types of personal information 
                that is received and collected and how it is used.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>Local Data & AI Processing</h2>
              <p>
                Our <strong>AI Chat (Zoro)</strong> is designed with a privacy-first approach. 
                All chat interactions and blog indexing occur locally or via a secure tunnel to your own instance of Ollama. 
                We do not store your chat history or personal data from these interactions on our servers.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>Log Files & Analytics</h2>
              <p>
                Like many other websites, we use <strong>Google Analytics</strong> to understand how visitors interact with our content. 
                This includes information such as IP addresses, browser types, Internet Service Provider (ISP), date/time stamps, 
                and referring/exit pages. This data is used to analyze trends and improve the user experience.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>Cookies and Web Beacons</h2>
              <p>
                We use cookies to store information about visitors' preferences and to record user-specific information on which pages 
                the user accesses or visits.
              </p>
              <h3>Google AdSense</h3>
              <p>
                Google, as a third-party vendor, may use cookies to serve ads on our site. Google's use of the DART cookie enables it 
                to serve ads to users based on their visit to our site and other sites on the Internet. 
                Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>Consent</h2>
              <p>
                By using our website, you hereby consent to our privacy policy and agree to its terms.
              </p>
            </section>

            <section className="margin-bottom--lg">
              <h2>Contact Information</h2>
              <p>
                If you require any more information or have any questions about our privacy policy, please feel free 
                to contact us via our social media profiles or the newsletter.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

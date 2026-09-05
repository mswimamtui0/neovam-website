import React from 'react';
import { Helmet } from 'react-helmet';
import { FiShield, FiMail, FiClock, FiRefreshCw } from 'react-icons/fi';

const Section = ({ number, title, children }) => (
  <section className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass mb-6 sm:mb-8 animate-slide-up">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-start gap-3">
      <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary text-white text-sm font-bold">
        {number}
      </span>
      <span>{title}</span>
    </h2>
    <div className="prose prose-slate max-w-none text-gray-600 dark:text-gray-300">{children}</div>
  </section>
);

const MetaRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <Icon className="text-primary-400 flex-shrink-0" />
    <span className="text-gray-500 dark:text-gray-400 font-medium">{label}:</span>
    <span className="text-gray-700 dark:text-gray-200">{value}</span>
  </div>
);

const VictoryFundPrivacyPolicy = () => {
  const currentDate = 'August 4, 2026';

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Victory Fund</title>
        <meta
          name="description"
          content="Privacy Policy for the Victory Fund app. Learn how NeoVam Technologies collects, uses, and protects your personal and financial information."
        />
        <meta property="og:title" content="Privacy Policy — Victory Fund" />
        <meta
          property="og:description"
          content="Privacy Policy for the Victory Fund app by NeoVam Technologies."
        />
        <meta property="og:url" content="https://neovam.com/privacy-policy/victory-fund" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/20 border border-primary-400/30 text-primary-300 text-sm font-medium mb-6">
            <FiShield />
            Victory Fund App
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 animate-fade-in px-2">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 animate-slide-up animate-delay-200 px-2">
            This policy explains how the Victory Fund app collects, uses, protects, and shares your
            personal and financial information. Please read it carefully.
          </p>

          <div className="max-w-xl mx-auto p-4 sm:p-5 rounded-2xl glass flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <MetaRow icon={FiClock} label="Effective Date" value={currentDate} />
            <span className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-white/10" />
            <MetaRow icon={FiRefreshCw} label="Version" value="1.0" />
            <span className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-white/10" />
            <MetaRow icon={FiMail} label="Contact" value="privacy@neovam.com" />
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Section number="1" title="Information We Collect">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mt-2 mb-2">Personal Information</h3>
            <ul>
              <li>
                <strong>Account Data:</strong> Name, email address, phone number, and date of birth.
              </li>
              <li>
                <strong>KYC Documents:</strong> Government-issued identification (National ID/NIDA, TIN,
                or passport), proof of address, and a photograph.
              </li>
              <li>
                <strong>Bank Details:</strong> Account number, bank name, and account holder name (used
                only for payouts and deposits).
              </li>
              <li>
                <strong>Device Information:</strong> Device model, operating system version, IP address,
                and anonymized app usage analytics.
              </li>
            </ul>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white mt-4 mb-2">Financial Information</h3>
            <ul>
              <li>Portfolio holdings, transaction history, and investment preferences.</li>
              <li>Net Asset Value (NAV) subscriptions, redemptions, and switches.</li>
              <li>Bank mandate details for standing instructions (for example, SIP/STP-style recurring investments).</li>
            </ul>
          </Section>

          <Section number="2" title="How We Use Your Data">
            <p>We process your personal data only for specific, lawful purposes:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Account creation &amp; authentication</td>
                    <td>Contract performance</td>
                  </tr>
                  <tr>
                    <td>KYC verification (regulatory requirement)</td>
                    <td>Legal obligation</td>
                  </tr>
                  <tr>
                    <td>Transaction processing (subscribe/redeem/switch)</td>
                    <td>Contract performance</td>
                  </tr>
                  <tr>
                    <td>Portfolio management &amp; reporting</td>
                    <td>Legitimate interest</td>
                  </tr>
                  <tr>
                    <td>Regulatory reporting (CMSA, DSE, Bank of Tanzania)</td>
                    <td>Legal obligation</td>
                  </tr>
                  <tr>
                    <td>Fraud prevention &amp; security</td>
                    <td>Legitimate interest</td>
                  </tr>
                  <tr>
                    <td>Notifications (transactions, NAV alerts)</td>
                    <td>Legitimate interest / Consent</td>
                  </tr>
                  <tr>
                    <td>App improvement &amp; analytics</td>
                    <td>Legitimate interest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section number="3" title="Data Sharing">
            <p>
              We <strong>do not sell</strong> your personal data. We share information only with the
              following parties and strictly on a need-to-know basis:
            </p>
            <ul>
              <li>
                <strong>Regulators:</strong> The Capital Markets and Securities Authority (CMSA), the
                Dar es Salaam Stock Exchange (DSE), and the Bank of Tanzania (BoT) for mandatory
                reporting.
              </li>
              <li>
                <strong>Registrar &amp; Transfer Agents (RTAs):</strong> For transaction processing and
                unit-holder record keeping.
              </li>
              <li>
                <strong>Banking Partners:</strong> For payout and deposit processing (bank transfers,
                TIPS, and licensed mobile money services).
              </li>
              <li>
                <strong>Cloud Providers:</strong> Google Cloud / AWS (encrypted storage, ISO 27001
                certified infrastructure).
              </li>
              <li>
                <strong>Analytics:</strong> Firebase Crashlytics (anonymized, no personal data).
              </li>
            </ul>
            <p>All third-party processors are required to sign Data Processing Agreements (DPAs).</p>
          </Section>

          <Section number="4" title="Data Retention">
            <p>We retain personal data only for as long as required by law or for legitimate business purposes:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Data Type</th>
                    <th>Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>KYC documents</td>
                    <td>10 years post account closure (Anti-Money Laundering Act)</td>
                  </tr>
                  <tr>
                    <td>Transaction records</td>
                    <td>10 years (CMSA/tax requirements)</td>
                  </tr>
                  <tr>
                    <td>Account profile</td>
                    <td>During active use + 3 years</td>
                  </tr>
                  <tr>
                    <td>Analytics/logs</td>
                    <td>13 months</td>
                  </tr>
                  <tr>
                    <td>Marketing preferences</td>
                    <td>Until withdrawn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section number="5" title="Your Rights">
            <p>Under the Tanzania Personal Data Protection Act, 2022 (PDPA) and, where applicable, the EU GDPR, you have the following rights:</p>
            <ul>
              <li>
                <strong>Access</strong> — Request a copy of the data we hold about you.
              </li>
              <li>
                <strong>Rectification</strong> — Correct inaccurate or incomplete data.
              </li>
              <li>
                <strong>Erasure</strong> — Request deletion where it is not legally required to retain it.
              </li>
              <li>
                <strong>Portability</strong> — Export your data in a machine-readable format.
              </li>
              <li>
                <strong>Restriction</strong> — Limit how we process your data in certain circumstances.
              </li>
              <li>
                <strong>Objection</strong> — Opt out of direct marketing at any time.
              </li>
              <li>
                <strong>Withdraw Consent</strong> — For optional processing such as notifications.
              </li>
            </ul>
            <p>
              <strong>To exercise any of these rights:</strong> Email{' '}
              <a href="mailto:privacy@neovam.com">privacy@neovam.com</a> with the subject line
              "Privacy Request". We respond within 30 days.
            </p>
          </Section>

          <Section number="6" title="Security Measures">
            <p>We protect your data using industry-standard safeguards:</p>
            <ul>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Biometric authentication (optional)</li>
              <li>OTP-based login (no plaintext passwords stored)</li>
              <li>Regular penetration testing</li>
              <li>SOC 2 Type II certified infrastructure</li>
            </ul>
          </Section>

          <Section number="7" title="Children's Privacy">
            <p>
              Accounts for minors require parent or guardian KYC. We collect minimal data for minors and
              do not use it for marketing purposes.
            </p>
          </Section>

          <Section number="8" title="International Transfers">
            <p>
              Your data is stored in Tanzania. Where data is transferred outside Tanzania, we use
              appropriate safeguards, including Standard Contractual Clauses (SCCs), to ensure it
              receives an equivalent level of protection.
            </p>
          </Section>

          <Section number="9" title="Changes to This Policy">
            <p>
              We may update this policy from time to time. We will notify you via in-app notification and
              email at least 30 days before material changes take effect. Continued use of the app after
              the changes means you accept the updated policy.
            </p>
          </Section>

          <Section number="10" title="Data Protection Officer (PDPA 2022)">
            <p>
              <strong>Name:</strong> Data Protection Officer
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:dpo@neovam.com">dpo@neovam.com</a>
              <br />
              <strong>Address:</strong> NeoVam Technologies, P.O BOX 36098, Kigamboni, Dar es Salaam, Tanzania
            </p>
          </Section>

          <Section number="11" title="Contact">
            <div className="p-5 rounded-2xl bg-primary-900/10 border border-primary-400/20">
              <p>
                <strong>Privacy Questions:</strong>{' '}
                <a href="mailto:privacy@neovam.com">privacy@neovam.com</a>
                <br />
                <strong>Support:</strong> <a href="mailto:support@neovam.com">support@neovam.com</a>
                <br />
                <strong>App:</strong> Victory Fund
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              This policy complies with the Tanzania Personal Data Protection Act, 2022 (PDPA), the EU
              GDPR, and applicable CMSA regulations.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
};

export default VictoryFundPrivacyPolicy;


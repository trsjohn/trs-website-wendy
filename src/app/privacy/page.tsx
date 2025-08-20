export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <div className="text-neutral-400 text-sm">
          <p>Technology Resource Solutions (&quot;TRS&quot;)</p>
          <p>Last updated: August 19th, 2025</p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 p-8 space-y-8 text-neutral-300 leading-relaxed">
        <p className="text-lg">
          We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how TRS collects, uses, and safeguards your data.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">1) Information We Collect</h2>
          <div className="space-y-3">
            <p><strong className="text-white">Personal Information:</strong> Name, email, phone, company, job title, messages you send us.</p>
            <p><strong className="text-white">Candidate Data (if you apply):</strong> Resume/CV, portfolios, interview notes/recordings/transcripts, assessments, references, work eligibility.</p>
            <p><strong className="text-white">Usage Data:</strong> IP address, device/browser, pages visited, referring URLs, timestamps, cookies.</p>
            <p><strong className="text-white">Client & Vendor Data:</strong> Contact details, billing info, engagement history, statements of work.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">2) How We Use Information</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide recruiting, staffing, screening, and consulting services.</li>
            <li>Communicate about roles, interviews, proposals, and updates.</li>
            <li>Evaluate candidates against role requirements and client needs.</li>
            <li>Improve our website, products, and internal processes.</li>
            <li>Prevent abuse and meet legal, regulatory, or contractual obligations.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">3) When We Share Information</h2>
          <p>We don&apos;t sell personal information. We may share:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>With clients (for hiring decisions) and only as relevant to a role.</li>
            <li>With service providers (hosting, analytics, communications, ATS/CRM, file storage, transcription) under confidentiality agreements.</li>
            <li>For legal reasons (to comply with law, protect rights/safety, or in a business transaction such as a merger or acquisition).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">4) Data Retention</h2>
          <p>We keep data only as long as needed for the purposes above, our legitimate business needs, and legal requirements. You can request deletion; we&apos;ll honor it unless we must keep the data by law or for legitimate business reasons.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">5) Your Choices & Rights</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-white">Access/Correction/Deletion:</strong> Request a copy, fix errors, or ask us to delete your information.</li>
            <li><strong className="text-white">Communications:</strong> Opt out of non-essential emails at any time.</li>
            <li><strong className="text-white">Candidate Consent:</strong> If you&apos;re a candidate, you can withdraw consent for us to share your profile with clients.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">6) Security</h2>
          <p>We use reasonable administrative, technical, and physical safeguards. No method of transmission or storage is 100% secure.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">7) International Users</h2>
          <p>If you&apos;re outside the U.S., your data may be processed in the U.S. and other countries. We take steps to protect it in line with this Policy.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">8) Children</h2>
          <p>Our services are not directed to children under 16, and we do not knowingly collect their data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">9) Changes to This Policy</h2>
          <p>We may update this Policy from time to time. We&apos;ll post the new date at the top. Your continued use means you accept the updated Policy.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">10) Contact Us</h2>
          <p>Questions or requests?</p>
          <div className="ml-4 space-y-1">
            <p>Email: <a href="mailto:support@trsolutions.io" className="text-red-400 hover:text-red-300">support@trsolutions.io</a></p>
            <p>Phone: <a href="tel:+16024929839" className="text-red-400 hover:text-red-300">(602) 492-9839</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
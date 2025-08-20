export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <div className="text-neutral-400 text-sm">
          <p>Technology Resource Solutions (&quot;TRS&quot;)</p>
          <p>Last updated: August 19th, 2025</p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 p-8 space-y-8 text-neutral-300 leading-relaxed">
        <p className="text-lg">
          These Terms govern your use of TRS&apos;s website and services. By accessing our site or engaging our services, you agree to these Terms.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">1) Services</h2>
          <p>TRS provides recruiting, staffing, pre-screening, compliance, and consulting services. Specific engagement details (scope, fees, timelines, guarantees, confidentiality, IP, and data handling) are set in a written agreement or order form (&quot;SOW&quot; or &quot;MSA&quot;). If there&apos;s a conflict, the signed SOW/MSA controls.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">2) Acceptable Use</h2>
          <p>You agree not to misuse our site or systems, attempt to disrupt them, access data without authorization, or use our content in violation of applicable laws.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">3) Candidate Information & Consent</h2>
          <p>If you&apos;re a candidate, you authorize TRS to process and share your application materials with relevant clients for evaluation. You can withdraw consent at any time; this may affect our ability to consider you for roles.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">4) Client Responsibilities</h2>
          <p>Clients represent that information they provide (e.g., job descriptions, requirements, feedback) is accurate and lawful to use, and that they will handle candidate data in compliance with applicable laws and the parties&apos; agreement.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">5) Intellectual Property</h2>
          <p>The website, content, processes, playbooks, and tools are owned by TRS or its licensors. No rights are granted except as expressly provided. You may not copy, modify, or distribute our content without permission.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">6) Confidentiality</h2>
          <p>Each party may receive confidential information from the other. Both agree to use it only for the engagement and protect it with reasonable care. Additional confidentiality terms may appear in the SOW/MSA and will control.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">7) Disclaimers</h2>
          <p>TRS provides the website and informational materials &quot;as is.&quot; We do not guarantee a specific hiring outcome or the performance/tenure of any hire. External links are provided for convenience; we&apos;re not responsible for third-party sites.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">8) Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, TRS will not be liable for indirect, consequential, special, or punitive damages; lost profits; loss of data; or business interruption, even if advised of the possibility. Our aggregate liability related to the site or services is limited to the amount you paid to TRS for the services giving rise to the claim in the 12 months before the event.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">9) Indemnity</h2>
          <p>You agree to indemnify and hold TRS harmless from claims arising out of your misuse of the site, violation of these Terms, or infringement/misappropriation caused by your content or instructions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">10) Termination</h2>
          <p>We may suspend or terminate access to the site at any time for any reason. For paid services, termination rights and effects are governed by the SOW/MSA.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">11) Governing Law & Dispute Resolution</h2>
          <p>These Terms are governed by the laws of the State of Arizona, without regard to conflicts of law rules. Disputes will be resolved in the state or federal courts located in Maricopa County, Arizona, and the parties consent to jurisdiction and venue there. If your SOW/MSA sets different dispute terms, those control.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">12) Changes to Terms</h2>
          <p>We may update these Terms periodically. The &quot;Last updated&quot; date will change when we do. Continued use means you accept the updated Terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">13) Contact Us</h2>
          <p>Questions about these Terms?</p>
          <div className="ml-4 space-y-1">
            <p>Email: <a href="mailto:support@trsolutions.io" className="text-red-400 hover:text-red-300">support@trsolutions.io</a></p>
            <p>Phone: <a href="tel:+16024929839" className="text-red-400 hover:text-red-300">(602) 492-9839</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
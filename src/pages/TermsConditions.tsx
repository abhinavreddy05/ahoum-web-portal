
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
          Terms & Conditions
        </h1>
        
        <div className="font-montserrat text-foreground/80 space-y-6 leading-relaxed">
          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>Welcome to the Ahoum platform (the "Platform"), owned and operated by KIRA AUTOMATIONS PRIVATE LIMITED (CRN U72200MH2018PTC309617) ("Company," "we," "us," "our"). By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions ("Terms") Last Updated on 1 June 2025.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">2. Acceptance of Terms</h2>
            <p>If you do not agree with any provision herein, please refrain from using the Platform. Continued use after any update constitutes acceptance of the revised Terms (see §16).</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">3. Overview of Services</h2>
            <p>The Platform enables digital interactions—primarily messaging and voice consultations—between users ("Seekers") and independent spiritual mentors ("Facilitators").</p>
            <p className="mt-2">All premium services are provided strictly on a pre-paid basis.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">4. Account Registration</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Minimum age:</strong> You must be 18 years or older to create an account.</li>
              <li>You agree to provide accurate, complete, and current information and to safeguard your login credentials.</li>
              <li>Age is user-declared and the Company assumes no responsibility for misrepresentation.</li>
              <li>The User represents and warrants that they are of legal age to access and use the Platform. Age verification is based solely on information self-declared by the User. The Company does not undertake any independent verification of such information and disclaims all liability arising from any misrepresentation or false declaration by the User regarding their age.</li>
              <li>We may suspend or terminate any account found in breach of these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">5. Payment Policy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Currency:</strong> All payments will be processed in Indian Rupees (INR).</li>
              <li>Services must be paid in advance; fees are non-refundable except as expressly stated in §6.</li>
              <li>Applicable taxes (e.g., GST) will be added in accordance with Indian law.</li>
              <li>Pricing may change at our discretion with prior notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">6. Cancellation & Refunds</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Full refunds are available for cancellations made ≥ 48 hours before a scheduled session.</li>
              <li>No refunds are granted for cancellations within 48 hours or for missed appointments.</li>
              <li>Refund claims arising from technical issues will be evaluated case-by-case.</li>
              <li>In case a refund is approved, it will be directed to the source account.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">7. Code of Conduct</h2>
            <p>Users must not:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Harass, threaten, or harm Facilitators or other users.</li>
              <li>Share illegal, offensive, or inappropriate content.</li>
              <li>Record sessions without express consent.</li>
              <li>Share or sell account access.</li>
              <li>Use the Platform for unauthorized commercial activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">8. Facilitator Engagement</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Facilitators are independent spiritual advisors, not employees of the Company.</li>
              <li>We make no guarantees as to the quality, accuracy, or outcome of any guidance provided.</li>
              <li>The Company does not vet or certify the qualifications, experience, or credentials of any Facilitator, and makes no representation to their accuracy or suitability.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">9. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All Platform content is protected by applicable intellectual-property laws.</li>
              <li>Reproduction or distribution without prior written consent is prohibited.</li>
              <li>User-generated content remains your property; by posting, you grant the Company a limited license to host and display such content on the Platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">10. Data Privacy</h2>
            <p>Personal data is processed per our Privacy Policy and the Information Technology Act 2000 (India). By using the Platform, you consent to data collection and processing as described therein.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">11. General Disclaimers</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Services are provided "as is" and "as available." No express or implied warranties are made.</li>
              <li>Spiritual or philosophical guidance is not medical, psychological, legal, or financial advice.</li>
              <li>Temporary service interruptions may occur; we do not warrant uninterrupted availability.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, the Company's total liability for any claim shall not exceed the amount you have actually paid for services giving rise to such claim. We are not liable for indirect, incidental, punitive, or consequential damages.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">13. Dispute Resolution</h2>
            <p>Any dispute shall be resolved by arbitration in [City], India under the Arbitration & Conciliation Act 1996. Indian law governs these Terms, and courts in [City], India have exclusive jurisdiction for any permissible judicial proceedings.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">14. Platform Availability</h2>
            <p>We target 99% uptime but do not guarantee uninterrupted service. Scheduled maintenance or force-majeure events may lead to downtime.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">15. Account Termination</h2>
            <p>We may terminate or suspend accounts at our sole discretion. Users may deactivate at any time; unused prepaid services will not be refunded upon termination unless legally required.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">16. Changes to Terms</h2>
            <p>We may revise these Terms periodically. Material changes will be announced via the Platform or email. Continued use after the effective date constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">17. Contact</h2>
            <p>Email: aloha@ahoum.com</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">18. Severability</h2>
            <p>If any provision hereof is held invalid, the remaining provisions remain in full force.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">19. Experimental Nature of Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ahoum is an experimental spiritual-technology platform integrating multiple, unvalidated human-guidance frameworks.</li>
              <li>Features are exploratory and not scientifically or clinically certified.</li>
              <li>The Platform is not a crisis-prevention or emergency-response service.</li>
              <li>Use of experimental features may involve system errors, inaccuracies, or unintended outputs for which the Company shall not be liable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">20. No Professional Advice</h2>
            <p>Unless explicitly stated, Facilitators are not licensed medical or mental-health professionals. All insights are spiritual/philosophical. Always consult qualified professionals for medical, psychological, financial, or legal matters.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">21. User Responsibility & Waiver</h2>
            <p>By using the Platform you:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Assume full responsibility for your choices, actions, and well-being.</li>
              <li>Waive and release the Company from all claims, damages, or liabilities arising from your reliance on Platform content or interactions with facilitators or third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">22. Transactions & Off-Platform Interactions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We do not monitor or guarantee any off-Platform meetings, payments, or arrangements.</li>
              <li>Verification of facilitator credentials, venue safety, and payment security is solely your responsibility.</li>
              <li>The Company bears no liability for disputes, losses, or harm stemming from such interactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">23. No Emergency or Crisis Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>If you experience thoughts of self-harm, suicide, or any other crisis, contact local emergency services immediately.</li>
              <li>Platform content and communications are not substitutes for crisis intervention.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">24. Nature of AI & Infrastructure Fees</h2>
            <p>Payments are primarily for access to Platform infrastructure and AI tools. Any outcomes or interpretations are user-generated and not attributable to the Company.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">25. Indemnity</h2>
            <p>You agree to indemnify, defend, and hold harmless KIRA AUTOMATIONS PRIVATE LIMITED, its officers, employees, and agents from any claim or demand arising out of your misuse of the Platform, violation of these Terms, or interaction with facilitators or third parties.</p>
          </section>

          <div className="bg-foreground/5 p-6 rounded-lg mt-8">
            <p className="font-semibold">By clicking "Accept," creating an account, or otherwise using the Platform, you confirm that you have read, understood, and voluntarily agree to all of the above Terms & Conditions in their entirety.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;

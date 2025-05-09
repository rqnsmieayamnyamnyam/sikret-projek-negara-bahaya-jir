"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPageClient() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">Last Updated: May 1, 2023</p>

              <p className="text-gray-300 mb-6">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the GameServer
                website or services operated by GameServer ("us", "we", "our").
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part
                of the terms, then you may not access the Service.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
              <p className="text-gray-300 mb-6">
                GameServer provides game server hosting services that allow users to rent and manage game servers for
                various games. Our services include but are not limited to server provisioning, management tools,
                technical support, and related services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
              <p className="text-gray-300 mb-6">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
              </p>
              <p className="text-gray-300 mb-6">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password. You agree not to disclose your password to any third party.
                You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
                account.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-6">
                Certain services offered by GameServer require payment. You agree to pay all fees associated with the
                services you select. All payments are non-refundable unless otherwise specified in our Refund Policy.
              </p>
              <p className="text-gray-300 mb-6">
                We use third-party payment processors to bill you through a payment account linked to your account. The
                processing of payments will be subject to the terms, conditions, and privacy policies of the payment
                processors in addition to these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Service Availability and Uptime</h2>
              <p className="text-gray-300 mb-6">
                While we strive to provide uninterrupted service, you acknowledge that the Service may be subject to
                occasional downtime for maintenance, updates, or other technical reasons. We do not guarantee 100%
                uptime but will make reasonable efforts to minimize disruptions.
              </p>
              <p className="text-gray-300 mb-6">
                For specific uptime guarantees, please refer to our Service Level Agreement (SLA) which may vary
                depending on the service plan you have selected.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Acceptable Use Policy</h2>
              <p className="text-gray-300 mb-6">
                You agree not to use our Service for any unlawful purposes or to conduct any unlawful activity,
                including, but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>Distributing malware or other harmful software</li>
                <li>Hosting content that promotes illegal activities</li>
                <li>Attempting to gain unauthorized access to other systems or networks</li>
                <li>Engaging in activities that disrupt or interfere with the Service or its users</li>
                <li>Using the Service to violate the legal rights of others</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Content Responsibility</h2>
              <p className="text-gray-300 mb-6">
                You are solely responsible for all data, content, and resources that you upload, post, or otherwise make
                available through the Service. You agree that you will not upload, post, or otherwise make available
                content that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>Infringes on any proprietary rights of any party</li>
                <li>Is unlawful, threatening, abusive, harassing, defamatory, or invasive of privacy</li>
                <li>
                  Contains software viruses or any other computer code designed to interrupt, destroy, or limit the
                  functionality of any computer software or hardware
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
              <p className="text-gray-300 mb-6">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-300 mb-6">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service or contact our support team to request account
                deletion.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                In no event shall GameServer, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>
                  Unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                  contract, tort (including negligence) or any other legal theory, whether or not we have been informed
                  of the possibility of such damage
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These Terms shall be governed and construed in accordance with the laws of [Your Country], without
                regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300 mb-6">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-300 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-300 mb-6">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms, please contact us at legal@gameserver.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

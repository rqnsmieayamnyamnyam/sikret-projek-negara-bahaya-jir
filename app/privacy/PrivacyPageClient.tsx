"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPageClient() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">Last Updated: May 1, 2023</p>

              <p className="text-gray-300 mb-6">
                At GameServer, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our website and services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We may collect personal information that you voluntarily provide to us when you register for an account,
                express interest in obtaining information about us or our products and services, participate in
                activities on our services, or otherwise contact us.
              </p>
              <p className="text-gray-300 mb-6">
                The personal information that we collect depends on the context of your interactions with us and the
                services, the choices you make, and the products and features you use. The personal information we
                collect may include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing information and payment details</li>
                <li>Account credentials</li>
                <li>Usage data and preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our services, updates, and other information</li>
                <li>Process transactions and send related information</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
                <li>For other purposes with your consent</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-300 mb-6">
                We may share your information with third parties in certain situations, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>With service providers who perform services for us</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
                <li>With business partners with whom we jointly offer products or services</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-6">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our
                services and improve your experience. You can choose to have your computer warn you each time a cookie
                is being sent, or you can choose to turn off all cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We have implemented appropriate technical and organizational security measures designed to protect the
                security of any personal information we process. However, despite our safeguards and efforts to secure
                your information, no electronic transmission over the Internet or information storage technology can be
                guaranteed to be 100% secure.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
              <p className="text-gray-300 mb-6">
                We will only keep your personal information for as long as it is necessary for the purposes set out in
                this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request that we correct any inaccurate personal information</li>
                <li>The right to request that we delete your personal information</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-gray-300 mb-6">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-300 mb-6">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
                information from children under 16. If we learn we have collected or received personal information from
                a child under 16 without verification of parental consent, we will delete that information.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are
                advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-300 mb-6">
                Email: privacy@gameserver.com
                <br />
                Address: 123 Gaming Street, Server City, SC 12345
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

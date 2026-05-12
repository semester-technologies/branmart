// src/components/marketing/PrivacyPolicy.tsx

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="font-display text-5xl font-bold text-[#241717] uppercase mb-12">
          Privacy Policy
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: last updated */}
          <div className="lg:w-44 shrink-0">
            <p className="text-xs text-gray-400 mb-1">Last Updated</p>
            <p className="text-sm text-gray-600">November 11, 2025</p>
          </div>

          {/* Right: content */}
          <div className="flex-1 flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">

            {/* Introduction */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">Introduction</h2>
              <p>
                Branmart ("we," "our," or "us") values your privacy. This Privacy Policy
                explains how we collect, use, and protect your personal information when you
                use our website, platform, or services. By using Branmart, you agree to the
                practices described in this policy.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect information to provide and improve our services. This includes:
              </p>
              <p className="mb-2 text-gray-500">a. Personal Information:</p>
              <ul className="flex flex-col gap-1.5 pl-2 mb-4">
                {["Name, email address, phone number", "Billing and payment details", "Account login information"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
              <p className="mb-2 text-gray-500">b. Usage Data:</p>
              <ul className="flex flex-col gap-1.5 pl-2 mb-4">
                {["Pages visited, clicks, and interactions", "Device type, browser, and IP address", "Cookies and similar tracking technologies"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
              <p className="mb-2 text-gray-500">c. User Content:</p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {["Uploaded images, text, products, and other content you add to your website or account"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use your data for the following purposes:</p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "To provide and improve our services",
                  "To manage your account and subscriptions",
                  "To process payments and invoices",
                  "To send updates, newsletters, and promotional materials (with consent)",
                  "To personalize your experience on Branmart",
                  "To analyze trends and optimize our platform",
                  "To comply with legal obligations and prevent fraud",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                3. Sharing Your Information
              </h2>
              <p className="mb-3">We do not sell your personal information. We may share it in these situations:</p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "With service providers who help operate our platform (e.g., payment processors, hosting providers)",
                  "When required by law or legal processes",
                  "In connection with a merger, acquisition, or sale of assets",
                  "With your consent",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="mb-3">Branmart uses cookies and similar tools to:</p>
              <ul className="flex flex-col gap-1.5 pl-2 mb-3">
                {[
                  "Remember your preferences and login sessions",
                  "Analyze usage patterns and improve our platform",
                  "Deliver personalized content and ads",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
              <p>
                You can manage or disable cookies in your browser settings, but some features
                may not work properly without them.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                5. Data Security
              </h2>
              <p className="mb-3">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="flex flex-col gap-1.5 pl-2 mb-3">
                {["SSL encryption for data transmission", "Secure servers and storage", "Regular monitoring and updates"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
              <p>
                However, no system is completely secure. We cannot guarantee absolute protection.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">6. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have rights to:</p>
              <ul className="flex flex-col gap-1.5 pl-2 mb-3">
                {[
                  "Access, correct, or delete your personal information",
                  "Withdraw consent for marketing communications",
                  "Request data portability",
                  "Object to certain processing activities",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gray-300">•</span>{i}</li>
                ))}
              </ul>
              <p>
                To exercise your rights, contact us at{" "}
                <a href="mailto:privacy@branmart.com" className="underline hover:text-[#cc3602]">
                  privacy@branmart.com
                </a>.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                7. Third-Party Links
              </h2>
              <p>
                Branmart may contain links to third-party websites. We are not responsible for
                the privacy practices or content of these sites.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                8. Children's Privacy
              </h2>
              <p>
                Branmart is not intended for children under 13. We do not knowingly collect
                information from children.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">
                9. Updates to This Policy
              </h2>
              <p>
                We may update this policy from time to time. The latest version is always
                posted on our website with an updated effective date.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">10. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact:</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:privacy@branmart.com" className="underline hover:text-[#cc3602]">
                  privacy@branmart.com
                </a>
              </p>
              <p>Address: 45, Innovation Drive, Lagos, Nigeria</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export const metadata = {
  title: "Privacy Policy — ThreadMint",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Who we are</h2>
          <p>ThreadMint ("we", "us", "our") operates threadmint.com, a custom t-shirt store. Contact us at hello@threadmint.com.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Data we collect</h2>
          <p>When you place an order we collect: your name, email address, shipping address, and order details. We do not collect payment card data directly — payments are processed by third-party providers.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. How we use your data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To fulfil and ship your order</li>
            <li>To communicate with you about your order</li>
            <li>To improve our products and services</li>
          </ul>
          <p className="mt-2">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Data retention</h2>
          <p>We retain your order data for up to 3 years for accounting and legal purposes. You may request deletion at any time by emailing hello@threadmint.com.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Your rights (GDPR)</h2>
          <p>If you are in the EU/EEA, you have the right to access, correct, or delete your personal data. You also have the right to data portability and to object to processing. Contact us at hello@threadmint.com to exercise these rights.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Cookies</h2>
          <p>This site uses only essential cookies required for the site to function. We do not use tracking or advertising cookies.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">7. Changes</h2>
          <p>We may update this policy from time to time. The date at the top of this page will reflect the latest version.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">8. Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@threadmint.com" className="text-emerald-600 underline">hello@threadmint.com</a>.</p>
        </section>
      </div>
    </div>
  );
}

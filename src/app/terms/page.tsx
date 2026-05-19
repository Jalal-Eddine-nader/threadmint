export const metadata = {
  title: "Terms of Service — ThreadMint",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold mb-2">Terms of Service</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance</h2>
          <p>By placing an order with ThreadMint you agree to these Terms of Service. If you do not agree, please do not use our service.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Products & custom orders</h2>
          <p>All t-shirts are printed on demand. For custom orders, you confirm that you own or have the right to use any artwork or text you submit. ThreadMint is not responsible for copyright infringement in customer-supplied designs.</p>
          <p className="mt-2">We reserve the right to refuse any order containing offensive, hateful, or illegal content.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Pricing & payment</h2>
          <p>All prices are in Euros (€) and include VAT where applicable. Payment is required before production begins. We will send you a payment link after confirming your order details.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Production & shipping</h2>
          <p>Standard production time is 1-3 business days. Shipping within the EU takes 2-5 business days. Estimated delivery dates are not guaranteed and may vary.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Returns & refunds</h2>
          <p>Because each shirt is made to order, we do not accept returns unless the item is defective or the wrong item was shipped. If your order arrives damaged or incorrect, contact us within 7 days at hello@threadmint.com with a photo and we will reprint or refund at no cost to you.</p>
          <p className="mt-2">Custom design orders are non-refundable once production has started, unless there is a defect.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Intellectual property</h2>
          <p>ThreadMint's pre-made designs are our intellectual property. You may not reproduce or resell them without written permission. Customer-submitted designs remain the property of the customer.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">7. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, ThreadMint's liability for any claim is limited to the amount you paid for the order in question.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">8. Governing law</h2>
          <p>These terms are governed by the laws of Finland. Any disputes will be resolved in the courts of Finland.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">9. Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@threadmint.com" className="text-emerald-600 underline">hello@threadmint.com</a>.</p>
        </section>
      </div>
    </div>
  );
}

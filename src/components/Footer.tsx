import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="font-bold text-lg">
              Thread<span className="text-emerald-500">Mint</span>
            </span>
            <p className="text-xs text-gray-400 mt-1 max-w-xs">
              Custom t-shirts printed on demand. Wear your idea.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs uppercase tracking-wider text-gray-400">
                Shop
              </span>
              <Link href="/shop" className="text-gray-500 hover:text-gray-900 transition-colors">
                All designs
              </Link>
              <Link href="/order" className="text-gray-500 hover:text-gray-900 transition-colors">
                Custom order
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs uppercase tracking-wider text-gray-400">
                Legal
              </span>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <a
                href="mailto:hello@threadmint.com"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} ThreadMint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

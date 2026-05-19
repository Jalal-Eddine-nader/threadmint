import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <span>
          © {new Date().getFullYear()} Thread<span className="text-emerald-500">Mint</span>. All rights reserved.
        </span>
        <nav className="flex gap-6">
          <Link href="/shop" className="hover:text-gray-900 transition-colors">
            Shop
          </Link>
          <Link href="/order" className="hover:text-gray-900 transition-colors">
            Custom Order
          </Link>
          <a href="mailto:hello@threadmint.com" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

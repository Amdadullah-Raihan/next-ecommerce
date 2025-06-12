// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-10 mx-6 mt-12 text-white bg-gray-800 rounded-t-lg">
      <div className="grid grid-cols-1 gap-8 px-4  md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">Logo</h2>
          <p className="text-sm">
            Your go-to online garments store. Style meets comfort at the right
            price.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Categories</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/category/men" className="hover:text-white">
                Men
              </Link>
            </li>
            <li>
              <Link href="/category/women" className="hover:text-white">
                Women
              </Link>
            </li>
            <li>
              <Link href="/category/kids" className="hover:text-white">
                Kids
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Follow Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 text-xs text-center text-gray-500">
        &copy; {new Date().getFullYear()} Logo. All rights reserved.
      </div>
    </footer>
  );
}

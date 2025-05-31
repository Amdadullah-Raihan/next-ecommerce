// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12 rounded-t-lg flex flex-col items-center mx-6">
      <div className="  px-4 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">eCommerce</h2>
          <p className="text-sm">
            Your go-to online garments store. Style meets comfort at the right
            price.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
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
          <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
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
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
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
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} eCommerce. All rights reserved.
      </div>
    </footer>
  );
}

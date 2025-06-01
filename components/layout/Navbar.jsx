// components/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <nav className="sticky top-0 z-50 m-6 mb-0 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            eCommerce
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="items-center hidden gap-6 md:flex">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>
          <Link href="/category/men" className="transition hover:text-blue-600">
            Men
          </Link>
          <Link
            href="/category/women"
            className="transition hover:text-blue-600"
          >
            Women
          </Link>
          <Link
            href="/category/kids"
            className="transition hover:text-blue-600"
          >
            Kids
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <div className="border border-gray-600 rounded-full">
              <Image
                src="/logo.png"
                alt="DP"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-block px-6 py-2 text-white transition bg-orange-500 rounded-lg hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="px-4 pb-4 space-y-2 md:hidden">
          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="/category/men" className="block hover:text-blue-600">
            Men
          </Link>
          <Link href="/category/women" className="block hover:text-blue-600">
            Women
          </Link>
          <Link href="/category/kids" className="block hover:text-blue-600">
            Kids
          </Link>
          <Link href="/cart" className="block hover:text-blue-600">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

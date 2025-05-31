// components/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50 m-6 mb-0 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/category/men" className="hover:text-blue-600 transition">
            Men
          </Link>
          <Link
            href="/category/women"
            className="hover:text-blue-600 transition"
          >
            Women
          </Link>
          <Link
            href="/category/kids"
            className="hover:text-blue-600 transition"
          >
            Kids
          </Link>
          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart
          </Link>
        </div>
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
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:black/70 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
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

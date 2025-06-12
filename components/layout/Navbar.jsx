// components/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";
import { useSelector } from "react-redux";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 p-6 pb-2 bg-white dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between px-4 py-3 mx-auto bg-gray-100 rounded-lg dark:bg-gray-800 max-w-7xl">
        <div className="flex items-center gap-2 text-white">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Logo
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
        <div className="relative flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <div
              onClick={() => {
                setIsUserMenuOpen(!isUserMenuOpen);
              }}
              className="border border-gray-600 rounded-full cursor-pointer"
            >
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

          <div
            className={cn(
              "absolute rounded-lg shadow-2xl dark:bg-gray-700 p-6 w-64 z-50 transform transition-all duration-300 ease-in-out",
              isUserMenuOpen
                ? "opacity-100 translate-y-2 scale-100 pointer-events-auto right-6 top-full"
                : "opacity-0 translate-y-0 scale-95 pointer-events-none right-6 top-full"
            )}
          >
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-300">Signed in as</p>
              <p className="font-semibold text-white">{user?.email}</p>

              <hr className="my-2 border-gray-600" />

              <button className="px-4 py-2 text-sm text-left transition rounded hover:bg-gray-600">
                Profile
              </button>
              <button className="px-4 py-2 text-sm text-left transition rounded hover:bg-gray-600">
                Orders
              </button>
              <button className="px-4 py-2 text-sm text-left transition rounded hover:bg-gray-600">
                Settings
              </button>

              <hr className="my-2 border-gray-600" />

              <button className="px-4 py-2 text-sm text-left text-red-400 transition rounded hover:bg-red-900">
                Logout
              </button>
            </div>
          </div>
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

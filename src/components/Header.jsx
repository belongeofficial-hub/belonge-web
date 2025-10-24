"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* ✅ Centered Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/belonge-logo.png"
              alt="Belonge logo"
              width={180}
              height={60}
              className="w-auto h-10 md:h-12"
              priority
            />
          </Link>
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium ml-auto">
          <Link href="/features" className="hover:text-purple-600 transition">
            Features
          </Link>
          <Link href="/communities" className="hover:text-purple-600 transition">
            Communities
          </Link>
          <Link href="/events" className="hover:text-purple-600 transition">
            Events
          </Link>
          <Link href="/partnerships" className="hover:text-purple-600 transition">
            Partnerships
          </Link>
          <Link href="/support" className="hover:text-purple-600 transition">
            Support
          </Link>

          {/* ✅ Login + Join Belonge on the Right */}
          <div className="flex items-center gap-4 ml-4">
            <Link
              href="/auth"
              className="text-sm font-semibold text-gray-700 hover:text-purple-700 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/auth"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              Join Belonge
            </Link>
          </div>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-center py-5 gap-5 text-gray-800 font-medium">
            <Link href="/features" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="/communities" onClick={() => setIsOpen(false)}>
              Communities
            </Link>
            <Link href="/events" onClick={() => setIsOpen(false)}>
              Events
            </Link>
            <Link href="/partnerships" onClick={() => setIsOpen(false)}>
              Partnerships
            </Link>
            <Link href="/support" onClick={() => setIsOpen(false)}>
              Support
            </Link>

            {/* ✅ Mobile Login + Join */}
            <div className="flex flex-col items-center gap-3 pt-3 border-t border-gray-200 w-4/5">
              <Link
                href="/auth"
                className="text-purple-700 font-semibold text-base"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/auth"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
                onClick={() => setIsOpen(false)}
              >
                Join Belonge
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

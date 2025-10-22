"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/belonge-logo.png"
            alt="Belonge logo"
            width={320}
            height={100}
            className="w-auto h-12 md:h-16 lg:h-20"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
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

          {/* Support Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-purple-600 transition flex items-center gap-1">
              Support ▾
            </button>

            <div
              className={`absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-100 z-50 transition-all duration-200 ease-out ${
                isDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                href="/faq"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsDropdownOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsDropdownOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/help"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsDropdownOpen(false)}
              >
                Help Centre
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 ml-4">
            <Link
              href="/login"
              className="text-purple-700 font-semibold hover:text-purple-900 transition"
            >
              Login
            </Link>
           <Link
  href="/join"
  className="ml-4 bg-gradient-to-r from-[#7F56D9] to-[#30B6A4] text-white px-5 py-2 rounded-full font-semibold shadow-sm hover:opacity-90 transition transform hover:-translate-y-0.5"
>
  Join Now
</Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 transition"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 gap-4 text-gray-800 font-medium">
            <Link href="/features" onClick={() => setIsMobileOpen(false)}>
              Features
            </Link>
            <Link href="/communities" onClick={() => setIsMobileOpen(false)}>
              Communities
            </Link>
            <Link href="/events" onClick={() => setIsMobileOpen(false)}>
              Events
            </Link>
            <Link href="/partnerships" onClick={() => setIsMobileOpen(false)}>
              Partnerships
            </Link>
            <Link href="/support" onClick={() => setIsMobileOpen(false)}>
              Support
            </Link>

            {/* CTA Buttons for Mobile */}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/login"
                onClick={() => setIsMobileOpen(false)}
                className="text-purple-700 font-semibold hover:text-purple-900 transition"
              >
                Login
              </Link>
              <Link
                href="/join"
                onClick={() => setIsMobileOpen(false)}
                className="bg-gradient-to-r from-[#7F56D9] to-[#30B6A4] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
              >
                Join Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/70 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
        <Image
  src="/belonge-logo.png"
  alt="Belonge logo"
  width={240}
  height={80}
  className="w-auto h-12 md:h-16 lg:h-20"
  priority
/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/features" className="hover:text-purple-600 transition">Features</Link>
          <Link href="/communities" className="hover:text-purple-600 transition">Communities</Link>
          <Link href="/events" className="hover:text-purple-600 transition">Events</Link>
          <Link href="/partnerships" className="hover:text-purple-600 transition">Partnerships</Link>
          <div className="relative group">
            <button className="hover:text-purple-600 transition">Support ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40">
              <Link href="/faq" className="block px-4 py-2 hover:bg-gray-50">FAQ</Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-50">Contact</Link>
              <Link href="/help" className="block px-4 py-2 hover:bg-gray-50">Help Centre</Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 gap-4 text-gray-800 font-medium">
            <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="/communities" onClick={() => setIsOpen(false)}>Communities</Link>
            <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/partnerships" onClick={() => setIsOpen(false)}>Partnerships</Link>
            <Link href="/support" onClick={() => setIsOpen(false)}>Support</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="fixed w-full bg-white/90 backdrop-blur-xl border-b border-white/30 z-50 shadow-sm h-[64px] md:h-[68px] flex items-center justify-between px-6">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        
        {/* Left: Login (mobile only) */}
        <Link
          href="/login"
          className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition md:hidden"
        >
          Login
        </Link>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:flex-shrink-0">
          <Link href="/" className="flex items-center justify-center">
    <div className="relative flex justify-center items-center w-[260px] h-[100px] sm:w-[320px] sm:h-[110px] lg:w-[440px] lg:h-[140px]">
  <Image
    src="/belonge-logo.png"
    alt="Belonge logo"
    fill
    priority
    className="object-contain scale-125 md:scale-150"
  />
</div>


          </Link>
        </div>

        {/* Right: Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium ml-auto">
          <Link href="/features" className="hover:text-purple-600 transition">Features</Link>
          <Link href="/communities" className="hover:text-purple-600 transition">Communities</Link>
          <Link href="/events" className="hover:text-purple-600 transition">Events</Link>
          <Link href="/partnerships" className="hover:text-purple-600 transition">Partnerships</Link>
          <Link href="/support" className="hover:text-purple-600 transition">Support</Link>
          <Link href="/login" className="hover:text-purple-600 transition font-semibold">Login</Link>
          <Link
            href="/join"
            className="bg-gradient-to-r from-purple-500 to-teal-400 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Join Now
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-center py-5 gap-5 text-gray-800 font-medium">
            <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="/communities" onClick={() => setIsOpen(false)}>Communities</Link>
            <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/partnerships" onClick={() => setIsOpen(false)}>Partnerships</Link>
            <Link href="/support" onClick={() => setIsOpen(false)}>Support</Link>

            <div className="flex flex-col items-center gap-3 pt-3 border-t border-gray-200 w-4/5">
              <Link
                href="/login"
                className="text-purple-700 font-semibold text-base"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/join"
                className="bg-gradient-to-r from-purple-500 to-teal-400 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
                onClick={() => setIsOpen(false)}
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

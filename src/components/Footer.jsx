"use client";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3a2370] via-[#2d1c5b] to-[#106b5d] text-white py-14 px-6">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Connect With Us */}
        <div className="transition-transform duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <ul className="space-y-2 text-white/90">
            <li>📧 connect@belonge.co.uk</li>
            <li>📞 +44 (0)20 1234 5678</li>
            <li>📍 London, United Kingdom</li>
          </ul>
        </div>

        {/* Company */}
        <div className="transition-transform duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white/90">
            <li><a href="/about" className="hover:text-white transition">About Belonge</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="/partnerships" className="hover:text-white transition">Partnerships</a></li>
            <li><a href="/volunteer" className="hover:text-white transition">Volunteer</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="transition-transform duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-white/90">
            <li><a href="/privacy" className="hover:text-white transition">🔒 Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">⚖️ Terms & Conditions</a></li>
            <li><a href="/cookies" className="hover:text-white transition">🍪 Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-8 text-3xl">
        <a
          href="https://www.tiktok.com/@belongeofficial"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#69C9D0] transform hover:-translate-y-1 transition duration-300"
        >
          <SiTiktok />
        </a>
        <a
          href="https://www.instagram.com/belongeofficial"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transform hover:-translate-y-1 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@BelongeOfficial"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transform hover:-translate-y-1 transition duration-300"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/company/belonge"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transform hover:-translate-y-1 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-white/30 w-3/4 mx-auto"></div>

      {/* Copyright */}
      <div className="text-center mt-4 transition-transform duration-300 hover:-translate-y-1">
        <p className="text-sm font-medium">
          © 2025 Belonge — Building a World Where Everyone Belongs 💜
        </p>
        <p className="text-xs text-white/80 mt-1">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

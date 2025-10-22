'use client';
import React, { useState } from 'react';

export default function Header() {
  return (
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 text-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <img
          src="/belonge-logo.png"
          alt="Belonge Logo"
          className="h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />

        {/* Navigation */}
       {/* Navigation */}
<nav className="flex gap-10 text-[#1A1A1A] font-medium tracking-wide items-center relative">
  <a href="#features" className="hover:text-[#7B61FF] transition-colors">
    Features
  </a>
  <a href="#communities" className="hover:text-[#7B61FF] transition-colors">
    Communities
  </a>
  <a href="#events" className="hover:text-[#7B61FF] transition-colors">
    Events
  </a>

  {/* Support Dropdown */}
  <div className="relative group">
    <button className="hover:text-[#7B61FF] transition-colors">
      Support ▾
    </button>

    {/* Dropdown items */}
    <div
      className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg rounded-lg w-48 py-2 z-50"
    >
      <a
        href="/help/faqs"
        className="px-4 py-2 hover:bg-purple-50 hover:text-[#7B61FF] transition"
      >
        FAQs & Guides
      </a>
      <a
        href="/help/contact"
        className="px-4 py-2 hover:bg-purple-50 hover:text-[#7B61FF] transition"
      >
        Contact Us
      </a>
      <a
        href="/help/wellbeing"
        className="px-4 py-2 hover:bg-purple-50 hover:text-[#7B61FF] transition"
      >
        Wellbeing & Safety
      </a>
      <a
        href="/help/technical"
        className="px-4 py-2 hover:bg-purple-50 hover:text-[#7B61FF] transition"
      >
        Technical Help
      </a>
    </div>
  </div>
</nav>
      </div>
   <style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.25s ease-in-out;
  }
`}</style>
    </header>
  );
}


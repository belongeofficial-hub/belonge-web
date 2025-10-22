import Image from "next/image";

export default function Footer() {
  return (
<footer className="bg-gradient-to-r from-[#7F56D9] to-[#30B6A4] text-white py-16 px-6 overflow-visible rounded-none">
      {/* Top Section: Logo + Columns */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left items-start">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/belonge-logo.png"
            alt="Belonge logo"
            width={150}
            height={60}
            className="mb-4"
          />
          <p className="text-sm opacity-90 leading-relaxed max-w-xs">
            Building a world where everyone belongs 🤝  
            Connect. Grow. Thrive.
          </p>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <p>📧 support@belonge.co.uk</p>
          <p>📞 +44 (0)20 1234 5678</p>
          <p>📍 London, United Kingdom</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Belonge</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Partnerships</a></li>
            <li><a href="#" className="hover:underline">Volunteer</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">🔒 Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">⚖️ Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">🍪 Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-2xl">
        <a href="#" aria-label="Instagram" className="hover:scale-110 transition">📸</a>
        <a href="#" aria-label="TikTok" className="hover:scale-110 transition">🎵</a>
        <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition">💼</a>
        <a href="#" aria-label="YouTube" className="hover:scale-110 transition">▶️</a>
      </div>

     {/* Divider */}
<div className="my-8 border-t border-white/30 w-3/4 mx-auto"></div>

{/* Copyright */}
<div className="w-full bg-black py-4 mt-0 text-center text-white relative z-50">
  <p className="text-sm font-medium">
    © 2025 Belonge — Building a World Where Everyone Belongs 💜
  </p>
  <p className="text-xs text-gray-300 mt-1">
    All rights reserved.
  </p>
</div>
</footer>
  );
}

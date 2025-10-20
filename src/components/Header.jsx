export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-[#E8F5FF]/80 to-[#F2E8FF]/80 border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <img
          src="/belonge-logo.png"
          alt="Belonge Logo"
          className="h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />

        {/* Navigation */}
        <nav className="flex gap-10 text-[#1A1A1A] font-medium tracking-wide">
          <a href="#features" className="hover:text-[#7B61FF] transition-colors">
            Features
          </a>
          <a href="#communities" className="hover:text-[#7B61FF] transition-colors">
            Communities
          </a>
          <a href="#events" className="hover:text-[#7B61FF] transition-colors">
            Events
          </a>
          <a href="#support" className="hover:text-[#7B61FF] transition-colors">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}


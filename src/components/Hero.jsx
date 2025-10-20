export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-[#00C4CC] to-[#7B61FF] text-center text-white px-6">
      
      {/* Logo */}
      <div className="mb-10">
        <img
          src="/belonge-logo.png"
          alt="Belonge Logo"
          className="h-28 w-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.9)] brightness-110"
        />
      </div>

      {/* Tagline */}
      <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 max-w-3xl">
        You’re Never Alone. <br />
        <span className="font-bold text-white">You Belonge.</span>
      </h1>

      {/* Subtext */}
      <p className="max-w-xl text-lg opacity-90 mb-8">
        Connect through your community, events, networking, and support. <br />
        Belonge anywhere, grow everywhere.
      </p>

      {/* CTA */}
      <a
        href="#join"
        className="mt-4 bg-white text-[#7B61FF] font-semibold px-10 py-3 rounded-full shadow-lg border border-white/40 hover:bg-[#7B61FF] hover:text-white hover:shadow-xl transition-all duration-300"
      >
        Get Started
      </a>
    </section>
  );
}

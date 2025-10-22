'use client';
export default function Hero() {
  return (
<section className="relative pt-24 pb-16 text-center bg-gradient-to-b from-[#3BC9DB] to-[#7048E8] text-white">
  <div className="relative z-10">
      
      {/* Logo */}
      <div className="mb-10">
        <img
          src="/belonge-logo.png"
          alt="Belonge Logo"
          className="h-28 w-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.9)] brightness-110"
        />
      </div>

      {/* Tagline */}
 <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg animate-fadeInSoft delay-200">
  Welcome to <span className="text-white">Belonge</span>.
</h1>

<p className="text-sm md:text-base text-gray-40 text-center mb-6 drop-shadow-lg animate-fadeIn delay-400 max-w-2xl mx-auto leading-relaxed">
  A safe and uplifting space built to end loneliness. Here, you can find your people, nurture real connections,
  find companionship, and grow with care and support.
</p>

<p
  className="text-sm md:text-base text-gray-100 text-center mb-10 animate-fadeIn delay-400"
>
  Connect through your community, events, networking, and support. <br />
</p>


      {/* CTA */}
  <button
  onClick={() =>
    document
      .getElementById('onboarding')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
  className="mt-6 bg-white text-[#7B61FF] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#f3f0ff] transition"
>
  Get Started
</button>
  </div>

    </section>
  );
}

'use client';
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
 <h1
  className="text-4xl md:text-6xl font-semibold mb-4 text-center text-white opacity-0 animate-fadeIn"
>
  Welcome to <span className="text-white">Belonge</span>.
</h1>

<p
  className="text-base md:text-lg max-w-2xl mx-auto text-gray-50 leading-relaxed font-light mb-6 text-center opacity-0 animate-fadeIn delay-200"
>
  A safe and uplifting space built to end loneliness.
  Here, you can find your people, nurture real connections,
  find companionship, and grow with care and support.
</p>

<p
  className="text-sm md:text-base text-gray-100 text-center mb-10 opacity-0 animate-fadeIn delay-400"
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

    </section>
  );
}

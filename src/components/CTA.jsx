
'use client';
import Link from 'next/link';export default function CTA() {
  return (
    <section
      id="cta"
      className="relative flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-[#00C4CC] to-[#7B61FF] text-white"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-3xl px-6">
        {/* Headline */}
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Ready to Belong?
        </h2>

        {/* Subtext */}
        <p className="text-lg mb-10 opacity-90 leading-relaxed">
          Join thousands of people who have found their community through
          Belonge. Your next meaningful connection is just a click away.
        </p>

        {/* Button */}
      
 <Link href="/join-the-waitlist"
  className="inline-block bg-white text-[#7B61FF] font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-[#f3f0ff] transition"
>
  Join Now
</Link>
      </div>
    </section>
  );
}


'use client';

import { useState, useEffect } from 'react';

export default function JoinPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    interests: '',
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  // 🎉 Trigger confetti when form is successfully submitted
useEffect(() => {
  if (!done) return; // Only run when done becomes true

  import('canvas-confetti').then((mod) => {
    const confetti = mod.default;

    // First small burst
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.3 },
      ticks: 200,
      scalar: 0.8,
    });

    // Second lighter burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.35 },
        ticks: 180,
        scalar: 0.7,
      });
    }, 200);
  });
}, [done]);

  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.';
    if (!form.agree) return 'Please agree to be contacted.';
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
     const res = await fetch('/api/join-waitlist', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setDone(true);
      // ✅ Trigger welcome email after successful join
await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
  }),
});
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

 if (done) {
  const firstName = form.name.trim().split(/\s+/)[0] || 'there'; // 👈 adds first name support

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          You’re on the list!
        </h1>

        <p className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
          Welcome to Belonge 💜
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Thank you, <span className="font-medium">{firstName}</span>.  
          We’ll email updates to{" "}
          <span className="font-medium text-slate-800">{form.email}</span>.
        </p>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-2.5 bg-black text-white rounded-xl transition hover:opacity-90 active:translate-y-[1px]"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}



  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-xl w-full bg-white shadow-sm rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Join the Belonge Waitlist
        </h1>
        <p className="mt-2 text-slate-600">
          Be the first to know when we launch in your city.
        </p>

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">City</label>
            <input
              name="city"
              value={form.city}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="London, Manchester…"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Interests (groups you’d like)
            </label>
            <textarea
              name="interests"
              value={form.interests}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="e.g., business networking, women in tech, faith groups, football meet-ups…"
            />
          </div>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={onChange}
              className="mt-1 h-5 w-5 rounded border-slate-300"
            />
            <span className="text-sm text-slate-600">
              I’m happy to receive emails about Belonge. I can unsubscribe anytime.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black text-white font-medium py-3 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Submitting…' : 'Join the Waitlist'}
          </button>
        </form>
      </div>
    </main>
  );
}

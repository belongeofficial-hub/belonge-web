import Link from "next/link";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50 text-gray-800 px-6 py-24">
      <section className="max-w-6xl mx-auto text-center space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
          Features That Help You Belong 💜
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Belonge brings together everything you need to connect, grow,
          and build real relationships — online and offline.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 text-left">

          <Link
            href="/features/communities"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition block"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Communities 🤝
            </h2>
            <p>
              Find people who share your interests and background. Build
              meaningful friendships in your new environment.
            </p>
          </Link>

          <Link
            href="/features/events"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition block"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Events & Meetups 🎉
            </h2>
            <p>
              Attend verified local events and workshops designed to help
              you meet others and connect in real life.
            </p>
          </Link>

          <Link
            href="/features/circles"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition block"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Belonge Circles 💬
            </h2>
            <p>
              Create small private circles for mentorship, hobbies, or
              support. A safe space for deeper connection.
            </p>
          </Link>

          <Link
            href="/features/support"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition block"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Support Spaces 🕊️
            </h2>
            <p>
              Access emotional and practical support from trusted
              counsellors and peers — all in a safe environment.
            </p>
          </Link>

          <Link
            href="/features/perks"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition block"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Partner Perks 🎁
            </h2>
            <p>
              Enjoy exclusive benefits and opportunities from our partner
              universities, councils, and wellbeing brands.
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}

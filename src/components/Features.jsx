export default function Features() {
  const features = [
    { icon: '🛡️', title: 'Trusted & Safe', text: 'Verified profiles and secure connections ensure authenticity.' },
    { icon: '📍', title: 'Local Focus', text: 'Connect with people and events near you.' },
    { icon: '📈', title: 'Personal Growth', text: 'Expand your horizons through shared experiences.' },
  ];

  return (
    <section className="py-20 bg-white text-center">

      <h2 className="text-4xl font-bold mb-4">Why Choose Belonge?</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-12">
        We’re more than just another social app — we’re your trusted partner in building authentic connections.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {features.map((f) => (
          <div key={f.title} className="bg-white rounded-2xl shadow-sm hover:shadow-md p-8 border border-gray-100">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

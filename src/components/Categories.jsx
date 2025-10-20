export default function Categories() {
  const categories = [
    { icon: '📅', title: 'Events', text: 'Discover local meetups and activities in your area.', link: 'Explore Events' },
    { icon: '❤️', title: 'Dating', text: 'Find meaningful connections with people who share your values.', link: 'Start Dating' },
    { icon: '🤝', title: 'Networking', text: 'Build your professional circle and open new opportunities.', link: 'Join Network' },
    { icon: '👥', title: 'Community', text: 'Join groups that match your interests and passions.', link: 'Explore Groups' },
  ];

  return (
    <section id="communities" className="py-24 text-center bg-white">
      <h2 className="text-4xl font-bold mb-4">Discover Your Community</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-12">
        Choose how you want to connect and find your people in every corner of life.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {categories.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl shadow-sm hover:shadow-md p-8 border border-gray-100">
            <div className="text-5xl mb-4">{c.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
            <p className="text-gray-600 mb-4">{c.text}</p>
            <a href="#" className="text-belongeBlue font-medium">{c.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

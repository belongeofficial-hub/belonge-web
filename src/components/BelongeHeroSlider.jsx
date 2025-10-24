"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function BelongeHeroSlider() {
  const slides = [
    {
      video: "/videos/belonge-hero1.mp4",
      text: "Welcome to Belonge 🤝",
      subtext: "Find Your People. Grow Your Career. Find Your Companion.",
          overlay: "bg-black/60", // darker for this one only

    },
    {
      video: "/videos/belonge-hero2.mp4",
      text: "Connection in Diversity 🌍",
      subtext: "Where friendships begin and belonging grows.",
    },
    {
      video: "/videos/belonge-hero3.mp4",
      text: "A Place to Feel Seen 💫",
      subtext: "For students, newcomers, and dreamers alike.",
    },
    {
      video: "/videos/belonge-hero4.mp4",
      text: "Together, We Belonge ❤️",
      subtext: "Build real connections — online and offline.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <AnimatePresence>
        <motion.video
          key={slides[current].video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <source src={slides[current].video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* Gradient overlay */}
{/* Dynamic overlay */}
<div
  className={`absolute inset-0 ${
    current === 0
      ? "bg-black/70" // strong dark overlay for the first video only
      : "bg-gradient-to-br from-[#000000]/40 to-[#000000]/20" // soft overlay for others
  } mix-blend-overlay`}
></div>


      {/* Text content */}
  {/* Text content */}
<div className="relative z-10 text-center px-6">
  <motion.h1
    key={slides[current].text}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className={`font-bold mb-4 text-white ${
      current === 0
        ? "text-6xl drop-shadow-[0_6px_14px_rgba(0,0,0,1)]" // larger + stronger shadow for first slide
        : "text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
    }`}
  >
    {slides[current].text}
  </motion.h1>

  <motion.p
    key={slides[current].subtext}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className={`text-white ${
      current === 0
        ? "text-2xl drop-shadow-[0_3px_10px_rgba(0,0,0,1)]"
        : "text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
    }`}
  >
    {slides[current].subtext}
  </motion.p>
</div>

    </section>
  );
}

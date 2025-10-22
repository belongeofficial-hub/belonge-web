'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function Onboarding() {
  const [choice, setChoice] = useState('');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const router = useRouter();

  

  const options = [
  { value: 'friends', label: 'Make Friends', icon: '\u{1F4AC}' },          // 💬
  { value: 'career', label: 'Grow My Career', icon: '\u{1F4BC}' },        // 💼
  { value: 'love', label: 'Find Love', icon: '\u{1F496}' },               // 💖
  { value: 'exploreEvents', label: 'Explore Local Events', icon: '\u{1F39F}\uFE0F' }, // 🎟️
  { value: 'community', label: 'Find My Community', icon: '\u{1FAF6}' },  // 🫶
];



  const handleSelect = (value) => {

    setChoice(value);
    setTimeout(() => setShowWaitlist(true), 400);
  };

  return (
    <section
      id="onboarding"
      className="flex flex-col items-center text-center py-24 bg-gradient-to-b from-[#fafaff] to-[#f8f7ff] px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8"
      >
        👋 What brings you to <span className="text-purple-600">Belonge?</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-8">
        {options.map((opt) => (
          <motion.button
            key={opt.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(opt.value)}
            className={`px-4 py-3 rounded-xl border text-sm sm:text-base font-medium transition
              ${
                choice === opt.value
                  ? 'bg-purple-600 text-white shadow-md border-purple-600'
                  : 'bg-white hover:bg-purple-50 border-gray-200 text-gray-700'
              }`}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Beautiful! You’ll love what we’re building for that. 💙 <br />
              Want early access?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/join-the-waitlist')}

              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition"
            >
              ✨ Join the Waitlist
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

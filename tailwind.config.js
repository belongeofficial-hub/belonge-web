/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        belongeBlue: '#007AFF',
        belongeTeal: '#00C4CC',
        belongePurple: '#7B61FF',
        belongeDark: '#1A1A1A',
      },
      backgroundImage: {
        'belonge-gradient': 'linear-gradient(135deg, #00C4CC, #7B61FF)',
      },
    },
  },
  plugins: [],
};

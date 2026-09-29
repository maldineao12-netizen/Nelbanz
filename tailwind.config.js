/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nelbanz: {
          blue: '#0878E8',
          indigo: '#1800A8',
          deep: '#080A45',
          navy: '#00081B',
          accent: '#00D2FF',
          card: '#0A102A',
          border: '#1E295D'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

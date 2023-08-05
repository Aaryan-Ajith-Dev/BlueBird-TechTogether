/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#111111',
        'secondary-white': '#c7c7c7',
        'op-black':'#111111'
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
}

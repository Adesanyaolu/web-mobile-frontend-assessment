/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sf-regular': ['SFProDisplay-Regular', 'Inter'],
        'sf-medium': ['SFProDisplay-Medium', 'Inter'],
        'sf-bold': ['SFProDisplay-Bold', 'Inter'],
        'inter': ['Inter'],
      },
      colors: {
        'primary': '#33D49D',
        'secondary': '#4ECDC4',
        'background': '#F7FFF7',
        'text': '#1A1A1A',
      },
    },
  },
  plugins: [],
}


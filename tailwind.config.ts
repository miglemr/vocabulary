import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#F7F7F6',
        'light-green': '#B5D1CF',
        'light-pink': '#E7CCD2',
        'dark-pink': '#D1B6BC',
      },
    },
  },
  plugins: [],
}
export default config

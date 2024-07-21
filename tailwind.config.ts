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
        'light-green': '#BED1CF',
        'light-pink': '#F1DDE2',
        'dark-pink': '#F0D5DC',
      },
    },
  },
  plugins: [],
}
export default config

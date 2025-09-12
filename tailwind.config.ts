import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Times New Roman', 'Times', 'Liberation Serif', 'serif'],
        'serif': ['Times New Roman', 'Times', 'Liberation Serif', 'serif'],
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
} satisfies Config;

export default config;

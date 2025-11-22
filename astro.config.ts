import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tompats.github.io',
  base: '/portfolio',
  integrations: [tailwind({ applyBaseStyles: false })],
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cruiseresearchgroup.github.io',
  base: '/infectious-disease-bias',
  output: 'static',
  compressHTML: true,
});

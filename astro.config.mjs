import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import codeTheme from './src/lib/code-theme.mjs';

export default defineConfig({
  site: 'https://lutaria.github.io',
  base: '/tech-blog',
  trailingSlash: 'always',
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: codeTheme },
  },
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://antonoshurek.github.io',
	base: '/oshurek.dev/',
	integrations: [mdx(), sitemap()],
});

import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import critters from 'astro-critters'

// Tailwind is wired via postcss.config.cjs + src/styles/global.css instead of
// the EOL @astrojs/tailwind integration.
// https://astro.build/config
export default defineConfig({
	site: 'https://theprofessionalswindowcleaning.com',
	integrations: [robotsTxt(), sitemap(), critters()]
})

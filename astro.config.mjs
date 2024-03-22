import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import critters from 'astro-critters'

// https://astro.build/config
export default defineConfig({
	site: 'https://theprofessionalswindowcleaning.com',
	integrations: [tailwind(), robotsTxt(), sitemap(), critters()]
})

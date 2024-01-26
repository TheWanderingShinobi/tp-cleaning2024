import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import robotsTxt from 'astro-robots-txt';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://theprofessionalswindowcleaning.com/',
  integrations: [tailwind(), robotsTxt(), sitemap(), compress()],
  output: 'server',
  adapter: cloudflare(),
  imageService: 'passthrough',
});
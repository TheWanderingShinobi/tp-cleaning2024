/*
 * PostCSS config. Runs Tailwind v3 as a PostCSS plugin now that the
 * @astrojs/tailwind integration (EOL) has been removed. Astro/Vite auto-loads
 * this from the project root. Tailwind reads tailwind.config.mjs as usual.
 * .cjs extension is required because package.json sets "type": "module".
 */
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}

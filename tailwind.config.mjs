/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
		  'dark-grey': '#383838',
		  'white': '#f5f5f5',
		  'blue': '#3275a6',
		  'coral': '#e7937f',
		  'transparent': 'transparent',
		},
		extend: {
			gradientColorStopPositions: {
				0: '0%',
				100: '100%',
			}
		},
	},
	plugins: [],
}

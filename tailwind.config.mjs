/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
		  'dark-grey': '#383838',
		  'white': '#f5f5f5',
		  'blue': '#3275a6',
		  'dark-blue': '#0a1e32',
		  'coral': '#f05656',
		  'transparent': 'transparent',
		  'black': '#000000',
		  'light-green': '#42b883',
		  'green': '#004738',
		  'purple': '#661fb8',
		},
		extend: {
			gradientColorStopPositions: {
				0: '0%',
				100: '100%',
			}
		},
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			'roboto': ['Roboto', 'sans-serif'],
			'roboto-slab': ['Roboto Slab', 'serif'],
		}
	},
	plugins: [],
}

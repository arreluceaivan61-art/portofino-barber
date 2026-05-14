/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// El dorado premium para PortoFino
				'gold': {
					500: '#C5A059',
					600: '#A68648',
				},
				// Un negro mate más elegante que el puro
				'matte': '#0F0F0F',
			},
			fontFamily: {
				// Clase: font-title (Look clásico y robusto)
				'title': ['Cinzel', 'serif'],
				// Clase: font-accent (Para cursivas y detalles elegantes)
				'accent': ['Playfair Display', 'serif'],
				// Clase: font-sans (La base limpia para lectura)
				'sans': ['Montserrat', 'sans-serif'],
			},
			letterSpacing: {
				// Para un look más lujoso en los títulos
				'premium': '0.15em',
			}
		},
	},
	plugins: [],
}

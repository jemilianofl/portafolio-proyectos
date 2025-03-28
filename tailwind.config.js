/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					cyan: '#0CFFE1',
					purple: '#BD00FF',
					pink: '#FF0099',
					blue: '#00A3FF',
					yellow: '#FAFF00'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%': { 
						boxShadow: '0 0 5px rgba(12, 255, 225, 0.5), 0 0 10px rgba(12, 255, 225, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(12, 255, 225, 0.8), 0 0 20px rgba(12, 255, 225, 0.5), 0 0 30px rgba(12, 255, 225, 0.3)'
					},
					'100%': { 
						boxShadow: '0 0 5px rgba(12, 255, 225, 0.5), 0 0 10px rgba(12, 255, 225, 0.3)'
					}
				},
				'text-flicker': {
					'0%, 100%': { opacity: '1' },
					'92%': { opacity: '1' },
					'93%': { opacity: '0.8' },
					'94%': { opacity: '1' },
					'95%': { opacity: '0.9' },
					'96%': { opacity: '1' },
					'97%': { opacity: '0.9' },
					'98%': { opacity: '1' },
					'99%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'text-flicker': 'text-flicker 2s linear infinite'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}


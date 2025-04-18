import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { colors } from './data/config/colors';

const config: Config = {
  darkMode: ['class', 'class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
			times: ['"Times New Roman"', 'Times', 'serif'],
			roboto: ['Roboto', 'sans-serif'],
  			sans: ['var(--font-space-default)', ...fontFamily.sans],
  			display: ['var(--font-space-display)', ...fontFamily.sans],
  			cursive: ['cursive']
  		},
  		colors: {
  			primary: {
  				'100': 'colors.primary.lighter',
  				'200': 'colors.primary.lighter',
  				'300': 'colors.primary.light',
  				'400': 'colors.primary.light',
  				'500': 'colors.primary.main',
  				'600': 'colors.primary.main',
  				'700': 'colors.primary.dark',
  				'800': 'colors.primary.dark',
  				'900': 'colors.primary.darker'
  			},
  			secondary: {
  				'100': 'colors.secondary.lighter',
  				'200': 'colors.secondary.lighter',
  				'300': 'colors.secondary.light',
  				'400': 'colors.secondary.light',
  				'500': 'colors.secondary.main',
  				'600': 'colors.secondary.main',
  				'700': 'colors.secondary.dark',
  				'800': 'colors.secondary.dark',
  				'900': 'colors.secondary.darker'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'colors.primary.dark',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			}
  		},
  		screens: {
  			'2xl': '1400px'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			marquee: '30s marquee linear infinite',
  			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		}
  	}
  },

  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;

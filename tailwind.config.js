/* eslint-disable no-undef */
const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      fontSize: {
        heading1: [
          '80px',
          {
            lineHeight: '80px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        heading2: [
          '60px',
          {
            lineHeight: '60px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        heading3: [
          '40px',
          {
            lineHeight: '44px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        heading4: [
          '30px',
          {
            lineHeight: '34px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        heading5: [
          '24px',
          {
            lineHeight: '28px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        heading6: [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        body: [
          '16px',
          {
            lineHeight: '20px',
            letterSpacing: '0.2px',
            fontWeight: '400',
          },
        ],
        caption: [
          '14px',
          {
            lineHeight: '22px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        small: [
          '12px',
          {
            lineHeight: '18px',
            letterSpacing: '0.2px',
            fontWeight: '400',
          },
        ],
        tiny: [
          '10px',
          {
            lineHeight: '16px',
            letterSpacing: '0.3px',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [animate],
};

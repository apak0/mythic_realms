/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* Subtle definition */
        input: 'var(--color-input)', /* Form element backgrounds */
        ring: 'var(--color-ring)', /* Focus ring gold */
        background: 'var(--color-background)', /* Deep space canvas */
        foreground: 'var(--color-foreground)', /* High contrast text */
        primary: {
          DEFAULT: 'var(--color-primary)', /* Achievement gold */
          foreground: 'var(--color-primary-foreground)' /* Dark text on gold */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* Elevated surfaces */
          foreground: 'var(--color-secondary-foreground)' /* Light text on secondary */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* Error red */
          foreground: 'var(--color-destructive-foreground)' /* White text on red */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* Subtle backgrounds */
          foreground: 'var(--color-muted-foreground)' /* Secondary text */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* Accent gold */
          foreground: 'var(--color-accent-foreground)' /* Dark text on accent */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* Elevated surfaces */
          foreground: 'var(--color-popover-foreground)' /* Popover text */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* Card backgrounds */
          foreground: 'var(--color-card-foreground)' /* Card text */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* Success green */
          foreground: 'var(--color-success-foreground)' /* White text on green */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* Warning amber */
          foreground: 'var(--color-warning-foreground)' /* Dark text on warning */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* Error red */
          foreground: 'var(--color-error-foreground)' /* White text on error */
        },
        surface: {
          DEFAULT: 'var(--color-surface)', /* Interface elements */
          foreground: 'var(--color-surface-foreground)' /* Surface text */
        },
        midnight: {
          DEFAULT: 'var(--color-midnight)', /* Deep midnight foundation */
          foreground: 'var(--color-midnight-foreground)' /* Light text on midnight */
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Cinzel', 'serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        'lg': '8px',
        'md': '6px',
        'sm': '4px'
      },
      boxShadow: {
        'mystical': '0 0 20px rgba(212, 175, 55, 0.3)',
        'cinematic': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'floating': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'legendary': '0 8px 30px rgba(212, 175, 55, 0.2)',
        'realm': '0 8px 30px rgba(212, 175, 55, 0.15)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }
        }
      },
      backdropBlur: {
        'mystical': '12px'
      },
      transitionTimingFunction: {
        'mystical': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}
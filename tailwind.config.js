// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         navy: {
//           50: '#f0f4ff',
//           100: '#e0e7ff',
//           200: '#c7d2fe',
//           300: '#a5b4fc',
//           400: '#818cf8',
//           500: '#6366f1',
//           600: '#4f46e5',
//           700: '#4338ca',
//           800: '#3730a3',
//           900: '#1e1b4b',
//           950: '#0a0a1a',
//         },
//         electric: {
//           400: '#60a5fa',
//           500: '#3b82f6',
//           600: '#2563eb',
//         },
//         slate: {
//           850: '#1a1f2e',
//           900: '#131720',
//           950: '#0d1117',
//         },
//         teal: {
//           400: '#2dd4bf',
//           500: '#14b8a6',
//           600: '#0d9488',
//         }
//       },
//       animation: {
//         'float': 'float 6s ease-in-out infinite',
//         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         }
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4ff',   // very light blue-white
          100: '#e0e8ff',
          200: '#c7d4fd',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#3730a3',
          800: '#1e1b4b',
          900: '#0a1628',   // dark blue surface
          950: '#020818',   // ← Midnight Deep base ✓
        },
        electric: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        slate: {
          850: '#1a1f2e',
          900: '#020818',   // ← Midnight Deep base
          950: '#010510',   // ← Even deeper for darkest areas
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        midnight: {
          100: '#1a2a45',
          200: '#0f1e35',
          300: '#0a1628',   // ← Midnight Deep surface
          400: '#061020',
          500: '#020818',   // ← Midnight Deep base
          600: '#010510',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
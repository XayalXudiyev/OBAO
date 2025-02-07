import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        menuOpen: "menuSlideIn 0.15s ease-in-out forwards",
        menuClose: "menuSlideOut 0.15s ease-in-out 0.5s forwards"
      }
    ,
      keyframes: {
        menuSlideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },
        menuSlideOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)", }
        }
      },
      fontFamily: {
        avenir1: ["var(--font-avenir)", ...defaultTheme.fontFamily.sans],
        avenirBook2: [
          "var(--font-avenir-book)",
          ...defaultTheme.fontFamily.sans,
        ],
        avenirRoman3: [
          "var(--font-avenir-roman)",
          ...defaultTheme.fontFamily.sans,
        ],
        avenirMedium4: [
          "var(--font-avenir-medium)",
          ...defaultTheme.fontFamily.sans,
        ],
        avenirHeavy5: [
          "var(--font-avenir-heavy)",
          ...defaultTheme.fontFamily.sans,
        ],
        avenirBlack6: [
          "var(--font-avenir-black)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        padding: "4rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      scale: {
        150: "1.5",
        175: "1.75",
        200: "2",
        250: "2.5",
        300: "3",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
} satisfies Config

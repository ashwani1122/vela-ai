// @type {import('tailwindcss').Config}
import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shakeX: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        shakeX: "shakeX 0.15s linear infinite",
        marquee: 'marquee 2s linear infinite',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
     
      },
    },
  },
  plugins: [],
} satisfies Config

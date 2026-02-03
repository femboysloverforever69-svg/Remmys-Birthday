import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom Rem x Vergil colors
        electric: {
          DEFAULT: "hsl(200 100% 50%)",
          light: "hsl(200 100% 60%)",
          glow: "hsl(200 100% 70%)",
        },
        ice: {
          DEFAULT: "hsl(195 100% 70%)",
          light: "hsl(195 100% 85%)",
          dark: "hsl(195 80% 50%)",
        },
        cosmic: {
          DEFAULT: "hsl(222 47% 5%)",
          light: "hsl(220 50% 12%)",
          mid: "hsl(200 40% 8%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            filter: "drop-shadow(0 0 20px hsl(200 100% 50% / 0.5))",
          },
          "50%": { 
            opacity: "0.8",
            filter: "drop-shadow(0 0 40px hsl(200 100% 60% / 0.7))",
          },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float-gentle": "float-gentle 4s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out forwards",
      },
      backgroundImage: {
        "gradient-cosmic": "linear-gradient(135deg, hsl(222 47% 5%) 0%, hsl(220 50% 12%) 50%, hsl(200 40% 8%) 100%)",
        "gradient-electric": "linear-gradient(135deg, hsl(200 100% 50%) 0%, hsl(210 100% 60%) 100%)",
        "gradient-ice": "linear-gradient(135deg, hsl(195 100% 70%) 0%, hsl(200 100% 85%) 100%)",
      },
      boxShadow: {
        "glow-electric": "0 0 30px hsl(200 100% 50% / 0.5), 0 0 60px hsl(200 100% 50% / 0.3)",
        "glow-ice": "0 0 20px hsl(195 100% 70% / 0.4), 0 0 40px hsl(195 100% 70% / 0.2)",
        "glass": "0 8px 32px 0 rgba(0, 180, 255, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

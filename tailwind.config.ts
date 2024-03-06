import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dracula-purple": "#bd93f9",
      "dracula-pink": "#ff79c6",
      "dracula-green": "#50fa7b",
      "dracula-yellow": "#f1fa8c",
      "dracula-orange": "#ffb86c",
      "dracula-cyan": "#8be9fd",
      textColor: "#6272a4",
      backgroundColor: "#282a36",
      "dracula-selection": "#44475a",
      "dracula-foreground": "#f8f8f2",
      "dracula-currentline": "#44475a",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#282a36",
            foreground: "#f8f8f2",
          },
        },
      },
    }),
  ],
};
export default config;

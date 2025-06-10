import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["'Geist Mono'", ...defaultTheme.fontFamily.mono],
        kaiti: ["Kaiti", "楷体", "楷体_GB2312", "KaiTi", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

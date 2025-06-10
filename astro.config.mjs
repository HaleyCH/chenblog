// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts";

import remarkCallout from "@r4ai/remark-callout";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: "chenblog",
  integrations: [mdx(), sitemap(), tailwind({ nesting: true })],
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    remarkPlugins: [remarkCallout, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

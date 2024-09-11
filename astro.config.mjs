import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkModifiedTime } from "./src/utils/remark-modified-time";
import { siteConfig } from "./src/config";

export default defineConfig({
  site: "https://alexfrontendfr.github.io",
  base: "/blog-dex-astro",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
    },
    remarkPlugins: [remarkModifiedTime],
  },
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: "_assets",
  },
  vite: {
    ssr: {
      noExternal: ["astro-icon"],
    },
    build: {
      assetsInlineLimit: 0,
    },
  },
});

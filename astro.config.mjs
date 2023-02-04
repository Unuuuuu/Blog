import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import customGithubDarkDimmedTheme from "./custom-github-dark-dimmed.json";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.unuuuuu.com",
  integrations: [react(), tailwind(), partytown(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: customGithubDarkDimmedTheme,
    },
  },
  server: {
    host: true,
  },
});

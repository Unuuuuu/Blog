import { defineConfig } from "astro/config";
// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import customGithubDarkDimmedTheme from "./custom-github-dark-dimmed.json";

export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: customGithubDarkDimmedTheme,
    },
  },
});

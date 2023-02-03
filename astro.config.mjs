import { defineConfig } from "astro/config";
// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import customGithubDarkDimmedTheme from "./custom-github-dark-dimmed.json";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown()],
  markdown: {
    shikiConfig: {
      theme: customGithubDarkDimmedTheme,
    },
  },
});

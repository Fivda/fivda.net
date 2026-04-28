// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["docs.astro.build"],
    remotePatterns: [
      {
        protocol: "https"
      }
    ]
  },
  i18n: {
      locales: ["fr", "en"],
      defaultLocale: "en",
      fallback: {
          fr: "en"
      },
      routing: {
          fallbackType: "rewrite"
      }
	},

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [react()],
});
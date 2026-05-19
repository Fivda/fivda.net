// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Ubuntu",
    cssVariable: "--font-ubuntu",
  }],
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
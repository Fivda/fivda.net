// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Outfit",
    cssVariable: "--font-outfit",
  }],
  image: {
    domains: ["docs.astro.build"],
    remotePatterns: [
      {
        protocol: "https"
      }
    ]
  },
  markdown: {
    processor: satteri({
      hastPlugins: [
        satteriHeadingIdsPlugin()
      ],
    }),
  },
  i18n: {
      locales: ["fr", "en"],
      defaultLocale: "en",
      fallback: {
          fr: "en"
      },
      routing: {
          fallbackType: "rewrite",
          prefixDefaultLocale: false,
          redirectToDefaultLocale: false
      }
	},

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [react()],
});
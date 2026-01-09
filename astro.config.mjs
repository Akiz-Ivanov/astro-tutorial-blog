// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://frabjous-phoenix-3e811d.netlify.app/",
  integrations: [preact()]
});
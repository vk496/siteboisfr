// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site URL is used to generate absolute URLs for the sitemap, canonical
  // tags, Open Graph and schema.org data. Update if the domain changes.
  site: 'https://boisforestier.fr',
  trailingSlash: 'ignore',
  build: {
    // Emit /page/index.html so URLs stay clean without a server rewrite.
    format: 'directory',
  },
  image: {
    // Allow Astro's built-in sharp service to optimise local images.
    responsiveStyles: true,
  },
});

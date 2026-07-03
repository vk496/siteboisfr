// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site URL is used to generate absolute URLs for the sitemap, canonical
  // tags, Open Graph and schema.org data. Update if the domain changes.
  site: 'https://boisforestier.fr',
  trailingSlash: 'ignore',

  // Précharge le HTML des pages internes au survol d'un lien : la navigation
  // devient quasi instantanée, sans multiplier les requêtes inutilement.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  build: {
    // Emit /page/index.html so URLs stay clean without a server rewrite.
    format: 'directory',
    // Injecte tout le CSS directement dans le HTML : plus aucune requête
    // CSS séparée, donc premier affichage plus rapide (moins de requêtes).
    inlineStylesheets: 'always',
  },
  image: {
    // Allow Astro's built-in sharp service to optimise local images.
    responsiveStyles: true,
  },
});

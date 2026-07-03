# boisforestier.fr — Site vitrine LBB BOIS

Site vitrine **statique** de **LBB BOIS** (raison sociale : SARL LBB BOIS),
entreprise de travaux forestiers en Ariège (09) : abattage/débardage, bois de
chauffage, élagage, entretien de parc et jardin.

Construit avec [Astro](https://astro.build) — génération de pages 100 % statiques,
optimisées pour le référencement (SEO) et pour mobile.

## Démarrer

```bash
npm install      # installer les dépendances (une seule fois)
npm run dev      # serveur de développement -> http://localhost:4321
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le résultat de build
```

Le contenu du dossier **`dist/`** après `npm run build` est le site final.

### Déploiement — branche `www` (automatique)

À chaque push sur **`main`**, le workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construit le
site et publie le résultat optimisé (dossier `dist/`) dans la branche
**`www`**. Cette branche ne contient **que** le site construit, **sans
historique** (un seul commit, réécrit à chaque déploiement).

Pour mettre en ligne via GitHub Pages :

1. Poussez le code sur **`main`** ; le workflow crée/actualise la branche `www`.
2. Dans **Settings → Pages**, réglez **Source** sur **Deploy from a branch**,
   puis choisissez la branche **`www`** et le dossier **`/ (root)`**.

> La branche `www` sert de « dossier de mise en ligne » : vous pouvez aussi la
> pointer depuis un autre hébergeur si besoin.

Le domaine **boisforestier.fr** est déjà configuré via le fichier
[`public/CNAME`](public/CNAME) (copié dans `dist/`, donc présent sur `www`).
Côté registraire du domaine, faites pointer :

- un enregistrement **`A`** de `boisforestier.fr` vers les IP de GitHub Pages
  (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) ;
- un enregistrement **`CNAME`** de `www` vers `<votre-utilisateur>.github.io`.

Puis, dans **Settings → Pages → Custom domain**, saisissez `boisforestier.fr`
et cochez **Enforce HTTPS**.

## Où modifier quoi ?

| Vous voulez changer…                     | Fichier à modifier                          |
| ---------------------------------------- | ------------------------------------------- |
| Téléphone, e-mail, adresse, Instagram    | `src/config/site.ts`                        |
| Zone d’intervention (villes)             | `src/config/site.ts` → `serviceArea`        |
| Les 4 services (textes, images, ordre)   | `src/data/services.ts`                      |
| Ajouter un nouveau service               | `src/data/services.ts` (dupliquer un bloc)  |
| Textes de la page d’accueil              | `src/pages/index.astro`                     |
| Mentions légales (SIRET, RCS, hébergeur) | `src/pages/mentions-legales.astro`          |
| Couleurs / style global                  | `src/styles/global.css`                     |

> **Ajouter un service** = ajouter un objet dans `src/data/services.ts`.
> Le menu, la carte sur l’accueil, la page dédiée (`/services/<slug>`), le
> plan du site et le pied de page se mettent à jour automatiquement.

## Images

- Les photos de chantier sont dans `src/assets/photos/` (optimisées
  automatiquement en WebP par Astro au build).
- Pour **remplacer une image**, déposez le nouveau fichier avec le **même nom**
  dans `src/assets/photos/`, puis relancez `npm run build`.
- Le logo provient de `pics/LOGO.pdf`. Les versions web (`src/assets/logo.png`,
  favicons dans `public/`) en ont été générées.

## Référencement (SEO) — déjà en place

- Balises `<title>` / `<meta description>` uniques par page, en français
- Données structurées **schema.org** : `LocalBusiness` (adresse, téléphone,
  zone) + `BreadcrumbList` et `Service` sur les pages de prestations
- URL canoniques, Open Graph, `robots.txt`, `sitemap.xml` (avec `lastmod`)
- Manifeste web + favicons, `max-image-preview:large`, page 404 en `noindex`
- Site rapide (statique, CSS en ligne, zéro JS superflu), 100 % responsive

### Référencer le site sur Google (Search Console)

1. Créez la propriété sur [Google Search Console](https://search.google.com/search-console)
   pour `https://boisforestier.fr`.
2. Méthode de validation **« balise HTML »** : copiez la valeur de l’attribut
   `content` fournie et collez-la dans `seo.googleSiteVerification`
   (`src/config/site.ts`), puis poussez sur `main`. La balise
   `google-site-verification` est alors ajoutée automatiquement.
3. Cliquez sur **Valider**.
4. Dans **Sitemaps**, soumettez : `https://boisforestier.fr/sitemap.xml`.

### Statistiques + bannière cookies (Google Analytics)

Le consentement est **déjà géré** et **conforme CNIL / RGPD** :

- Renseignez votre identifiant GA4 (`G-XXXXXXXXXX`) dans
  `analytics.googleAnalyticsId` (`src/config/site.ts`).
- Dès qu’il est renseigné : une bannière de consentement apparaît, et Google
  Analytics n’est chargé **qu’après un clic sur « Accepter »** (« Refuser » est
  tout aussi accessible). Le visiteur peut changer d’avis via le lien
  **« Gestion des cookies »** en pied de page.
- Tant que le champ reste **vide** : aucune bannière, aucun cookie, aucun script
  de suivi (le site reste « sans cookie »).
- La page *Mentions légales* adapte automatiquement son paragraphe « Cookies ».

## À vérifier / ajuster

Les mentions légales sont renseignées d’après l’annuaire officiel des
entreprises (SIREN 940 426 513) et l’hébergement GitHub Pages. Il ne reste
qu’un réglage optionnel dans `src/config/site.ts` :

- **Horaires** réels (`openingHours`) — actuellement « Du lundi au samedi, sur
  rendez-vous ».

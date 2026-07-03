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
- Données structurées **schema.org LocalBusiness** (adresse, téléphone, zone)
- URL canoniques, Open Graph, `robots.txt`, `sitemap.xml` automatique
- Site rapide (statique, zéro JS superflu) et 100 % responsive (mobile-first)

## À vérifier / ajuster

Les mentions légales sont renseignées d’après l’annuaire officiel des
entreprises (SIREN 940 426 513) et l’hébergement GitHub Pages. Il ne reste
qu’un réglage optionnel dans `src/config/site.ts` :

- **Horaires** réels (`openingHours`) — actuellement « Du lundi au samedi, sur
  rendez-vous ».

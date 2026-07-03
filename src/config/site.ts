/**
 * Informations centrales de l'entreprise.
 * ------------------------------------------------------------------
 * C'est LA source unique de vérité : téléphone, e-mail, adresse,
 * réseaux sociaux… Modifiez uniquement ce fichier pour mettre à jour
 * ces informations partout sur le site.
 */

export interface Phone {
  /** Numéro formaté pour l'affichage, ex. "07 70 12 16 42" */
  display: string;
  /** Numéro au format international pour les liens tel:, ex. "+33770121642" */
  tel: string;
}

export const site = {
  /** Nom commercial affiché sur le site */
  name: 'LBB BOIS',
  /** Raison sociale légale (utilisée dans les mentions légales / schema.org) */
  legalName: 'SARL LBB BOIS',
  /** Slogan court affiché sous le logo / dans le hero */
  tagline: 'Travaux forestiers et entretien d’espaces verts en Ariège',
  /** Domaine public (sans slash final) */
  url: 'https://boisforestier.fr',

  /** Téléphones (le premier est le contact principal) */
  phones: [
    { display: '07 70 12 16 42', tel: '+33770121642' },
    { display: '06 10 54 54 03', tel: '+33610545403' },
  ] as Phone[],

  email: 'lbb.bois@outlook.fr',

  address: {
    street: '3 Quartier la Pujade',
    postalCode: '09400',
    city: 'Niaux',
    region: 'Ariège',
    regionCode: '09',
    area: 'Occitanie',
    country: 'France',
    countryCode: 'FR',
    /** Coordonnées approximatives de Niaux (pour schema.org / plan) */
    latitude: 42.8206,
    longitude: 1.6089,
  },

  /** Zone d'intervention affichée pour le référencement local */
  serviceArea: [
    'Niaux',
    'Tarascon-sur-Ariège',
    'Foix',
    'Ax-les-Thermes',
    'Vallée de l’Ariège',
    'tout le département de l’Ariège (09)',
  ],

  social: {
    instagramHandle: '@lbb_bois',
    instagramUrl: 'https://www.instagram.com/lbb_bois/',
  },

  /** Horaires indicatifs (modifiez selon la réalité de l'entreprise) */
  openingHours: 'Du lundi au samedi, sur rendez-vous',

  /**
   * Informations légales (source : annuaire officiel des entreprises /
   * INSEE SIRENE, SIREN 940426513). Utilisées dans les mentions légales.
   */
  legal: {
    formeJuridique: 'SARL (société à responsabilité limitée)',
    siren: '940 426 513',
    siret: '940 426 513 00013',
    rcs: 'RCS Foix 940 426 513',
    ape: '02.40Z — Services de soutien à l’exploitation forestière',
    tva: 'FR19940426513',
    gerant: 'Lucas Bongage',
    dateImmatriculation: '4 février 2025',
    capital: '1 500 €',
    hebergeur:
      'GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis (GitHub Pages).',
  },

  /** Paramètres liés au référencement (SEO). */
  seo: {
    /**
     * Code de validation Google Search Console (méthode « balise HTML »).
     * Dans Search Console, choisissez la vérification par balise meta et
     * collez ici UNIQUEMENT la valeur de l'attribut content
     * (ex. 'AbCdEf123...'). Laisser vide si non utilisé.
     */
    googleSiteVerification: '',
  },

  /** Mesure d'audience. */
  analytics: {
    /**
     * Identifiant Google Analytics 4 (ex. 'G-XXXXXXXXXX').
     * TANT QUE CE CHAMP EST VIDE : aucun script de suivi n'est chargé et
     * la bannière cookies ne s'affiche pas (le site ne dépose alors aucun
     * cookie non essentiel). Dès qu'un identifiant est renseigné, la
     * bannière de consentement apparaît et Google Analytics n'est chargé
     * qu'APRÈS acceptation (conforme aux règles CNIL / RGPD).
     */
    googleAnalyticsId: '',
  },
} as const;

/** Adresse sur une seule ligne, pratique pour l'affichage. */
export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

/** Lien Google Maps vers l'adresse. */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.legalName}, ${addressLine}`,
)}`;

/**
 * Les 4 secteurs d'activité de LBB BOIS.
 * ------------------------------------------------------------------
 * Pour AJOUTER un service : dupliquez un bloc, importez une image
 * depuis src/assets/photos, et donnez-lui un `slug` unique.
 * Tout le reste (menu, cartes, page dédiée, plan du site) se génère
 * automatiquement à partir de cette liste.
 */
import type { ImageMetadata } from 'astro';

import abattage from '../assets/photos/abattage-debardage.jpg';
import boisChauffage from '../assets/photos/bois-de-chauffage.jpg';
import elagage from '../assets/photos/elagage.jpg';
import entretien from '../assets/photos/entretien-parc-jardin.jpg';

export interface Service {
  /** Identifiant unique utilisé dans l'URL : /services/<slug> */
  slug: string;
  /** Titre court affiché dans le menu et les cartes */
  title: string;
  /** Accroche d'une ligne */
  summary: string;
  /** Description longue (chaque élément = un paragraphe) */
  description: string[];
  /** Points clés listés à puces */
  features: string[];
  /** Image principale du service (optimisée par Astro) */
  image: ImageMetadata;
  /** Texte alternatif de l'image (accessibilité + SEO) */
  imageAlt: string;
  /** Icône SVG (chemin `d`) affichée dans les cartes */
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'abattage-debardage',
    title: 'Abattage & débardage',
    summary:
      'Abattage d’arbres et débardage forestier réalisés en sécurité, du sujet isolé à la parcelle entière.',
    description: [
      'Nous réalisons l’abattage d’arbres de toutes tailles, y compris les sujets dangereux ou difficiles d’accès, ainsi que le débardage du bois jusqu’à la place de dépôt.',
      'Notre équipe intervient avec du matériel forestier adapté (tracteur, treuil, tronçonneuses professionnelles) pour préserver votre terrain et travailler en toute sécurité.',
      'De la coupe d’éclaircie à l’exploitation d’une parcelle, nous vous accompagnons dans la gestion durable de votre patrimoine boisé.',
    ],
    features: [
      'Abattage directionnel et démontage d’arbres',
      'Débardage au tracteur et au treuil',
      'Coupe d’éclaircie et exploitation de parcelle',
      'Enlèvement et valorisation des grumes',
    ],
    image: abattage,
    imageAlt:
      'Bûcheron de LBB BOIS à côté d’un gros arbre abattu lors d’un chantier forestier en Ariège',
    icon: 'M17 3l-1.5 4L20 8l-4 1.5L17 14l-4-2-4 2 1-4.5L6 8l4.5-1L9 3l4 2 4-2z',
  },
  {
    slug: 'bois-de-chauffage',
    title: 'Bois de chauffage',
    summary:
      'Bois de chauffage sec et de qualité, en bûches, livré près de chez vous en Ariège.',
    description: [
      'Nous produisons et vendons du bois de chauffage issu de nos coupes locales : un bois dense, bien séché, prêt à être brûlé pour un rendement optimal.',
      'Bûches de 33, 40 ou 50 cm selon vos besoins, en essences de feuillus durs (chêne, hêtre, charme). Vente au stère et livraison possible dans le secteur.',
      'Commandez tôt dans la saison pour profiter d’un bois parfaitement sec pour l’hiver.',
    ],
    features: [
      'Feuillus durs : chêne, hêtre, charme',
      'Bûches de 33, 40 ou 50 cm',
      'Bois sec, prêt à brûler',
      'Vente au stère et livraison locale',
    ],
    image: boisChauffage,
    imageAlt: 'Stère de bois de chauffage en bûches empilées, LBB BOIS Ariège',
    icon: 'M12 2s4 4 4 8a4 4 0 01-8 0c0-1.5.6-2.8 1.3-3.8C9 8 8 10 8 12a5 5 0 007.5 4.3A6 6 0 0012 22a6 6 0 01-6-6c0-5 6-8 6-14z',
  },
  {
    slug: 'elagage',
    title: 'Élagage',
    summary:
      'Élagage, taille et démontage d’arbres pour des sujets sains, sûrs et bien entretenus.',
    description: [
      'Nous taillons et élaguons vos arbres dans le respect de leur physiologie : taille d’entretien, réduction de couronne, éclaircissage ou mise en sécurité.',
      'Grâce à des techniques de taille raisonnée, nous favorisons la santé et la longévité de vos arbres tout en maîtrisant leur développement.',
      'Nous intervenons également pour le démontage d’arbres en espace contraint, à proximité des habitations ou des lignes.',
    ],
    features: [
      'Taille d’entretien et taille raisonnée',
      'Réduction et éclaircissage de couronne',
      'Démontage en espace contraint',
      'Mise en sécurité des arbres dangereux',
    ],
    image: elagage,
    imageAlt: 'Membre de l’équipe LBB BOIS équipé pour un chantier d’élagage',
    icon: 'M12 2v20M12 8l-4-4M12 8l4-4M12 14l-5-5M12 14l5-5',
  },
  {
    slug: 'entretien-parc-jardin',
    title: 'Entretien parc & jardin',
    summary:
      'Entretien d’espaces verts : débroussaillage, tonte, taille de haies et nettoyage de terrain.',
    description: [
      'Nous entretenons vos parcs, jardins et terrains : débroussaillage, tonte, taille de haies, nettoyage et évacuation des déchets verts.',
      'Que ce soit pour un entretien ponctuel ou régulier, nous remettons en état les terrains embroussaillés et gardons vos espaces extérieurs propres et accueillants.',
      'Nous adaptons nos interventions aux terrains difficiles et en pente, fréquents dans notre secteur de montagne.',
    ],
    features: [
      'Débroussaillage et nettoyage de terrain',
      'Tonte et entretien de pelouse',
      'Taille de haies et arbustes',
      'Évacuation des déchets verts',
    ],
    image: entretien,
    imageAlt:
      'Tracteur et matériel de LBB BOIS pour l’entretien de parc et jardin',
    icon: 'M3 20h18M6 20V10M6 10a3 3 0 013-3h0a3 3 0 013 3M12 20V7M12 7a3 3 0 013-3h0a3 3 0 013 3v13',
  },
];

/** Retrouver un service par son slug. */
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

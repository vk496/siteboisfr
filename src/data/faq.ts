/**
 * Questions fréquentes.
 * ------------------------------------------------------------------
 * Sert à la fois à la section FAQ de l'accueil et aux données
 * structurées schema.org FAQPage (résultats enrichis Google).
 * Pour ajouter une question : ajoutez un objet { q, a } ci-dessous.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: 'Le devis est-il gratuit ?',
    a: 'Oui. Nous nous déplaçons pour évaluer votre chantier et vous remettons un devis gratuit et sans engagement, que ce soit pour un abattage, de l’élagage, du bois de chauffage ou de l’entretien de terrain.',
  },
  {
    q: 'Dans quel secteur intervenez-vous ?',
    a: 'Nous sommes basés à Niaux (09400) et intervenons dans tout le département de l’Ariège : Tarascon-sur-Ariège, Foix, Ax-les-Thermes, la vallée de l’Ariège et les alentours. Contactez-nous pour vérifier votre commune.',
  },
  {
    q: 'Intervenez-vous en urgence après une tempête ?',
    a: 'Oui, nous intervenons rapidement pour les arbres dangereux, fragilisés ou tombés à la suite d’une tempête. Appelez-nous, nous évaluons la situation et sécurisons les lieux au plus vite.',
  },
  {
    q: 'Le débroussaillement autour de ma maison est-il obligatoire ?',
    a: 'Dans les zones exposées au risque incendie en Ariège, le débroussaillement est une obligation légale (OLD) sur un rayon d’environ 50 mètres autour des constructions. Nous réalisons ces travaux pour vous mettre en conformité et réduire le risque.',
  },
  {
    q: 'Livrez-vous le bois de chauffage ?',
    a: 'Oui, nous vendons du bois de chauffage en bûches (chêne, hêtre, charme) issu de nos coupes locales, en longueurs de 33, 40 ou 50 cm, avec livraison possible dans le secteur. Un bois bien sec pour un rendement optimal.',
  },
  {
    q: 'Que deviennent les branches et les déchets après le chantier ?',
    a: 'Nous évacuons les déchets verts et pouvons valoriser le bois (broyage, bois de chauffage). Vous retrouvez un terrain propre et dégagé après notre passage.',
  },
  {
    q: 'Travaillez-vous sur les terrains en pente ou difficiles d’accès ?',
    a: 'Oui. Habitués au relief de montagne ariégeois, nous disposons du matériel adapté (tracteur, treuil, techniques de démontage) pour intervenir en sécurité sur les terrains difficiles ou en pente.',
  },
];

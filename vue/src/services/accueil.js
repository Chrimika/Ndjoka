import chipsHeroImage from '../assets/images/accueil/hero/chips.webp';
import epiceeHeroImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiHeroImage from '../assets/images/Produits/kilichi.webp';
import aboutImage from '../assets/images/accueil/about/equipe_ndjoka.webp';
import natureImage from '../assets/images/accueil/produits/ndjoka_nature.webp';
import sucreeImage from '../assets/images/accueil/produits/ndjoka_sucre.webp';
import epiceeImage from '../assets/images/accueil/produits/ndjoka_pimente.webp';
import kilichiImage from '../assets/images/Produits/kilichi.webp';
import {
  CONCESSIONNAIRES,
  INVESTISSEURS,
  PRODUITS,
} from './navigation.js';

export const HERO_CONTENT = {
  title: 'Ndjoka Cameroun',
  description:
    "Chips de plantain mûr, non mûr et épicé, Kilichi traditionnel. Rejoignez notre réseau de distribution au Cameroun avec plus de 15 villes couvertes et devenez distributeur ou revendeur Ndjoka. Produits africains de qualité premium.",
  primaryCta: {
    label: 'Devenir distributeur',
    path: `/${CONCESSIONNAIRES}`,
  },
  secondaryCta: {
    label: 'Investir dans Ndjoka',
    path: `/${INVESTISSEURS}`,
  },
  media: [
    {
      key: 'chips',
      src: chipsHeroImage,
      alt: 'Sachet de chips de plantain Ndjoka',
      className: 'accueilHero-media accueilHero-media--chips',
      width: 780,
      height: 780,
    },
    {
      key: 'epicee',
      src: epiceeHeroImage,
      alt: 'Chips plantain épicées Ndjoka',
      className: 'accueilHero-media accueilHero-media--drink',
      width: 768,
      height: 911,
      priority: true,
    },
    {
      key: 'kilichi',
      src: kilichiHeroImage,
      alt: 'Kilichi Ndjoka — viande séchée épicée',
      className: 'accueilHero-media accueilHero-media--chinChin',
      width: 768,
      height: 911,
    },
  ],
};

export const ABOUT_CONTENT = {
  title: 'Marque agroalimentaire camerounaise en pleine expansion',
  description:
    "Ndjoka transforme et distribue des produits africains au Cameroun : chips de plantain et Kilichi. Au-delà des snacks, nous développons un véritable réseau de distribution avec une vision de croissance locale et internationale dans plus de 10 pays.",
  cta: {
    label: 'Découvrir Ndjoka Cameroun',
    path: '/contact',
  },
  image: {
    src: aboutImage,
    alt: "Équipe Ndjoka au travail autour de la distribution et du développement de la marque",
  },
};

export const PRODUCT_INTRO = {
  title: 'Chips de plantain et Kilichi Ndjoka : produits pensés pour séduire',
  description:
    'Produits Ndjoka fabriqués au Cameroun : chips de plantain mûr, non mûr et épicé, Kilichi traditionnel. Emballages de qualité, déjà appréciés par de nombreux consommateurs.',
  primaryCta: {
    label: 'Devenir distributeur Ndjoka',
    path: `/${CONCESSIONNAIRES}`,
  },
  secondaryCta: {
    label: 'Voir tous les produits Ndjoka',
    path: `/${PRODUITS}`,
  },
};

export const PRODUCT_ITEMS = [
  {
    name: 'Chips Plantain Mûres Ndjoka',
    description:
      'Chips de plantain mûr croustillantes et légères. Parfaites pour les petites faims, voyages, soirées et apéritifs. Produit Ndjoka fabriqué au Cameroun.',
    badge: 'Format 250g',
    image: natureImage,
    alt: 'Sachet Ndjoka de chips de plantain mûres - Produit camerounais',
    tone: 'nature',
    width: 768,
    height: 911,
  },
  {
    name: 'Chips Plantain Non Mûres Ndjoka',
    description:
      'Chips de plantain non mûr avec une texture croustillante et une saveur douce naturelle. Snack africain qui plaît immédiatement aux consommateurs camerounais.',
    badge: 'Format 250g',
    image: sucreeImage,
    alt: 'Sachet Ndjoka de chips de plantain non mûres - Cameroun',
    tone: 'sucree',
    width: 768,
    height: 911,
  },
  {
    name: 'Chips Plantain Épicées Ndjoka',
    description:
      'Chips de plantain épicées avec une saveur relevée et intense. Pour les amateurs de snacks africains épicés et savoureux. Produit phare Ndjoka Cameroun.',
    badge: 'Format 250g',
    image: epiceeImage,
    alt: 'Sachet Ndjoka de chips de plantain épicées - Cameroun',
    tone: 'epicee',
    width: 768,
    height: 911,
  },
  {
    name: 'Kilichi Ndjoka',
    description:
      'Kilichi traditionnel : viande séchée soigneusement sélectionnée et assaisonnée avec des épices sahéliennes. Snack africain riche en protéines, disponible dans nos points de vente.',
    badge: 'Nouveau produit',
    image: kilichiImage,
    alt: 'Kilichi Ndjoka — viande séchée épicée traditionnelle camerounaise',
    tone: 'chinChin',
    width: 768,
    height: 911,
  },
];

export const BENEFITS_CONTENT = {
  title: 'Pourquoi devenir distributeur ou revendeur Ndjoka ?',
  description:
    'Nous accompagnons nos distributeurs et revendeurs pour vendre plus facilement nos produits : chips de plantain et Kilichi. Support commercial concret au Cameroun.',
  items: [
    {
      title: 'Stock Ndjoka à prix réduit',
      description: 'Commencez avec nos produits (chips de plantain, Kilichi) à des prix accessibles et adaptés à votre budget de distributeur.',
    },
    {
      title: 'Visibilité pour votre point de vente Ndjoka',
      description: 'Ndjoka communique sur ses plateformes pour promouvoir nos distributeurs et aider à écouler votre stock.',
    },
    {
      title: 'Formation gratuite pour revendeurs',
      description: "Profitez d'un accompagnement régulier et de formations pour mieux vendre les produits Ndjoka au Cameroun.",
    },
    {
      title: 'Support commercial Ndjoka',
      description: 'Nos équipes vous accompagnent dans vos préoccupations quotidiennes de distributeur ou revendeur.',
    },
    {
      title: 'Branding Ndjoka offert',
      description: 'Recevez des supports de marque (affiches, goodies) pour améliorer la visibilité de votre point de vente.',
    },
    {
      title: 'Opportunité business avec Ndjoka',
      description: 'Rejoignez une marque camerounaise déjà présente dans plus de 15 villes et 10 pays.',
    },
  ],
};

export const PRESENCE_CONTENT = {
  title: 'Ndjoka : marque présente dans plus de 15 villes au Cameroun',
  description:
    'Ndjoka Cameroun est déjà distribué dans plusieurs villes : Yaoundé, Douala, Bafoussam, Dschang et dans plus de 10 pays. Trouvez nos points de vente et distributeurs.',
  stats: [
    {
      value: '+15 villes',
      label: 'couvertes au Cameroun',
    },
    {
      value: '+10 pays',
      label: 'présence en Afrique et diaspora',
    },
    {
      value: '+36 points',
      label: 'de vente Ndjoka actifs',
    },
    {
      value: 'Expansion',
      label: 'réseau de distribution en croissance',
    },
  ],
  testimonials: [
    'Les produits Ndjoka se vendent facilement et les clients reviennent souvent.',
    'Le packaging Ndjoka inspire confiance dès le premier regard.',
    "L'accompagnement Ndjoka nous aide réellement à évoluer comme distributeur.",
  ],
};

export const INVESTOR_CONTENT = {
  title: 'Investissez dans Ndjoka, marque agroalimentaire camerounaise ambitieuse',
  description:
    'Ndjoka développe son réseau de distribution de chips de plantain et Kilichi au Cameroun et en Afrique. Rejoignez une entreprise qui valorise les produits africains avec une vision de croissance durable et internationale.',
  cta: {
    label: 'Investir dans Ndjoka Cameroun',
    path: `/${INVESTISSEURS}`,
  },
};

export const FAQ_CONTENT = {
  title: 'Questions fréquentes sur Ndjoka',
  description: "Tout ce qu'il faut savoir avant de devenir distributeur ou revendeur Ndjoka au Cameroun.",
  groups: [
    {
      title: 'FAQ Distributeurs Ndjoka',
      items: [
        {
          question: 'Comment devenir distributeur ou revendeur Ndjoka au Cameroun ?',
          answer:
            'Contactez-nous via WhatsApp ou remplissez le formulaire de candidature. Notre équipe Ndjoka vous contactera pour rejoindre notre réseau de distribution de chips de plantain et Kilichi.',
        },
        {
          question: 'Faut-il déjà avoir un point de vente pour devenir distributeur Ndjoka ?',
          answer:
            'Non. Ndjoka accompagne aussi les personnes qui souhaitent démarrer progressivement comme revendeur, même sans boutique établie.',
        },
        {
          question: 'Quels sont les avantages pour les distributeurs Ndjoka ?',
          answer:
            'Stock de produits Ndjoka à prix réduit, visibilité de marque, accompagnement commercial, formation gratuite et support continu pour développer vos ventes au Cameroun.',
        },
      ],
    },
    {
      title: 'FAQ Investisseurs Ndjoka',
      items: [
        {
          question: 'Pourquoi investir dans Ndjoka Cameroun ?',
          answer:
            'Ndjoka est une marque agroalimentaire camerounaise en croissance avec un réseau de distribution actif dans plus de 10 pays et une vision de développement international de produits africains.',
        },
        {
          question: 'Comment investir dans Ndjoka ?',
          answer:
            'Contactez-nous via le formulaire investisseur sur le site Ndjoka ou par WhatsApp pour discuter des opportunités d\'investissement dans notre entreprise camerounaise.',
        },
      ],
    },
  ],
};

export const FINAL_CTA_CONTENT = {
  title: "Rejoignez dès aujourd'hui le réseau Ndjoka Cameroun",
  description:
    'Développez votre activité avec les produits Ndjoka (chips de plantain et Kilichi) déjà appréciés au Cameroun. Accompagnement personnalisé pour distributeurs et revendeurs.',
  cta: {
    label: 'Devenir distributeur Ndjoka',
    path: `/${CONCESSIONNAIRES}`,
  },
};

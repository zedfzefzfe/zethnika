// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Zethnika Bougies Artisanales | Bougies Parfumées Faites Main au Maroc",
  description: "Découvrez nos bougies parfumées artisanales faites main au Maroc. Parfums naturels, cire végétale, créations uniques pour votre intérieur. Livraison dans tout le Maroc.",
  language: "fr",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Zethnika",
  menuLinks: [
    { label: "Accueil", href: "#hero" },
    { label: "Nos Bougies", href: "/collection" },
    { label: "Notre Histoire", href: "#about" },
    { label: "Journal", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/zethnika" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/zethnika" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/zethnika" },
  ],
  searchPlaceholder: "Rechercher une bougie...",
  cartEmptyText: "Votre panier est vide",
  cartCheckoutText: "Commander",
  continueShoppingText: "Continuer mes achats",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "Artisanat Marocain d'Exception",
  title: "L'Art de la\nLumière Parfumée",
  ctaPrimaryText: "Découvrir la Collection",
  ctaPrimaryTarget: "/collection",
  ctaSecondaryText: "Notre Histoire",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "Notre Philosophie",
  heading: "L'Essence de l'Artisanat",
  bodyParagraphs: [
    "Chez Zethnika, chaque bougie est une œuvre d'art. Nos artisans marocains maîtrisent l'art de la cire végétale et des parfums naturels pour créer des bougies qui éveillent les sens.",
    "Nous sélectionnons avec soin nos huiles essentielles et nos matières premières pour vous offrir une expérience olfactive unique, respectueuse de l'environnement et de votre santé."
  ],
  linkText: "En savoir plus sur notre savoir-faire",
  linkTarget: "#about",
  image1: "/images/her-.jpg",
  image2: "/images/subhero-2.jpg",
  stats: [
    { value: 100, suffix: "%", label: "Naturel & Écologique" },
    { value: 72, suffix: "h", label: "Temps de Fabrication" },
    { value: 50, suffix: "+", label: "Parfums Uniques" },
    { value: 5000, suffix: "+", label: "Clients Satisfaits" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "Savoir-Faire",
  heading: "Une Histoire de Passion",
  bodyParagraphs: [
    "De la cire végétale locale aux huiles essentielles les plus précieuses, chaque étape de fabrication est réalisée à la main dans notre atelier à Casablanca.",
    "Nos bougies sont coulées individuellement, parfumées avec précision et décorées avec amour pour illuminer vos moments les plus précieux."
  ],
  ctaText: "Voir nos créations",
  ctaTarget: "#products",
  backgroundImage: "/images/60.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "Notre Collection",
  heading: "Bougies Parfumées d'Exception",
  description: "Découvrez nos créations artisanales, façonnées avec passion pour transformer votre intérieur en un havre de sérénité et d'élégance.",
  viewAllText: "Voir toute la collection",
  addToCartText: "Ajouter au panier",
  addedToCartText: "Ajouté !",
    categories: [],
  products: [
    { id: 1, name: "Promesse d’amour", price: 489, category: "", image: "/images/product-rose.jpg" },
    { id: 3, name: "Cendres & Roses", price: 219, category: "", image: "/images/product-vanille.jpg" },
    { id: 4, name: "Élégance rosée", price: 239, category: "", image: "/images/elegence.jpg" },
    { id: 5, name: "Pack Harmonie sombre", price: 449, category: "", image: "/images/WhatsApp Image 2026-03-03 at 22.38.28 (6).jpg" },
    { id: 6, name: "Valentine's", price:  279, category: "", image: "/images/product-cedre.jpg" },
    { id: 7, name: "Rose Lilas — À l'unité", price: 89, category: "", image: "/images/WhatsApp Image 2026-03-11 at 14.16.20.jpg" },


  ],
};

// Full product set used only on the Collection page
export const collectionProducts: Product[] = [
 { id: 1, name: "Promesse d’amour", price: 489, category: "", image: "/images/product-rose.jpg" },
  { id: 2, name: "Cendres & Roses", price: 219, category: "", image: "/images/product-vanille.jpg" },
  { id: 3, name: "Fuschia", price: 249 , category: "", image: "/images/tes.jpg" },
  { id: 6, name: "Valentine's", price: 279, category: "", image: "/images/product-cedre.jpg" },
 
  { id: 4, name: "Harmonie sombre 1 ", price: 249, category: "", image: "/images/80.jpg" },
  { id: 5, name: "Harmonie sombre 2", price: 199, category: "", image: "/images/81.jpg" },
  { id: 7, name: "Gourmand", price: 249, category: "", image: "/images/84.jpg" },
  { id: 8, name: "Noël — À l'unité", price: 149, category: "", image: "/images/20.jpg" },
  { id: 9, name: "Ambre Vanillé", price: 169, category: "", image: "/images/50.jpg" },
   { id: 18, name: "Velours rosée ", price: 299, category: "", image: "/images/98.jpg" },
  { id: 19, name: "Bougie Fleurie — À l'unité", price: 20, category: "", image: "/images/99.jpg" },
  { id: 10, name: "Voile de Rose", price: 219, category: "", image: "/images/product-figue.jpg" },
    { id: 20, name: "Panier fleuri ", price: 299, category: "", image: "/images/93.jpg" },
  { id: 18, name: "Éclat floral 1", price: 229, category: "", image: "/images/95.jpg" },
  { id: 19, name: "Éclat floral 2", price: 159, category: "", image: "/images/96.jpg" },
  { id: 11, name: "Violette", price: 279, category: "", image: "/images/86.jpg" },
  { id: 12, name: "Jardin de flamme", price: 449, category: "", image: "/images/product-noix.jpg" },
  { id: 13, name: "Pastel", price: 209, category: "", image: "/images/product-mehdi.jpg" },
  { id: 14, name: "Mauve Papillon ", price: 269, category: "", image: "/images/90.jpg" },
  { id: 15, name: "Éclosion de lumière", price: 269, category: "", image: "/images/15.jpg" },
  { id: 17, name: "Brume rosée ", price: 229, category: "", image: "/images/17.jpg" },
    { id: 20, name: "Azur", price: 239, category: "", image: "/images/91.jpg" },
  { id: 18, name: "Printemps", price: 199, category: "", image: "/images/18.jpg" },
    { id: 17, name: "Floraison", price: 229, category: "", image: "/images/92.jpg" },
   { id: 20, name: "Tulipe", price: 299, category: "", image: "/images/110.jpg" },
      { id: 19, name: "Éclat Solaire", price: 149, category: "", image: "/images/19.jpg" },
      { id: 21, name: "Émeraude", price: 159, category: "", image: "/images/111.jpg" },
       { id: 22, name: "Nude", price: 249, category: "", image: "/images/114.jpg" },
        { id: 21, name: "Palmier", price: 259, category: "", image: "/images/115.jpg" },
      { id: 21, name: "Élégance", price: 299, category: "", image: "/images/112.jpg" },




    

];

// ─── Decoration Products ─────────────────────────────────────────────────────

export interface DecorationProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const decorationProductsConfig: DecorationProductsConfig = {
  tag: "Ambiance & Décoration",
  heading: "Bougies de Décoration",
  description: "Sublimez vos espaces avec nos bougies décoratives artisanales. Des pièces uniques qui allient esthétique raffinée et savoir-faire marocain.",
  viewAllText: "Voir toute la collection déco",
  addToCartText: "Ajouter au panier",
  addedToCartText: "Ajouté !",
  categories: [],
  products: [
    { id: 101, name: "Perle", price: 39, category: "", image: "/images/33.jpg" },
    { id: 102, name: "Perle Rosée", price: 35, category: "", image: "/images/35.jpg" },
    { id: 103, name: "Élégance Miel", price:  139, category: "", image: "/images/product-oud.jpg" },
    { id: 104, name: "Céleste", price: 39 , category: "", image: "/images/41.jpg" },
    { id: 105, name: "Lumière sacrée — À l'unité ", price: 35, category: "", image: "/images/37.jpg" },
    { id: 106, name: "Porte de lumière — À l'unité", price: 39, category: "", image: "/images/42.jpg" },
    { id: 107, name: "Lumière d'orient — À l'unité", price: 35, category: "", image: "/images/38.jpg" },
    { id: 108, name: "Lumière divine", price: 35, category: "", image: "/images/39.jpg" },
    { id: 109, name: "Éclat spirituel — À l'unité", price: 69, category: "", image: "/images/40.jpg" },
    { id: 110, name: "Valentin — À l'unité", price: 75, category: "", image: "/images/32.jpg" },
    { id: 111, name: "Délice — À l'unité ", price: 39, category: "", image: "/images/36.jpg" },
    { id: 112, name: "Rosée ", price: 45, category: "", image: "/images/CEO.JPG" },
    { id: 113, name: "Trio Pivoines ", price: 119, category: "", image: "/images/70.JPG" },
    { id: 114, name: "Pivoine Moyenne — À l'unité", price: 35, category: "", image: "/images/71.JPG" },
    { id: 115, name: "Bleu velours ", price: 35, category: "", image: "/images/72.JPG" },
    { id: 116, name: "Velours Rouge", price: 79, category: "", image: "/images/73.JPG" },
    { id: 117, name: "Rose Cristal ", price: 69, category: "", image: "/images/74.JPG" },
    { id: 118, name: " Pack Bubble  ", price: 129, category: "", image: "/images/75.JPG" },
    { id: 119, name: "Bougies buffet mariée — À l'unité ", price: 25, category: "", image: "/images/100.jpg" },
    { id: 120, name: "Bougies buffet de naissance — À l'unité ", price: 18, category: "", image: "/images/101.jpg" },
    { id: 119, name: "Pack D'hiver", price: 184, category: "", image: "/images/76.JPG" },
        { id: 120, name: " Élégance Miel 2 ", price: 69, category: "", image: "/images/117.jpg" },

    { id: 120, name: " Bubbles — À l'unité ", price: 18, category: "", image: "/images/102.jpg" },
        { id: 120, name: "Pack marguerite ", price: 99, category: "", image: "/images/77.JPG" },

    { id: 120, name: " Pack Roses ", price: 299, category: "", image: "/images/118.jpg" },

  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Leaf",
      title: "100% Naturel",
      description: "Cire végétale et huiles essentielles pures, sans produits chimiques nocifs."
    },
    {
      icon: "Truck",
      title: "Livraison au Maroc",
      description: "Livraison rapide et soignée dans tout le royaume sous 3 à 5 jours ouvrés."
    },
    {
      icon: "Heart",
      title: "Fait Main",
      description: "Chaque bougie est coulée et décorée à la main par nos artisans marocains."
    },
    {
      icon: "ShieldCheck",
      title: "Satisfaction Garantie",
      description: "Pas satisfait ? Nous vous remboursons ou vous échangeons votre produit."
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  subtitle?: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "Lifestyle",
  heading: "Ambiances & Inspirations",
  subtitle: "Des scènes qui éveillent les sens",
  viewAllText: "Voir plus sur Instagram",
  readMoreText: "",
  posts: [
    {
      id: 1,
      title: "", // unused
      date: "", // unused
      image: "/images/32.jpg",
      excerpt: "Valentin Rouge – Parfum Doux & Passionné"
    },
    {
      id: 2,
      title: "",
      date: "",
      image: "/images/20.jpg",
      excerpt: "Noël – Éclat d'Hiver Précieux"
    },
    {
      id: 3,
      title: "",
      date: "",
      image: "/images/35.jpg",
      excerpt: "Perle Rosée - Douceur Gourmande"
    },
    {
      id: 4,
      title: "",
      date: "",
      image: "/images/36.jpg",
      excerpt: "Délice - Élégance Boisée"
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "Support",
  heading: "Questions Fréquentes",
  ctaText: "Une autre question ? Contactez-nous",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "Quelle est la durée de combustion de vos bougies ?",
      answer: "Nos bougies de 200g offrent environ 45 à 50 heures de combustion. La durée peut varier selon les conditions d'utilisation et l'entretien de la mèche."
    },
    {
      id: 2,
      question: "Proposez-vous la livraison dans tout le Maroc ?",
      answer: "Oui, nous livrons dans tout le royaume du Maroc. Les délais sont de 3 à 5 jours ouvrés pour les grandes villes et 5 à 7 jours pour les zones rurales."
    },
    {
      id: 3,
      question: "Puis-je commander des bougies personnalisées pour un événement ?",
      answer: "Absolument ! Nous créons des bougies personnalisées pour les mariages, anniversaires, événements corporate et autres occasions spéciales. Contactez-nous pour un devis sur mesure."
    },
    {
      id: 4,
      question: "Vos bougies sont-elles vraiment naturelles ?",
      answer: "Oui, toutes nos bougies sont fabriquées avec de la Cire végétale de soja (colza ou abeilles sur demande) et des huiles essentielles ou des parfums sans phtalates. Aucune substance nocive n'est utilisée."
    },
    {
      id: 5,
      question: "Comment puis-je passer commande par WhatsApp ?",
      answer: "C'est très simple ! Cliquez sur le bouton WhatsApp sur notre site ou contactez-nous directement au +212 660-226065. Nous vous guiderons pour finaliser votre commande."
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "Notre Histoire",
      heading: "De la Passion à l'Artisanat",
      paragraphs: [
        "Zethnika est née d'une passion profonde pour les senteurs et l'artisanat marocain. Fondée en 2025 à Casablanca, notre marque incarne l'alliance parfaite entre tradition et modernité.",
        "Chaque bougie raconte une histoire — celle de nos artisans qui façonnent la cire avec délicatesse, celle des senteurs qui évoquent les jardins de roses de la vallée des Roses ou les souks parfumés de la médina."
      ],
      quote: "",
      attribution: "",
      image: "/images/about-1.jpg",
      backgroundColor: "#8b6d4b",
      textColor: "#ffffff",
    },
    
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Contactez-Nous",
  description: "Une question, une demande personnalisée ou simplement envie de dire bonjour ? Nous serions ravis de vous entendre. Commandez rapidement via WhatsApp ou remplissez le formulaire ci-dessous.",
  locationLabel: "Notre Atelier",
  location: "Casablanca, Maroc",
  emailLabel: "Email",
  email: "Contact.zethnika@gmail.com",
  phoneLabel: "WhatsApp",
  phone: "+212 660226065",
  formFields: {
    nameLabel: "Votre Nom",
    namePlaceholder: "Prénom et Nom",
    emailLabel: "Votre Email",
    emailPlaceholder: "exemple@email.com",
    messageLabel: "Votre Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
  },
  submitText: "Envoyer le message",
  submittingText: "Envoi en cours...",
  submittedText: "Message envoyé !",
  successMessage: "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Zethnika",
  brandDescription: "Bougies artisanales faites main au Maroc. Parfums naturels, cire végétale, créations uniques pour illuminer vos moments précieux.",
  newsletterHeading: "Rejoignez Notre Univers",
  newsletterDescription: "Inscrivez-vous pour recevoir nos offres exclusives, nos nouveautés et nos conseils bougie.",
  newsletterPlaceholder: "Votre adresse email",
  newsletterButtonText: "S'inscrire",
  newsletterSuccessText: "Merci pour votre inscription !",
  linkGroups: [
    {
      title: "Boutique",
      links: [
        { label: "Toutes nos bougies", href: "#products" },
        { label: "Bestsellers", href: "#products" },
        { label: "Nouveautés", href: "#products" },
        { label: "Coffrets Cadeaux", href: "#products" },
      ],
    },
    {
      title: "À Propos",
      links: [
        { label: "Notre Histoire", href: "#about" },
        { label: "Notre Savoir-Faire", href: "#about" },
        { label: "Journal", href: "#blog" },
        { label: "Nous Contacter", href: "#contact" },
      ],
    },
    {
      title: "Aide",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Livraison", href: "#faq" },
        { label: "Retours", href: "#faq" },
        { label: "Commande sur WhatsApp", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Mentions Légales", href: "#" },
    { label: "Politique de Confidentialité", href: "#" },
    { label: "Conditions Générales", href: "#" },
  ],
  copyrightText: "© 2026 Zethnika Bougies Artisanales. Tous droits réservés.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/zethnika" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/zethnika" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/zethnika" },
  ],
};

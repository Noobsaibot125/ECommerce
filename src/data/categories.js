/**
 * Modèle de données pour les Catégories et Sous-catégories
 * Utilisable dans: Navigation, Sidebar de filtre, Home page
 */

export const categoriesMock = [
  {
    id: "cat_vetements",
    name: "Vêtements",
    slug: "vetements", // Le slug pour l'URL: /categories/vetements
    description: "Découvrez notre collection de vêtements modernes.",
    imageUrl: "https://via.placeholder.com/300x300?text=Vêtements",
    parentId: null, // Indique que c'est une catégorie "racine" principale
    isActive: true
  },
  {
    id: "cat_tshirts",
    name: "T-Shirts",
    slug: "t-shirts",
    description: "T-Shirts pour homme et femme",
    imageUrl: "https://via.placeholder.com/300x300?text=T-Shirts",
    parentId: "cat_vetements", // C'est une sous-catégorie qui appartient à 'Vêtements'
    isActive: true
  },
  {
    id: "cat_electronique",
    name: "Électronique",
    slug: "electronique",
    description: "Gadgets et appareils high-tech dernier cri.",
    imageUrl: "https://via.placeholder.com/300x300?text=Électronique",
    parentId: null,
    isActive: true
  }
];

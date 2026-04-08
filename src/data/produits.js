/**
 * Modèle de données pour un Produit (Product)
 * Représente la structure API typique retournée par le backend.
 * Utile pour : ProductCard, ProductDetails, ProductGrid, Products (Page)
 */

export const produitsMock = [
  {
    id: "prod_001",
    name: "T-Shirt Minimaliste en Coton Bio",
    slug: "t-shirt-minimaliste-coton-bio",
    shortDescription: "Un t-shirt basique, confortable et éco-responsable.",
    description: "Ce t-shirt est fabriqué à 100% avec du coton biologique certifié. Idéal pour un usage quotidien avec sa coupe droite classique...",
    price: 29.99,
    compareAtPrice: 39.99,
    currency: "EUR",
    stock: 120,
    isAvailable: true,
    categoryId: "cat_vetements",
    images: [
      { id: "img_1", url: "https://via.placeholder.com/400x500?text=Face", alt: "T-Shirt vu de face", isPrimary: true },
      { id: "img_2", url: "https://via.placeholder.com/400x500?text=Dos", alt: "T-Shirt vu de dos", isPrimary: false }
    ],
    attributes: [
      { name: "Taille", options: ["S", "M", "L", "XL"] },
      { name: "Couleur", options: ["Blanc", "Noir", "Gris"] }
    ],
    rating: 4.5,
    reviewsCount: 34,
    createdAt: "2026-03-20T10:00:00Z"
  },
  {
    id: "prod_002",
    name: "Montre Connectée Sport X2",
    slug: "montre-connectee-sport-x2",
    shortDescription: "Suivez vos performances avec précision.",
    description: "La montre Sport X2 intègre un cardiofréquencemètre, un GPS, et une batterie de 14 jours...",
    price: 149.99,
    compareAtPrice: null, // Pas de réduction
    currency: "EUR",
    stock: 15,
    isAvailable: true,
    categoryId: "cat_electronique",
    images: [
      { id: "img_3", url: "https://via.placeholder.com/400x500?text=Montre", alt: "Montre connectée", isPrimary: true }
    ],
    attributes: [
      { name: "Couleur", options: ["Noir mat", "Or rose"] }
    ],
    rating: 4.8,
    reviewsCount: 205,
    createdAt: "2026-01-15T14:30:00Z"
  }
];

// Exemple de réponse de l'API listant les produits avec pagination (souvent utilisé dans ProductGrid)
export const reponseProduitsMock = {
  data: produitsMock,
  meta: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 20,
    itemsPerPage: 2
  }
};

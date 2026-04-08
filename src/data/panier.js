/**
 * Modèle de données pour le Panier Utilisateur et ses articles
 * Utilisable dans : CartContext.jsx
 */

export const panierMock = {
  id: "cart_88339",
  userId: "user_123", // L'ID du client si connecté, sinon null ou absent
  status: "active", // Statuts possibles: 'active', 'abandoned', 'completed'
  
  // Les articles actuellement dans le panier
  items: [
    {
      id: "cart_item_1",
      productId: "prod_001",
      name: "T-Shirt Minimaliste en Coton Bio",
      selectedOptions: { // Très important : quelles variantes l'utilisateur a choisies
        "Taille": "M",
        "Couleur": "Blanc"
      },
      price: 29.99,
      quantity: 2,
      imageUrl: "https://via.placeholder.com/100x100?text=Vignette+T-Shirt",
      totalItemPrice: 59.98 // price * quantity
    },
    {
      id: "cart_item_2",
      productId: "prod_002",
      name: "Montre Connectée Sport X2",
      selectedOptions: {
        "Couleur": "Noir mat"
      },
      price: 149.99,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/100x100?text=Vignette+Montre",
      totalItemPrice: 149.99
    }
  ],
  
  // Les totaux (gérés par le back-end de préférence pour sécuriser le paiement)
  summary: {
    subtotal: 209.97, // Prix total des articles
    discountAmount: 0, // Réductions appliquées
    shippingCost: 0, // Frais de livraison calculés
    taxes: 42.00, // TVA calculée
    total: 209.97 // Prix final à payer
  },
  
  appliedPromo: null // Ex: { code: "SPRING40", discountValue: 25.00 }
};

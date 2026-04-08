/**
 * Modèle de données pour les bannières promotionnelles
 * Utilisable dans : DiscountBanner.jsx, Footer.jsx potentiellement
 */

export const bannieresPromoMock = [
  {
    id: "promo_printemps_26",
    title: "Ventes Flash de Printemps",
    subtitle: "Économisez jusqu'à -40% sur la nouvelle collection !",
    discountPercentage: 40,
    promoCode: "SPRING40",
    buttonText: "Découvrir la sélection",
    targetUrl: "/products?promos=true",
    backgroundImageUrl: "https://via.placeholder.com/1200x400?text=Banniere+Promo",
    backgroundColorHex: "#FF6B6B", 
    validUntil: "2026-04-30T23:59:59Z", // Utile pour un composant Timer
    isActive: true
  },
  {
    id: "promo_livraison",
    title: "Livraison Gratuite",
    subtitle: "Pour toute commande supérieure à 50€",
    discountPercentage: 0,
    promoCode: "FREESHIP",
    buttonText: "Acheter maintenant",
    targetUrl: "/products",
    backgroundImageUrl: null, // Optionnel, on peut utiliser un fond de couleur à la place
    backgroundColorHex: "#4ECDC4",
    validUntil: "2026-12-31T23:59:59Z",
    isActive: true
  }
];

/**
 * Modèle de données pour les Services de Réparation
 * Utilisable pour ta page "Réparation" pour lister les services et catégories.
 */

// 1. Les catégories d'appareils à réparer
export const categoriesReparation = [
  {
    id: "cat_rep_smartphone",
    nom: "Smartphones & Tablettes",
    description: "Réparation d'écrans, batteries, connecteurs de charge, etc.",
    iconeUrl: "https://via.placeholder.com/100x100?text=Smartphone"
  },
  {
    id: "cat_rep_ordinateur",
    nom: "Ordinateurs (PC & Mac)",
    description: "Désinfection virus, récupération de données, changement d'écran, clavier, etc.",
    iconeUrl: "https://via.placeholder.com/100x100?text=Ordinateur"
  },
  {
    id: "cat_rep_console",
    nom: "Consoles de Jeux",
    description: "Réparation de lecteurs, problèmes de surchauffe, connecteurs.",
    iconeUrl: "https://via.placeholder.com/100x100?text=Console"
  }
];

// 2. Les différents types de réparations proposés, liés à leur catégorie
export const servicesReparation = [
  // --- Services pour Smartphones ---
  {
    id: "srv_smart_ecran",
    categorieId: "cat_rep_smartphone",
    nom: "Remplacement d'Écran Cassé",
    description: "Remplacement de la vitre tactile et de l'écran LCD/OLED par une pièce certifiée.",
    prixAPartirDe: 49.99, // Souvent les réparations ont un prix de départ selon le modèle
    devise: "EUR",
    tempsEstime: "1 à 2 heures",
    garantie: "6 mois",
    piecesIncluses: true
  },
  {
    id: "srv_smart_batterie",
    categorieId: "cat_rep_smartphone",
    nom: "Changement de Batterie",
    description: "Remplacement de votre ancienne batterie par une neuve.",
    prixAPartirDe: 29.99,
    devise: "EUR",
    tempsEstime: "30 minutes",
    garantie: "3 mois",
    piecesIncluses: true
  },
  
  // --- Services pour Ordinateurs ---
  {
    id: "srv_ord_formatage",
    categorieId: "cat_rep_ordinateur",
    nom: "Formatage et Réinstallation Système",
    description: "Nettoyage complet, installation de Windows/macOS et de tous les pilotes nécessaires.",
    prixAPartirDe: 59.99,
    devise: "EUR",
    tempsEstime: "24 à 48 heures",
    garantie: "1 mois",
    piecesIncluses: false // Pas de pièce physique pour du logiciel
  },
  {
    id: "srv_ord_clavier",
    categorieId: "cat_rep_ordinateur",
    nom: "Remplacement de Clavier (PC Portable)",
    description: "Changement complet du clavier défectueux ou si des touches manquent.",
    prixAPartirDe: 79.99,
    devise: "EUR",
    tempsEstime: "2 à 3 jours", // Le temps de commander la pièce exacte
    garantie: "6 mois",
    piecesIncluses: true
  },

  // --- Services Consoles ---
  {
    id: "srv_cons_hdmi",
    categorieId: "cat_rep_console",
    nom: "Réparation Port HDMI",
    description: "Dessoudage de l'ancien port défectueux et soudure d'un nouveau port HDMI.",
    prixAPartirDe: 69.99,
    devise: "EUR",
    tempsEstime: "1 à 2 jours",
    garantie: "3 mois",
    piecesIncluses: true
  }
];

// 3. Modèle d'une demande de Réparation (Le formulaire que le client va envoyer au backend)
export const demandeReparation = {
  id: "demande_1029", // Généré par le backend quand la demande est créée
  utilisateurId: "user_123", // L'ID du client (si connecté), sinon null
  serviceId: "srv_smart_ecran", // Le type de réparation sélectionné
  marqueEtModele: "iPhone 13 Pro", // L'appareil précis du client
  descriptionProbleme: "L'écran est fissuré suite à une chute, mais le tactile fonctionne encore sur la moitié supérieure.",
  statut: "en_attente", // Peut évoluer : "en_attente", "acceptee", "en_reparation", "terminee"
  dateDemande: "2026-04-02T15:00:00Z",
  dateRendezVous: "2026-04-05T10:30:00Z" // Si tu as un système de prise de RDV
};

/**
 * Modèle de données pour l'Utilisateur (User/Customer Account)
 * Utilisable partout où on a besoin des infos de profil après connexion.
 */

export const profilUtilisateurMock = {
  id: "user_123",
  email: "client@exemple.com",
  firstName: "Jean",
  lastName: "Dupont",
  phoneNumber: "+33612345678",
  avatarUrl: "https://via.placeholder.com/150x150?text=JD",
  role: "customer", // Peut être 'customer', 'admin', 'moderator'
  
  // Préférences utilisateur
  preferences: {
    newsletter: true,
    currency: "EUR",
    language: "fr"
  },
  
  // Carnet d'adresses
  savedAddresses: [
    {
      id: "addr_1",
      isDefault: true,
      title: "Domicile", // Le nom donné par l'utilisateur à cette adresse
      fullName: "Jean Dupont",
      street: "15 rue de la Paix",
      city: "Paris",
      zipCode: "75000",
      country: "France",
      phone: "+33612345678" // Parfois l'adresse a un numéro spécifique pour le livreur
    }
  ],
  createdAt: "2024-05-12T08:30:00Z"
};

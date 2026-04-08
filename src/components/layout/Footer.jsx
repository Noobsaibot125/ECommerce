import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.55-.83 2.15-.14 3.86 1.07 4.75 2.58-3.87 2.12-3.2 7.02.6 8.52-.77 1.83-2.04 3.65-3.98 5.56v-.06zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                    </div>
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
                    <div className="social-links">
                        <a href="#"><Twitter size={16} /></a>
                        <a href="#"><Facebook size={16} /></a>
                        <a href="#"><Instagram size={16} /></a>
                        <a href="#"><Linkedin size={16} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="#">Programme bonus</Link></li>
                            <li><Link to="#">Cartes cadeaux</Link></li>
                            <li><Link to="#">Crédit et paiement</Link></li>
                            <li><Link to="#">Contrats de service</Link></li>
                            <li><Link to="#">Comptes non-commerciaux</Link></li>
                            <li><Link to="#">Paiement</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Assistance à l'acheteur</h3>
                        <ul>
                            <li><Link to="#">Trouver une commande</Link></li>
                            <li><Link to="#">Conditions de livraison</Link></li>
                            <li><Link to="#">Échange et retour de marchandises</Link></li>
                            <li><Link to="#">Garantie</Link></li>
                            <li><Link to="#">Foire aux questions</Link></li>
                            <li><Link to="#">Conditions d'utilisation du site</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

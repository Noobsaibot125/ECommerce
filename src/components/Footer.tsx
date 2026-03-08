import Link from "next/link";

// SVG icons matching the Figma design (Twitter/X, Facebook, TikTok, Instagram)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.84 1.56V6.82a4.85 4.85 0 01-1.07-.13z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1: Logo + description + social */}
          <div className="flex flex-col gap-5">
            {/* Logo Component */}
            <Logo variant="footer" />

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Programme de bonus</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cartes-cadeaux</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Crédit et paiement</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contrats de service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Compte hors caisse</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Paiement</Link></li>
            </ul>
          </div>

          {/* Column 3: Assistance à l'acheteur */}
          <div>
            <h4 className="font-semibold text-white mb-5">Assistance à l&apos;acheteur</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Trouver une commande</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Conditions de livraison</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Échange et retour de marchandises</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Garantie</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Questions fréquentes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Conditions d&apos;utilisation du site</Link></li>
            </ul>
          </div>

          {/* Column 4: Mentions légales */}
          <div>
            <h4 className="font-semibold text-white mb-5">Mentions légales</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Conditions générales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} si Hi-Tech. Tous droits réservés.</span>
          <span>Made with ❤️ en Côte d&apos;Ivoire</span>
        </div>
      </div>
    </footer>
  );
}

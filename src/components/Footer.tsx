import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">si Hi-Tech</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Votre destination pour les meilleurs produits high-tech et Apple avec un service exceptionnel.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-white transition-colors">Boutique en ligne</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Promotions</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Réparation</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Carte Cadeau</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Assistance</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-white transition-colors">Nous contacter</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Suivre ma commande</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Retours</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Mentions légales</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-white transition-colors">Conditions générales</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-muted-foreground/30 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} si Hi-Tech. Tous droits réservés.
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="container header-container">
                    <Link to="/" className="logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.55-.83 2.15-.14 3.86 1.07 4.75 2.58-3.87 2.12-3.2 7.02.6 8.52-.77 1.83-2.04 3.65-3.98 5.56v-.06zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                    </Link>

                    <div className="search-bar">
                        <Search className="search-icon" size={18} />
                        <input type="text" placeholder="Rechercher" />
                    </div>

                    <nav className="main-nav">
                        <Link to="/" className="active">Accueil</Link>
                        <Link to="/products">Boutique</Link>
                        <Link to="/reparation">Réparation</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>

                    <div className="header-actions">
                        <Link to="/wishlist"><Heart size={20} /></Link>
                        <Link to="/cart"><ShoppingCart size={20} /></Link>
                        <Link to="/account"><User size={20} /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../products.css';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Apple iPhone 14 Pro 512 Go Or (MQ233)', price: 250000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 2, name: 'Apple iPhone 11 128 Go Blanc (MHDJ3)', price: 240000, image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=300&q=80', isLiked: false },
    { id: 3, name: 'Apple iPhone 11 128 Go Blanc (MHDJ3)', price: 200000, image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=300&q=80', isLiked: false },
    { id: 4, name: 'Apple iPhone 14 Pro 1 To Or (MQ2V3)', price: 250000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 5, name: 'Apple iPhone 14 Pro 1 To Or (MQ2V3)', price: 350000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 6, name: 'Apple iPhone 14 Pro 128 Go Deep Purple (MQ0G3)', price: 450000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 7, name: 'Apple iPhone 13 mini 128 Go Rose (MLK23)', price: 250000, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&q=80', isLiked: false },
    { id: 8, name: 'Apple iPhone 14 Pro 256 Go Noir sidéral (MQ0T3)', price: 350000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 9, name: 'Apple iPhone 14 Pro 256 Go Argent (MQ103)', price: 400000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
];

const SidebarFilter = () => {
    return (
        <aside className="products-sidebar">
            <div className="filter-group">
                <h4 className="filter-title">Marque <span>^</span></h4>
                <input type="text" placeholder="Rechercher" className="filter-search" />
                <ul className="filter-list">
                    <li><label><input type="checkbox" defaultChecked /> Apple (110)</label></li>
                    <li><label><input type="checkbox" /> Samsung (126)</label></li>
                    <li><label><input type="checkbox" /> Xiaomi (60)</label></li>
                    <li><label><input type="checkbox" /> Poco (44)</label></li>
                    <li><label><input type="checkbox" /> OPPO (30)</label></li>
                    <li><label><input type="checkbox" /> Honor (10)</label></li>
                    <li><label><input type="checkbox" /> Motorola (34)</label></li>
                    <li><label><input type="checkbox" /> Nokia (2)</label></li>
                    <li><label><input type="checkbox" /> Realme (30)</label></li>
                </ul>
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Capacité de la batterie <span>v</span></h4>
            </div>
            <div className="filter-group">
                <h4 className="filter-title">Type d'écran <span>v</span></h4>
            </div>
            <div className="filter-group">
                <h4 className="filter-title">Diagonale de l'écran <span>v</span></h4>
            </div>
            <div className="filter-group">
                <h4 className="filter-title">Classe de protection <span>v</span></h4>
            </div>
            <div className="filter-group">
                <h4 className="filter-title">Mémoire intégrée <span>v</span></h4>
            </div>
        </aside>
    );
};

const Products = () => {
    return (
        <div className="products-page container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span>Accueil</span> &gt; <span>Catalogue</span> &gt; <span className="current">Smartphones</span>
            </div>

            <div className="products-layout">
                <SidebarFilter />

                <div className="products-main">
                    <div className="products-header">
                        <span className="products-count">Produits sélectionnés : <strong>85</strong></span>
                        <div className="products-sort">
                            <select>
                                <option>Par défaut</option>
                                <option>Prix croissant</option>
                                <option>Prix décroissant</option>
                            </select>
                        </div>
                    </div>

                    <div className="products-grid-3">
                        {MOCK_PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="pagination">
                        <button>&lt;</button>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <span>...</span>
                        <button>12</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
